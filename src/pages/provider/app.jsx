// Provider UI kit — components & screens

const PROVIDER_LINKS = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'activities', label: 'My activities', icon: 'briefcase' },
  { id: 'bookings', label: 'Bookings', icon: 'calendar', badge: '3' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'reviews', label: 'Reviews', icon: 'star' },
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];
const PROVIDER_USER = { name: 'Ahmed Tours', email: 'ahmed@tours.tn', initials: 'AT' };

const PROVIDER_ACTIVITIES = [
  { id: 'a1', title: "Sunset camel ride at Ras R'mel", image: '../../../assets/photo-desert.svg', category: 'desert', categoryLabel: 'Desert', price: 45, rating: 4.9, reviewCount: 1234, status: 'active', bookings: 124 },
  { id: 'a6', title: 'Lagoon kayak + flamingo sunset', image: '../../../assets/photo-sunset.svg', category: 'water', categoryLabel: 'Water', price: 42, rating: 4.7, reviewCount: 367, status: 'active', bookings: 89 },
  { id: 'a8', title: 'Quad biking through the salt flats', image: '../../../assets/photo-desert.svg', category: 'quad', categoryLabel: 'Quad', price: 55, rating: 4.4, reviewCount: 189, status: 'inactive', bookings: 41 },
];

/* ── Overview screen ─────────────────────────────────────────────── */
function ProviderOverview({ go }) {
  const recent = [
    { ref: 'TI-4829', activity: "Sunset camel ride at Ras R'mel", date: 'Jun 17, 14:00', guests: 2, total: 90, status: 'confirmed' },
    { ref: 'TI-4811', activity: 'Lagoon kayak + flamingo sunset', date: 'Jun 15, 17:30', guests: 4, total: 168, status: 'confirmed' },
    { ref: 'TI-4803', activity: "Sunset camel ride at Ras R'mel", date: 'Jun 14, 14:00', guests: 3, total: 135, status: 'pending' },
    { ref: 'TI-4790', activity: 'Lagoon kayak + flamingo sunset', date: 'Jun 12, 16:00', guests: 2, total: 84, status: 'completed' },
    { ref: 'TI-4774', activity: 'Quad biking through the salt flats', date: 'Jun 10, 11:00', guests: 1, total: 55, status: 'cancelled' },
  ];
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h2 style={{ font: '700 22px var(--font-primary)', margin: 0 }}>Good morning, Ahmed 👋</h2>
          <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '4px 0 0' }}>Here's what's happening with your activities today.</p>
        </div>
        <button className="ti-btn ti-btn-primary"><Icon name="plus" size={14} />Add new activity</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        <StatCard label="Total bookings" value="254" sub="Last 30 days" icon="briefcase" accent="#00AA6C" trend={12} />
        <StatCard label="Revenue" value="€ 5,840" sub="After 12% commission" icon="wallet" accent="#2E91D6" trend={8} />
        <StatCard label="Avg rating" value="4.8" sub="Across 3 activities" icon="award" accent="#F2A00A" />
        <StatCard label="Completion rate" value="97%" sub="vs 91% platform avg" icon="checkCircle" accent="#5A4FCF" trend={2} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h3 style={{ font: '700 16px var(--font-primary)', margin: 0 }}>Recent bookings</h3>
        <a onClick={() => go('bookings')} style={{ font: '600 13px var(--font-primary)', color: 'var(--color-primary)', cursor: 'pointer' }}>View all →</a>
      </div>
      <DataTable
        getRowKey={r => r.ref}
        columns={[
          { key: 'ref', label: 'Ref' },
          { key: 'activity', label: 'Activity' },
          { key: 'date', label: 'Date' },
          { key: 'guests', label: 'Guests', align: 'right' },
          { key: 'total', label: 'Total', align: 'right', render: r => <strong>€{r.total}</strong> },
          { key: 'status', label: 'Status', render: r => <StatusBadge status={r.status} /> },
        ]}
        rows={recent}
      />
    </>
  );
}

