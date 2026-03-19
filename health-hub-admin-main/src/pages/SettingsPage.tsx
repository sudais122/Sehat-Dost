import { useState } from "react";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("MedAdmin Panel");
  const [email, setEmail] = useState("admin@gmail.com");

  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-accent-foreground mb-6">Settings</h1>

      <div className="max-w-2xl space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-accent-foreground mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">Site Name</label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">Admin Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-accent-foreground mb-4">Security</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent-foreground mb-1.5">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
          </div>
        </section>

        <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
