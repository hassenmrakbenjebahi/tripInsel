// TripInsel · Notification system — components + data
// Toast store, ToastHost, NotificationBell, NotificationPanel, NotificationItem,
// NotificationCenter, InlineBanner. Role-aware (traveller / host / admin).
// Production homes: components/ui/Toast.jsx, components/ui/NotificationBell.jsx,
// components/layout/NotificationCenter.jsx, context/NotificationContext.jsx.

const { useState, useEffect, useRef, useCallback } = React;

/* ════════════════════════════════════════════════════════════════
   TOAST STORE — tiny pub/sub so any component can fire a toast.
   ════════════════════════════════════════════════════════════════ */
const ToastStore = (() => {
  let listeners = [];
  let seq = 1;
  return {
    subscribe(fn) { listeners.push(fn); return () => { listeners = listeners.filter(l => l !== fn); }; },
    push(toast) { const t = { id: seq++, duration: 5200, ...toast }; listeners.forEach(l => l(t)); return t.id; },
  };
})();
const toast = (t) => ToastStore.push(t);

/* ── Toast visual ─────────────────────────────────────────────── */
function Toast({ data, onClose }) {
  const [leaving, setLeaving] = useState(false);
  const close = useCallback(() => { setLeaving(true); setTimeout(() => onClose(data.id), 380); }, [data.id, onClose]);
  useEffect(() => {
    if (!data.duration) return;
    const t = setTimeout(close, data.duration);
    return () => clearTimeout(t);
  }, [data.duration, close]);

  const ICONS = { success: 'checkCircle', info: 'bell', warning: 'alertCircle', error: 'xCircle', booking: 'calendar' };
  return (
    <div className={`nt-toast ${data.type || 'info'} ${leaving ? 'leaving' : ''}`} role="status">
      <span className="rail" />
      <span className="ic"><Icon name={data.icon || ICONS[data.type] || 'bell'} size={22} /></span>
      <div className="body">
        <p className="t">{data.title}</p>
        {data.message && <p className="m">{data.message}</p>}
        {data.actions && (
          <div className="act">
            {data.actions.map((a, i) => (
              <button key={i} className={a.primary ? 'primary' : 'ghost'}
                      onClick={() => { a.onClick && a.onClick(); close(); }}>{a.label}</button>
            ))}
          </div>
        )}
      </div>
      <button className="close" aria-label="Dismiss" onClick={close}><Icon name="x" size={15} /></button>
      {data.duration && (
        <span className="progress" style={{ animation: `ntProgress ${data.duration}ms linear forwards` }} />
      )}
    </div>
  );
}

