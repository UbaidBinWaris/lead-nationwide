import { prisma } from "@/lib/prisma";
import { ViewButton } from "@/components/admin/ViewButton";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { SearchFilter } from "@/components/admin/SearchFilter";
import { Pagination } from "@/components/admin/Pagination";
import { signOut } from "@/auth";
import { redis } from "@/lib/redis";

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 50;

export default async function AdminDashboard(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || '';
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  // Build the where clause for searching
  const where = search ? {
    OR: [
      { name: { contains: search, mode: 'insensitive' as const } },
      { email: { contains: search, mode: 'insensitive' as const } },
      { message: { contains: search, mode: 'insensitive' as const } },
    ],
  } : {};

  // Construct a cache key based on query params
  const cacheKey = `admin:messages:cache:s=${search}:p=${currentPage}`;
  
  let messages;
  let totalItems;

  // Try fetching from Redis cache first
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    const parsed = JSON.parse(cachedData);
    messages = parsed.messages;
    totalItems = parsed.totalItems;
  } else {
    // Run both queries in parallel if not cached
    const [fetchedMessages, fetchedTotal] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: ITEMS_PER_PAGE,
      }),
      prisma.contactMessage.count({ where }),
    ]);

    messages = fetchedMessages;
    totalItems = fetchedTotal;

    // Cache the result for 60 seconds (or invalidate on new inserts)
    await redis.setex(cacheKey, 60, JSON.stringify({ messages, totalItems }));
  }

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-slate-950 p-6 sm:p-12 font-sans text-slate-300">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Manage leads and submissions. Protected by NextAuth.js.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <SearchFilter />
            <form action={async () => {
              "use server";
              const adminPage = process.env.ADMIN_PAGE || "/l8I32auyIM";
              await signOut({ redirectTo: `${adminPage}/login` });
            }}>
              <button className="whitespace-nowrap rounded-xl bg-red-500/10 border border-red-500/20 px-6 py-2.5 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/20 hover:text-red-300">
                Sign Out
              </button>
            </form>
          </div>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800">
              <thead className="bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Sender Details
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Snippet
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center text-sm text-slate-500">
                      No messages found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg: any) => (
                    <tr key={msg.id} className="transition-colors hover:bg-slate-800/50 group">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400">
                        {new Date(msg.createdAt).toLocaleDateString()}<br/>
                        <span className="text-xs text-slate-600">{new Date(msg.createdAt).toLocaleTimeString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-200">{msg.name}</span>
                          <span className="text-xs text-slate-500">{msg.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        <div className="max-w-md truncate">
                          {msg.message}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium flex items-center justify-end gap-2">
                        <ViewButton message={msg} />
                        <DeleteButton messageId={msg.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </main>
  );
}
