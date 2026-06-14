// Admin UI kit — components & screens

const ADMIN_LINKS = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'verifications', label: 'Verifications', icon: 'shieldCheck', badge: '7' },
  { id: 'providers', label: 'Providers', icon: 'briefcase' },
  { id: 'bookings', label: 'Bookings', icon: 'calendar' },
  { id: 'transactions', label: 'Transactions', icon: 'wallet' },
  { id: 'categories', label: 'Categories', icon: 'menu' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];
const ADMIN_USER = { name: 'Lina Hosni', email: 'lina@tripinsel.com', initials: 'LH' };

/* ── Admin overview ──────────────────────────────────────────────── */
function AdminOverview({ go }) {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ font: '700 22px var(--font-primary)', margin: 0 }}>Platform overview</h2>
        <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '4px 0 0' }}>Live numbers across all providers and tourists on the platform.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        <StatCard label="Bookings today" value="142" sub="vs 128 yesterday" icon="calendar" accent="#00AA6C" trend={11} />
        <StatCard label="Gross volume (week)" value="€ 38,420" sub="Commission: € 4,610" icon="barChart" accent="#2E91D6" trend={6} />
        <StatCard label="Active providers" value="87" sub="3 awaiting verification" icon="briefcase" accent="#F2A00A" trend={3} />
        <StatCard label="Avg platform rating" value="4.7" sub="6,402 reviews" icon="award" accent="#5A4FCF" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, marginBottom: 24 }}>
        <div className="ti-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ font: '700 16px var(--font-primary)', margin: 0 }}>Bookings · last 7 days</h3>
            <span style={{ font: '400 12px var(--font-primary)', color: '#999' }}>2025-06-11 → 2025-06-17</span>
          </div>
          <FakeBarChart />
        </div>
        <div className="ti-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ font: '700 16px var(--font-primary)', margin: 0 }}>Bookings by category</h3>
          </div>
          {[
            { id: 'desert', label: 'Desert', pct: 28 },
            { id: 'water', label: 'Water sports', pct: 22 },
            { id: 'cultural', label: 'Cultural', pct: 17 },
            { id: 'cooking', label: 'Cooking', pct: 12 },
            { id: 'spa', label: 'Spa', pct: 9 },
            { id: 'food', label: 'Food', pct: 7 },
            { id: 'boat', label: 'Boat', pct: 5 },
          ].map(c => (
            <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
              <CategoryDot category={c.id} />
              <span style={{ font: '600 13px var(--font-primary)', width: 110 }}>{c.label}</span>
              <div style={{ flex: 1, height: 8, background: '#F2F2F2', borderRadius: 9999, overflow: 'hidden' }}>
                <div style={{ width: `${c.pct * 3.4}%`, height: '100%', background: CATEGORY_COLORS[c.id] }} />
              </div>
              <span style={{ font: '700 12px var(--font-primary)', width: 32, textAlign: 'right' }}>{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ti-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h3 style={{ font: '700 16px var(--font-primary)', margin: 0 }}>Action items</h3>
          <a onClick={() => go('verifications')} style={{ font: '600 13px var(--font-primary)', color: 'var(--color-primary)', cursor: 'pointer' }}>Open queue →</a>
        </div>
        {[
          { icon: 'shieldCheck', accent: '#F2A00A', title: '7 provider verifications pending', body: 'Oldest submitted 3 days ago. Aim for under 48h.' },
          { icon: 'xCircle', accent: '#D93025', title: '2 disputed bookings', body: 'Tourist requested refund — provider response needed.' },
          { icon: 'flag', accent: '#5A4FCF', title: '1 review flagged for moderation', body: '"Cooking class with Souad" — possible policy violation.' },
        ].map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #F2F2F2' }}>
            <span style={{ width: 36, height: 36, borderRadius: 8, background: a.accent + '20', color: a.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={a.icon} size={16} color={a.accent} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ font: '700 14px var(--font-primary)' }}>{a.title}</div>
              <div style={{ font: '400 12px var(--font-primary)', color: '#555' }}>{a.body}</div>
            </div>
            <button className="ti-btn ti-btn-secondary ti-btn-sm">Review</button>
          </div>
        ))}
      </div>
    </>
  );
}
function FakeBarChart() {
  const bars = [42, 58, 51, 64, 72, 89, 142];
  const days = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  const max = Math.max(...bars);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, height: 160, padding: '8px 4px 0' }}>
      {bars.map((b, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ font: '700 11px var(--font-primary)', color: '#555' }}>{b}</div>
          <div style={{ width: '100%', height: (b / max) * 130, background: i === bars.length - 1 ? 'var(--color-primary)' : 'var(--color-primary-light)', borderRadius: '6px 6px 0 0', minHeight: 4 }} />
          <div style={{ font: '600 11px var(--font-primary)', color: '#999' }}>{days[i]}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Verifications queue ─────────────────────────────────────────── */
function AdminVerifications() {
  const initial = [
    { id: 'v1', name: 'Souad Cooking Studio', owner: 'Souad Mansouri', submitted: 'Jun 14', city: 'Midoun', docs: ['License', 'ID', 'Insurance'], status: 'pending' },
    { id: 'v2', name: 'Djerba Dive Center', owner: 'Karim Benali', submitted: 'Jun 13', city: 'El Kantara', docs: ['License', 'ID', 'Insurance', 'PADI'], status: 'pending' },
    { id: 'v3', name: 'Lagoon Kayak Co.', owner: 'Yasmine Trabelsi', submitted: 'Jun 13', city: "Ras R'mel", docs: ['License', 'ID'], status: 'incomplete' },
    { id: 'v4', name: 'Houmt Tours', owner: 'Mohammed Khelifi', submitted: 'Jun 12', city: 'Houmt Souk', docs: ['License', 'ID', 'Insurance'], status: 'pending' },
    { id: 'v5', name: 'Argan Hammam', owner: 'Leila Said', submitted: 'Jun 11', city: 'Midoun', docs: ['License', 'ID', 'Insurance'], status: 'pending' },
  ];
  const [rows, setRows] = useState(initial);
  const act = (id, verdict) => setRows(rows.map(r => r.id === id ? { ...r, status: verdict } : r));
  return (
    <>
      <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '0 0 16px' }}>
        Review provider applications. Approve to issue a Verified Business badge; reject to send the provider feedback.
      </p>
      <DataTable
        getRowKey={r => r.id}
        columns={[
          { key: 'name', label: 'Business', render: r => <div><div style={{ font: '700 14px var(--font-primary)' }}>{r.name}</div><div style={{ font: '400 12px var(--font-primary)', color: '#999' }}>{r.owner}</div></div> },
          { key: 'city', label: 'Location', render: r => <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#555' }}><Icon name="mapPin" size={12} color="#555" />{r.city}</span> },
          { key: 'submitted', label: 'Submitted' },
          { key: 'docs', label: 'Documents', render: r => <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{r.docs.map(d => <span key={d} className="ti-chip" style={{ padding: '3px 8px', font: '600 11px var(--font-primary)' }}>{d}</span>)}</div> },
          { key: 'status', label: 'Status', render: r => {
            if (r.status === 'pending') return <span className="ti-badge ti-badge-pending">Pending</span>;
            if (r.status === 'incomplete') return <span className="ti-badge ti-badge-cancelled">Incomplete</span>;
            if (r.status === 'approved') return <span className="ti-badge ti-badge-confirmed">Approved</span>;
            if (r.status === 'rejected') return <span className="ti-badge ti-badge-cancelled">Rejected</span>;
          } },
          { key: 'actions', label: '', align: 'right', render: r => r.status === 'pending' || r.status === 'incomplete'
              ? <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                  <button className="ti-btn ti-btn-secondary ti-btn-sm" onClick={() => act(r.id, 'rejected')}>Reject</button>
                  <button className="ti-btn ti-btn-primary ti-btn-sm" onClick={() => act(r.id, 'approved')}>Approve</button>
                </div>
              : <button className="ti-btn ti-btn-ghost ti-btn-sm">View</button>
          },
        ]}
        rows={rows}
      />
    </>
  );
}

