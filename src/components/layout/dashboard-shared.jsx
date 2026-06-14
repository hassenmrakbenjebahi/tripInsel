// Provider UI kit — shared dashboard chrome
function DashboardShell({ role, user, links, current, onNavigate, children, headerExtras }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F2F2F2' }}>
      <aside style={{ width: 240, background: '#fff', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ font: '800 22px var(--font-primary)', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>TripInsel</div>
          <div style={{ font: '600 11px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{role}</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map(l => (
            <a key={l.id} onClick={() => onNavigate(l.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
              borderRadius: 8, cursor: 'pointer', textDecoration: 'none',
              borderLeft: current === l.id ? '3px solid var(--color-primary)' : '3px solid transparent',
              background: current === l.id ? 'var(--color-primary-light)' : 'transparent',
              color: current === l.id ? '#00703A' : '#161616',
              font: `${current === l.id ? '700' : '600'} 13px var(--font-primary)`,
              marginLeft: -3,
            }}>
              <Icon name={l.icon} size={16} color={current === l.id ? '#00703A' : '#555'} />
              {l.label}
              {l.badge && <span style={{ marginLeft: 'auto', background: '#D93025', color: '#fff', font: '700 10px var(--font-primary)', padding: '1px 6px', borderRadius: 9999 }}>{l.badge}</span>}
            </a>
          ))}
        </nav>
        <div style={{ padding: 12, borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="ti-avatar">{user.initials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: '700 13px var(--font-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
            <div style={{ font: '400 11px var(--font-primary)', color: '#999' }}>{user.email}</div>
          </div>
          <button aria-label="Log out" title="Log out"
            onClick={() => { try { localStorage.removeItem('ti_session'); } catch (e) {} window.location.href = '../landing/index.html'; }}
            style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--color-border)', background: '#fff', cursor: 'pointer', color: '#555', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="logout" size={16} />
          </button>
        </div>
      </aside>
      <main style={{ flex: 1, minWidth: 0 }}>
        <header style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 16, position: 'sticky', top: 0, zIndex: 10 }}>
          <h1 style={{ font: '700 20px var(--font-primary)', margin: 0 }}>{links.find(l => l.id === current)?.label || 'Dashboard'}</h1>
          <div style={{ flex: 1 }} />
          {headerExtras}
          <button className="ti-btn ti-btn-ghost" aria-label="Notifications" style={{ position: 'relative', padding: 8 }}>
            <Icon name="bell" size={18} />
            <span style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, borderRadius: 9999, background: '#D93025' }} />
          </button>
        </header>
        <div className="ti-page-content" style={{ padding: 32 }}>{children}</div>
      </main>
    </div>
  );
}

/* ── Stat cards ──────────────────────────────────────────────────── */
function StatCard({ label, value, sub, icon, accent = '#00AA6C', trend }) {
  return (
    <div className="ti-card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span style={{ font: '600 12px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        <span style={{ width: 32, height: 32, borderRadius: 8, background: accent + '20', color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={16} color={accent} />
        </span>
      </div>
      <div style={{ font: '800 26px var(--font-primary)', color: '#161616', letterSpacing: '-0.01em' }}>{value}</div>
      {sub && <div style={{ font: '400 12px var(--font-primary)', color: '#555', marginTop: 4 }}>{sub}</div>}
      {trend != null && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, font: '700 12px var(--font-primary)', color: trend > 0 ? '#00703A' : '#A30000', marginTop: 6 }}>
          <Icon name={trend > 0 ? 'arrowUp' : 'arrowDown'} size={11} color={trend > 0 ? '#00703A' : '#A30000'} />
          {Math.abs(trend)}% vs last week
        </div>
      )}
    </div>
  );
}

/* ── Data table ──────────────────────────────────────────────────── */
function DataTable({ columns, rows, getRowKey }) {
  return (
    <div className="ti-card" style={{ padding: 0, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', font: '400 13px var(--font-primary)' }}>
        <thead>
          <tr style={{ background: '#F2F2F2' }}>
            {columns.map(c => (
              <th key={c.key} style={{ textAlign: c.align || 'left', padding: '12px 16px', font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#555' }}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={getRowKey ? getRowKey(row) : i} style={{ borderTop: '1px solid #F2F2F2' }}>
              {columns.map(c => (
                <td key={c.key} style={{ textAlign: c.align || 'left', padding: '14px 16px', color: '#161616' }}>
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Object.assign(window, { DashboardShell, StatCard, DataTable });
