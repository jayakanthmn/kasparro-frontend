import "../globals.css";

import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <aside className="w-56 border-r p-4 space-y-2">
          <a href="/app/dashboard" className="block">Dashboard</a>
          <a href="/app/audit" className="block">Audit</a>
          <a href="/app/architecture" className="block">Architecture</a>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