/* ── Providers list ─────────────────────────────────────────────── */
function AdminProviders() {
  const all = [
    { name: 'Ahmed Tours', owner: 'Ahmed Bouaziz', activities: 3, rating: 4.8, bookings: 1240, status: 'active', verified: true },
    { name: 'Souad Cooking Studio', owner: 'Souad Mansouri', activities: 2, rating: 4.9, bookings: 412, status: 'active', verified: true },
    { name: 'Djerba Dive Center', owner: 'Karim Benali', activities: 4, rating: 4.6, bookings: 298, status: 'pending', verified: false },
    { name: 'Lagoon Kayak Co.', owner: 'Yasmine Trabelsi', activities: 2, rating: 4.7, bookings: 367, status: 'active', verified: true },
    { name: 'Argan Hammam', owner: 'Leila Said', activities: 1, rating: 4.8, bookings: 521, status: 'active', verified: true },
  ];
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <input className="ti-input" style={{ flex: 1, maxWidth: 420 }} placeholder="Search providers…" />
        <button className="ti-chip">All categories <Icon name="chevronDown" size={11} /></button>
        <button className="ti-chip">All statuses <Icon name="chevronDown" size={11} /></button>
        <div style={{ flex: 1 }} />
        <button className="ti-btn ti-btn-ghost">Export CSV</button>
      </div>
      <DataTable
        getRowKey={r => r.name}
        columns={[
          { key: 'name', label: 'Business', render: r => <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ font: '700 14px var(--font-primary)' }}>{r.name}</span>{r.verified && <Icon name="shieldCheck" size={14} color="#00AA6C" />}</div> },
          { key: 'owner', label: 'Owner' },
          { key: 'activities', label: 'Activities', align: 'right' },
          { key: 'rating', label: 'Rating', render: r => <Bubbles score={r.rating} showScore /> },
          { key: 'bookings', label: 'Bookings', align: 'right', render: r => r.bookings.toLocaleString() },
          { key: 'status', label: 'Status', render: r => <span className={`ti-badge ${r.status === 'active' ? 'ti-badge-active' : 'ti-badge-pending'}`}>{r.status}</span> },
          { key: 'actions', label: '', align: 'right', render: () => <button className="ti-btn ti-btn-ghost ti-btn-sm">View</button> },
        ]}
        rows={all}
      />
    </>
  );
}

