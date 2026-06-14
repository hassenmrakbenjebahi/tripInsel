# tripInsel app — Project memory

## Frontend architecture (MUST respect)

The production frontend is a **React (Vite)** app. When producing code, organizing components, naming things, or describing handoff, follow this exact structure:

```
frontend/
├── node_modules/
├── public/
└── src/
    ├── api/          # Backend connection — HTTP clients, axios instances, endpoint calls
    ├── assets/       # Static files — images, icons, fonts
    ├── components/
    │   ├── layout/   # Layout components — shells, navbars, sidebars, page frames
    │   └── ui/       # Reusable UI components — buttons, inputs, cards, modals
    ├── context/      # Global state management (React Context)
    ├── data/         # Static content — constants, seed/reference data, enums
    ├── hooks/        # Custom logic — reusable React hooks
    ├── pages/        # Application pages — route-level screens
    ├── redux/        # Advanced state management — slices, store, selectors
    ├── services/     # Frontend logic — business logic, data transforms between api & UI
    └── utils/        # Utility functions — formatters, validators, helpers
    App.jsx
    eslint.config.js
    index.html
    package-lock.json
    .gitignore
```

### How to map work onto this architecture
- **Pages** (e.g. Create Activity, Sign-up, Tourist home) → `src/pages/`
- **Reusable form controls** (NumberStepper, MoneyInput, CategorySelect, etc.) → `src/components/ui/`
- **Dashboard shell / navbars / footers** → `src/components/layout/`
- **DTO-shaped request builders & API calls** (CreateActivityDto, etc.) → `src/api/` (raw calls) + `src/services/` (orchestration)
- **Enums & reference lists** (ActivityCategory, PricingType, categories, languages) → `src/data/`
- **Formatters / validators** (formatEUR, duration formatting, slot validation) → `src/utils/`
- **Custom hooks** (e.g. useTweaks-style form state, useAuth) → `src/hooks/`
- **Global state** (auth/session, current user role) → `src/context/` or `src/redux/`

### Confirmed conventions (from the team)
- **State:** `context/` = global state (auth/session, current user role, theme, language). `redux/` = advanced state (server cache, cross-page data like bookings/activities lists, anything with complex reducers/selectors).
- **Data vs API:** `data/` = static data only (enums mirrored as constants: `ActivityCategory`, `PricingType`; category/language reference lists). `api/` = backend connection, called with **axios** (axios instance + endpoint functions). Services orchestrate api → UI.
- **Routing (my call, scalable):** React Router v6, one route-level screen per file in `pages/`, routes declared in `App.jsx`. Lazy-load page chunks.
- **Styling (my call, scalable):** plain CSS today; for production use **CSS Modules** (`Component.module.css`) co-located with each component, on top of the shared design tokens in `colors_and_type.css` (kept as global `:root` variables). Keeps the current plain-CSS feel, avoids class collisions, scales per-component.

### Notes
- Deliverables in THIS workspace are HTML + inline-React prototypes (design artifacts), not the production app. But name and structure them so they translate cleanly into the folders above, and call out the target folder during handoff.
- **Current workspace layout (mirrors the architecture):** prototypes live under `src/pages/<screen>/`, shared primitives in `src/components/ui/` (+ `layout/`), shared CSS in `src/styles/`. Tokens stay at root (`colors_and_type.css`, `styles.css`) for the design-system compiler; `preview/` holds DS specimen cards; `design-source/` holds the PDF spec + logo masters (not code). Start page: `src/pages/landing/index.html`.
- Backend is Spring Boot + JPA. Forms must map 1:1 to backend DTOs (e.g. `CreateActivityDto`, `CreateAvailabilitySlotDto`).

## Product domain
- **TripInsel** — "TripAdvisor for Djerba activities". Marketplace to book local tours/experiences on Djerba island, Tunisia.
- **Roles:** Tourist (traveller), Local host (the provider — list activities, manage bookings), Admin (internal, invite-only, hidden from public role picker).
- Design system lives in `colors_and_type.css` + `ui_kits/`. Brand greens, Mulish font.
