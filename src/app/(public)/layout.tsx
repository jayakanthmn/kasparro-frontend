import "../globals.css";
import React from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="p-4 border-b">Kasparro</header>
        <main className="p-6">{children}</main>
        <footer className="p-4 border-t text-sm text-center">© Kasparro</footer>
      </body>
    </html>
  );
}
