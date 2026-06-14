// TripInsel — shared React primitives for all UI kits.
// Load with <script type="text/babel" src="../shared.jsx"></script>
// Exposes Icon, Bubbles, Badge, StatusBadge, TrustChip, RankingBadge,
// TravelersChoice, CategoryDot, formatPrice helpers on `window`.

const { useState, useMemo, useEffect, Fragment } = React;

/* ── Icon: tiny inline Lucide-style SVGs (2px stroke, rounded). ──── */
const ICON_PATHS = {
  search: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14ZM21 21l-4.3-4.3',
  mapPin: 'M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 1 1 16 0Z|M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z|M12 6v6l4 2',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M22 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z',
  share: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z|M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z|M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z|m8.59 13.51 6.83 3.98|M15.41 6.51l-6.82 3.98',
  check: 'M20 6 9 17l-5-5',
  checkCircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|m9 12 2 2 4-4',
  xCircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|m15 9-6 6|m9 9 6 6',
  shieldCheck: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z|m9 12 2 2 4-4',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9|M10.3 21a1.94 1.94 0 0 0 3.4 0',
  wallet: 'M20 12V8H6a2 2 0 0 1 0-4h12v4|M4 6v12a2 2 0 0 0 2 2h14v-4|M18 12a2 2 0 0 0 0 4h4v-4Z',
  creditCard: 'M2 5h20v14H2z|M2 10h20',
  calendar: 'M3 4h18v18H3z|M16 2v4|M8 2v4|M3 10h18',
  chevronRight: 'm9 18 6-6-6-6',
  chevronLeft: 'm15 18-6-6 6-6',
  chevronDown: 'm6 9 6 6 6-6',
  alertCircle: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z|M12 8v4|M12 16h.01',
  award: 'M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z|m15 13 1.5 8.5L12 18l-4.5 3.5L9 13',
  dashboard: 'M3 3h7v9H3z|M14 3h7v5h-7z|M14 12h7v9h-7z|M3 16h7v5H3z',
  settings: 'M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z|M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4|m16 17 5-5-5-5|M21 12H9',
  plus: 'M12 5v14|M5 12h14',
  minus: 'M5 12h14',
  x: 'M18 6 6 18|M6 6l12 12',
  menu: 'M3 6h18|M3 12h18|M3 18h18',
  trash: 'M3 6h18|m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6|M10 11v6|M14 11v6|M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7|M18.4 2.6a2 2 0 0 1 2.8 2.8L12 14.7l-4 1 1-4Z',
  thumbsUp: 'M7 10v12|M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7',
  lock: 'M5 11h14v11H5z|M8 11V7a4 4 0 1 1 8 0v4',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9z',
  arrowUpRight: 'm7 17 10-10|M7 7h10v10',
  arrowRight: 'M5 12h14|m12 5 7 7-7 7',
  arrowDown: 'M12 5v14|m19 12-7 7-7-7',
  arrowUp: 'M12 19V5|m5 12 7-7 7 7',
  home: 'M3 11 12 3l9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2Z',
  user: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  briefcase: 'M3 7h18v14H3z|M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  barChart: 'M3 3v18h18|M7 16V8|M12 16v-5|M17 16v-2',
  pieChart: 'M21 15.5A9 9 0 1 1 8.5 3v9.5H21Z',
  filter: 'M22 3H2l8 9.5V19l4 2v-8.5Z',
  star: 'm12 2 3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.8l-6.3 3.3L7 14.2 2 9.3l7-1Z',
  flag: 'M4 22V4|M4 4h12l-2 4 2 4H4',
  externalLink: 'M15 3h6v6|M10 14 21 3|M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|M2 12h20|M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z',
};
function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 2, fill = 'none', ...rest }) {
  const paths = (ICON_PATHS[name] || '').split('|');
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
         strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
         style={{ display: 'inline-block', verticalAlign: '-2px', flexShrink: 0 }} {...rest}>
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/* ── Bubbles: TripAdvisor rating ──────────────────────────────────── */
function Bubbles({ score = 5, size = 14, showScore = false, showCount, color = '#00AA6C' }) {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    if (score >= i) items.push('full');
    else if (score >= i - 0.5) items.push('half');
    else items.push('empty');
  }
  const id = useMemo(() => 'b' + Math.random().toString(36).slice(2, 8), []);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ display: 'inline-flex', gap: 2 }}>
        {items.map((kind, i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 18 18">
            {kind === 'full' && <circle cx="9" cy="9" r="8" fill={color} />}
            {kind === 'empty' && <circle cx="9" cy="9" r="8" fill="#fff" stroke={color} strokeWidth="1.4" />}
            {kind === 'half' && (<>
              <defs><clipPath id={`${id}-${i}`}><rect width="9" height="18" /></clipPath></defs>
              <circle cx="9" cy="9" r="8" fill="#fff" stroke={color} strokeWidth="1.4" />
              <circle cx="9" cy="9" r="8" fill={color} clipPath={`url(#${id}-${i})`} />
            </>)}
          </svg>
        ))}
      </span>
      {showScore && <strong style={{ font: '700 14px var(--font-primary)', color: '#161616' }}>{score.toFixed(1)}</strong>}
      {showCount != null && <span style={{ font: '400 13px var(--font-primary)', color: '#555' }}>· ({showCount.toLocaleString()})</span>}
    </span>
  );
}

