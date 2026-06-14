// TripInsel · Notification system — interactive playground
const { useState: useS } = React;

function NotificationCenter({ role }) {
  const [tab, setTab] = useS('All');
  const [items, setItems] = useS(NT_DATA[role]);
  React.useEffect(() => { setItems(NT_DATA[role]); setTab('All'); }, [role]);

  const filtered = items.filter(n => NT_tabMatch(tab, n));
  const groups = ['Today', 'Earlier'].map(g => [g, filtered.filter(n => n.group === g)]).filter(([, a]) => a.length);
  const unread = items.filter(i => i.unread).length;
  const read = (id) => setItems(list => list.map(i => i.id === id ? { ...i, unread: false } : i));
  const act = (n, label) => { read(n.id); toast({ type: /confirm|approve|reply|review|investigate/i.test(label) ? 'success' : 'info', title: `${label}ed`, message: 'Action recorded.' }); };

  return (
    <div className="nt-block" id="nt-center">
      <div className="nt-block-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="k">Full surface</div>
          <h2>Notification center</h2>
          <p>The dedicated page — same data, roomier rows, with filters. Lives at <code style={{ background: 'var(--color-bg-subtle)', padding: '1px 6px', borderRadius: 5, font: '600 11px monospace' }}>pages/Notifications.jsx</code>.</p>
        </div>
        <button onClick={() => setItems(list => list.map(i => ({ ...i, unread: false })))}
                style={{ font: '700 12.5px var(--font-primary)', color: 'var(--color-primary)', background: 'var(--color-primary-light)', border: 'none', padding: '9px 14px', borderRadius: 9, cursor: 'pointer' }}>
          Mark all read{unread > 0 ? ` (${unread})` : ''}
        </button>
      </div>
      <div className="nt-block-body" style={{ paddingTop: 14 }}>
        <div className="nt-tabs" style={{ borderBottom: '1px solid var(--color-border)', padding: '0 0 12px', marginBottom: 6 }}>
          {NT_TABS.map(t => <button key={t} className={'nt-tab' + (t === tab ? ' active' : '')} onClick={() => setTab(t)}>{t}</button>)}
        </div>
        {groups.length === 0 ? (
          <div className="nt-empty">
            <span className="ic"><Icon name="checkCircle" size={28} /></span>
            <h4>You're all caught up</h4>
            <p>Nothing under “{tab}”.</p>
          </div>
        ) : groups.map(([g, arr]) => (
          <div key={g}>
            <div className="nt-group-label" style={{ padding: '14px 0 4px' }}>{g}</div>
            {arr.map(n => <NotificationItem key={n.id} n={n} onAction={act} onRead={read} big />)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Inline banners showcase ─────────────────────────────────── */
const BANNERS = {
  traveller: [
    { type: 'warning', icon: 'alertCircle', h: 'Verify your phone to finish booking', p: 'We sent a 6-digit code by SMS to +216 55 234 187. Bookings are held for 15 minutes.', acts: [['Enter code', 'go'], ['Resend', 'ghost']] },
    { type: 'success', icon: 'checkCircle', h: 'Booking confirmed for tomorrow', p: 'Sunset camel ride at Ras R’mel · 16:30 · 2 travellers. Free cancellation until 16:30 today.', acts: [['View booking', 'go'], ['Add to calendar', 'ghost']] },
    { type: 'info', icon: 'zap', h: 'A activity you saved dropped in price', p: 'El Kantara dive trip is now €68 — €14 less than when you saved it.', acts: [['See activity', 'go']] },
  ],
  host: [
    { type: 'warning', icon: 'clock', h: '3 bookings need your confirmation', p: 'Travellers are waiting — confirm within 24 hours so the slot isn’t released automatically.', acts: [['Review bookings', 'go']] },
    { type: 'success', icon: 'wallet', h: 'Payout of €428.00 is on its way', p: 'Sent to your bank ending ••42. Expect it within 1–2 business days.', acts: [['View statement', 'go']] },
    { type: 'info', icon: 'shieldCheck', h: 'Your business is verified', p: 'The trust badge now shows on all your listings — verified hosts get up to 2× more bookings.', acts: [['See my listings', 'go']] },
  ],
  admin: [
    { type: 'error', icon: 'flag', h: '2 reviews flagged as suspicious', p: 'Multiple travellers reported reviews on Quad biking dunes tour. Investigate before they affect rankings.', acts: [['Investigate', 'go'], ['Dismiss', 'ghost']] },
    { type: 'warning', icon: 'shieldCheck', h: '5 hosts awaiting verification', p: 'New local hosts submitted documents. Median review time this week is 14 hours.', acts: [['Open queue', 'go']] },
    { type: 'info', icon: 'barChart', h: 'Weekly platform report is ready', p: '+18% bookings week-over-week, 7 new hosts, €12.4k GMV.', acts: [['View report', 'go']] },
  ],
};

function BannersBlock({ role }) {
  const [items, setItems] = useS(BANNERS[role]);
  React.useEffect(() => setItems(BANNERS[role]), [role]);
  return (
    <div className="nt-block">
      <div className="nt-block-head"><div className="k">Page-level</div><h2>Inline banners</h2><p>Persistent, contextual alerts that sit at the top of a page — not transient like toasts.</p></div>
      <div className="nt-block-body">
        {items.length === 0 && <p style={{ font: '400 13px var(--font-primary)', color: 'var(--color-text-muted)', margin: 0 }}>All banners dismissed — nice and tidy.</p>}
        {items.map((b, i) => (
          <div key={i} className={`nt-banner ${b.type}`}>
            <span className="b-ic"><Icon name={b.icon} size={20} color="#fff" /></span>
            <div className="b-body">
              <h4>{b.h}</h4>
              <p>{b.p}</p>
              <div className="b-acts">
                {b.acts.map(([label, kind], j) => (
                  <button key={j} className={kind} onClick={() => kind === 'go' ? toast({ type: 'success', title: label, message: 'Routed.' }) : setItems(list => list.filter((_, k) => k !== i))}>{label}</button>
                ))}
              </div>
            </div>
            <button className="b-close" onClick={() => setItems(list => list.filter((_, k) => k !== i))} aria-label="Dismiss"><Icon name="x" size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Toast trigger playground ────────────────────────────────── */
const TOASTS = {
  traveller: [
    ['success', 'Booking confirmed', () => toast({ type: 'success', title: 'Booking confirmed 🎉', message: 'Sunset camel ride · tomorrow 16:30. Check your email for details.', actions: [{ label: 'View', primary: true }, { label: 'Dismiss' }] })],
    ['info', 'Trip reminder', () => toast({ type: 'info', title: 'Your trip is tomorrow', message: 'Djerba cooking class · pickup at 9:00 from your hotel lobby.' })],
    ['warning', 'Hold expiring', () => toast({ type: 'warning', title: 'Your seats are held for 15 min', message: 'Verify your phone to lock in the booking.' })],
    ['error', 'Payment failed', () => toast({ type: 'error', title: 'Payment didn’t go through', message: 'Your card was declined. Try another method.', actions: [{ label: 'Retry', primary: true }] })],
    ['booking', 'Price drop', () => toast({ type: 'booking', title: 'Price drop on a saved activity', message: 'El Kantara dive trip is now €68.' })],
  ],
  host: [
    ['booking', 'New booking', () => toast({ type: 'booking', title: 'New booking request', message: 'Sofia K. · 2 seats · tomorrow 16:30. Confirm within 24h.', actions: [{ label: 'Confirm', primary: true }, { label: 'Later' }] })],
    ['success', 'Payout sent', () => toast({ type: 'success', title: 'Payout of €428.00 sent', message: 'On its way to your bank ending ••42.' })],
    ['info', 'New review', () => toast({ type: 'info', title: 'Marco left a 5-bubble review', message: '“Unforgettable sunset, Ahmed was wonderful.”' })],
    ['warning', 'Confirm soon', () => toast({ type: 'warning', title: '3 bookings need confirmation', message: 'Slots release automatically after 24 hours.' })],
    ['error', 'Cancellation', () => toast({ type: 'error', title: 'A booking was cancelled', message: 'John R. cancelled El Kantara dive trip.' })],
  ],
  admin: [
    ['info', 'New host', () => toast({ type: 'info', title: 'New host to verify', message: 'Djerba Dunes Adventures submitted documents.', actions: [{ label: 'Review', primary: true }] })],
    ['error', 'Flagged content', () => toast({ type: 'error', title: 'Review flagged', message: '3 travellers reported a review as suspicious.' })],
    ['warning', 'Payout batch', () => toast({ type: 'warning', title: 'Payout batch awaiting approval', message: '87 hosts · approve before Friday 17:00.' })],
    ['success', 'Report ready', () => toast({ type: 'success', title: 'Weekly report ready', message: '+18% bookings, €12.4k GMV.' })],
  ],
};

function TriggersBlock({ role }) {
  return (
    <div className="nt-block">
      <div className="nt-block-head"><div className="k">Live · click me</div><h2>Toasts</h2><p>Transient confirmations that slide in, count down, and auto-dismiss. Fire one:</p></div>
      <div className="nt-block-body">
        <div className="nt-triggers">
          {TOASTS[role].map(([type, label, fn], i) => (
            <button key={i} className={`nt-trigger ${type}`} onClick={fn}>
              <span className="swab"><Icon name={{ success: 'checkCircle', info: 'bell', warning: 'alertCircle', error: 'xCircle', booking: 'calendar' }[type]} size={14} /></span>
              {label}
            </button>
          ))}
        </div>
        <p className="nt-note">Toasts stack top-right, pause nothing, and respect <code>prefers-reduced-motion</code>. Fire several quickly to see them stack.</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════ */
function App() {
  const [role, setRole] = useS('traveller');
  const roleMeta = {
    traveller: { label: 'Traveller', icon: 'compass', who: 'Sofia K.', init: 'SK' },
    host:      { label: 'Local host', icon: 'briefcase', who: 'Ahmed Tours', init: 'AT' },
    admin:     { label: 'Admin', icon: 'shieldCheck', who: 'Platform', init: 'PT' },
  };
  const rm = roleMeta[role];

  return (
    <div className="nt-playground">
      <ToastHost />

      <header className="nt-hero">
        <div className="wm"><span className="bub" />TripInsel</div>
        <div className="eyebrow">Design system · Components</div>
        <h1>Notifications, end to end.</h1>
        <p>One coherent system across every role — live toasts, an animated bell inbox, a full notification center, and page banners. Switch role and try everything.</p>
        <div className="nt-roles">
          {Object.entries(roleMeta).map(([k, v]) => (
            <button key={k} className={'nt-role' + (k === role ? ' active' : '')} onClick={() => setRole(k)}>
              <Icon name={v.icon} size={14} color={k === role ? '#00703A' : '#fff'} />{v.label}
            </button>
          ))}
        </div>
      </header>

      <div className="nt-shell">
        {/* Mock top bar showing the live bell in context */}
        <div className="nt-block" style={{ marginBottom: 24 }}>
          <div className="nt-faketop">
            <div className="left"><span className="bub" />TripInsel</div>
            <div className="right">
              <span style={{ font: '600 13px var(--font-primary)', color: 'var(--color-text-secondary)' }}>{rm.who}</span>
              <button onClick={() => window.dispatchEvent(new Event('nt-simulate'))}
                      style={{ font: '700 12.5px var(--font-primary)', color: 'var(--color-primary)', background: 'var(--color-primary-light)', border: 'none', padding: '10px 14px', borderRadius: 10, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <Icon name="zap" size={14} /> Simulate incoming
              </button>
              <NotificationBell role={role} />
              <span className="nt-avatar">{rm.init}</span>
            </div>
          </div>
          <div className="nt-block-body" style={{ paddingTop: 16 }}>
            <p style={{ font: '400 13.5px/1.55 var(--font-primary)', color: 'var(--color-text-secondary)', margin: 0 }}>
              The <b>bell</b> above is live. Click it to open the inbox, switch tabs, confirm a request, or hit
              <b> “Simulate incoming”</b> to watch a notification arrive — the bell rings, the badge pops, and a toast fires.
            </p>
          </div>
        </div>

        <div className="nt-grid">
          <div>
            <TriggersBlock role={role} />
            <NotificationCenter role={role} />
          </div>
          <div>
            <BannersBlock role={role} />
            <div className="nt-block">
              <div className="nt-block-head"><div className="k">Anatomy</div><h2>One model, many faces</h2></div>
              <div className="nt-block-body">
                <p style={{ font: '400 13px/1.6 var(--font-primary)', color: 'var(--color-text-secondary)', margin: '0 0 12px' }}>
                  Every notification is the same record rendered at three densities:
                </p>
                <ul style={{ font: '400 13px/1.7 var(--font-primary)', color: 'var(--color-text-secondary)', margin: 0, paddingLeft: 18 }}>
                  <li><b>Toast</b> — transient, top-right, auto-dismiss</li>
                  <li><b>Bell inbox</b> — compact, grouped by time, unread accent</li>
                  <li><b>Center</b> — roomy rows on a dedicated page</li>
                  <li><b>Banner</b> — persistent, page-level, dismissible</li>
                </ul>
                <p className="nt-note" style={{ marginTop: 14 }}>
                  Shape per item: <code>type</code>, <code>title</code>, <code>chip</code>, <code>time</code>, <code>unread</code>, optional <code>actions</code>, <code>thumb</code>, <code>rating</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
