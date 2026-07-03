import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-ice px-4 text-brand-text">
      <form className="w-full max-w-sm rounded-xl border border-brand-border bg-white p-6 shadow-soft">
        <Lock className="mb-4 h-8 w-8 text-primary" />
        <h1 className="text-3xl font-black">Admin Login</h1>
        <input className="mt-6 w-full rounded-xl border border-brand-border bg-white px-4 py-3" placeholder="Email" type="email" />
        <input className="mt-3 w-full rounded-xl border border-brand-border bg-white px-4 py-3" placeholder="Password" type="password" />
        <button className="mt-5 w-full rounded-xl bg-primary px-5 py-3 font-bold text-white shadow-soft transition hover:bg-brand-hover">Login</button>
      </form>
    </main>
  );
}
