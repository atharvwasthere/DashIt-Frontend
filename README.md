# DashIt — Your Stats, Simplified

A clean, focused Shopify dashboard frontend — built as a sprint to help a friend ship a company assignment.  
I handled UX & frontend (landing, pricing/login, dashboard + PDF export); backend integration is pluggable and tenant-scoped.

##  Quick pitch
Treat it like a better view into your Shopify store — charts, 1/3/6 month comparisons, cohort retention, quick AI notes, and exportable reports. Built to go from zero → demo-ready fast.


##  Features
- Landing page, Pricing & Login (Google OAuth ready)  
- Dashboard views: **1 / 3 / 6 month** time ranges  
- Month-over-month comparisons, cohort retention, category breakdowns  
- Real-time KPIs: 24h revenue, orders, AOV, new customers  
- AI-style quick notes (UI hooks for short insights)  
- **Export to PDF** (client-side export for sharing reports)  
- Responsive layout with Tailwind, charting via EvilCharts  
- Mock-mode for local dev when backend is unavailable


## TechStack
<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:flex-start;padding:8px 0;">
  <a href="https://reactjs.org/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="48" height="48" style="display:block"/>
  </a>

  <a href="https://vitejs.dev/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://vite.dev/logo.svg" alt="Vite" width="48" height="48" style="display:block"/>
  </a>

  <a href="https://reactrouter.com/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://reactrouter.com/splash/hero-3d-logo.dark.webp" alt="React Router" width="120" height="120" style="display:block;object-fit:contain"/>
  </a>

  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://cdn.simpleicons.org/typescript/3178c6" alt="TypeScript" width="48" height="48" style="display:block"/>
  </a>

  <a href="https://tailwindcss.com/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width="48" height="48" style="display:block"/>
  </a>

  <a href="https://evilcharts.com/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;align-items:center;width:96px">
    <img src="https://evilcharts.com/favicon.ico" alt="EvilCharts" width="48" height="48" style="display:block"/>
  </a>
</div>



## 📁 Quick repo snapshot
Key frontend folders (where to look):

```

/frontend
├─ src/
│  ├─ pages/            # Dashboard.tsx, Pricing.tsx, AuthGoogle.tsx, Index.tsx
│  ├─ components/ui/    # charts, KPI rows, tables, navigation, hero, footer
│  ├─ hooks/             # use-mobile, use-toasts
│  ├─ lib/               # api helpers, insights mappers
│  ├─ utils/             # export-to-pdf helpers, formatters
│  └─ types/             # shared TS types

````


## 🔧 Local setup (dev)
1. Copy `.env.example` → `.env` and set the required variables (see below).  
2. Install deps:

```bash
# npm
npm install

# or pnpm
pnpm install
````

3. Start dev server:

```bash
npm run dev
# or
pnpm dev
```

4. Open `http://localhost:5173` and navigate: Landing → Login → Dashboard


## 🧾 Example `.env` (frontend)

```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

* `VITE_GOOGLE_CLIENT_ID` → used for frontend OAuth redirect UX (backend must handle token exchange)


## 🛠 Integration notes

* Frontend expects tenant-scoped backend endpoints for insights. Keep requests scoped to the shop/tenant id.
* Auth flow: frontend triggers Google OAuth redirect to backend; backend performs token exchange and returns app JWT/cookie.
* Charts expect a shaped payload (see `lib/insights.mappers.ts` for the expected mapping). Mocks are available for local dev.


## ✅ Known limits & caveats

* PDF export is client-side; very large reports might need server-side rendering for stable results.
* Some chart label collisions can occur on very narrow screens (minor responsive tweaks required).
* AI quick notes are UI hooks that expect insight text from the backend/ML service — currently mocked in local dev.


##  Testing & QA

* Manual tested flows: Landing → Login (mock) → Dashboard; chart render + PDF export for small datasets.
* If you link a live backend, run a few syncs to validate data shapes (esp. cohorts & category splits).


## 🙏 Credits & notes

* Charts implementation referenced EvilCharts examples (GitHits was handy for quick lookups).
* Built fast; designed for clarity over bells-and-whistles. If you want a prettier, production-grade polish, open an issue or PR.


## ✉️ Contact

If you want an MVP built quickly (zero → demo), hmu: **atharvsingh.me** 


