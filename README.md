# TripInsel

> "TripAdvisor for Djerba activities" — a marketplace to discover and book local tours and experiences on Djerba island, Tunisia.

This repository contains the **design system + UI prototypes** for TripInsel (HTML + inline-React design artifacts) plus the project memory describing the production frontend architecture.

## Roles
- **Traveller** — browse and book activities (public marketplace)
- **Local host** — list activities, manage bookings (provider portal)
- **Admin** — verify hosts, oversee the platform (internal, invite-only)

## Structure

The prototypes are organised to **mirror the production React (Vite) architecture** (see below), so handoff is 1:1.

```
/
├── styles.css              Design-system entry (imports tokens + ui-kit)
├── colors_and_type.css     Design tokens — colour, type, spacing, radius, shadow, motion
├── demo.html               Live design-system launcher
├── assets/                 Logos, photos, favicon
├── design-source/          PDF spec + logo masters (NOT code)
├── preview/                Design-system specimen cards (one per token/component)
└── src/                    Mirrors the production app
    ├── styles/             ui-kit.css (shared .ti-* layer) + signup.css
    ├── components/
    │   ├── ui/             shared.jsx (Icon, Bubbles…), design-canvas, signup-screens, tourist-wizard
    │   └── layout/         dashboard-shared.jsx (portal shell)
    └── pages/              One folder per route-level screen:
        ├── landing/        Connected journey — landing → sign in / sign up / forgot (session-aware)
        ├── signup/         Sign-up flows canvas (role picker, traveller wizard + SMS OTP, host, admin)
        ├── tourist/        Traveller marketplace — home, search, detail, booking
        ├── provider/       Local-host portal
        ├── admin/          Admin dashboard
        ├── host-activity/  Create Activity wizard (maps to CreateActivityDto + CreateAvailabilitySlotDto)
        └── notifications/  Notification components
```

Shared CSS/JSX live in **one** place each (`src/styles/`, `src/components/`) — no per-page duplicates.

## Run

Static HTML — but pages load `.jsx` over HTTP, so **serve the folder** (don't open via `file://`):

```bash
npm install      # one time
npm start        # → http://localhost:3000
```

Then open **http://localhost:3000/src/pages/landing/index.html** for the full walkable journey.

No Node? Any static server works — `npx serve .`, `python3 -m http.server`, or the **Live Server** extension in VS Code / Cursor (right-click `src/pages/landing/index.html` → *Open with Live Server*).

## Production frontend architecture

The production app is **React (Vite)**. Prototypes here are structured to translate cleanly into:

```
src/
├── api/          # axios backend calls
├── components/
│   ├── layout/   # shells, navbars
│   └── ui/       # buttons, inputs, cards (NumberStepper, MoneyInput, CategorySelect…)
├── context/      # global state (auth/session, role, theme, language)
├── data/         # static enums & reference lists (ActivityCategory, PricingType…)
├── hooks/        # reusable hooks
├── pages/        # route-level screens (Landing, SignIn, Signup, CreateActivity…)
├── redux/        # advanced/server state
├── services/     # api → UI orchestration
└── utils/        # formatters, validators (formatEUR…)
```

- **State:** `context/` = global (session/role/theme); `redux/` = advanced/server cache
- **Data vs API:** `data/` = static enums; `api/` = axios endpoints (orchestrated via `services/`)
- **Routing:** React Router v6, one page per file, lazy-loaded
- **Styling:** CSS Modules per component, on top of the global tokens in `colors_and_type.css`

Backend is **Spring Boot + JPA**; forms map 1:1 to backend DTOs.

---

© 2026 TripInsel · Made on the island, for the island.