/* ── Bookings monitor ────────────────────────────────────────────── */
function AdminBookings() {
  const rows = [
    { ref: 'TI-4829', activity: "Sunset camel ride", provider: 'Ahmed Tours', customer: 'Sofia K.', date: 'Jun 17, 14:00', total: 90, comm: 10.80, status: 'confirmed' },
    { ref: 'TI-4811', activity: 'Lagoon kayak', provider: 'Lagoon Kayak Co.', customer: 'Marc L.', date: 'Jun 15, 17:30', total: 168, comm: 20.16, status: 'confirmed' },
    { ref: 'TI-4803', activity: 'Sunset camel ride', provider: 'Ahmed Tours', customer: 'Erik H.', date: 'Jun 14, 14:00', total: 135, comm: 16.20, status: 'pending' },
    { ref: 'TI-4774', activity: 'Quad biking salt flats', provider: 'Ahmed Tours', customer: 'Greta V.', date: 'Jun 10, 11:00', total: 55, comm: 0, status: 'cancelled' },
    { ref: 'TI-4711', activity: 'Cooking with Souad', provider: 'Souad Cooking Studio', customer: 'Jonas M.', date: 'May 30, 09:00', total: 130, comm: 15.60, status: 'completed' },
  ];
  return (
    <DataTable
      getRowKey={r => r.ref}
      columns={[
        { key: 'ref', label: 'Ref', render: r => <span style={{ font: '700 13px var(--font-primary)' }}>{r.ref}</span> },
        { key: 'activity', label: 'Activity' },
        { key: 'provider', label: 'Provider' },
        { key: 'customer', label: 'Customer' },
        { key: 'date', label: 'Date' },
        { key: 'total', label: 'Total', align: 'right', render: r => <strong>€{r.total}</strong> },
        { key: 'comm', label: 'Commission', align: 'right', render: r => <span style={{ color: '#8A6000', font: '700 13px var(--font-primary)' }}>€{r.comm.toFixed(2)}</span> },
        { key: 'status', label: 'Status', render: r => <StatusBadge status={r.status} /> },
      ]}
      rows={rows}
    />
  );
}

