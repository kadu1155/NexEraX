import { dashboardModules } from "@/lib/site-data";
import { Header } from "@/components/header";

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-section pt-28">
        <section className="container py-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-bold text-primary">Admin Dashboard</p>
              <h1 className="text-4xl font-black">Manage NexEra</h1>
            </div>
            <a href="/admin/login" className="rounded-xl bg-primary px-5 py-3 font-bold text-white shadow-soft transition hover:bg-brand-hover">Admin Login</a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dashboardModules.map((module) => (
              <div key={module} className="rounded-xl border border-brand-border bg-white p-6 shadow-soft">
                <h2 className="text-xl font-black">{module}</h2>
                <p className="mt-3 text-slate-600">Create, update, delete, review and export records through the protected API.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