/* ── Status badge ──────────────────────────────────────────────────── */
function StatusBadge({ status }) {
  const map = {
    confirmed: { cls: 'ti-badge-confirmed', label: 'Confirmed' },
    pending:   { cls: 'ti-badge-pending',   label: 'Pending' },
    cancelled: { cls: 'ti-badge-cancelled', label: 'Cancelled' },
    completed: { cls: 'ti-badge-completed', label: 'Completed' },
    active:    { cls: 'ti-badge-active',    label: 'Active' },
    inactive:  { cls: 'ti-badge-inactive',  label: 'Inactive' },
  };
  const m = map[status] || map.confirmed;
  return <span className={`ti-badge ${m.cls}`}>{m.label}</span>;
}

/* ── Travelers' Choice ───────────────────────────────────────────── */
function TravelersChoice({ year = 2025, size = 'sm' }) {
  const small = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: small ? 5 : 7,
      background: '#00AA6C', color: '#fff',
      font: `700 ${small ? 10 : 13}px var(--font-primary)`,
      padding: small ? '5px 10px' : '8px 14px',
      borderRadius: 9999, textTransform: 'uppercase', letterSpacing: '0.04em',
    }}>
      <Icon name="award" size={small ? 11 : 14} color="#fff" />
      Travelers' Choice {year}
    </span>
  );
}

/* ── Verified Business chip ─────────────────────────────────────── */
function VerifiedBusiness() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#fff', color: '#00AA6C',
      border: '1px solid #00AA6C', font: '700 11px var(--font-primary)',
      padding: '5px 10px', borderRadius: 9999,
    }}>
      <Icon name="checkCircle" size={12} color="#00AA6C" />
      Verified Business
    </span>
  );
}

/* ── Ranking badge ────────────────────────────────────────────────── */
function RankingBadge({ rank, total, area = 'Djerba' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#E6F7F1', color: '#00703A',
      font: '700 12px var(--font-primary)',
      padding: '5px 12px', borderRadius: 9999,
    }}>
      <Icon name="award" size={12} color="#00703A" />
      #{rank} of {total} in {area}
    </span>
  );
}

/* ── Trust row ─────────────────────────────────────────────────────── */
function TrustRow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, font: '400 11px var(--font-primary)', color: '#555' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="lock" size={11} color="#555" />Secure</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="check" size={11} color="#00703A" strokeWidth={2.5} />Free cancellation</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="zap" size={11} color="#555" />Instant confirm</span>
    </div>
  );
}

/* ── Category dot ─────────────────────────────────────────────────── */
const CATEGORY_COLORS = {
  desert: '#C9853D', water: '#2E91D6', cultural: '#5A4FCF', cooking: '#E07A3B',
  diving: '#1FA7B8', boat: '#00AA6C', quad: '#8B5A3C', horse: '#A06A4C',
  spa: '#D66C8E', food: '#4FAB5A',
};
function CategoryDot({ category, size = 8 }) {
  const color = CATEGORY_COLORS[category] || '#00AA6C';
  return <span style={{ display: 'inline-block', width: size, height: size, borderRadius: 9999, background: color, flexShrink: 0 }} />;
}

/* ── Format ───────────────────────────────────────────────────────── */
function formatEUR(amount) {
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(amount);
}

Object.assign(window, {
  Icon, Bubbles, StatusBadge, TravelersChoice, VerifiedBusiness, RankingBadge,
  TrustRow, CategoryDot, CATEGORY_COLORS, formatEUR,
});
