---
name: tripinsel-design
description: Use this skill to generate well-branded interfaces and assets for TripInsel — a Djerba-focused activity & tour marketplace styled as "TripAdvisor for Djerba." Contains essential design guidelines, colors, type, fonts, assets, and React UI kit components for prototyping and production code.
user-invocable: true
---

# TripInsel design skill

Read the `README.md` in this folder for the full briefing — product context, three user roles (Tourist · Provider · Admin), content fundamentals, visual foundations, and iconography rules. Then explore:

- `colors_and_type.css` — the entire token system (colors, type, spacing, radii, shadows, motion) in CSS custom properties. Copy this into any artifact.
- `assets/` — logo, monogram, white logo, favicon, and four SVG photography placeholders for Djerba.
- `src/` — prototypes organised to mirror the production architecture. `src/pages/{landing,signup,tourist,provider,admin,host-activity,notifications}/` are the route-level screens; `src/components/ui/shared.jsx` exposes `<Icon>`, `<Bubbles>`, `<StatusBadge>`, `<TravelersChoice>`, `<VerifiedBusiness>`, `<RankingBadge>`, `<TrustRow>`, `<CategoryDot>`, plus the `CATEGORY_COLORS` map and `formatEUR()`; `src/components/layout/dashboard-shared.jsx` is the portal shell; `src/styles/ui-kit.css` is the shared `.ti-*` layer.
- `design-source/` — the PDF design spec and logo masters (reference, not code).
- `preview/` — atomic specimen cards for every token and component (good for ad-hoc reference).

## Non-negotiables

1. **Primary color is `#00AA6C` green.** Never gold, never blue. Buttons, links, active states, ratings — all green.
2. **Bubble ratings, never stars.** Five filled green circles. The `<Bubbles>` component in `shared.jsx` is the canonical implementation.
3. **Mulish for everything.** Weights 400 / 500 / 600 / 700 / 800. No serif, no display alternate.
4. **No emoji** in product chrome (country flags on reviews are the only exception).
5. **No card lifts on hover** — shadow change only.
6. **Buttons are `--radius-md` (8 px)**, not pills.
7. **Icons: Lucide, 2 px stroke**, inheriting `currentColor`. The only filled icon allowed is the rating bubble.

## When invoked

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy the assets you need into your output folder and produce static HTML files. Use the patterns and components from `ui_kits/` as a starting point — copy what you need, don't import across project boundaries.

If working on **production code** (React + Vite · React Router v6 · CSS Modules · axios · Lucide React), treat this skill as your design source of truth. Keep `colors_and_type.css` tokens as global `:root` variables and layer CSS Modules per component on top; use `lucide-react` for icons; map work onto the `src/{api,components,context,data,hooks,pages,redux,services,utils}` layout described in `CLAUDE.md`.

If the user invokes this skill without other guidance, ask what they want to build (tourist screen? provider dashboard? marketing? slide deck?), ask a few questions about scope and audience, then act as an expert designer.

## Source repo

The product codebase lives at <https://github.com/hassenmrakbenjebahi/tripinsel>. At the time this skill was authored the repo was a fresh `create-next-app` skeleton with no real components — re-explore on each use in case components have since been built; lift from real code over patterns from the PDF whenever possible.
