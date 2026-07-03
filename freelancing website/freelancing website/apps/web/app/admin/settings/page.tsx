"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  
  const [settings, setSettings] = useState({
    recipientEmail: "",
    emailTime: "00:00",
    timeZone: "UTC",
    enabled: false
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/settings", {
        headers: { Authorization: `Bearer ${localStorage.getItem("nexera-token")}` }
      });
      if (res.ok) {
        setSettings(await res.json());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    
    try {
      const res = await fetch("http://localhost:5000/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("nexera-token")}`
        },
        body: JSON.stringify(settings)
      });
      
      if (res.ok) {
        setMessage("Settings saved successfully.");
      } else {
        setMessage("Failed to save settings.");
      }
    } catch (e) {
      setMessage("Error saving settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-section pt-28">
        <section className="container py-10">
          <div className="mb-8">
            <h1 className="text-4xl font-black">Daily Email Scheduler</h1>
            <p className="mt-2 text-slate-600">Configure automated daily lead reports.</p>
          </div>

          <div className="max-w-2xl rounded-xl border border-brand-border bg-white p-8 shadow-soft">
            {loading ? (
              <p>Loading settings...</p>
            ) : (
              <form onSubmit={handleSave} className="grid gap-6">
                <div>
                  <label className="mb-2 block font-bold text-slate-900">Recipient Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-brand-border p-3 outline-none focus:border-primary"
                    value={settings.recipientEmail}
                    onChange={(e) => setSettings({ ...settings, recipientEmail: e.target.value })}
                  />
                  <p className="mt-1 text-sm text-slate-500">The email address that will receive the daily report.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block font-bold text-slate-900">Delivery Time</label>
                    <input
                      type="time"
                      required
                      className="w-full rounded-lg border border-brand-border p-3 outline-none focus:border-primary"
                      value={settings.emailTime}
                      onChange={(e) => setSettings({ ...settings, emailTime: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-bold text-slate-900">Time Zone</label>
                    <select
                      className="w-full rounded-lg border border-brand-border p-3 outline-none focus:border-primary"
                      value={settings.timeZone}
                      onChange={(e) => setSettings({ ...settings, timeZone: e.target.value })}
                    >
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">Eastern Time (US)</option>
                      <option value="America/Los_Angeles">Pacific Time (US)</option>
                      <option value="Europe/London">London (GMT/BST)</option>
                      <option value="Asia/Kolkata">India (IST)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="h-5 w-5"
                    checked={settings.enabled}
                    onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                  />
                  <label htmlFor="enabled" className="font-bold text-slate-900 cursor-pointer">
                    Enable Daily Automated Reports
                  </label>
                </div>

                <div className="mt-4 border-t border-brand-border pt-6 flex items-center justify-between">
                  <p className="text-sm font-bold text-primary">{message}</p>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-brand-hover disabled:opacity-50"
                  >
                    <Save className="h-5 w-5" />
                    {saving ? "Saving..." : "Save Settings"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
