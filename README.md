This project is built using Next.js (App Router), TypeScript, Tailwind, and Zustand.
I structured the app so pages only handle routing/layout, while reusable UI and logic live in components/, data in data/, and state in store/.
Audit results are JSON-driven instead of hard-coded, so the UI is flexible and easy to scale.
Zustand is used for simple, predictable app-level state, such as the selected brand and audit module.
The UI design is clean, readable, and focused on communicating data clearly rather than animation-heavy visuals.

# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