function ToastHost() {
  const [items, setItems] = useState([]);
  useEffect(() => ToastStore.subscribe(t => setItems(list => [...list, t])), []);
  const remove = useCallback(id => setItems(list => list.filter(t => t.id !== id)), []);
  return (
    <div className="nt-toast-host">
      {items.map(t => <Toast key={t.id} data={t} onClose={remove} />)}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   NOTIFICATION DATA — per role
   ════════════════════════════════════════════════════════════════ */
const PHOTO = {
  camel: 'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=200&q=80&fit=crop&auto=format',
  diving: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&q=80&fit=crop&auto=format',
  cooking: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&q=80&fit=crop&auto=format',
  boat: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&q=80&fit=crop&auto=format',
  face1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&auto=format',
  face2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop&auto=format',
  face3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&fit=crop&auto=format',
};
// deco = small corner badge {icon,bg,fg}
const DECO = {
  confirmed: { icon: 'check',       bg: '#00AA6C', fg: '#fff' },
  pending:   { icon: 'clock',       bg: '#F2A00A', fg: '#fff' },
  cancelled: { icon: 'x',           bg: '#D93025', fg: '#fff' },
  review:    { icon: 'star',        bg: '#00AA6C', fg: '#fff' },
  payout:    { icon: 'wallet',      bg: '#00AA6C', fg: '#fff' },
  message:   { icon: 'share',       bg: '#2E91D6', fg: '#fff' },
  system:    { icon: 'shieldCheck', bg: '#5A4FCF', fg: '#fff' },
  verify:    { icon: 'shieldCheck', bg: '#5A4FCF', fg: '#fff' },
};

const DATA = {
  traveller: [
    { id: 't1', group: 'Today', unread: true, photo: PHOTO.camel, deco: 'confirmed', chip: ['Booking', '#D4F5E9', '#00703A'], time: '2m',
      text: <>Your booking for <b>Sunset camel ride at Ras R'mel</b> is confirmed for <b>tomorrow, 16:30</b>.</>, thumb: PHOTO.camel },
    { id: 't2', group: 'Today', unread: true, photo: PHOTO.face1, deco: 'message', chip: ['Message', '#E1F0FB', '#1E6FA8'], time: '40m',
      text: <><b>Ahmed Tours</b> sent you a message about your upcoming trip.</>, actions: [['Reply', 'ok'], ['View', 'no']] },
    { id: 't3', group: 'Today', unread: false, mono: ['zap', '#FEF3C7', '#8A6000'], chip: ['Price drop', '#FEF3C7', '#8A6000'], time: '3h',
      text: <>Good news — a activity you saved, <b>El Kantara dive trip</b>, dropped to <b>€68</b> (was €82).</>, thumb: PHOTO.diving },
    { id: 't4', group: 'Earlier', unread: false, photo: PHOTO.boat, deco: 'review', chip: ['Review', '#D4F5E9', '#00703A'], time: '2d',
      text: <>How was <b>Flamingo lagoon boat tour</b>? Leave a review and earn <b>€5 travel credit</b>.</>, actions: [['Write review', 'ok']] },
    { id: 't5', group: 'Earlier', unread: false, mono: ['clock', '#E6F7F1', '#00703A'], chip: ['Reminder', '#F2F2F2', '#555'], time: '3d',
      text: <>Reminder: your <b>Djerba mosaic cooking class</b> starts in 24 hours. Pickup at 9:00.</> },
  ],
  host: [
    { id: 'h1', group: 'Today', unread: true, photo: PHOTO.face2, deco: 'pending', chip: ['New booking', '#FEF3C7', '#8A6000'], time: '5m',
      text: <><b>Sofia K.</b> requested <b>2 seats</b> on Sunset camel ride · tomorrow 16:30. Confirm within 24h.</>, actions: [['Confirm', 'ok'], ['Decline', 'no']] },
    { id: 'h2', group: 'Today', unread: true, mono: ['wallet', '#D4F5E9', '#00703A'], chip: ['Payout', '#D4F5E9', '#00703A'], time: '1h',
      text: <>Your weekly payout of <b>€428.00</b> is on its way to your bank — expect it in 1–2 days.</> },
    { id: 'h3', group: 'Today', unread: false, photo: PHOTO.face3, deco: 'review', chip: ['Review', '#D4F5E9', '#00703A'], time: '4h',
      text: <><b>Marco D.</b> left you a <b>5-bubble review</b>: “Unforgettable sunset, Ahmed was wonderful.”</>, rating: 5 },
    { id: 'h4', group: 'Today', unread: false, mono: ['calendar', '#E1F0FB', '#1E6FA8'], chip: ['Time request', '#E1F0FB', '#1E6FA8'], time: '6h',
      text: <><b>Lena P.</b> suggested a custom time — <b>07:00 sunrise</b> — for your camel ride. Approve?</>, actions: [['Approve', 'ok'], ['Decline', 'no']] },
    { id: 'h5', group: 'Earlier', unread: false, mono: ['xCircle', '#FDE8E8', '#A30000'], chip: ['Cancellation', '#FDE8E8', '#A30000'], time: '2d',
      text: <><b>John R.</b> cancelled their booking for El Kantara dive trip. Free cancellation applied.</> },
  ],
  admin: [
    { id: 'a1', group: 'Today', unread: true, mono: ['shieldCheck', '#ECEBFB', '#5A4FCF'], chip: ['Verification', '#ECEBFB', '#5A4FCF'], time: '12m',
      text: <>New local host <b>Djerba Dunes Adventures</b> submitted documents for review.</>, actions: [['Review', 'ok']] },
    { id: 'a2', group: 'Today', unread: true, mono: ['flag', '#FDE8E8', '#A30000'], chip: ['Flagged', '#FDE8E8', '#A30000'], time: '50m',
      text: <>A review on <b>Quad biking dunes tour</b> was flagged by 3 travellers as suspicious.</>, actions: [['Investigate', 'ok'], ['Dismiss', 'no']] },
    { id: 'a3', group: 'Today', unread: false, mono: ['barChart', '#E6F7F1', '#00703A'], chip: ['Report', '#F2F2F2', '#555'], time: '5h',
      text: <>Weekly platform report is ready: <b>+18% bookings</b>, 7 new hosts, €12.4k GMV.</> },
    { id: 'a4', group: 'Earlier', unread: false, mono: ['alertCircle', '#FEF3C7', '#8A6000'], chip: ['System', '#FEF3C7', '#8A6000'], time: '1d',
      text: <>Payout batch for <b>87 hosts</b> needs your approval before Friday 17:00.</>, actions: [['Approve batch', 'ok']] },
  ],
};

const TABS = ['All', 'Unread', 'Bookings', 'Reviews', 'System'];
const tabMatch = (tab, n) => {
  if (tab === 'All') return true;
  if (tab === 'Unread') return n.unread;
  const c = (n.chip && n.chip[0] || '').toLowerCase();
  if (tab === 'Bookings') return /booking|time|cancel|reminder|price/.test(c);
  if (tab === 'Reviews') return /review/.test(c);
  if (tab === 'System') return /verification|flagged|report|system|payout/.test(c);
  return true;
};

/* ── Avatar (photo / mono icon / + deco corner) ───────────────── */
function NtAvatar({ n }) {
  return (
    <span className="ava">
      {n.photo
        ? <img className="pic" src={n.photo} alt="" />
        : <span className="mono" style={{ background: n.mono[1], color: n.mono[2] }}><Icon name={n.mono[0]} size={20} color={n.mono[2]} /></span>}
      {n.deco && DECO[n.deco] && (
        <span className="deco" style={{ background: DECO[n.deco].bg, color: DECO[n.deco].fg }}>
          <Icon name={DECO[n.deco].icon} size={11} color={DECO[n.deco].fg} strokeWidth={2.5} />
        </span>
      )}
    </span>
  );
}

/* ── Single notification (panel density) ──────────────────────── */
function NotificationItem({ n, onAction, onRead, big }) {
  return (
    <div className={(big ? 'nt-center-row' : 'nt-item') + (n.unread ? ' unread' : '')}
         role="button" tabIndex={0}
         onClick={() => onRead(n.id)}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRead(n.id); } }}>
      <NtAvatar n={n} />
      <div className="txt">
        <p className="l1">{n.text}</p>
        {n.rating && <div style={{ margin: '6px 0 0' }}><Bubbles score={n.rating} size={13} /></div>}
        <p className="l2">
          {n.chip && <span className="chip" style={{ background: n.chip[1], color: n.chip[2] }}>{n.chip[0]}</span>}
          <span>{n.time} ago</span>
        </p>
        {n.actions && (
          <div className="acts">
            {n.actions.map(([label, kind], i) => (
              <button key={i} className={kind} onClick={(e) => { e.stopPropagation(); onAction(n, label); }}>{label}</button>
            ))}
          </div>
        )}
      </div>
      <div className="right">
        {!big && <span className="time">{n.time}</span>}
        {n.thumb && <img className="thumb" src={n.thumb} alt="" />}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   BELL + DROPDOWN PANEL
   ════════════════════════════════════════════════════════════════ */
function NotificationBell({ role }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('All');
  const [items, setItems] = useState(DATA[role]);
  const [ring, setRing] = useState(false);
  const [pop, setPop] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => { setItems(DATA[role]); setTab('All'); }, [role]);
  useEffect(() => {
    if (!open) return;
    const close = e => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const unread = items.filter(i => i.unread).length;
  const filtered = items.filter(n => tabMatch(tab, n));
  const groups = ['Today', 'Earlier'].map(g => [g, filtered.filter(n => n.group === g)]).filter(([, a]) => a.length);

  const markAll = () => setItems(list => list.map(i => ({ ...i, unread: false })));
  const read = (id) => setItems(list => list.map(i => i.id === id ? { ...i, unread: false } : i));
  const act = (n, label) => {
    read(n.id);
    const ok = /confirm|approve|reply|review|investigate/i.test(label);
    toast({ type: ok ? 'success' : 'info', title: `${label}ed`, message: ok ? 'Done — the traveller has been notified.' : 'Noted.' });
  };

  // simulate a fresh notification arriving
  const simulate = () => {
    setRing(true); setPop(true);
    setTimeout(() => setRing(false), 950);
    setTimeout(() => setPop(false), 450);
    const fresh = {
      traveller: { id: 'new' + Date.now(), group: 'Today', unread: true, mono: ['zap', '#FEF3C7', '#8A6000'], chip: ['Price drop', '#FEF3C7', '#8A6000'], time: 'now', text: <>A saved activity just dropped in price — check it out!</> },
      host:      { id: 'new' + Date.now(), group: 'Today', unread: true, photo: PHOTO.face1, deco: 'pending', chip: ['New booking', '#FEF3C7', '#8A6000'], time: 'now', text: <><b>A traveller</b> just requested seats on your activity.</>, actions: [['Confirm', 'ok'], ['Decline', 'no']] },
      admin:     { id: 'new' + Date.now(), group: 'Today', unread: true, mono: ['shieldCheck', '#ECEBFB', '#5A4FCF'], chip: ['Verification', '#ECEBFB', '#5A4FCF'], time: 'now', text: <>A new host just submitted verification documents.</>, actions: [['Review', 'ok']] },
    }[role];
    setItems(list => [fresh, ...list]);
    toast({ type: 'booking', title: 'New notification', message: 'Open the bell to see it.' });
  };

  return (
    <div className="nt-bell-wrap" ref={wrapRef}>
      <button className={'nt-bell' + (ring ? ' ringing' : '')} onClick={() => setOpen(o => !o)} aria-label="Notifications">
        <Icon name="bell" size={20} />
        {unread > 0 && <><span className="ping" /><span className={'nt-bell-badge' + (pop ? ' pop' : '')}>{unread}</span></>}
      </button>

      {open && (
        <div className="nt-panel">
          <div className="nt-panel-head">
            <h3>Notifications {unread > 0 && <span className="cnt">{unread} new</span>}</h3>
            {unread > 0 && <button className="mark" onClick={markAll}>Mark all read</button>}
          </div>
          <div className="nt-tabs">
            {TABS.map(t => <button key={t} className={'nt-tab' + (t === tab ? ' active' : '')} onClick={() => setTab(t)}>{t}</button>)}
          </div>
          <div className="nt-list">
            {groups.length === 0 ? (
              <div className="nt-empty">
                <span className="ic"><Icon name="checkCircle" size={28} /></span>
                <h4>You're all caught up</h4>
                <p>No {tab !== 'All' ? tab.toLowerCase() : ''} notifications right now.</p>
              </div>
            ) : groups.map(([g, arr]) => (
              <div key={g}>
                <div className="nt-group-label">{g}</div>
                {arr.map(n => <NotificationItem key={n.id} n={n} onAction={act} onRead={read} />)}
              </div>
            ))}
          </div>
          <div className="nt-panel-foot">
            <button onClick={() => { setOpen(false); document.getElementById('nt-center') && document.getElementById('nt-center').scrollIntoView({ behavior: 'smooth' }); }}>
              <Icon name="bell" size={14} /> Open notification center
            </button>
          </div>
        </div>
      )}

      {/* exposed simulate trigger via ref-less custom event */}
      <SimulateBridge onSimulate={simulate} />
    </div>
  );
}

// lets the playground "New notification arrives" button reach the bell
function SimulateBridge({ onSimulate }) {
  useEffect(() => {
    const h = () => onSimulate();
    window.addEventListener('nt-simulate', h);
    return () => window.removeEventListener('nt-simulate', h);
  }, [onSimulate]);
  return null;
}

window.ToastHost = ToastHost;
window.toast = toast;
window.NotificationBell = NotificationBell;
window.NotificationItem = NotificationItem;
window.NtAvatar = NtAvatar;
window.NT_DATA = DATA;
window.NT_TABS = TABS;
window.NT_tabMatch = tabMatch;