/* ── Transactions ────────────────────────────────────────────────── */
function AdminTransactions() {
  const rows = [
    { id: 'TX-9821', label: 'Commission collected — Sunset camel · TI-4829', date: 'Jun 17 14:32', kind: 'commission', amount: 10.80 },
    { id: 'TX-9820', label: 'Refund issued — TI-4774 (cancelled)', date: 'Jun 17 11:02', kind: 'refund', amount: -55.00 },
    { id: 'TX-9819', label: 'Payout — Ahmed Tours', date: 'Jun 16 09:00', kind: 'payout', amount: -2400.00 },
    { id: 'TX-9818', label: 'Commission collected — Lagoon kayak · TI-4811', date: 'Jun 15 18:15', kind: 'commission', amount: 20.16 },
    { id: 'TX-9817', label: 'Payout — Souad Cooking Studio', date: 'Jun 15 09:00', kind: 'payout', amount: -780.00 },
  ];
  return (
    <DataTable
      getRowKey={r => r.id}
      columns={[
        { key: 'id', label: 'Tx', render: r => <span style={{ font: '700 13px var(--font-primary)' }}>{r.id}</span> },
        { key: 'label', label: 'Description' },
        { key: 'date', label: 'When', render: r => <span style={{ color: '#555' }}>{r.date}</span> },
        { key: 'kind', label: 'Type', render: r => {
          const labels = { commission: ['Commission', '#FEF3C7', '#8A6000'], payout: ['Payout', '#FDE8E8', '#A30000'], refund: ['Refund', '#FDE8E8', '#A30000'] };
          const [l, bg, fg] = labels[r.kind] || ['—', '#F2F2F2', '#555'];
          return <span className="ti-badge" style={{ background: bg, color: fg }}>{l}</span>;
        }},
        { key: 'amount', label: 'Amount', align: 'right', render: r => <strong style={{ color: r.amount > 0 ? '#00703A' : '#A30000' }}>{r.amount > 0 ? '+' : '−'}€{Math.abs(r.amount).toFixed(2)}</strong> },
      ]}
      rows={rows}
    />
  );
}

/* ── Categories ──────────────────────────────────────────────────── */
function AdminCategories() {
  const cats = Object.entries(CATEGORY_COLORS).map(([id, color]) => ({
    id, color, label: id[0].toUpperCase() + id.slice(1),
    activities: { desert: 24, water: 19, cultural: 15, cooking: 11, diving: 8, boat: 7, quad: 5, horse: 3, spa: 9, food: 12 }[id] || 0,
  }));
  return (
    <div style={{ maxWidth: 880 }}>
      <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '0 0 16px' }}>Manage activity categories. Color and icon define how each shows up on the public marketplace.</p>
      <div className="ti-card">
        {cats.map((c, i) => (
          <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, borderTop: i === 0 ? 'none' : '1px solid #F2F2F2' }}>
            <span style={{ width: 36, height: 36, borderRadius: 8, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="mapPin" size={16} color="#fff" />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ font: '700 14px var(--font-primary)' }}>{c.label}</div>
              <div style={{ font: '400 12px var(--font-primary)', color: '#999', fontFamily: 'monospace' }}>{c.color}</div>
            </div>
            <div style={{ font: '400 13px var(--font-primary)', color: '#555' }}>{c.activities} activities</div>
            <button className="ti-btn ti-btn-ghost ti-btn-sm"><Icon name="edit" size={14} />Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSettings() {
  return (
    <div style={{ maxWidth: 780 }}>
      {[
        { title: 'Platform commission', body: 'Standard 12% across all categories. Tiered rates kick in at 500 / 2,000 bookings.', value: '12%' },
        { title: 'Currencies enabled', body: 'EUR (default), TND, USD. Conversion uses ECB daily fix.', value: '3 enabled' },
        { title: 'Notification templates', body: 'Booking confirmation, reminder, cancellation, refund. Translated EN · FR · DE · AR · IT.' },
        { title: 'Cancellation window', body: 'Free cancellation up to 24h before activity (default). Providers can tighten per activity.', value: '24h' },
        { title: 'Review moderation', body: 'Auto-publish reviews from verified bookings. Flagged reviews require admin approval.', value: 'Auto + manual' },
      ].map(s => (
        <div key={s.title} className="ti-card" style={{ padding: 20, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ font: '700 15px var(--font-primary)', margin: '0 0 4px' }}>{s.title}</h3>
            <p style={{ font: '400 13px var(--font-primary)', color: '#555', margin: 0 }}>{s.body}</p>
          </div>
          {s.value && <div style={{ font: '800 18px var(--font-primary)' }}>{s.value}</div>}
          <button className="ti-btn ti-btn-secondary ti-btn-sm">Manage</button>
        </div>
      ))}
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────────── */
function AdminApp() {
  const [route, setRoute] = useState('overview');
  return (
    <DashboardShell role="Admin panel" user={ADMIN_USER} links={ADMIN_LINKS}
                    current={route} onNavigate={setRoute}>
      {route === 'overview' && <AdminOverview go={setRoute} />}
      {route === 'verifications' && <AdminVerifications />}
      {route === 'providers' && <AdminProviders />}
      {route === 'bookings' && <AdminBookings />}
      {route === 'transactions' && <AdminTransactions />}
      {route === 'categories' && <AdminCategories />}
      {route === 'settings' && <AdminSettings />}
    </DashboardShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AdminApp />);