/* ── My activities screen ────────────────────────────────────────── */
function ProviderActivities() {
  const [items, setItems] = useState(PROVIDER_ACTIVITIES);
  const toggle = id => setItems(items.map(a => a.id === id ? { ...a, status: a.status === 'active' ? 'inactive' : 'active' } : a));
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: 0 }}>{items.length} activities · toggle inactive to pause new bookings</p>
        <button className="ti-btn ti-btn-primary"><Icon name="plus" size={14} />Add new activity</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(a => (
          <div key={a.id} className="ti-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 120, height: 80, borderRadius: 8, backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h3 style={{ font: '700 16px var(--font-primary)', margin: 0 }}>{a.title}</h3>
                <span className="ti-chip" style={{ padding: '3px 9px', font: '700 10px var(--font-primary)', textTransform: 'uppercase' }}>
                  <CategoryDot category={a.category} />{a.categoryLabel}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
                <Bubbles score={a.rating} showScore showCount={a.reviewCount} />
                <span style={{ font: '400 13px var(--font-primary)', color: '#555' }}>· {a.bookings} bookings this month</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ font: '800 18px var(--font-primary)' }}>€{a.price}<span style={{ font: '600 12px var(--font-primary)', color: '#999' }}>/person</span></div>
            </div>
            <ToggleSwitch active={a.status === 'active'} onChange={() => toggle(a.id)} />
            <div style={{ display: 'flex', gap: 4 }}>
              <button className="ti-btn ti-btn-ghost" aria-label="Edit" style={{ padding: 8 }}><Icon name="edit" size={16} /></button>
              <button className="ti-btn ti-btn-ghost" aria-label="Delete" style={{ padding: 8 }}><Icon name="trash" size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function ToggleSwitch({ active, onChange }) {
  return (
    <button onClick={onChange} style={{
      width: 44, height: 24, borderRadius: 9999,
      background: active ? 'var(--color-primary)' : '#DDD',
      border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.15s ease', flexShrink: 0,
    }} aria-label={active ? 'Active' : 'Inactive'}>
      <span style={{ position: 'absolute', top: 2, left: active ? 22 : 2, width: 20, height: 20, borderRadius: 9999, background: '#fff', transition: 'left 0.15s ease' }} />
    </button>
  );
}

/* ── Bookings screen ─────────────────────────────────────────────── */
function ProviderBookings() {
  const all = [
    { ref: 'TI-4829', activity: "Sunset camel ride at Ras R'mel", customer: 'Sofia K.', date: 'Jun 17, 14:00', guests: 2, total: 90, status: 'confirmed' },
    { ref: 'TI-4811', activity: 'Lagoon kayak + flamingo sunset', customer: 'Marc L.', date: 'Jun 15, 17:30', guests: 4, total: 168, status: 'confirmed' },
    { ref: 'TI-4803', activity: "Sunset camel ride at Ras R'mel", customer: 'Erik H.', date: 'Jun 14, 14:00', guests: 3, total: 135, status: 'pending' },
    { ref: 'TI-4801', activity: 'Lagoon kayak + flamingo sunset', customer: 'Anna P.', date: 'Jun 13, 16:30', guests: 2, total: 84, status: 'pending' },
    { ref: 'TI-4794', activity: "Sunset camel ride at Ras R'mel", customer: 'Léa B.', date: 'Jun 13, 14:00', guests: 4, total: 180, status: 'pending' },
    { ref: 'TI-4790', activity: 'Lagoon kayak + flamingo sunset', customer: 'Jonas M.', date: 'Jun 12, 16:00', guests: 2, total: 84, status: 'completed' },
    { ref: 'TI-4774', activity: 'Quad biking salt flats', customer: 'Greta V.', date: 'Jun 10, 11:00', guests: 1, total: 55, status: 'cancelled' },
  ];
  const [tab, setTab] = useState('all');
  const tabs = [['all', 'All'], ['pending', 'Pending'], ['confirmed', 'Confirmed'], ['completed', 'Completed'], ['cancelled', 'Cancelled']];
  const filtered = tab === 'all' ? all : all.filter(b => b.status === tab);
  return (
    <>
      <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--color-border)', marginBottom: 16 }}>
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            font: '700 13px var(--font-primary)', padding: '10px 14px',
            color: tab === id ? 'var(--color-primary)' : '#161616',
            borderBottom: tab === id ? '2px solid var(--color-primary)' : '2px solid transparent', marginBottom: -1,
          }}>{label} ({tab === id ? filtered.length : (id === 'all' ? all.length : all.filter(b => b.status === id).length)})</button>
        ))}
      </div>
      <DataTable
        getRowKey={r => r.ref}
        columns={[
          { key: 'ref', label: 'Ref', render: r => <span style={{ font: '700 13px var(--font-primary)' }}>{r.ref}</span> },
          { key: 'activity', label: 'Activity' },
          { key: 'customer', label: 'Customer' },
          { key: 'date', label: 'Date' },
          { key: 'guests', label: 'Guests', align: 'right' },
          { key: 'total', label: 'Total', align: 'right', render: r => <strong>€{r.total}</strong> },
          { key: 'status', label: 'Status', render: r => <StatusBadge status={r.status} /> },
          { key: 'actions', label: '', align: 'right', render: r => r.status === 'pending'
              ? <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                  <button className="ti-btn ti-btn-secondary ti-btn-sm">Decline</button>
                  <button className="ti-btn ti-btn-primary ti-btn-sm">Confirm</button>
                </div>
              : <button className="ti-btn ti-btn-ghost ti-btn-sm">View</button>
          },
        ]}
        rows={filtered}
      />
    </>
  );
}

