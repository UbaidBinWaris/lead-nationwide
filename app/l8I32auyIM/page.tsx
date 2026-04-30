import { prisma } from "@/lib/prisma";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { signOut } from "@/auth";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Securely fetch all messages directly from the database
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="min-h-screen bg-bg-secondary p-6 sm:p-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">
              Secure Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              Manage contact form submissions. Protected by NextAuth.js.
            </p>
          </div>
          <form action={async () => {
            "use server";
            // Get admin page dynamically to safely redirect
            const adminPage = process.env.ADMIN_PAGE || "/l8I32auyIM";
            await signOut({ redirectTo: `${adminPage}/login` });
          }}>
            <button className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100">
              Sign Out
            </button>
          </form>
        </header>

        <div className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-light">
              <thead className="bg-navy-surface text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Sender Details
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light bg-white">
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-sm text-text-secondary">
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr key={msg.id} className="transition-colors hover:bg-bg-secondary/50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-text-primary">{msg.name}</span>
                          <span className="text-xs text-text-secondary">{msg.email}</span>
                          {msg.phone && <span className="text-xs text-text-secondary">{msg.phone}</span>}
                          {msg.company && (
                            <span className="mt-1 inline-flex w-fit items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              {msg.company}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary">
                        <div className="max-w-xl whitespace-pre-wrap break-words">
                          {msg.message}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <DeleteButton messageId={msg.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
