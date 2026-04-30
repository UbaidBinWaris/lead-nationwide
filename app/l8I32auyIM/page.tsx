import { prisma } from "@/lib/prisma";
import { ViewButton } from "@/components/admin/ViewButton";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { AdvancedFilters } from "@/components/admin/AdvancedFilters";
import { Pagination } from "@/components/admin/Pagination";
import { signOut } from "@/auth";
import { redis } from "@/lib/redis";
import { MdMail, MdDrafts, MdMarkEmailUnread } from "react-icons/md";

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 50;

export default async function AdminDashboard(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    status?: string;
    email?: string;
    from?: string;
    to?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || '';
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || 'all';
  const emailFilter = searchParams?.email || '';
  const fromDate = searchParams?.from || '';
  const toDate = searchParams?.to || '';
  
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  // Build the where clause for searching & filtering
  const where: any = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' as const } },
      { email: { contains: search, mode: 'insensitive' as const } },
      { message: { contains: search, mode: 'insensitive' as const } },
    ];
  }

  if (status === 'unread') where.isRead = false;
  if (status === 'read') where.isRead = true;

  if (emailFilter) {
    where.email = { contains: emailFilter, mode: 'insensitive' as const };
  }

  if (fromDate || toDate) {
    where.createdAt = {};
    if (fromDate) where.createdAt.gte = new Date(fromDate);
    if (toDate) {
      const end = new Date(toDate);
      end.setHours(23, 59, 59, 999);
      where.createdAt.lte = end;
    }
  }

  // Construct a cache key based on query params
  const cacheKey = `admin:messages:cache:s=${search}:p=${currentPage}:st=${status}:em=${emailFilter}:f=${fromDate}:t=${toDate}`;
  
  let messages;
  let totalItems;
  let statsTotal = 0;
  let statsRead = 0;
  let statsUnread = 0;

  // Try fetching from Redis cache first
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    const parsed = JSON.parse(cachedData);
    messages = parsed.messages;
    totalItems = parsed.totalItems;
    statsTotal = parsed.statsTotal;
    statsRead = parsed.statsRead;
    statsUnread = parsed.statsUnread;
  } else {
    // Run all queries in parallel if not cached
    const [fetchedMessages, fetchedTotal, countTotal, countRead, countUnread] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: ITEMS_PER_PAGE,
      }),
      prisma.contactMessage.count({ where }),
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { isRead: true } }),
      prisma.contactMessage.count({ where: { isRead: false } }),
    ]);

    messages = fetchedMessages;
    totalItems = fetchedTotal;
    statsTotal = countTotal;
    statsRead = countRead;
    statsUnread = countUnread;

    // Cache the result for 60 seconds (or invalidate on new inserts/reads)
    await redis.setex(cacheKey, 60, JSON.stringify({ 
      messages, totalItems, statsTotal, statsRead, statsUnread 
    }));
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
          <div className="flex items-center gap-4">
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

        {/* Dashboard Stats */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex items-center gap-4">
            <div className="rounded-full bg-blue-500/10 p-3 text-blue-400">
              <MdMail size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Total Records</p>
              <p className="text-2xl font-bold text-white">{statsTotal}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex items-center gap-4">
            <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-400">
              <MdDrafts size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Read Messages</p>
              <p className="text-2xl font-bold text-white">{statsRead}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 flex items-center gap-4 shadow-[0_0_15px_rgba(245,158,11,0.05)] relative overflow-hidden">
            <div className="rounded-full bg-amber-500/20 p-3 text-amber-400 relative z-10">
              <MdMarkEmailUnread size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-amber-200/70">Unread Messages</p>
              <p className="text-2xl font-bold text-amber-400">{statsUnread}</p>
            </div>
            {/* Subtle glow effect for unread box */}
            {statsUnread > 0 && (
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl"></div>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <AdvancedFilters />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800">
              <thead className="bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Status & Date
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Sender Details
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message Snippet
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
                    <tr 
                      key={msg.id} 
                      className={`transition-colors group ${
                        !msg.isRead ? 'bg-slate-800/20 hover:bg-slate-800/40' : 'hover:bg-slate-800/50'
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-3">
                          {!msg.isRead ? (
                            <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" title="Unread"></div>
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-slate-700" title="Read"></div>
                          )}
                          <div>
                            <p className={`text-sm ${!msg.isRead ? 'text-slate-300 font-medium' : 'text-slate-500'}`}>
                              {new Date(msg.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-slate-600">{new Date(msg.createdAt).toLocaleTimeString()}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className={`text-sm ${!msg.isRead ? 'font-bold text-white' : 'font-medium text-slate-300'}`}>
                            {msg.name}
                          </span>
                          <span className={`text-xs ${!msg.isRead ? 'text-slate-400' : 'text-slate-500'}`}>
                            {msg.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`max-w-md truncate text-sm ${!msg.isRead ? 'font-medium text-slate-300' : 'text-slate-400'}`}>
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