/* ── Wallet screen (provider) ────────────────────────────────────── */
function ProviderWallet() {
  return (
    <div style={{ maxWidth: 880 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, marginBottom: 20 }}>
        <div className="ti-card" style={{ padding: 24, borderRadius: 16 }}>
          <div style={{ font: '600 12px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Available to withdraw</div>
          <div style={{ font: '800 36px var(--font-primary)', letterSpacing: '-0.01em', marginBottom: 14 }}>€ 5,840.20</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="ti-btn ti-btn-primary"><Icon name="arrowUp" size={14} />Withdraw to PayPal</button>
            <button className="ti-btn ti-btn-ghost">Transaction history</button>
          </div>
        </div>
        <div className="ti-card" style={{ padding: 20 }}>
          <div style={{ font: '600 12px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>This month</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F2F2F2' }}>
            <span style={{ font: '400 13px var(--font-primary)', color: '#555' }}>Bookings (gross)</span>
            <strong>€ 6,640.00</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F2F2F2' }}>
            <span style={{ font: '400 13px var(--font-primary)', color: '#555' }}>Platform commission (12%)</span>
            <strong style={{ color: '#A30000' }}>−€ 796.80</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <span style={{ font: '700 14px var(--font-primary)' }}>Net</span>
            <strong style={{ font: '800 16px var(--font-primary)' }}>€ 5,843.20</strong>
          </div>
        </div>
      </div>
      <div className="ti-card" style={{ padding: 20 }}>
        <h3 style={{ font: '700 16px var(--font-primary)', margin: '0 0 12px' }}>Recent transactions</h3>
        {[
          { kind: 'credit', label: 'Booking — Sunset camel ride · TI-4829', date: 'Jun 17', amount: 79.20 },
          { kind: 'credit', label: 'Booking — Lagoon kayak · TI-4811', date: 'Jun 15', amount: 147.84 },
          { kind: 'commission', label: 'Platform commission — Jun', date: 'Jun 15', amount: -796.80 },
          { kind: 'debit', label: 'Withdrawal to PayPal', date: 'Jun 08', amount: -2400.00 },
          { kind: 'credit', label: 'Booking — Quad biking · TI-4774', date: 'Jun 10', amount: 48.40 },
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #F2F2F2' }}>
            <div style={{ width: 32, height: 32, borderRadius: 9999,
              background: t.kind === 'credit' ? '#D4F5E9' : t.kind === 'commission' ? '#FEF3C7' : '#FDE8E8',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={t.kind === 'credit' ? 'arrowDown' : t.kind === 'commission' ? 'pieChart' : 'arrowUp'} size={14}
                    color={t.kind === 'credit' ? '#00703A' : t.kind === 'commission' ? '#8A6000' : '#A30000'} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 13px var(--font-primary)' }}>{t.label}</div>
              <div style={{ font: '400 12px var(--font-primary)', color: '#999' }}>{t.date}</div>
            </div>
            <div style={{ font: '700 14px var(--font-primary)', color: t.amount > 0 ? '#00703A' : t.kind === 'commission' ? '#8A6000' : '#A30000' }}>
              {t.amount > 0 ? '+' : '−'}€{Math.abs(t.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Reviews + Profile + Settings: lightweight stubs ─────────────── */
function ProviderReviews() {
  const reviews = [
    { name: 'Sofia K.', country: 'Germany', date: 'Jun 2025', score: 5, title: 'Amazing desert safari!', body: 'The guide was incredibly knowledgeable and patient with our small kids.', activity: "Sunset camel ride at Ras R'mel" },
    { name: 'Marc L.', country: 'France', date: 'May 2025', score: 4, title: 'Beautiful sunset, fast pace', body: 'Smooth pickup. Could have been a bit slower for the kids but overall fantastic.', activity: 'Lagoon kayak + flamingo sunset' },
  ];
  return (
    <div style={{ maxWidth: 780 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 20, marginBottom: 20 }} className="ti-card">
        <div>
          <div style={{ font: '800 36px var(--font-primary)' }}>4.8</div>
          <Bubbles score={4.8} size={16} />
        </div>
        <div style={{ flex: 1, font: '400 14px var(--font-primary)', color: '#555' }}>
          Across <strong>1,790 reviews</strong> from confirmed bookings. Your response rate is <strong>92%</strong> within 24h.
        </div>
      </div>
      {reviews.map((r, i) => (
        <div key={i} className="ti-card" style={{ padding: 18, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <div className="ti-avatar">{r.name.split(' ').map(p => p[0]).join('')}</div>
            <div>
              <div style={{ font: '700 14px var(--font-primary)' }}>{r.name}</div>
              <div style={{ font: '400 12px var(--font-primary)', color: '#999' }}>{r.country} · {r.date} · {r.activity}</div>
            </div>
            <div style={{ marginLeft: 'auto' }}><Bubbles score={r.score} /></div>
          </div>
          <h4 style={{ font: '700 15px var(--font-primary)', margin: '8px 0 4px' }}>{r.title}</h4>
          <p style={{ font: '400 14px var(--font-primary)', margin: 0 }}>{r.body}</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button className="ti-btn ti-btn-secondary ti-btn-sm">Reply publicly</button>
            <button className="ti-btn ti-btn-ghost ti-btn-sm">Mark helpful</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProviderProfile() {
  return (
    <div style={{ maxWidth: 780 }}>
      <div className="ti-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div className="ti-avatar" style={{ width: 64, height: 64, font: '700 22px var(--font-primary)' }}>AT</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h2 style={{ font: '700 20px var(--font-primary)', margin: 0 }}>Ahmed Tours</h2>
              <VerifiedBusiness />
            </div>
            <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginTop: 4 }}>Provider since 2022 · Houmt Souk, Djerba · License TI-PRO-0214</div>
          </div>
          <button className="ti-btn ti-btn-secondary">View public profile</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Field label="Business name" value="Ahmed Tours" />
          <Field label="Contact email" value="ahmed@tours.tn" />
          <Field label="Phone" value="+216 75 234 100" />
          <Field label="Languages" value="EN · FR · DE · AR" />
          <Field label="About" value="Family-run tour operator based in Houmt Souk. Specialists in sunset camel rides, lagoon kayaks, and quad excursions across Djerba and the Tunisian south." full />
        </div>
      </div>
    </div>
  );
}
function Field({ label, value, full }) {
  return (
    <div style={{ gridColumn: full ? '1 / -1' : 'auto' }}>
      <div style={{ font: '700 11px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{label}</div>
      <div className="ti-input" style={{ background: '#F8F8F8' }}>{value}</div>
    </div>
  );
}

function ProviderSettings() {
  return (
    <div style={{ maxWidth: 780 }}>
      {[
        { title: 'Notification preferences', body: 'Email and SMS alerts for new bookings, cancellations, and review replies.' },
        { title: 'Payout schedule', body: 'Currently weekly on Mondays. Switch to monthly or on-demand.' },
        { title: 'Commission tier', body: 'Standard 12% — eligible for 9% after 500 bookings (currently 254).' },
        { title: 'Cancellation policy', body: 'Free cancellation up to 24h before. Tighten or relax for new bookings.' },
      ].map(s => (
        <div key={s.title} className="ti-card" style={{ padding: 20, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ font: '700 15px var(--font-primary)', margin: '0 0 4px' }}>{s.title}</h3>
            <p style={{ font: '400 13px var(--font-primary)', color: '#555', margin: 0 }}>{s.body}</p>
          </div>
          <button className="ti-btn ti-btn-secondary ti-btn-sm">Manage</button>
        </div>
      ))}
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────────── */
function ProviderApp() {
  const [route, setRoute] = useState('overview');
  return (
    <DashboardShell role="Provider portal" user={PROVIDER_USER} links={PROVIDER_LINKS}
                    current={route} onNavigate={setRoute}
                    headerExtras={<button className="ti-btn ti-btn-primary"><Icon name="plus" size={14} />New activity</button>}>
      {route === 'overview' && <ProviderOverview go={setRoute} />}
      {route === 'activities' && <ProviderActivities />}
      {route === 'bookings' && <ProviderBookings />}
      {route === 'wallet' && <ProviderWallet />}
      {route === 'reviews' && <ProviderReviews />}
      {route === 'profile' && <ProviderProfile />}
      {route === 'settings' && <ProviderSettings />}
    </DashboardShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProviderApp />);
