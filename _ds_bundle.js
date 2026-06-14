/* @ds-bundle: {"format":3,"namespace":"TripInselApp_91e7c4","components":[],"sourceHashes":{"src/components/layout/dashboard-shared.jsx":"3f84cc3fbb96","src/components/ui/design-canvas.jsx":"3b0e985041dd","src/components/ui/shared.jsx":"522aeaae7b2c","src/components/ui/signup-screens.jsx":"a8cf4699863b","src/components/ui/tourist-wizard.jsx":"330110516bfa","src/pages/admin/app.jsx":"bbc1add5be74","src/pages/host-activity/create-activity.jsx":"2a54e0c77091","src/pages/landing/experience.jsx":"c0065bc57b8f","src/pages/notifications/app.jsx":"cccec87e450f","src/pages/notifications/notifications.jsx":"6f7f5fc7d767","src/pages/provider/app.jsx":"6032113981c7","src/pages/signup/app.jsx":"68a99f0e623c","src/pages/tourist/app.jsx":"eeada86c46b4","src/pages/tourist/components.jsx":"dc95b0df6ec8","src/pages/tourist/screens.jsx":"cf1008bf9bc1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TripInselApp_91e7c4 = window.TripInselApp_91e7c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// src/components/layout/dashboard-shared.jsx
try { (() => {
// Provider UI kit — shared dashboard chrome
function DashboardShell({
  role,
  user,
  links,
  current,
  onNavigate,
  children,
  headerExtras
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: '#F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: '#fff',
      borderRight: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 16px',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 22px var(--font-primary)',
      color: 'var(--color-primary)',
      letterSpacing: '-0.02em'
    }
  }, "TripInsel"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginTop: 2
    }
  }, role)), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 8,
      cursor: 'pointer',
      textDecoration: 'none',
      borderLeft: current === l.id ? '3px solid var(--color-primary)' : '3px solid transparent',
      background: current === l.id ? 'var(--color-primary-light)' : 'transparent',
      color: current === l.id ? '#00703A' : '#161616',
      font: `${current === l.id ? '700' : '600'} 13px var(--font-primary)`,
      marginLeft: -3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: l.icon,
    size: 16,
    color: current === l.id ? '#00703A' : '#555'
  }), l.label, l.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      background: '#D93025',
      color: '#fff',
      font: '700 10px var(--font-primary)',
      padding: '1px 6px',
      borderRadius: 9999
    }
  }, l.badge)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar"
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px var(--font-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-primary)',
      color: '#999'
    }
  }, user.email)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Log out",
    title: "Log out",
    onClick: () => {
      try {
        localStorage.removeItem('ti_session');
      } catch (e) {}
      window.location.href = '../landing/index.html';
    },
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      border: '1px solid var(--color-border)',
      background: '#fff',
      cursor: 'pointer',
      color: '#555',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 16
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--color-border)',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: 0
    }
  }, links.find(l => l.id === current)?.label || 'Dashboard'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), headerExtras, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    "aria-label": "Notifications",
    style: {
      position: 'relative',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: '#D93025'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ti-page-content",
    style: {
      padding: 32
    }
  }, children)));
}

/* ── Stat cards ──────────────────────────────────────────────────── */
function StatCard({
  label,
  value,
  sub,
  icon,
  accent = '#00AA6C',
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: accent + '20',
      color: accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: accent
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 26px var(--font-primary)',
      color: '#161616',
      letterSpacing: '-0.01em'
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#555',
      marginTop: 4
    }
  }, sub), trend != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      font: '700 12px var(--font-primary)',
      color: trend > 0 ? '#00703A' : '#A30000',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: trend > 0 ? 'arrowUp' : 'arrowDown',
    size: 11,
    color: trend > 0 ? '#00703A' : '#A30000'
  }), Math.abs(trend), "% vs last week"));
}

/* ── Data table ──────────────────────────────────────────────────── */
function DataTable({
  columns,
  rows,
  getRowKey
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: '400 13px var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#F2F2F2'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '12px 16px',
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#555'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: getRowKey ? getRowKey(row) : i,
    style: {
      borderTop: '1px solid #F2F2F2'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '14px 16px',
      color: '#161616'
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(window, {
  DashboardShell,
  StatCard,
  DataTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/layout/dashboard-shared.jsx", error: String((e && e.message) || e) }); }

// src/components/ui/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ui/design-canvas.jsx", error: String((e && e.message) || e) }); }

// src/components/ui/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TripInsel — shared React primitives for all UI kits.
// Load with <script type="text/babel" src="../shared.jsx"></script>
// Exposes Icon, Bubbles, Badge, StatusBadge, TrustChip, RankingBadge,
// TravelersChoice, CategoryDot, formatPrice helpers on `window`.

const {
  useState,
  useMemo,
  useEffect,
  Fragment
} = React;

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
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|M2 12h20|M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z'
};
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  ...rest
}) {
  const paths = (ICON_PATHS[name] || '').split('|');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      verticalAlign: '-2px',
      flexShrink: 0
    }
  }, rest), paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}

/* ── Bubbles: TripAdvisor rating ──────────────────────────────────── */
function Bubbles({
  score = 5,
  size = 14,
  showScore = false,
  showCount,
  color = '#00AA6C'
}) {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    if (score >= i) items.push('full');else if (score >= i - 0.5) items.push('half');else items.push('empty');
  }
  const id = useMemo(() => 'b' + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, items.map((kind, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: size,
    height: size,
    viewBox: "0 0 18 18"
  }, kind === 'full' && /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: color
  }), kind === 'empty' && /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: "#fff",
    stroke: color,
    strokeWidth: "1.4"
  }), kind === 'half' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: `${id}-${i}`
  }, /*#__PURE__*/React.createElement("rect", {
    width: "9",
    height: "18"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: "#fff",
    stroke: color,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "8",
    fill: color,
    clipPath: `url(#${id}-${i})`
  }))))), showScore && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '700 14px var(--font-primary)',
      color: '#161616'
    }
  }, score.toFixed(1)), showCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "\xB7 (", showCount.toLocaleString(), ")"));
}

/* ── Status badge ──────────────────────────────────────────────────── */
function StatusBadge({
  status
}) {
  const map = {
    confirmed: {
      cls: 'ti-badge-confirmed',
      label: 'Confirmed'
    },
    pending: {
      cls: 'ti-badge-pending',
      label: 'Pending'
    },
    cancelled: {
      cls: 'ti-badge-cancelled',
      label: 'Cancelled'
    },
    completed: {
      cls: 'ti-badge-completed',
      label: 'Completed'
    },
    active: {
      cls: 'ti-badge-active',
      label: 'Active'
    },
    inactive: {
      cls: 'ti-badge-inactive',
      label: 'Inactive'
    }
  };
  const m = map[status] || map.confirmed;
  return /*#__PURE__*/React.createElement("span", {
    className: `ti-badge ${m.cls}`
  }, m.label);
}

/* ── Travelers' Choice ───────────────────────────────────────────── */
function TravelersChoice({
  year = 2025,
  size = 'sm'
}) {
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 5 : 7,
      background: '#00AA6C',
      color: '#fff',
      font: `700 ${small ? 10 : 13}px var(--font-primary)`,
      padding: small ? '5px 10px' : '8px 14px',
      borderRadius: 9999,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: small ? 11 : 14,
    color: "#fff"
  }), "Travelers' Choice ", year);
}

/* ── Verified Business chip ─────────────────────────────────────── */
function VerifiedBusiness() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      color: '#00AA6C',
      border: '1px solid #00AA6C',
      font: '700 11px var(--font-primary)',
      padding: '5px 10px',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 12,
    color: "#00AA6C"
  }), "Verified Business");
}

/* ── Ranking badge ────────────────────────────────────────────────── */
function RankingBadge({
  rank,
  total,
  area = 'Djerba'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#E6F7F1',
      color: '#00703A',
      font: '700 12px var(--font-primary)',
      padding: '5px 12px',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 12,
    color: "#00703A"
  }), "#", rank, " of ", total, " in ", area);
}

/* ── Trust row ─────────────────────────────────────────────────────── */
function TrustRow() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      font: '400 11px var(--font-primary)',
      color: '#555'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 11,
    color: "#555"
  }), "Secure"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    color: "#00703A",
    strokeWidth: 2.5
  }), "Free cancellation"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 11,
    color: "#555"
  }), "Instant confirm"));
}

/* ── Category dot ─────────────────────────────────────────────────── */
const CATEGORY_COLORS = {
  desert: '#C9853D',
  water: '#2E91D6',
  cultural: '#5A4FCF',
  cooking: '#E07A3B',
  diving: '#1FA7B8',
  boat: '#00AA6C',
  quad: '#8B5A3C',
  horse: '#A06A4C',
  spa: '#D66C8E',
  food: '#4FAB5A'
};
function CategoryDot({
  category,
  size = 8
}) {
  const color = CATEGORY_COLORS[category] || '#00AA6C';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 9999,
      background: color,
      flexShrink: 0
    }
  });
}

/* ── Format ───────────────────────────────────────────────────────── */
function formatEUR(amount) {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}
Object.assign(window, {
  Icon,
  Bubbles,
  StatusBadge,
  TravelersChoice,
  VerifiedBusiness,
  RankingBadge,
  TrustRow,
  CategoryDot,
  CATEGORY_COLORS,
  formatEUR
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ui/shared.jsx", error: String((e && e.message) || e) }); }

// src/components/ui/signup-screens.jsx
try { (() => {
// TripInsel sign-up screens — all React components
// Each component renders a single sign-up screen as a self-contained .su-screen.
// Designed to slot inside a DCArtboard.

// ─────────────────────────────────────────────────────────────
// Icons — minimal Lucide-style strokes (2px, currentColor)
// ─────────────────────────────────────────────────────────────
const SuIcon = ({
  name,
  size = 18,
  stroke = 2
}) => {
  const p = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'mail':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 7 9 6 9-6"
      }));
    case 'lock':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "10",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V8a4 4 0 0 1 8 0v3"
      }));
    case 'eye':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }));
    case 'user':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 21a8 8 0 0 1 16 0"
      }));
    case 'users':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M1 21a8 8 0 0 1 16 0"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17 8a4 4 0 0 1 4 4M17 4a4 4 0 0 1 0 8"
      }));
    case 'phone':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.51a2 2 0 0 1-.45 2.11L8 9.5a16 16 0 0 0 6 6l1.16-1.27a2 2 0 0 1 2.11-.45c.81.27 1.65.47 2.51.59A2 2 0 0 1 22 16.92Z"
      }));
    case 'globe':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"
      }));
    case 'briefcase':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 13h20"
      }));
    case 'pin':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "3"
      }));
    case 'shield':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    case 'badge':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"
      }));
    case 'check':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "m20 6-11 11-5-5"
      }));
    case 'camera':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M3 7h4l2-3h6l2 3h4v13H3V7Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13",
        r: "4"
      }));
    case 'arrow':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case 'back':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M19 12H5M11 6l-6 6 6 6"
      }));
    case 'zap':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
      }));
    case 'compass':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m16 8-2 6-6 2 2-6 6-2Z"
      }));
    case 'shieldlock':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "10",
        width: "6",
        height: "5",
        rx: "1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 10V9a2 2 0 0 1 4 0v1"
      }));
    case 'warning':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 9v4M12 17h.01"
      }));
    case 'pdf':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "14 2 14 8 20 8"
      }));
    case 'plus':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 5v14M5 12h14"
      }));
    case 'crown':
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M3 7l4 5 5-7 5 7 4-5v12H3V7Z"
      }));
    default:
      return null;
  }
};

// ─────────────────────────────────────────────────────────────
// Top bar (logo + sign-in link)
// ─────────────────────────────────────────────────────────────
const SuTop = ({
  signIn = true
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-top"
}, /*#__PURE__*/React.createElement("span", {
  className: "wm"
}, /*#__PURE__*/React.createElement("span", {
  className: "wm-bub"
}), "TripInsel"), signIn && /*#__PURE__*/React.createElement("div", {
  className: "right"
}, "Already have an account?", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Sign in")));

// ─────────────────────────────────────────────────────────────
// Reusable input
// ─────────────────────────────────────────────────────────────
const Field = ({
  label,
  optional,
  hint,
  error,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-field" + (error ? "" : "")
}, /*#__PURE__*/React.createElement("label", {
  className: "su-label"
}, label, optional && /*#__PURE__*/React.createElement("span", {
  className: "opt"
}, "\xB7 Optional")), children, hint && !error && /*#__PURE__*/React.createElement("span", {
  className: "su-hint"
}, hint), error && /*#__PURE__*/React.createElement("span", {
  className: "su-err"
}, error));
const Input = ({
  value,
  placeholder,
  leadIcon,
  trailIcon,
  focused,
  error,
  type = 'text'
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-input-wrap"
}, leadIcon && /*#__PURE__*/React.createElement("span", {
  className: "lead"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: leadIcon,
  size: 16
})), /*#__PURE__*/React.createElement("input", {
  type: type,
  defaultValue: value,
  placeholder: placeholder,
  className: "su-input" + (focused ? " focused" : "") + (error ? " error" : ""),
  readOnly: true
}), trailIcon && /*#__PURE__*/React.createElement("button", {
  className: "trail",
  type: "button"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: trailIcon,
  size: 16
})));
const PhoneInput = ({
  value,
  prefix = '+216',
  flag = '🇹🇳',
  focused
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-phone"
}, /*#__PURE__*/React.createElement("div", {
  className: "prefix"
}, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  className: "flag"
}, flag), prefix), /*#__PURE__*/React.createElement("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}))), /*#__PURE__*/React.createElement("input", {
  type: "tel",
  defaultValue: value,
  className: "su-input" + (focused ? " focused" : ""),
  readOnly: true
}));
const Uploader = ({
  initial = 'A',
  name = 'Add a profile photo',
  hint = 'JPG or PNG · max 4 MB',
  cta = 'Upload',
  loaded = false
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-uploader"
}, /*#__PURE__*/React.createElement("div", {
  className: "av",
  "aria-hidden": true
}, loaded ? /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 20
}) : initial), /*#__PURE__*/React.createElement("div", {
  className: "meta"
}, /*#__PURE__*/React.createElement("b", null, name), /*#__PURE__*/React.createElement("span", null, hint)), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "pick"
}, cta));

/* ── Circular profile-photo uploader for the tourist flow ───────── */
const PhotoUploader = ({
  initials = 'LB',
  loaded = false,
  src
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-photo-uploader"
}, /*#__PURE__*/React.createElement("div", {
  className: "ring"
}, /*#__PURE__*/React.createElement("div", {
  className: "bubble",
  "aria-hidden": true
}, loaded && src ? /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: ""
}) : /*#__PURE__*/React.createElement("span", {
  className: "initials"
}, initials), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "cam",
  "aria-label": "Upload photo"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "camera",
  size: 14,
  stroke: 2.2
})))), /*#__PURE__*/React.createElement("div", {
  className: "meta"
}, /*#__PURE__*/React.createElement("b", null, "Add a profile photo ", /*#__PURE__*/React.createElement("span", {
  className: "optional"
}, "\xB7 Optional")), /*#__PURE__*/React.createElement("span", null, "Helps local hosts recognise you on meet-up. JPG or PNG \xB7 max 4 MB."), /*#__PURE__*/React.createElement("div", {
  className: "actions"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "pick"
}, loaded ? 'Replace' : 'Choose photo'), loaded && /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "ghost"
}, "Remove"))));

// ─────────────────────────────────────────────────────────────
// (1) Role picker
// ─────────────────────────────────────────────────────────────
const RolePicker = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, null), /*#__PURE__*/React.createElement("div", {
  className: "su-body centered"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 440
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow"
}, "Create your account"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "How will you use TripInsel?"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "Pick the option that fits you best. You can't switch roles later \u2014 but you can hold separate accounts."), /*#__PURE__*/React.createElement("div", {
  className: "role-grid"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "role-card tourist selected"
}, /*#__PURE__*/React.createElement("span", {
  className: "ic"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "compass",
  size: 22
})), /*#__PURE__*/React.createElement("div", {
  className: "body"
}, /*#__PURE__*/React.createElement("h4", null, "I'm a traveller"), /*#__PURE__*/React.createElement("p", null, "Discover and book activities, tours and experiences across Djerba."), /*#__PURE__*/React.createElement("span", {
  className: "who"
}, "Most popular \xB7 takes 1 minute")), /*#__PURE__*/React.createElement("span", {
  className: "check"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 14,
  stroke: 3
}))), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "role-card provider"
}, /*#__PURE__*/React.createElement("span", {
  className: "ic"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "briefcase",
  size: 22
})), /*#__PURE__*/React.createElement("div", {
  className: "body"
}, /*#__PURE__*/React.createElement("h4", null, "I run a tour business"), /*#__PURE__*/React.createElement("p", null, "List experiences, manage bookings and get paid. Verified businesses get a trust badge."), /*#__PURE__*/React.createElement("span", {
  className: "who"
}, "Licence number required \xB7 ~5 minutes")), /*#__PURE__*/React.createElement("span", {
  className: "check"
}))), /*#__PURE__*/React.createElement("div", {
  className: "su-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button"
}, "Continue as traveller ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
}))), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "By continuing you agree to our ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Terms"), " and ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Privacy policy"), ". TripInsel is operated from Djerba, Tunisia."), /*#__PURE__*/React.createElement("div", {
  className: "su-staff-note"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "shieldlock",
  size: 14
}), /*#__PURE__*/React.createElement("span", null, "TripInsel staff sign in at a private URL with their invitation code.")))));

// ─────────────────────────────────────────────────────────────
// (2) Tourist sign-up — Variant A: centered single column
// ─────────────────────────────────────────────────────────────
const TouristSignup = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, null), /*#__PURE__*/React.createElement("div", {
  className: "su-body centered"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 440
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow"
}, "Travellers \xB7 30 seconds"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "Book Djerba's best experiences"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "Sign up with one tap. We'll ask for your preferred language and the rest after \u2014 only if you want to share."), /*#__PURE__*/React.createElement("div", {
  className: "su-oauth-stack"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "su-oauth-btn primary"
}, /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#4285F4",
  d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#34A853",
  d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#FBBC05",
  d: "M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA4335",
  d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
})), "Continue with Google", /*#__PURE__*/React.createElement("span", {
  className: "badge"
}, "Recommended")), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "su-oauth-btn"
}, /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "#161616"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"
})), "Continue with Apple")), /*#__PURE__*/React.createElement("div", {
  className: "su-divider"
}, "or use your email"), /*#__PURE__*/React.createElement(Field, {
  label: "Email"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "mail",
  placeholder: "you@example.com",
  focused: true
})), /*#__PURE__*/React.createElement(Field, {
  label: "Password"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "lock",
  trailIcon: "eye",
  type: "password",
  value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
}), /*#__PURE__*/React.createElement("div", {
  className: "su-strength"
}, /*#__PURE__*/React.createElement("span", {
  className: "seg on-1"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg on-2"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg on-3"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg"
})), /*#__PURE__*/React.createElement("span", {
  className: "su-hint"
}, "8+ characters \xB7 mix letters and numbers.")), /*#__PURE__*/React.createElement(Field, {
  label: "Phone number",
  hint: "For booking SMS reminders and account recovery."
}, /*#__PURE__*/React.createElement(PhoneInput, {
  value: "55 234 187"
})), /*#__PURE__*/React.createElement("div", {
  className: "su-section-divider"
}, /*#__PURE__*/React.createElement("span", {
  className: "lbl"
}, "Optional \xB7 personalise your trip"), /*#__PURE__*/React.createElement("span", {
  className: "sub"
}, "Skip anything \xB7 finish later from your profile")), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(PhotoUploader, {
  initials: "L"
})), /*#__PURE__*/React.createElement("div", {
  className: "su-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button"
}, "Create account ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
}))), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "By creating an account you agree to TripInsel's ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Terms of service"), " and ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Privacy policy"), ". We'll occasionally email you about Djerba experiences \u2014 opt out anytime."), /*#__PURE__*/React.createElement("div", {
  className: "su-trust"
}, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(SuIcon, {
  name: "lock",
  size: 13
}), " Secure"), /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 13
}), " Free cancellation"), /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(SuIcon, {
  name: "zap",
  size: 13
}), " Instant confirm")))));

// ─────────────────────────────────────────────────────────────
// (2c) Tourist — SMS verification. Shown right after sign-up:
//      traveller receives a 6-digit code by SMS and enters it here.
// ─────────────────────────────────────────────────────────────
const TouristVerifySms = () => {
  const code = ['4', '7', '2', '', '', '']; // static demo: first 3 filled
  return /*#__PURE__*/React.createElement("div", {
    className: "su-screen"
  }, /*#__PURE__*/React.createElement(SuTop, {
    signIn: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-body centered"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-otp-icon"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "phone",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, "Verify your number"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1",
    style: {
      textAlign: 'center',
      marginBottom: 8
    }
  }, "Enter the 6-digit code"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub",
    style: {
      textAlign: 'center',
      margin: '0 auto 28px'
    }
  }, "We sent a verification code by SMS to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "+216 55 234 187"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline"
  }, "Change")), /*#__PURE__*/React.createElement("div", {
    className: "su-otp"
  }, code.map((d, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    className: 'su-otp-box' + (d ? ' filled' : '') + (i === 3 ? ' active' : ''),
    inputMode: "numeric",
    maxLength: 1,
    defaultValue: d,
    readOnly: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    type: "button"
  }, "Verify & continue ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-otp-resend"
  }, /*#__PURE__*/React.createElement("span", null, "Didn't get a code?"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline strong"
  }, "Resend SMS"), /*#__PURE__*/React.createElement("span", {
    className: "su-otp-timer"
  }, "\xB7 in 0:28")), /*#__PURE__*/React.createElement("p", {
    className: "su-legal",
    style: {
      textAlign: 'center'
    }
  }, "Standard message rates may apply. The code expires in 10 minutes."))));
};

// ─────────────────────────────────────────────────────────────
// (2b) Tourist — "Complete your profile" step shown AFTER verification.
//      All fields optional. User lands here pre-filled with Google name + email,
//      picks language / nationality, can skip straight to browsing.
// ─────────────────────────────────────────────────────────────
const TouristCompleteProfile = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, {
  signIn: false
}), /*#__PURE__*/React.createElement("div", {
  className: "su-body centered"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 440
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "su-google-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "g-avatar"
}, "L"), /*#__PURE__*/React.createElement("div", {
  className: "g-meta"
}, /*#__PURE__*/React.createElement("b", null, "Signed in as Lina Bouazizi"), /*#__PURE__*/React.createElement("span", null, "lina.b@gmail.com \xB7 via Google")), /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 16,
  stroke: 2.5
})), /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow",
  style: {
    marginTop: 18
  }
}, "Almost there"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "Personalise your trip"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "Your number's verified. All of this is optional \u2014 we'll use it to show prices, listings and confirmations the way you like, and you can skip anything and finish later from your profile."), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(PhotoUploader, {
  initials: "L",
  loaded: true,
  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&auto=format"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Preferred language",
  optional: true,
  hint: "We translate listings, reviews and confirmations."
}, /*#__PURE__*/React.createElement("div", {
  className: "su-lang-grid"
}, [{
  code: 'EN',
  flag: '🇬🇧',
  label: 'English',
  native: 'English',
  active: true
}, {
  code: 'FR',
  flag: '🇫🇷',
  label: 'French',
  native: 'Français'
}, {
  code: 'DE',
  flag: '🇩🇪',
  label: 'German',
  native: 'Deutsch'
}, {
  code: 'IT',
  flag: '🇮🇹',
  label: 'Italian',
  native: 'Italiano'
}, {
  code: 'AR',
  flag: '🇹🇳',
  label: 'Arabic',
  native: 'العربية'
}, {
  code: 'ES',
  flag: '🇪🇸',
  label: 'Spanish',
  native: 'Español'
}].map(l => /*#__PURE__*/React.createElement("button", {
  key: l.code,
  type: "button",
  className: 'su-lang-card' + (l.active ? ' active' : '')
}, /*#__PURE__*/React.createElement("span", {
  className: "flag"
}, l.flag), /*#__PURE__*/React.createElement("span", {
  className: "lab"
}, l.label), /*#__PURE__*/React.createElement("span", {
  className: "nat"
}, l.native), l.active && /*#__PURE__*/React.createElement("span", {
  className: "tick"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 12,
  stroke: 3
})))))), /*#__PURE__*/React.createElement(Field, {
  label: "Nationality",
  optional: true
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "globe",
  value: "Tunisian",
  placeholder: "Pick your country"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Phone number",
  optional: true,
  hint: "For booking SMS reminders."
}, /*#__PURE__*/React.createElement(PhoneInput, {
  value: "55 234 187"
})), /*#__PURE__*/React.createElement("div", {
  className: "su-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button"
}, "Save and start exploring ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
})), /*#__PURE__*/React.createElement("button", {
  className: "su-btn-ghost",
  type: "button"
}, "Skip for now")), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "You can update these any time from ", /*#__PURE__*/React.createElement("strong", null, "Settings \u2192 Preferences"), "."))));

// ─────────────────────────────────────────────────────────────
// (3) Tourist sign-up — Variant B: split-screen with Djerba photo
// ─────────────────────────────────────────────────────────────
const TouristSignupSplit = () => {
  const heroImages = ['https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=1400&q=85&fit=crop&auto=format', 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=1400&q=85&fit=crop&auto=format', 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=1400&q=85&fit=crop&auto=format', 'https://images.unsplash.com/photo-1591279004443-6e8c0e7f7e7e?w=1400&q=85&fit=crop&auto=format'];
  return /*#__PURE__*/React.createElement("div", {
    className: "su-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-photo-bg",
    "aria-hidden": true
  }, heroImages.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "su-photo-bg__img",
    style: {
      backgroundImage: `url(${src})`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-photo-shimmer",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: "stats su-anim-fadeIn",
    style: {
      '--d': '0.2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "12k+"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Travellers")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "340"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Activities")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "4.8"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Avg. rating"))), /*#__PURE__*/React.createElement("div", {
    className: "su-loc-chip su-loc-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Ras R'mel"), /*#__PURE__*/React.createElement("br", null), "Flamingo lagoon")), /*#__PURE__*/React.createElement("div", {
    className: "su-loc-chip su-loc-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Houmt Souk"), /*#__PURE__*/React.createElement("br", null), "Old town")), /*#__PURE__*/React.createElement("div", {
    className: "su-float-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb"
  }), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat"
  }, "Sunset \xB7 2h"), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Camel ride at Ras R'mel"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605"), " 4.9", /*#__PURE__*/React.createElement("span", {
    className: "dot-sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "\u20AC38")))), /*#__PURE__*/React.createElement("div", {
    className: "su-photo-dots",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcopy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb su-anim-fadeIn",
    style: {
      '--d': '0.3s'
    }
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "zap",
    size: 11,
    stroke: 2.5
  }), " One island \xB7 one app"), /*#__PURE__*/React.createElement("h2", {
    className: "su-anim-slideUp",
    style: {
      '--d': '0.4s'
    }
  }, "Djerba, your way."), /*#__PURE__*/React.createElement("p", {
    className: "su-anim-slideUp",
    style: {
      '--d': '0.55s'
    }
  }, "Sunset camel rides, flamingo lagoons, mosaic-tile cooking classes \u2014 all in one place. Free cancellation on most experiences."))), /*#__PURE__*/React.createElement("div", {
    className: "form-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wm",
    style: {
      font: '800 20px var(--font-primary)',
      letterSpacing: '-0.02em',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wm-bub",
    style: {
      width: 18,
      height: 18,
      borderRadius: 9999,
      background: 'var(--color-primary)',
      position: 'relative',
      display: 'inline-block'
    }
  }), "TripInsel"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "Already a member?", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-primary)',
      fontWeight: 700,
      marginLeft: 4,
      textDecoration: 'none'
    }
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow"
  }, "Travellers \xB7 sign up"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1",
    style: {
      marginBottom: 6
    }
  }, "Create your traveller account"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub"
  }, "Three quick details to get started. You can add your name and language later."), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    leadIcon: "mail",
    value: "lina.b@example.com",
    focused: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(Input, {
    leadIcon: "lock",
    trailIcon: "eye",
    type: "password",
    value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone number",
    hint: "For SMS booking reminders and account recovery."
  }, /*#__PURE__*/React.createElement(PhoneInput, {
    value: "55 234 187"
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-section-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Optional \u2014 personalise your trip")), /*#__PURE__*/React.createElement("div", {
    className: "su-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "Lina"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "Bouazizi"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nationality",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    leadIcon: "globe",
    value: "Tunisian"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Language",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "English"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    type: "button"
  }, "Create account ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-divider"
  }, "or continue with"), /*#__PURE__*/React.createElement("div", {
    className: "su-oauth"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: '#4285F4'
    }
  }, "G"), " Google"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#161616',
      fontSize: 14
    }
  }), " Apple"))), /*#__PURE__*/React.createElement("p", {
    className: "su-legal"
  }, "By creating an account you agree to our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), " and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy policy"), ".")));
};

// ─────────────────────────────────────────────────────────────
// Stepper helper
// ─────────────────────────────────────────────────────────────
const Stepper = ({
  steps,
  current
}) => /*#__PURE__*/React.createElement("div", {
  className: "su-stepper"
}, steps.map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, /*#__PURE__*/React.createElement("div", {
  className: "step " + (i === current ? "active" : i < current ? "done" : "")
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}, i < current ? /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 12,
  stroke: 3
}) : i + 1), /*#__PURE__*/React.createElement("span", {
  className: "label"
}, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
  className: "bar " + (i < current ? "done" : "")
}))));

// ─────────────────────────────────────────────────────────────
// (4) Provider sign-up — Step 1: account + business
// ─────────────────────────────────────────────────────────────
const ProviderStep1 = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, null), /*#__PURE__*/React.createElement("div", {
  className: "su-body",
  style: {
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 480
  }
}, /*#__PURE__*/React.createElement(Stepper, {
  steps: ['Business', 'Location', 'Verify'],
  current: 0
}), /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow"
}, "For tour operators"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "Tell us about your business"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "We'll review your details before activating your listings. Your trust badge appears once verified."), /*#__PURE__*/React.createElement(Field, {
  label: "Business name",
  hint: "As it appears on your licence."
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "briefcase",
  value: "Djerba Dunes Adventures",
  focused: true
})), /*#__PURE__*/React.createElement(Field, {
  label: "Business email"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "mail",
  placeholder: "contact@yourbusiness.tn"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Phone number"
}, /*#__PURE__*/React.createElement(PhoneInput, {
  value: "55 234 187"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Password",
  hint: "Use 8+ characters with a mix of letters and numbers."
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "lock",
  trailIcon: "eye",
  type: "password",
  value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Tourism licence number",
  hint: "ONTT or Ministry of Tourism issued."
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "badge",
  placeholder: "e.g. ONTT-2024-08412"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Business logo",
  optional: true
}, /*#__PURE__*/React.createElement(Uploader, {
  initial: "DD",
  name: "Djerba Dunes logo.png",
  hint: "318 KB \xB7 uploaded",
  cta: "Replace",
  loaded: true
})), /*#__PURE__*/React.createElement("div", {
  className: "su-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button"
}, "Continue to location ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
}))), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "Your details are reviewed by the TripInsel team within 1\u20132 business days. You'll be notified by email."))));

// ─────────────────────────────────────────────────────────────
// (5) Provider sign-up — Step 2: address + map pin
// ─────────────────────────────────────────────────────────────
const ProviderStep2 = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, null), /*#__PURE__*/React.createElement("div", {
  className: "su-body",
  style: {
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 520
  }
}, /*#__PURE__*/React.createElement(Stepper, {
  steps: ['Business', 'Location', 'Verify'],
  current: 1
}), /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow"
}, "Step 2 \xB7 Location"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "Drop a pin where travellers find you"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "Search or drag the pin. The street address fills in automatically \u2014 no typing required."), /*#__PURE__*/React.createElement(Field, {
  label: "Pin your exact spot",
  hint: "This is the location shown on your listings and used to calculate travel time."
}, /*#__PURE__*/React.createElement("div", {
  className: "su-map",
  role: "img",
  "aria-label": "Map of Djerba with a dropped pin near Aghir"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid"
}), /*#__PURE__*/React.createElement(DjerbaShape, null), /*#__PURE__*/React.createElement("span", {
  className: "lab-sea"
}, "Mediterranean Sea"), /*#__PURE__*/React.createElement("span", {
  className: "lab-djerba"
}, "Djerba"), /*#__PURE__*/React.createElement("input", {
  className: "map-search",
  defaultValue: "Aghir, Djerba",
  readOnly: true
}), /*#__PURE__*/React.createElement("div", {
  className: "ring"
}), /*#__PURE__*/React.createElement("div", {
  className: "pin"
}, /*#__PURE__*/React.createElement("svg", {
  width: "34",
  height: "44",
  viewBox: "0 0 34 44"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17 1c8.8 0 16 7 16 15.6 0 11-16 26.4-16 26.4S1 27.6 1 16.6C1 8 8.2 1 17 1Z",
  fill: "#00AA6C",
  stroke: "#fff",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "16.5",
  r: "5.5",
  fill: "#fff"
}))), /*#__PURE__*/React.createElement("div", {
  className: "coords"
}, "33.7344\xB0 N, 11.0123\xB0 E"), /*#__PURE__*/React.createElement("div", {
  className: "controls"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  "aria-label": "Zoom in"
}, "+"), /*#__PURE__*/React.createElement("button", {
  type: "button",
  "aria-label": "Zoom out"
}, "\u2212")))), /*#__PURE__*/React.createElement("div", {
  className: "su-autofilled"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "check",
  size: 14,
  stroke: 3
}), /*#__PURE__*/React.createElement("span", null, "Address filled from your pin \xB7 Drag the pin to refine")), /*#__PURE__*/React.createElement(Field, {
  label: "Street address",
  hint: "You can edit this if needed."
}, /*#__PURE__*/React.createElement("div", {
  className: "su-input-wrap"
}, /*#__PURE__*/React.createElement("span", {
  className: "lead"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "pin",
  size: 16
})), /*#__PURE__*/React.createElement("input", {
  className: "su-input su-input-auto",
  defaultValue: "Route Touristique, km 12.5, Aghir, Djerba",
  readOnly: true
}))), /*#__PURE__*/React.createElement(Field, {
  label: "Town / area"
}, /*#__PURE__*/React.createElement(Input, {
  value: "Aghir"
})), /*#__PURE__*/React.createElement("div", {
  className: "su-actions",
  style: {
    flexDirection: 'row'
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-ghost",
  type: "button",
  style: {
    flex: '0 0 auto'
  }
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "back",
  size: 16,
  stroke: 2.5
}), " Back"), /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button",
  style: {
    flex: 1
  }
}, "Continue ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
}))), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "Location is approximate until we verify it. Sensitive locations (e.g. private villas) can be hidden on request."))));

// Schematic Djerba island shape behind the pin
const DjerbaShape = () => /*#__PURE__*/React.createElement("svg", {
  className: "land",
  viewBox: "0 0 400 250",
  preserveAspectRatio: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M120,80 C 150,55 220,55 270,72 C 320,88 340,120 335,158 C 330,196 280,215 215,210 C 150,205 105,180 95,150 C 85,120 95,100 120,80 Z",
  fill: "#F5EFD9",
  stroke: "rgba(0,0,0,0.10)",
  strokeWidth: "1.5"
}));

// ─────────────────────────────────────────────────────────────
// (6) Admin sign-up
// ─────────────────────────────────────────────────────────────
const AdminSignup = () => /*#__PURE__*/React.createElement("div", {
  className: "su-screen"
}, /*#__PURE__*/React.createElement(SuTop, {
  signIn: false
}), /*#__PURE__*/React.createElement("div", {
  className: "su-body",
  style: {
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 440
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "su-eyebrow",
  style: {
    color: '#5A4FCF'
  }
}, "Internal \xB7 admin access"), /*#__PURE__*/React.createElement("h1", {
  className: "su-h1"
}, "Create an administrator account"), /*#__PURE__*/React.createElement("p", {
  className: "su-sub"
}, "Admins approve providers, set commissions and manage categories. You'll need an invitation code from the platform owner."), /*#__PURE__*/React.createElement("div", {
  className: "su-admin-banner"
}, /*#__PURE__*/React.createElement(SuIcon, {
  name: "warning",
  size: 16
}), /*#__PURE__*/React.createElement("span", null, "This form creates a privileged account. All actions are logged. Don't share your invitation code.")), /*#__PURE__*/React.createElement(Field, {
  label: "Invitation code",
  hint: "6-character code from your invite email."
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "shieldlock",
  value: "TI-9F4A2B",
  focused: true
})), /*#__PURE__*/React.createElement(Field, {
  label: "Full name"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "user",
  value: "Ahmed Trabelsi"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Work email"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "mail",
  value: "ahmed@tripinsel.tn"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Phone number",
  hint: "Used for 2-factor authentication."
}, /*#__PURE__*/React.createElement(PhoneInput, {
  value: "98 412 760"
})), /*#__PURE__*/React.createElement(Field, {
  label: "Password"
}, /*#__PURE__*/React.createElement(Input, {
  leadIcon: "lock",
  trailIcon: "eye",
  type: "password",
  value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
}), /*#__PURE__*/React.createElement("div", {
  className: "su-strength"
}, /*#__PURE__*/React.createElement("span", {
  className: "seg on-1"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg on-2"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg on-3"
}), /*#__PURE__*/React.createElement("span", {
  className: "seg on-4"
})), /*#__PURE__*/React.createElement("span", {
  className: "su-hint"
}, "Strong \xB7 12 characters with symbols.")), /*#__PURE__*/React.createElement(Field, {
  label: "Profile photo",
  optional: true
}, /*#__PURE__*/React.createElement(Uploader, {
  initial: "A",
  name: "Add a photo",
  hint: "Helps your team recognise actions in the audit log."
})), /*#__PURE__*/React.createElement("div", {
  className: "su-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "su-btn-primary",
  type: "button"
}, "Create admin account ", /*#__PURE__*/React.createElement(SuIcon, {
  name: "arrow",
  size: 16,
  stroke: 2.5
}))), /*#__PURE__*/React.createElement("p", {
  className: "su-legal"
}, "By creating this account you accept TripInsel's ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Internal acceptable use policy"), ". Two-factor authentication will be set up on first sign-in."))));

// ─────────────────────────────────────────────────────────────
// Export to window so app.jsx can use them
// ─────────────────────────────────────────────────────────────
Object.assign(window, {
  SuIcon,
  SuTop,
  Field,
  Input,
  PhoneInput,
  Uploader,
  PhotoUploader,
  Stepper,
  RolePicker,
  TouristSignup,
  TouristVerifySms,
  TouristSignupSplit,
  TouristCompleteProfile,
  ProviderStep1,
  ProviderStep2,
  AdminSignup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ui/signup-screens.jsx", error: String((e && e.message) || e) }); }

// src/components/ui/tourist-wizard.jsx
try { (() => {
// TripInsel · Traveller sign-up — unified step-by-step wizard.
// One cohesive, interactive experience: Account → Verify (SMS) → Profile.
// Maps to backend: register (email/password/phone) → POST /auth/verify-otp → optional profile.
// In production this would live at src/pages/SignupTraveller.jsx, composing
// ui/ components (Stepper, OtpInput, PhotoUploader, LangGrid).

const {
  useState,
  useRef,
  useEffect
} = React;
const TW_LANGS = [{
  code: 'EN',
  flag: '🇬🇧',
  label: 'English',
  native: 'English'
}, {
  code: 'FR',
  flag: '🇫🇷',
  label: 'French',
  native: 'Français'
}, {
  code: 'DE',
  flag: '🇩🇪',
  label: 'German',
  native: 'Deutsch'
}, {
  code: 'IT',
  flag: '🇮🇹',
  label: 'Italian',
  native: 'Italiano'
}, {
  code: 'AR',
  flag: '🇹🇳',
  label: 'Arabic',
  native: 'العربية'
}, {
  code: 'ES',
  flag: '🇪🇸',
  label: 'Spanish',
  native: 'Español'
}];
const TW_STEPS = [{
  id: 'account',
  label: 'Account',
  icon: 'user'
}, {
  id: 'verify',
  label: 'Verify',
  icon: 'phone'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'compass'
}];

/* ── OTP input — 6 boxes, auto-advance, paste-to-fill, backspace ── */
function OtpInput({
  value,
  onChange
}) {
  const refs = useRef([]);
  const handle = (i, v) => {
    const digit = v.replace(/\D/g, '').slice(-1);
    const next = value.split('');
    next[i] = digit;
    const joined = next.join('').slice(0, 6);
    onChange(joined);
    if (digit && i < 5) refs.current[i + 1] && refs.current[i + 1].focus();
  };
  const onKey = (i, e) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1] && refs.current[i - 1].focus();
  };
  const onPaste = e => {
    e.preventDefault();
    const txt = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
    if (txt) {
      onChange(txt);
      const last = Math.min(txt.length, 5);
      refs.current[last] && refs.current[last].focus();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "su-otp",
    onPaste: onPaste
  }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    className: 'su-otp-box' + (value[i] ? ' filled' : ''),
    inputMode: "numeric",
    maxLength: 1,
    value: value[i] || '',
    onChange: e => handle(i, e.target.value),
    onKeyDown: e => onKey(i, e),
    "aria-label": `Digit ${i + 1}`
  })));
}

/* ── Progress stepper ─────────────────────────────────────────── */
function WizSteps({
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-steps"
  }, TW_STEPS.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: 'tw-step ' + (i === step ? 'active' : i < step ? 'done' : 'todo')
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub"
  }, i < step ? /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 14,
    stroke: 3
  }) : /*#__PURE__*/React.createElement(SuIcon, {
    name: s.icon,
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, s.label)), i < TW_STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: 'tw-bar' + (i < step ? ' done' : '')
  }))));
}

/* ════════════════════════════════════════════════════════════════ */
function TouristWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState({
    email: '',
    password: '',
    phone: '',
    otp: '',
    photo: null,
    lang: '',
    nationality: '',
    firstName: '',
    lastName: '',
    via: null
  });
  const upd = patch => setData(d => ({
    ...d,
    ...patch
  }));
  const [timer, setTimer] = useState(28);

  // resend countdown on verify step
  useEffect(() => {
    if (step !== 1) return;
    setTimer(28);
    const t = setInterval(() => setTimer(x => x > 0 ? x - 1 : 0), 1000);
    return () => clearInterval(t);
  }, [step]);
  const go = n => {
    setDir(n > step ? 1 : -1);
    setStep(n);
  };

  // step validity
  const emailOk = /\S+@\S+\.\S+/.test(data.email);
  const passOk = data.password.length >= 8;
  const phoneOk = data.phone.replace(/\D/g, '').length >= 6;
  // Phone verification is ALWAYS required, whatever the sign-up method.
  const oauthed = data.via === 'google' || data.via === 'apple';
  const accountValid = phoneOk && (oauthed || emailOk && passOk);
  const otpValid = data.otp.length === 6;
  // After verification: first + last name are required; language, nationality + photo optional.
  const profileValid = data.firstName.trim().length >= 1 && data.lastName.trim().length >= 1;
  const OAUTH = {
    google: {
      name: 'Lina Bouazizi',
      first: 'Lina',
      last: 'Bouazizi',
      email: 'lina.b@gmail.com',
      label: 'Google'
    },
    apple: {
      name: 'Lina Bouazizi',
      first: 'Lina',
      last: 'Bouazizi',
      email: 'lina.b@icloud.com',
      label: 'Apple'
    }
  };
  const continueWith = provider => {
    const o = OAUTH[provider];
    upd({
      via: provider,
      firstName: o.first,
      lastName: o.last,
      email: o.email
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "su-screen tw-screen"
  }, /*#__PURE__*/React.createElement(SuTop, {
    signIn: step === 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card"
  }, /*#__PURE__*/React.createElement(WizSteps, {
    step: step
  }), /*#__PURE__*/React.createElement("div", {
    className: 'tw-pane ' + (dir > 0 ? 'in-right' : 'in-left'),
    key: step
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow"
  }, "Step 1 of 3 \xB7 Travellers"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1"
  }, "Create your account"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub"
  }, "Sign up with Google, Apple, or your email \u2014 whichever you prefer. We'll verify your phone next.")), !oauthed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "su-oauth-stack"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-oauth-btn primary",
    onClick: () => continueWith('google')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
  })), "Continue with Google"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-oauth-btn",
    onClick: () => continueWith('apple')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "#161616"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"
  })), "Continue with Apple")), /*#__PURE__*/React.createElement("div", {
    className: "su-divider"
  }, "or sign up with email"), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "su-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "mail",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    className: 'su-input' + (data.email && !emailOk ? ' error' : ''),
    placeholder: "you@example.com",
    value: data.email,
    onChange: e => upd({
      email: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Password"), /*#__PURE__*/React.createElement("div", {
    className: "su-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "lock",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "su-input",
    placeholder: "At least 8 characters",
    value: data.password,
    onChange: e => upd({
      password: e.target.value
    })
  })), data.password.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "su-strength"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'seg' + (data.password.length >= 1 ? ' on-1' : '')
  }), /*#__PURE__*/React.createElement("span", {
    className: 'seg' + (data.password.length >= 6 ? ' on-2' : '')
  }), /*#__PURE__*/React.createElement("span", {
    className: 'seg' + (data.password.length >= 8 ? ' on-3' : '')
  }), /*#__PURE__*/React.createElement("span", {
    className: 'seg' + (data.password.length >= 12 ? ' on-4' : '')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Phone number"), /*#__PURE__*/React.createElement("div", {
    className: "su-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prefix"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, "\uD83C\uDDF9\uD83C\uDDF3"), "+216"), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    inputMode: "tel",
    placeholder: "55 234 187",
    value: data.phone,
    onChange: e => upd({
      phone: e.target.value
    })
  })), /*#__PURE__*/React.createElement("span", {
    className: "su-hint"
  }, "We'll text a 6-digit code to confirm this number."))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "su-google-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-avatar",
    style: data.via === 'apple' ? {
      background: '#161616'
    } : {}
  }, data.via === 'apple' ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"
  })) : 'L'), /*#__PURE__*/React.createElement("div", {
    className: "g-meta"
  }, /*#__PURE__*/React.createElement("b", null, data.firstName, " ", data.lastName), /*#__PURE__*/React.createElement("span", null, data.email, " \xB7 via ", OAUTH[data.via].label)), /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 16,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-field",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Phone number"), /*#__PURE__*/React.createElement("div", {
    className: "su-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prefix"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, "\uD83C\uDDF9\uD83C\uDDF3"), "+216"), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    inputMode: "tel",
    placeholder: "55 234 187",
    autoFocus: true,
    value: data.phone,
    onChange: e => upd({
      phone: e.target.value
    })
  })), /*#__PURE__*/React.createElement("span", {
    className: "su-hint"
  }, "Verification by SMS is required for every account \u2014 even with ", OAUTH[data.via].label, ".")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline strong",
    style: {
      marginTop: 4
    },
    onClick: () => upd({
      via: null
    })
  }, "\u2190 Use a different method")), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !accountValid,
    onClick: () => go(1)
  }, "Send verification code ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))), /*#__PURE__*/React.createElement("p", {
    className: "su-legal"
  }, "By continuing you agree to TripInsel's ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), " and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy policy"), ".")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-otp-icon"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "phone",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow"
  }, "Step 2 of 3 \xB7 Verify"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1"
  }, "Enter the 6-digit code"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub"
  }, "Sent by SMS to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "+216 ", data.phone || '55 234 187'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline",
    onClick: () => go(0)
  }, "Change"))), /*#__PURE__*/React.createElement(OtpInput, {
    value: data.otp,
    onChange: v => upd({
      otp: v
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !otpValid,
    onClick: () => go(2)
  }, "Verify & continue ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-otp-resend"
  }, /*#__PURE__*/React.createElement("span", null, "Didn't get a code?"), timer > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "su-otp-timer"
  }, "Resend in 0:", String(timer).padStart(2, '0')) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline strong",
    onClick: () => setTimer(28)
  }, "Resend SMS")), /*#__PURE__*/React.createElement("p", {
    className: "su-legal",
    style: {
      textAlign: 'center'
    }
  }, "The code expires in 10 minutes. Standard message rates may apply.")), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-verified-chip"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 13,
    stroke: 3
  }), " Number verified"), /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow",
    style: {
      marginTop: 12
    }
  }, "Step 3 of 3 \xB7 Complete your account"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1"
  }, "Tell us who you are"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub"
  }, "Your name and language help hosts greet you and keep everything in the language you read best.")), /*#__PURE__*/React.createElement("div", {
    className: "su-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    placeholder: "Lina",
    value: data.firstName,
    onChange: e => upd({
      firstName: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    placeholder: "Bouazizi",
    value: data.lastName,
    onChange: e => upd({
      lastName: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Preferred language", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, " \xB7 Optional")), /*#__PURE__*/React.createElement("div", {
    className: "su-lang-grid"
  }, TW_LANGS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.code,
    type: "button",
    className: 'su-lang-card' + (data.lang === l.code ? ' active' : ''),
    onClick: () => upd({
      lang: l.code
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, l.flag), /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, l.label), /*#__PURE__*/React.createElement("span", {
    className: "nat"
  }, l.native), data.lang === l.code && /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 12,
    stroke: 3
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Nationality", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, " \xB7 Optional")), /*#__PURE__*/React.createElement("div", {
    className: "su-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "globe",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    value: data.nationality,
    onChange: e => upd({
      nationality: e.target.value
    }),
    placeholder: "Pick your country"
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(PhotoUploader, {
    initials: (data.firstName[0] || 'L').toUpperCase()
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !profileValid,
    onClick: () => go(3)
  }, "Finish & start exploring ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))), /*#__PURE__*/React.createElement("p", {
    className: "su-legal"
  }, "First name and last name are required. Language, nationality and photo are optional \u2014 you can add them later.")), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "tw-done"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-done-burst"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 34,
    stroke: 3
  })), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1",
    style: {
      textAlign: 'center'
    }
  }, "You're all set", data.firstName ? `, ${data.firstName}` : '', "!"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub",
    style: {
      textAlign: 'center',
      margin: '0 auto 24px'
    }
  }, "Your traveller account is ready. 342 Djerba experiences are waiting."), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      maxWidth: 320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    onClick: () => go(0)
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "compass",
    size: 16
  }), " Browse experiences")))), step > 0 && step < 3 && /*#__PURE__*/React.createElement("div", {
    className: "tw-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-back",
    onClick: () => go(step - 1)
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "back",
    size: 15,
    stroke: 2.5
  }), " Back")))));
}
window.TouristWizard = TouristWizard;

/* ─────────────────────────────────────────────────────────────
   Standalone SMS OTP verification screen — same step shown on its
   own as a designed artboard (pre-filled to look complete).
   ───────────────────────────────────────────────────────────── */
function TouristVerifyScreen() {
  const [otp, setOtp] = useState('472');
  return /*#__PURE__*/React.createElement("div", {
    className: "su-screen tw-screen"
  }, /*#__PURE__*/React.createElement(SuTop, {
    signIn: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card"
  }, /*#__PURE__*/React.createElement(WizSteps, {
    step: 1
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-otp-icon"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "phone",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-eyebrow"
  }, "Step 2 of 3 \xB7 Verify"), /*#__PURE__*/React.createElement("h1", {
    className: "su-h1"
  }, "Enter the 6-digit code"), /*#__PURE__*/React.createElement("p", {
    className: "su-sub"
  }, "Sent by SMS to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, "+216 55 234 187"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-link-inline"
  }, "Change"))), /*#__PURE__*/React.createElement(OtpInput, {
    value: otp,
    onChange: setOtp
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: otp.length !== 6
  }, "Verify & continue ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-otp-resend"
  }, /*#__PURE__*/React.createElement("span", null, "Didn't get a code?"), /*#__PURE__*/React.createElement("span", {
    className: "su-otp-timer"
  }, "Resend in 0:24")), /*#__PURE__*/React.createElement("p", {
    className: "su-legal",
    style: {
      textAlign: 'center'
    }
  }, "The code expires in 10 minutes. Standard message rates may apply.")), /*#__PURE__*/React.createElement("div", {
    className: "tw-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-back"
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "back",
    size: 15,
    stroke: 2.5
  }), " Back")))));
}
window.TouristVerifyScreen = TouristVerifyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ui/tourist-wizard.jsx", error: String((e && e.message) || e) }); }

// src/pages/admin/app.jsx
try { (() => {
// Admin UI kit — components & screens

const ADMIN_LINKS = [{
  id: 'overview',
  label: 'Overview',
  icon: 'dashboard'
}, {
  id: 'verifications',
  label: 'Verifications',
  icon: 'shieldCheck',
  badge: '7'
}, {
  id: 'providers',
  label: 'Providers',
  icon: 'briefcase'
}, {
  id: 'bookings',
  label: 'Bookings',
  icon: 'calendar'
}, {
  id: 'transactions',
  label: 'Transactions',
  icon: 'wallet'
}, {
  id: 'categories',
  label: 'Categories',
  icon: 'menu'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
const ADMIN_USER = {
  name: 'Lina Hosni',
  email: 'lina@tripinsel.com',
  initials: 'LH'
};

/* ── Admin overview ──────────────────────────────────────────────── */
function AdminOverview({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 22px var(--font-primary)',
      margin: 0
    }
  }, "Platform overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '4px 0 0'
    }
  }, "Live numbers across all providers and tourists on the platform.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Bookings today",
    value: "142",
    sub: "vs 128 yesterday",
    icon: "calendar",
    accent: "#00AA6C",
    trend: 11
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Gross volume (week)",
    value: "\u20AC 38,420",
    sub: "Commission: \u20AC 4,610",
    icon: "barChart",
    accent: "#2E91D6",
    trend: 6
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Active providers",
    value: "87",
    sub: "3 awaiting verification",
    icon: "briefcase",
    accent: "#F2A00A",
    trend: 3
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg platform rating",
    value: "4.7",
    sub: "6,402 reviews",
    icon: "award",
    accent: "#5A4FCF"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0
    }
  }, "Bookings \xB7 last 7 days"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999'
    }
  }, "2025-06-11 \u2192 2025-06-17")), /*#__PURE__*/React.createElement(FakeBarChart, null)), /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0
    }
  }, "Bookings by category")), [{
    id: 'desert',
    label: 'Desert',
    pct: 28
  }, {
    id: 'water',
    label: 'Water sports',
    pct: 22
  }, {
    id: 'cultural',
    label: 'Cultural',
    pct: 17
  }, {
    id: 'cooking',
    label: 'Cooking',
    pct: 12
  }, {
    id: 'spa',
    label: 'Spa',
    pct: 9
  }, {
    id: 'food',
    label: 'Food',
    pct: 7
  }, {
    id: 'boat',
    label: 'Boat',
    pct: 5
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(CategoryDot, {
    category: c.id
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-primary)',
      width: 110
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: '#F2F2F2',
      borderRadius: 9999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${c.pct * 3.4}%`,
      height: '100%',
      background: CATEGORY_COLORS[c.id]
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-primary)',
      width: 32,
      textAlign: 'right'
    }
  }, c.pct, "%"))))), /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0
    }
  }, "Action items"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('verifications'),
    style: {
      font: '600 13px var(--font-primary)',
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, "Open queue \u2192")), [{
    icon: 'shieldCheck',
    accent: '#F2A00A',
    title: '7 provider verifications pending',
    body: 'Oldest submitted 3 days ago. Aim for under 48h.'
  }, {
    icon: 'xCircle',
    accent: '#D93025',
    title: '2 disputed bookings',
    body: 'Tourist requested refund — provider response needed.'
  }, {
    icon: 'flag',
    accent: '#5A4FCF',
    title: '1 review flagged for moderation',
    body: '"Cooking class with Souad" — possible policy violation.'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: a.accent + '20',
      color: a.accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 16,
    color: a.accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#555'
    }
  }, a.body)), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary ti-btn-sm"
  }, "Review")))));
}
function FakeBarChart() {
  const bars = [42, 58, 51, 64, 72, 89, 142];
  const days = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  const max = Math.max(...bars);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 18,
      height: 160,
      padding: '8px 4px 0'
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      color: '#555'
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: b / max * 130,
      background: i === bars.length - 1 ? 'var(--color-primary)' : 'var(--color-primary-light)',
      borderRadius: '6px 6px 0 0',
      minHeight: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-primary)',
      color: '#999'
    }
  }, days[i]))));
}

/* ── Verifications queue ─────────────────────────────────────────── */
function AdminVerifications() {
  const initial = [{
    id: 'v1',
    name: 'Souad Cooking Studio',
    owner: 'Souad Mansouri',
    submitted: 'Jun 14',
    city: 'Midoun',
    docs: ['License', 'ID', 'Insurance'],
    status: 'pending'
  }, {
    id: 'v2',
    name: 'Djerba Dive Center',
    owner: 'Karim Benali',
    submitted: 'Jun 13',
    city: 'El Kantara',
    docs: ['License', 'ID', 'Insurance', 'PADI'],
    status: 'pending'
  }, {
    id: 'v3',
    name: 'Lagoon Kayak Co.',
    owner: 'Yasmine Trabelsi',
    submitted: 'Jun 13',
    city: "Ras R'mel",
    docs: ['License', 'ID'],
    status: 'incomplete'
  }, {
    id: 'v4',
    name: 'Houmt Tours',
    owner: 'Mohammed Khelifi',
    submitted: 'Jun 12',
    city: 'Houmt Souk',
    docs: ['License', 'ID', 'Insurance'],
    status: 'pending'
  }, {
    id: 'v5',
    name: 'Argan Hammam',
    owner: 'Leila Said',
    submitted: 'Jun 11',
    city: 'Midoun',
    docs: ['License', 'ID', 'Insurance'],
    status: 'pending'
  }];
  const [rows, setRows] = useState(initial);
  const act = (id, verdict) => setRows(rows.map(r => r.id === id ? {
    ...r,
    status: verdict
  } : r));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '0 0 16px'
    }
  }, "Review provider applications. Approve to issue a Verified Business badge; reject to send the provider feedback."), /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.id,
    columns: [{
      key: 'name',
      label: 'Business',
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: '700 14px var(--font-primary)'
        }
      }, r.name), /*#__PURE__*/React.createElement("div", {
        style: {
          font: '400 12px var(--font-primary)',
          color: '#999'
        }
      }, r.owner))
    }, {
      key: 'city',
      label: 'Location',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          color: '#555'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "mapPin",
        size: 12,
        color: "#555"
      }), r.city)
    }, {
      key: 'submitted',
      label: 'Submitted'
    }, {
      key: 'docs',
      label: 'Documents',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap'
        }
      }, r.docs.map(d => /*#__PURE__*/React.createElement("span", {
        key: d,
        className: "ti-chip",
        style: {
          padding: '3px 8px',
          font: '600 11px var(--font-primary)'
        }
      }, d)))
    }, {
      key: 'status',
      label: 'Status',
      render: r => {
        if (r.status === 'pending') return /*#__PURE__*/React.createElement("span", {
          className: "ti-badge ti-badge-pending"
        }, "Pending");
        if (r.status === 'incomplete') return /*#__PURE__*/React.createElement("span", {
          className: "ti-badge ti-badge-cancelled"
        }, "Incomplete");
        if (r.status === 'approved') return /*#__PURE__*/React.createElement("span", {
          className: "ti-badge ti-badge-confirmed"
        }, "Approved");
        if (r.status === 'rejected') return /*#__PURE__*/React.createElement("span", {
          className: "ti-badge ti-badge-cancelled"
        }, "Rejected");
      }
    }, {
      key: 'actions',
      label: '',
      align: 'right',
      render: r => r.status === 'pending' || r.status === 'incomplete' ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 6,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-secondary ti-btn-sm",
        onClick: () => act(r.id, 'rejected')
      }, "Reject"), /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-primary ti-btn-sm",
        onClick: () => act(r.id, 'approved')
      }, "Approve")) : /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-ghost ti-btn-sm"
      }, "View")
    }],
    rows: rows
  }));
}

/* ── Providers list ─────────────────────────────────────────────── */
function AdminProviders() {
  const all = [{
    name: 'Ahmed Tours',
    owner: 'Ahmed Bouaziz',
    activities: 3,
    rating: 4.8,
    bookings: 1240,
    status: 'active',
    verified: true
  }, {
    name: 'Souad Cooking Studio',
    owner: 'Souad Mansouri',
    activities: 2,
    rating: 4.9,
    bookings: 412,
    status: 'active',
    verified: true
  }, {
    name: 'Djerba Dive Center',
    owner: 'Karim Benali',
    activities: 4,
    rating: 4.6,
    bookings: 298,
    status: 'pending',
    verified: false
  }, {
    name: 'Lagoon Kayak Co.',
    owner: 'Yasmine Trabelsi',
    activities: 2,
    rating: 4.7,
    bookings: 367,
    status: 'active',
    verified: true
  }, {
    name: 'Argan Hammam',
    owner: 'Leila Said',
    activities: 1,
    rating: 4.8,
    bookings: 521,
    status: 'active',
    verified: true
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ti-input",
    style: {
      flex: 1,
      maxWidth: 420
    },
    placeholder: "Search providers\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "All categories ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 11
  })), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "All statuses ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 11
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost"
  }, "Export CSV")), /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.name,
    columns: [{
      key: 'name',
      label: 'Business',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 14px var(--font-primary)'
        }
      }, r.name), r.verified && /*#__PURE__*/React.createElement(Icon, {
        name: "shieldCheck",
        size: 14,
        color: "#00AA6C"
      }))
    }, {
      key: 'owner',
      label: 'Owner'
    }, {
      key: 'activities',
      label: 'Activities',
      align: 'right'
    }, {
      key: 'rating',
      label: 'Rating',
      render: r => /*#__PURE__*/React.createElement(Bubbles, {
        score: r.rating,
        showScore: true
      })
    }, {
      key: 'bookings',
      label: 'Bookings',
      align: 'right',
      render: r => r.bookings.toLocaleString()
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement("span", {
        className: `ti-badge ${r.status === 'active' ? 'ti-badge-active' : 'ti-badge-pending'}`
      }, r.status)
    }, {
      key: 'actions',
      label: '',
      align: 'right',
      render: () => /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-ghost ti-btn-sm"
      }, "View")
    }],
    rows: all
  }));
}

/* ── Bookings monitor ────────────────────────────────────────────── */
function AdminBookings() {
  const rows = [{
    ref: 'TI-4829',
    activity: "Sunset camel ride",
    provider: 'Ahmed Tours',
    customer: 'Sofia K.',
    date: 'Jun 17, 14:00',
    total: 90,
    comm: 10.80,
    status: 'confirmed'
  }, {
    ref: 'TI-4811',
    activity: 'Lagoon kayak',
    provider: 'Lagoon Kayak Co.',
    customer: 'Marc L.',
    date: 'Jun 15, 17:30',
    total: 168,
    comm: 20.16,
    status: 'confirmed'
  }, {
    ref: 'TI-4803',
    activity: 'Sunset camel ride',
    provider: 'Ahmed Tours',
    customer: 'Erik H.',
    date: 'Jun 14, 14:00',
    total: 135,
    comm: 16.20,
    status: 'pending'
  }, {
    ref: 'TI-4774',
    activity: 'Quad biking salt flats',
    provider: 'Ahmed Tours',
    customer: 'Greta V.',
    date: 'Jun 10, 11:00',
    total: 55,
    comm: 0,
    status: 'cancelled'
  }, {
    ref: 'TI-4711',
    activity: 'Cooking with Souad',
    provider: 'Souad Cooking Studio',
    customer: 'Jonas M.',
    date: 'May 30, 09:00',
    total: 130,
    comm: 15.60,
    status: 'completed'
  }];
  return /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.ref,
    columns: [{
      key: 'ref',
      label: 'Ref',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 13px var(--font-primary)'
        }
      }, r.ref)
    }, {
      key: 'activity',
      label: 'Activity'
    }, {
      key: 'provider',
      label: 'Provider'
    }, {
      key: 'customer',
      label: 'Customer'
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("strong", null, "\u20AC", r.total)
    }, {
      key: 'comm',
      label: 'Commission',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#8A6000',
          font: '700 13px var(--font-primary)'
        }
      }, "\u20AC", r.comm.toFixed(2))
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }],
    rows: rows
  });
}

/* ── Transactions ────────────────────────────────────────────────── */
function AdminTransactions() {
  const rows = [{
    id: 'TX-9821',
    label: 'Commission collected — Sunset camel · TI-4829',
    date: 'Jun 17 14:32',
    kind: 'commission',
    amount: 10.80
  }, {
    id: 'TX-9820',
    label: 'Refund issued — TI-4774 (cancelled)',
    date: 'Jun 17 11:02',
    kind: 'refund',
    amount: -55.00
  }, {
    id: 'TX-9819',
    label: 'Payout — Ahmed Tours',
    date: 'Jun 16 09:00',
    kind: 'payout',
    amount: -2400.00
  }, {
    id: 'TX-9818',
    label: 'Commission collected — Lagoon kayak · TI-4811',
    date: 'Jun 15 18:15',
    kind: 'commission',
    amount: 20.16
  }, {
    id: 'TX-9817',
    label: 'Payout — Souad Cooking Studio',
    date: 'Jun 15 09:00',
    kind: 'payout',
    amount: -780.00
  }];
  return /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.id,
    columns: [{
      key: 'id',
      label: 'Tx',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 13px var(--font-primary)'
        }
      }, r.id)
    }, {
      key: 'label',
      label: 'Description'
    }, {
      key: 'date',
      label: 'When',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#555'
        }
      }, r.date)
    }, {
      key: 'kind',
      label: 'Type',
      render: r => {
        const labels = {
          commission: ['Commission', '#FEF3C7', '#8A6000'],
          payout: ['Payout', '#FDE8E8', '#A30000'],
          refund: ['Refund', '#FDE8E8', '#A30000']
        };
        const [l, bg, fg] = labels[r.kind] || ['—', '#F2F2F2', '#555'];
        return /*#__PURE__*/React.createElement("span", {
          className: "ti-badge",
          style: {
            background: bg,
            color: fg
          }
        }, l);
      }
    }, {
      key: 'amount',
      label: 'Amount',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("strong", {
        style: {
          color: r.amount > 0 ? '#00703A' : '#A30000'
        }
      }, r.amount > 0 ? '+' : '−', "\u20AC", Math.abs(r.amount).toFixed(2))
    }],
    rows: rows
  });
}

/* ── Categories ──────────────────────────────────────────────────── */
function AdminCategories() {
  const cats = Object.entries(CATEGORY_COLORS).map(([id, color]) => ({
    id,
    color,
    label: id[0].toUpperCase() + id.slice(1),
    activities: {
      desert: 24,
      water: 19,
      cultural: 15,
      cooking: 11,
      diving: 8,
      boat: 7,
      quad: 5,
      horse: 3,
      spa: 9,
      food: 12
    }[id] || 0
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '0 0 16px'
    }
  }, "Manage activity categories. Color and icon define how each shows up on the public marketplace."), /*#__PURE__*/React.createElement("div", {
    className: "ti-card"
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16,
      borderTop: i === 0 ? 'none' : '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: c.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999',
      fontFamily: 'monospace'
    }
  }, c.color)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, c.activities, " activities"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost ti-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 14
  }), "Edit")))));
}
function AdminSettings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, [{
    title: 'Platform commission',
    body: 'Standard 12% across all categories. Tiered rates kick in at 500 / 2,000 bookings.',
    value: '12%'
  }, {
    title: 'Currencies enabled',
    body: 'EUR (default), TND, USD. Conversion uses ECB daily fix.',
    value: '3 enabled'
  }, {
    title: 'Notification templates',
    body: 'Booking confirmation, reminder, cancellation, refund. Translated EN · FR · DE · AR · IT.'
  }, {
    title: 'Cancellation window',
    body: 'Free cancellation up to 24h before activity (default). Providers can tighten per activity.',
    value: '24h'
  }, {
    title: 'Review moderation',
    body: 'Auto-publish reviews from verified bookings. Flagged reviews require admin approval.',
    value: 'Auto + manual'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: "ti-card",
    style: {
      padding: 20,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 15px var(--font-primary)',
      margin: '0 0 4px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, s.body)), s.value && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 18px var(--font-primary)'
    }
  }, s.value), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary ti-btn-sm"
  }, "Manage"))));
}

/* ── App ─────────────────────────────────────────────────────────── */
function AdminApp() {
  const [route, setRoute] = useState('overview');
  return /*#__PURE__*/React.createElement(DashboardShell, {
    role: "Admin panel",
    user: ADMIN_USER,
    links: ADMIN_LINKS,
    current: route,
    onNavigate: setRoute
  }, route === 'overview' && /*#__PURE__*/React.createElement(AdminOverview, {
    go: setRoute
  }), route === 'verifications' && /*#__PURE__*/React.createElement(AdminVerifications, null), route === 'providers' && /*#__PURE__*/React.createElement(AdminProviders, null), route === 'bookings' && /*#__PURE__*/React.createElement(AdminBookings, null), route === 'transactions' && /*#__PURE__*/React.createElement(AdminTransactions, null), route === 'categories' && /*#__PURE__*/React.createElement(AdminCategories, null), route === 'settings' && /*#__PURE__*/React.createElement(AdminSettings, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AdminApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/admin/app.jsx", error: String((e && e.message) || e) }); }

// src/pages/host-activity/create-activity.jsx
try { (() => {
// TripInsel · Create Activity — STEP-BY-STEP wizard + live preview.
// Maps 1:1 to CreateActivityDto + CreateAvailabilitySlotDto.
// Activity attributes (steps 1–5) are filled first, then Availability (step 6).

const {
  useState,
  useMemo,
  useRef,
  useEffect,
  Fragment
} = React;

/* ── Reference data ──────────────────────────────────────────────── */
const CATEGORIES = [{
  value: 'DESERT_SAFARI',
  dot: 'desert',
  label: 'Desert & camel',
  icon: 'compass'
}, {
  value: 'WATER_SPORTS',
  dot: 'water',
  label: 'Water sports',
  icon: 'zap'
}, {
  value: 'DIVING',
  dot: 'diving',
  label: 'Diving & snorkel',
  icon: 'mapPin'
}, {
  value: 'BOAT_TRIP',
  dot: 'boat',
  label: 'Boat trips',
  icon: 'compass'
}, {
  value: 'COOKING_CLASS',
  dot: 'cooking',
  label: 'Cooking class',
  icon: 'heart'
}, {
  value: 'CULTURAL_TOUR',
  dot: 'cultural',
  label: 'Culture & souk',
  icon: 'flag'
}, {
  value: 'QUAD_BIKING',
  dot: 'quad',
  label: 'Quad & buggy',
  icon: 'zap'
}, {
  value: 'WELLNESS',
  dot: 'spa',
  label: 'Spa & wellness',
  icon: 'heart'
}, {
  value: 'FISHING',
  dot: 'boat',
  label: 'Fishing trips',
  icon: 'compass'
}, {
  value: 'HORSE_RIDING',
  dot: 'desert',
  label: 'Horse riding',
  icon: 'compass'
}, {
  value: 'GUIDED_HIKE',
  dot: 'cultural',
  label: 'Guided hikes',
  icon: 'mapPin'
}, {
  value: 'PHOTOGRAPHY',
  dot: 'spa',
  label: 'Photo tours',
  icon: 'externalLink'
}, {
  value: 'NIGHTLIFE',
  dot: 'quad',
  label: 'Nightlife & shows',
  icon: 'zap'
}, {
  value: 'FOOD_TOUR',
  dot: 'cooking',
  label: 'Food tours',
  icon: 'heart'
}, {
  value: 'POTTERY',
  dot: 'cultural',
  label: 'Pottery workshop',
  icon: 'flag'
}];
const PRICING_TYPES = [{
  value: 'PER_PERSON',
  label: 'Per person',
  help: 'Travellers pay your base price for each participant.'
}, {
  value: 'PER_GROUP',
  label: 'Per group',
  help: 'One flat price covers a whole group up to the size you set.'
}];
const DURATIONS = [15, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360, 480, 600, 720, 1440];
const SAMPLE_PHOTOS = ['https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=900&q=80&fit=crop&auto=format', 'https://images.unsplash.com/photo-1591279004443-6e8c0e7f7e7e?w=900&q=80&fit=crop&auto=format', 'https://images.unsplash.com/photo-1597835766347-9c1a9c4c8c8f?w=900&q=80&fit=crop&auto=format', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80&fit=crop&auto=format', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80&fit=crop&auto=format', 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80&fit=crop&auto=format'];
const MAX_IMAGES = 10;
const STEPS = [{
  id: 'basics',
  label: 'Basics',
  icon: 'edit',
  phase: 'Activity'
}, {
  id: 'photos',
  label: 'Photos',
  icon: 'externalLink',
  phase: 'Activity'
}, {
  id: 'pricing',
  label: 'Pricing',
  icon: 'wallet',
  phase: 'Activity'
}, {
  id: 'capacity',
  label: 'Capacity',
  icon: 'clock',
  phase: 'Activity'
}, {
  id: 'details',
  label: 'Inclusions',
  icon: 'checkCircle',
  phase: 'Activity'
}, {
  id: 'slots',
  label: 'Availability',
  icon: 'calendar',
  phase: 'Availability'
}];

/* ── Helpers ─────────────────────────────────────────────────────── */
function fmtDuration(min) {
  if (!min || min <= 0) return null;
  const h = Math.floor(min / 60),
    m = min % 60;
  return (h ? h + 'h' : '') + (h && m ? ' ' : '') + (m ? m + 'm' : '');
}
function slotDuration(start, end) {
  if (!start || !end) return null;
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const mins = eh * 60 + em - (sh * 60 + sm);
  if (mins <= 0) return null;
  return fmtDuration(mins);
}

/* ── Field primitives ────────────────────────────────────────────── */
function Label({
  children,
  required,
  optional
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ca-label"
  }, children, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "\xB7 Optional"));
}

/* Enhanced number stepper — big tap targets, hold-to-repeat, clamps. */
function NumberStepper({
  value,
  onChange,
  min = 1,
  max = 9999,
  step = 1,
  suffix,
  size
}) {
  const clamp = v => Math.max(min, Math.min(max, v));
  const repeat = useRef(null);
  const start = dir => {
    onChange(clamp((Number(value) || 0) + dir * step));
    let delay = 400;
    const tick = () => {
      onChange(prev => clamp((Number(prev) || 0) + dir * step));
      repeat.current = setTimeout(tick, delay);
      delay = Math.max(60, delay * 0.8);
    };
    repeat.current = setTimeout(tick, delay);
  };
  const stop = () => {
    if (repeat.current) {
      clearTimeout(repeat.current);
      repeat.current = null;
    }
  };
  useEffect(() => () => stop(), []);
  const atMin = Number(value) <= min,
    atMax = Number(value) >= max;
  return /*#__PURE__*/React.createElement("div", {
    className: 'ca-stepper' + (size === 'lg' ? ' lg' : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dec",
    "aria-label": "Decrease",
    disabled: atMin,
    onMouseDown: () => start(-1),
    onMouseUp: stop,
    onMouseLeave: stop,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: size === 'lg' ? 18 : 15
  })), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: min,
    max: max,
    value: value,
    onChange: e => onChange(e.target.value === '' ? '' : clamp(Number(e.target.value))),
    onBlur: e => onChange(clamp(Number(e.target.value) || min))
  }), suffix && /*#__PURE__*/React.createElement("span", {
    className: "sfx"
  }, suffix)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "inc",
    "aria-label": "Increase",
    disabled: atMax,
    onMouseDown: () => start(1),
    onMouseUp: stop,
    onMouseLeave: stop,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: size === 'lg' ? 18 : 15
  })));
}

/* Money input with stepper-free clean affix */
function MoneyInput({
  value,
  onChange,
  suffix
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ca-money"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cur"
  }, "\u20AC"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    min: "0.01",
    max: "10000",
    step: "0.50",
    placeholder: "0.00",
    value: value,
    onChange: e => onChange(e.target.value)
  }), suffix && /*#__PURE__*/React.createElement("span", {
    className: "sfx"
  }, suffix));
}

/* Searchable category combobox — scales to any number of categories. */
function CategorySelect({
  value,
  onChange
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const boxRef = useRef(null);
  const selected = CATEGORIES.find(c => c.value === value);
  const filtered = CATEGORIES.filter(c => c.label.toLowerCase().includes(q.trim().toLowerCase()));
  useEffect(() => {
    if (!open) return;
    const close = e => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
        setQ('');
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ca-combo' + (open ? ' open' : ''),
    ref: boxRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'ca-combo-trigger' + (selected ? ' has-val' : ''),
    onClick: () => setOpen(o => !o)
  }, selected ? /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch",
    style: {
      background: CATEGORY_COLORS[selected.dot]
    }
  }), selected.label) : /*#__PURE__*/React.createElement("span", {
    className: "ph"
  }, "Select a category\u2026"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 16,
    color: "#888"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "ca-combo-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-combo-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    color: "#888"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: `Search ${CATEGORIES.length} categories…`
  }), q && /*#__PURE__*/React.createElement("button", {
    className: "clr",
    onClick: () => setQ('')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13,
    color: "#888"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ca-combo-list"
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ca-combo-empty"
  }, "No categories match \u201C", q, "\u201D."), filtered.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.value,
    type: "button",
    className: 'ca-combo-opt' + (c.value === value ? ' active' : ''),
    onClick: () => {
      onChange(c.value);
      setOpen(false);
      setQ('');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic",
    style: {
      background: CATEGORY_COLORS[c.dot] + '22',
      color: CATEGORY_COLORS[c.dot]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 14,
    color: CATEGORY_COLORS[c.dot]
  })), /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, c.label), c.value === value && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "#00AA6C",
    strokeWidth: 3
  }))))));
}

/* ════════════════════════════════════════════════════════════════ */
function CreateActivity() {
  const [step, setStep] = useState(0);
  const [maxSeen, setMaxSeen] = useState(0);
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    pricingType: 'PER_PERSON',
    basePrice: '',
    maxParticipantsPerUnit: 4,
    duration: 120,
    maxParticipants: 8,
    photos: [],
    includedItems: ['Hotel pickup & drop-off', 'Local English-speaking guide'],
    requirements: ['Comfortable shoes', 'Sun protection'],
    allowTimeSuggestions: false,
    slots: [{
      id: 1,
      startTime: '09:00',
      endTime: '11:00',
      capacity: 8
    }]
  });
  const set = patch => setForm(f => ({
    ...f,
    ...patch
  }));
  const slotSeq = useRef(3);
  const [toast, setToast] = useState(false);
  const scrollRef = useRef(null);

  /* preview flash */
  const [flash, setFlash] = useState(false);
  const flashKey = `${form.title}|${form.category}|${form.basePrice}|${form.photos[0]}|${form.duration}|${form.pricingType}|${form.maxParticipants}`;
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 500);
    return () => clearTimeout(t);
  }, [flashKey]);

  /* handlers */
  const addPhoto = url => {
    if (form.photos.length < MAX_IMAGES) set({
      photos: [...form.photos, url]
    });
  };
  const removePhoto = i => set({
    photos: form.photos.filter((_, j) => j !== i)
  });
  const moveCover = i => {
    const n = [...form.photos];
    const [p] = n.splice(i, 1);
    n.unshift(p);
    set({
      photos: n
    });
  };
  const addSlot = () => set({
    slots: [...form.slots, {
      id: slotSeq.current++,
      startTime: '10:00',
      endTime: '12:00',
      capacity: form.maxParticipants
    }]
  });
  const updateSlot = (id, patch) => set({
    slots: form.slots.map(s => s.id === id ? {
      ...s,
      ...patch
    } : s)
  });
  const removeSlot = id => set({
    slots: form.slots.filter(s => s.id !== id)
  });
  const updateList = (key, i, val) => set({
    [key]: form[key].map((b, j) => j === i ? val : b)
  });
  const addItem = key => set({
    [key]: [...form[key], '']
  });
  const removeItem = (key, i) => set({
    [key]: form[key].filter((_, j) => j !== i)
  });

  /* per-step validity (gates the Next button) */
  const titleErr = form.title.length > 0 && form.title.trim().length < 5;
  const descErr = form.description.length > 0 && form.description.trim().length < 20;
  const stepValid = [form.title.trim().length >= 5 && form.title.length <= 255 && !!form.category && form.description.trim().length >= 20, form.photos.length >= 1, Number(form.basePrice) >= 0.01 && Number(form.basePrice) <= 10000 && (form.pricingType !== 'PER_GROUP' || form.maxParticipantsPerUnit >= 1), form.duration >= 15 && form.duration <= 1440 && form.maxParticipants >= 1 && form.maxParticipants <= 100, true, form.slots.length >= 1 && form.slots.every(s => slotDuration(s.startTime, s.endTime) && s.capacity >= 1)];
  const goNext = () => {
    if (step < STEPS.length - 1 && stepValid[step]) {
      const n = step + 1;
      setStep(n);
      setMaxSeen(m => Math.max(m, n));
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  };
  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  };
  const jumpTo = i => {
    if (i <= maxSeen) {
      setStep(i);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  };
  const allValid = stepValid.every(Boolean);
  const publish = () => {
    if (!allValid) return;
    setToast(true);
    setTimeout(() => setToast(false), 3400);
  };
  const cat = CATEGORIES.find(c => c.value === form.category);
  const isGroup = form.pricingType === 'PER_GROUP';
  const isLast = step === STEPS.length - 1;

  /* ── current phase divider ── */
  const phase = STEPS[step].phase;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ca-back",
    "aria-label": "Back to activities"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, "My activities \xB7 New listing"), /*#__PURE__*/React.createElement("h2", null, "Create a new activity"))), /*#__PURE__*/React.createElement("div", {
    className: "ca-wiz-steps"
  }, STEPS.map((s, i) => {
    const state = i === step ? 'active' : i < step || i <= maxSeen && stepValid[i] && i < step ? 'done' : i <= maxSeen ? 'seen' : 'todo';
    const done = i < step || i <= maxSeen && i !== step && stepValid[i];
    return /*#__PURE__*/React.createElement(Fragment, {
      key: s.id
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: 'ca-wiz-step ' + (i === step ? 'active' : done ? 'done' : i <= maxSeen ? 'seen' : 'todo'),
      onClick: () => jumpTo(i),
      disabled: i > maxSeen
    }, /*#__PURE__*/React.createElement("span", {
      className: "bub"
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "#fff",
      strokeWidth: 3
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "lab"
    }, s.label)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: 'ca-wiz-bar' + (i < step ? ' done' : '')
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "ca-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-form",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-phase-tag"
  }, phase === 'Availability' ? 'Availability' : 'Activity details', " \xB7 Step ", step + 1, " of ", STEPS.length), /*#__PURE__*/React.createElement("div", {
    className: "ca-step-card",
    key: step
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 18,
    color: "#00703A"
  }), "The basics"), /*#__PURE__*/React.createElement("p", null, "What travellers see first. Be specific \u2014 \u201CSunset camel ride at Ras R'mel\u201D beats \u201CCamel tour\u201D.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Title"), /*#__PURE__*/React.createElement("input", {
    className: 'ca-input' + (titleErr ? ' err' : ''),
    maxLength: 255,
    placeholder: "e.g. Sunset camel ride at Ras R'mel",
    value: form.title,
    onChange: e => set({
      title: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "ca-input-counter",
    style: titleErr ? {
      color: '#A30000'
    } : {}
  }, titleErr ? 'At least 5 characters' : `${form.title.length}/255`)), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Category"), /*#__PURE__*/React.createElement(CategorySelect, {
    value: form.category,
    onChange: v => set({
      category: v
    })
  }), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, "Choose the category that best fits \u2014 travellers filter activities by this.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Description"), /*#__PURE__*/React.createElement("textarea", {
    className: 'ca-input' + (descErr ? ' err' : ''),
    maxLength: 5000,
    placeholder: "Walk travellers through the experience \u2014 the highlights, the pace, who it's perfect for\u2026",
    value: form.description,
    onChange: e => set({
      description: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "ca-input-counter",
    style: descErr ? {
      color: '#A30000'
    } : {}
  }, descErr ? 'At least 20 characters' : `${form.description.length}/5000 · 20 minimum`))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    size: 18,
    color: "#00703A"
  }), "Photos"), /*#__PURE__*/React.createElement("p", null, "Up to ", MAX_IMAGES, " images. The first is your cover \u2014 listings with 4+ photos get up to 2\xD7 the bookings.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-photo-flow"
  }, form.photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'ca-photo-tile' + (i === 0 ? ' cover' : '')
  }, /*#__PURE__*/React.createElement("img", {
    src: p,
    alt: ""
  }), i === 0 && /*#__PURE__*/React.createElement("span", {
    className: "cover-badge"
  }, "Cover"), i !== 0 && /*#__PURE__*/React.createElement("button", {
    className: "mk-cover",
    onClick: () => moveCover(i)
  }, "Make cover"), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    "aria-label": "Remove",
    onClick: () => removePhoto(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13,
    color: "#fff"
  })))), form.photos.length < MAX_IMAGES && /*#__PURE__*/React.createElement("button", {
    className: "ca-photo-add",
    onClick: () => addPhoto(SAMPLE_PHOTOS[form.photos.length % SAMPLE_PHOTOS.length])
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20,
    color: "#999"
  }), /*#__PURE__*/React.createElement("span", null, "Add photo"))), /*#__PURE__*/React.createElement("div", {
    className: "ca-sample-strip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, form.photos.length, "/", MAX_IMAGES, " added \xB7 pick a sample:"), SAMPLE_PHOTOS.map((url, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ca-sample",
    onClick: () => addPhoto(url)
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: ""
  }))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 18,
    color: "#00703A"
  }), "Pricing"), /*#__PURE__*/React.createElement("p", null, "Choose how you charge, then set the base price. TripInsel takes 12% commission; you keep the rest, paid weekly.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Pricing type"), /*#__PURE__*/React.createElement("div", {
    className: "ca-seg"
  }, PRICING_TYPES.map(pt => /*#__PURE__*/React.createElement("button", {
    key: pt.value,
    type: "button",
    className: 'ca-seg-btn' + (form.pricingType === pt.value ? ' active' : ''),
    onClick: () => set({
      pricingType: pt.value
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pt.value === 'PER_PERSON' ? 'user' : 'users',
    size: 15,
    color: form.pricingType === pt.value ? '#00703A' : '#555'
  }), pt.label))), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, PRICING_TYPES.find(p => p.value === form.pricingType).help)), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Base price"), /*#__PURE__*/React.createElement(MoneyInput, {
    value: form.basePrice,
    onChange: v => set({
      basePrice: v
    }),
    suffix: isGroup ? '/ group' : '/ person'
  }), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, "Between \u20AC0.01 and \u20AC10,000.")), isGroup && /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Participants per unit"), /*#__PURE__*/React.createElement(NumberStepper, {
    value: form.maxParticipantsPerUnit,
    onChange: v => set({
      maxParticipantsPerUnit: v
    }),
    min: 1,
    max: 100,
    suffix: "people"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, "How many people one group price covers.")), Number(form.basePrice) >= 0.01 && /*#__PURE__*/React.createElement("div", {
    className: "ca-payout"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 14,
    color: "#00703A"
  }), "You keep ", /*#__PURE__*/React.createElement("strong", null, formatEUR(Number(form.basePrice) * 0.88)), " per ", isGroup ? 'group' : 'person', " after the 12% commission.")), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18,
    color: "#00703A"
  }), "Duration & capacity"), /*#__PURE__*/React.createElement("p", null, "How long it runs and the most people you can host at once.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Duration"), /*#__PURE__*/React.createElement("div", {
    className: "ca-duration-grid"
  }, DURATIONS.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    type: "button",
    className: 'ca-dur-chip' + (form.duration === m ? ' active' : ''),
    onClick: () => set({
      duration: m
    })
  }, fmtDuration(m)))), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, "15 minutes to 24 hours.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Maximum participants"), /*#__PURE__*/React.createElement(NumberStepper, {
    value: form.maxParticipants,
    onChange: v => set({
      maxParticipants: v
    }),
    min: 1,
    max: 100,
    suffix: "people",
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ca-help"
  }, "Across all bookings in one slot \xB7 max 100."))), step === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 18,
    color: "#00703A"
  }), "Inclusions & requirements"), /*#__PURE__*/React.createElement("p", null, "Set expectations clearly. Both lists appear on the activity page \u2014 these are optional but boost bookings.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    optional: true
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    className: "ca-bullets"
  }, form.includedItems.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ca-bullet-row inc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#00703A",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("input", {
    className: "ca-input",
    value: b,
    placeholder: "e.g. Hotel pickup",
    onChange: e => updateList('includedItems', i, e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    "aria-label": "Remove",
    onClick: () => removeItem('includedItems', i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "ca-add-bullet",
    type: "button",
    onClick: () => addItem('includedItems')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13,
    color: "#00AA6C"
  }), " Add included item")), /*#__PURE__*/React.createElement("div", {
    className: "ca-field"
  }, /*#__PURE__*/React.createElement(Label, {
    optional: true
  }, "Requirements"), /*#__PURE__*/React.createElement("div", {
    className: "ca-bullets"
  }, form.requirements.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ca-bullet-row req-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 11,
    color: "#8A6000"
  })), /*#__PURE__*/React.createElement("input", {
    className: "ca-input",
    value: b,
    placeholder: "e.g. Comfortable shoes, able to swim",
    onChange: e => updateList('requirements', i, e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    "aria-label": "Remove",
    onClick: () => removeItem('requirements', i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "ca-add-bullet",
    type: "button",
    onClick: () => addItem('requirements')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13,
    color: "#00AA6C"
  }), " Add requirement"))), step === 5 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ca-step-head avail"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18,
    color: "#00703A"
  }), "Availability slots"), /*#__PURE__*/React.createElement("p", null, "Now the scheduling. Add the daily departure times travellers can book \u2014 each slot carries its own capacity.")), /*#__PURE__*/React.createElement("div", {
    className: "ca-slots"
  }, form.slots.map((s, idx) => {
    const dur = slotDuration(s.startTime, s.endTime);
    const overCap = s.capacity > form.maxParticipants;
    const invalid = !dur;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: 'ca-slot2' + (invalid ? ' invalid' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-id"
    }, /*#__PURE__*/React.createElement("span", {
      className: "badge"
    }, idx + 1), /*#__PURE__*/React.createElement("span", {
      className: "ttl"
    }, "Time slot ", idx + 1)), /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-head-right"
    }, dur ? /*#__PURE__*/React.createElement("span", {
      className: "ca-slot2-dur"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 12,
      color: "#00703A"
    }), dur) : /*#__PURE__*/React.createElement("span", {
      className: "ca-slot2-dur err"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alertCircle",
      size: 12,
      color: "#A30000"
    }), "End after start"), /*#__PURE__*/React.createElement("button", {
      className: "ca-slot2-rm",
      "aria-label": "Remove slot",
      disabled: form.slots.length <= 1,
      onClick: () => removeSlot(s.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 15
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "mini-label"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 11,
      color: "#888"
    }), " Start"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "ca-input",
      value: s.startTime,
      onChange: e => updateSlot(s.id, {
        startTime: e.target.value
      })
    })), /*#__PURE__*/React.createElement("span", {
      className: "ca-slot2-sep"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "#C8C8C8"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-field"
    }, /*#__PURE__*/React.createElement("label", {
      className: "mini-label"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 11,
      color: "#888"
    }), " End"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "ca-input",
      value: s.endTime,
      onChange: e => updateSlot(s.id, {
        endTime: e.target.value
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-divider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-field cap"
    }, /*#__PURE__*/React.createElement("label", {
      className: "mini-label"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11,
      color: "#888"
    }), " Capacity"), /*#__PURE__*/React.createElement(NumberStepper, {
      value: s.capacity,
      onChange: v => updateSlot(s.id, {
        capacity: v
      }),
      min: 1,
      max: 100,
      suffix: "seats"
    }))), overCap && /*#__PURE__*/React.createElement("div", {
      className: "ca-slot2-warn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alertCircle",
      size: 13,
      color: "#8A6000"
    }), "Capacity (", s.capacity, ") is above this activity's max participants (", form.maxParticipants, "). Travellers can't book more than the activity allows."));
  })), /*#__PURE__*/React.createElement("button", {
    className: "ca-add-slot",
    type: "button",
    onClick: addSlot,
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15,
    color: "#00AA6C"
  }), " Add another time slot"), /*#__PURE__*/React.createElement("label", {
    className: "ca-toggle-row",
    onClick: () => set({
      allowTimeSuggestions: !form.allowTimeSuggestions
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: 'ca-switch' + (form.allowTimeSuggestions ? ' on' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "knob"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tt"
  }, /*#__PURE__*/React.createElement("b", null, "Allow travellers to suggest a time"), /*#__PURE__*/React.createElement("span", null, "If none of your slots fit, travellers can request a custom time and you approve or decline it."))))), /*#__PURE__*/React.createElement("div", {
    className: "ca-wiz-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ca-nav-back",
    type: "button",
    onClick: goBack,
    disabled: step === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 16
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    className: "ca-nav-spacer"
  }), !isLast ? /*#__PURE__*/React.createElement("button", {
    className: "ca-nav-next",
    type: "button",
    onClick: goNext,
    disabled: !stepValid[step]
  }, "Continue \xB7 ", STEPS[step + 1].label, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16,
    color: "#fff"
  })) : /*#__PURE__*/React.createElement("button", {
    className: "ca-nav-next publish",
    type: "button",
    onClick: publish,
    disabled: !allValid
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 15,
    color: "#fff"
  }), " Publish activity"))), /*#__PURE__*/React.createElement("aside", {
    className: "ca-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-rail-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ca-live-dot"
  }), " Live preview \xB7 what tourists see"), /*#__PURE__*/React.createElement("div", {
    className: 'ca-preview-card' + (flash ? ' ca-flash' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: 'pc-img' + (form.photos[0] ? '' : ' empty'),
    style: form.photos[0] ? {
      backgroundImage: `url(${form.photos[0]})`
    } : {}
  }, !form.photos[0] && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    size: 22,
    color: "#999"
  }), "Add a cover photo"), cat && /*#__PURE__*/React.createElement("span", {
    className: "pc-cat"
  }, /*#__PURE__*/React.createElement(CategoryDot, {
    category: cat.dot
  }), cat.label), /*#__PURE__*/React.createElement("span", {
    className: "pc-heart"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 15,
    color: "#161616"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pc-new"
  }, "New"), form.photos.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: "pc-count"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    size: 11,
    color: "#fff"
  }), form.photos.length)), /*#__PURE__*/React.createElement("div", {
    className: "pc-body"
  }, /*#__PURE__*/React.createElement("h4", {
    className: 'pc-title' + (form.title ? '' : ' placeholder')
  }, form.title || 'Your activity title'), /*#__PURE__*/React.createElement("div", {
    className: "pc-meta"
  }, fmtDuration(form.duration) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12,
    color: "#555"
  }), fmtDuration(form.duration)), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 12,
    color: "#555"
  }), "Up to ", form.maxParticipants)), /*#__PURE__*/React.createElement("div", {
    className: "pc-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-price"
  }, Number(form.basePrice) >= 0.01 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, formatEUR(Number(form.basePrice))), " ", /*#__PURE__*/React.createElement("span", null, isGroup ? `/ group of ${form.maxParticipantsPerUnit}` : '/ person')) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999'
    }
  }, "Set a price \u2192")), /*#__PURE__*/React.createElement("button", {
    className: "pc-book"
  }, "Book")))), /*#__PURE__*/React.createElement("div", {
    className: "ca-checklist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, /*#__PURE__*/React.createElement("h4", null, "Your progress"), /*#__PURE__*/React.createElement("div", {
    className: "ca-progress-ring"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "16",
    fill: "none",
    stroke: "#E8E8E8",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "16",
    fill: "none",
    stroke: "#00AA6C",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeDasharray: 2 * Math.PI * 16,
    strokeDashoffset: 2 * Math.PI * 16 * (1 - stepValid.filter(Boolean).length / STEPS.length),
    transform: "rotate(-90 20 20)",
    style: {
      transition: 'stroke-dashoffset 0.5s cubic-bezier(0.16,1,0.3,1)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, Math.round(stepValid.filter(Boolean).length / STEPS.length * 100), "%"))), STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: 'ca-check-item as-btn' + (stepValid[i] ? ' done' : '') + (i === step ? ' current' : ''),
    disabled: i > maxSeen,
    onClick: () => jumpTo(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, stepValid[i] && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    strokeWidth: 3
  })), s.label, i === step && /*#__PURE__*/React.createElement("span", {
    className: "now"
  }, "Now")))), /*#__PURE__*/React.createElement("div", {
    className: "ca-rail-note"
  }, "New listings are reviewed by the TripInsel team within 24 hours before going live."))), /*#__PURE__*/React.createElement("div", {
    className: 'ca-toast' + (toast ? ' show' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "#fff",
    strokeWidth: 3
  })), "Activity submitted! We'll review \u201C", form.title, "\u201D within 24 hours."));
}

/* ── App shell ───────────────────────────────────────────────────── */
const HOST_LINKS = [{
  id: 'overview',
  label: 'Overview',
  icon: 'dashboard'
}, {
  id: 'activities',
  label: 'My activities',
  icon: 'briefcase'
}, {
  id: 'bookings',
  label: 'Bookings',
  icon: 'calendar',
  badge: '3'
}, {
  id: 'wallet',
  label: 'Wallet',
  icon: 'wallet'
}, {
  id: 'reviews',
  label: 'Reviews',
  icon: 'star'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'user'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
const HOST_USER = {
  name: 'Ahmed Tours',
  email: 'ahmed@tours.tn',
  initials: 'AT'
};
function CreateActivityApp() {
  return /*#__PURE__*/React.createElement(DashboardShell, {
    role: "Local host",
    user: HOST_USER,
    links: HOST_LINKS,
    current: "activities",
    onNavigate: () => {}
  }, /*#__PURE__*/React.createElement(CreateActivity, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CreateActivityApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/host-activity/create-activity.jsx", error: String((e && e.message) || e) }); }

// src/pages/landing/experience.jsx
try { (() => {
// TripInsel · Connected experience orchestrator
// Hash router: #/ landing · #/signin · #/forgot · #/signup · #/launch
// Session persisted in localStorage. Reuses TouristWizard + SuIcon/Field/Input/
// PhoneInput from the signup screens. Routes each role into its real app.
// Production: this is App.jsx + pages/{Landing,SignIn,ForgotPassword,Signup}.jsx
// + context/AuthContext.jsx (session) with React Router instead of hashes.

const {
  useState: useXs,
  useEffect: useXe
} = React;

/* App destinations (relative links into the existing apps) */
const APPS = {
  traveller: '../tourist/index.html',
  host: '../provider/index.html',
  admin: '../admin/index.html'
};
const ROLE_META = {
  traveller: {
    label: 'Traveller',
    icon: 'compass',
    app: 'tourist marketplace',
    blurb: 'Discover and book Djerba experiences.'
  },
  host: {
    label: 'Local host',
    icon: 'briefcase',
    app: 'local-host portal',
    blurb: 'List activities and manage bookings.'
  },
  admin: {
    label: 'Administrator',
    icon: 'shieldCheck',
    app: 'admin dashboard',
    blurb: 'Verify hosts and oversee the platform.'
  }
};
const SESSION_KEY = 'ti_session';
const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
};
const setSession = s => localStorage.setItem(SESSION_KEY, JSON.stringify({
  ...s,
  ts: Date.now()
}));
const clearSession = () => localStorage.removeItem(SESSION_KEY);

/* hash routing */
const useRoute = () => {
  const [route, setRoute] = useXs(() => location.hash.replace('#/', '') || '');
  useXe(() => {
    const h = () => setRoute(location.hash.replace('#/', '') || '');
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  return [route, r => {
    location.hash = '#/' + r;
    window.scrollTo(0, 0);
  }];
};

/* ── small wordmark ── */
const WM = ({
  light,
  onClick
}) => /*#__PURE__*/React.createElement("a", {
  className: 'xp-wm' + (light ? ' light' : ''),
  onClick: onClick,
  style: {
    cursor: 'pointer'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "bub"
}), "TripInsel");

/* ════════════════════════════════════════════════════════════════
   LANDING
   ════════════════════════════════════════════════════════════════ */
function Landing({
  nav
}) {
  const sess = getSession();
  const goApp = role => {
    window.location.href = APPS[role];
  };
  const demo = role => {
    const names = {
      traveller: 'Sofia K.',
      host: 'Ahmed Tours',
      admin: 'Platform Admin'
    };
    const emails = {
      traveller: 'sofia@example.com',
      host: 'ahmed@tours.tn',
      admin: 'admin@tripinsel.tn'
    };
    setSession({
      role,
      name: names[role],
      email: emails[role],
      demo: true
    });
    goApp(role);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-landing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-brandside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo"
  }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement(WM, {
    light: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "TripAdvisor for Djerba"), /*#__PURE__*/React.createElement("h1", null, "Every experience on the island, in one place."), /*#__PURE__*/React.createElement("p", null, "Book sunset camel rides, flamingo lagoons and cooking classes \u2014 led by verified local hosts. Or list your own and reach thousands of travellers.")), /*#__PURE__*/React.createElement("div", {
    className: "xp-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "342"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Activities")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "87"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Local hosts")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "4.8\u2605"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Avg rating")))), /*#__PURE__*/React.createElement("div", {
    className: "xp-actionside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-actionwrap"
  }, /*#__PURE__*/React.createElement("a", {
    className: "xp-wm top-wm",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub"
  }), "TripInsel"), sess ? /*#__PURE__*/React.createElement("div", {
    className: "xp-session-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, (sess.name || 'U').split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    className: "m"
  }, /*#__PURE__*/React.createElement("b", null, "Welcome back, ", sess.name.split(' ')[0]), /*#__PURE__*/React.createElement("span", null, "Signed in as ", ROLE_META[sess.role].label)), /*#__PURE__*/React.createElement("button", {
    className: "go",
    onClick: () => goApp(sess.role)
  }, "Continue")) : null, /*#__PURE__*/React.createElement("h2", null, sess ? 'Or start fresh' : 'Welcome to TripInsel'), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sess ? 'Sign in with a different account or create a new one.' : 'Sign in to your account, or create one in under a minute.'), /*#__PURE__*/React.createElement("button", {
    className: "xp-cta primary",
    onClick: () => nav('signin')
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "xp-cta ghost",
    onClick: () => nav('signup')
  }, "Create an account"), /*#__PURE__*/React.createElement("div", {
    className: "xp-divider"
  }, "Explore as a demo"), /*#__PURE__*/React.createElement("div", {
    className: "xp-demos"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xp-demo traveller",
    onClick: () => demo('traveller')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("b", null, "Traveller"), /*#__PURE__*/React.createElement("span", null, "Browse & book activities")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "#999"
  })), /*#__PURE__*/React.createElement("button", {
    className: "xp-demo host",
    onClick: () => demo('host')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("b", null, "Local host"), /*#__PURE__*/React.createElement("span", null, "Manage your activities")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "#999"
  })), /*#__PURE__*/React.createElement("button", {
    className: "xp-demo admin",
    onClick: () => demo('admin')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("b", null, "Administrator"), /*#__PURE__*/React.createElement("span", null, "Oversee the platform")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    color: "#999"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "xp-legal"
  }, "By continuing you agree to our ", /*#__PURE__*/React.createElement("a", null, "Terms"), " & ", /*#__PURE__*/React.createElement("a", null, "Privacy policy"), "."))));
}

/* ════════════════════════════════════════════════════════════════
   SIGN IN  (+ forgot link)
   ════════════════════════════════════════════════════════════════ */
function SignIn({
  nav
}) {
  const [email, setEmail] = useXs('');
  const [pw, setPw] = useXs('');
  const [show, setShow] = useXs(false);
  const emailOk = /\S+@\S+\.\S+/.test(email);
  const valid = emailOk && pw.length >= 1;
  const signInAs = (role, name, mail) => {
    setSession({
      role,
      name,
      email: mail || email,
      demo: role !== 'traveller'
    });
    window.location.href = APPS[role];
  };
  const submit = e => {
    e.preventDefault();
    if (valid) signInAs('traveller', 'Sofia K.');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-auth"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-auth-top"
  }, /*#__PURE__*/React.createElement(WM, {
    onClick: () => nav('')
  }), /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: () => nav('')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 15
  }), " Back")), /*#__PURE__*/React.createElement("div", {
    className: "xp-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Welcome back"), /*#__PURE__*/React.createElement("h2", null, "Sign in"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Sign in to pick up where you left off."), /*#__PURE__*/React.createElement("div", {
    className: "su-oauth-stack"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-oauth-btn primary",
    onClick: () => signInAs('traveller', 'Lina Bouazizi', 'lina.b@gmail.com')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
  })), "Continue with Google"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "su-oauth-btn",
    onClick: () => signInAs('traveller', 'Lina Bouazizi', 'lina.b@icloud.com')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "#161616"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"
  })), "Continue with Apple")), /*#__PURE__*/React.createElement("div", {
    className: "su-divider"
  }, "or with your email"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "su-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 15,
    color: "#999"
  })), /*#__PURE__*/React.createElement("input", {
    className: 'su-input' + (email && !emailOk ? ' error' : ''),
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-label-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Password"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "xp-forgot-link",
    onClick: () => nav('forgot')
  }, "Forgot password?")), /*#__PURE__*/React.createElement("div", {
    className: "su-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lead"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 15,
    color: "#999"
  })), /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    className: "su-input",
    placeholder: "Your password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "trail",
    onClick: () => setShow(s => !s),
    style: {
      font: '700 12px var(--font-primary)',
      color: 'var(--color-primary)'
    }
  }, show ? 'Hide' : 'Show'))), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !valid,
    type: "submit"
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    className: "su-divider"
  }, "demo accounts \xB7 one tap"), /*#__PURE__*/React.createElement("div", {
    className: "xp-signin-demos"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xp-signin-demo traveller",
    onClick: () => signInAs('traveller', 'Sofia K.', 'sofia@example.com')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 17
  })), /*#__PURE__*/React.createElement("b", null, "Traveller")), /*#__PURE__*/React.createElement("button", {
    className: "xp-signin-demo host",
    onClick: () => signInAs('host', 'Ahmed Tours', 'ahmed@tours.tn')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 17
  })), /*#__PURE__*/React.createElement("b", null, "Host")), /*#__PURE__*/React.createElement("button", {
    className: "xp-signin-demo admin",
    onClick: () => signInAs('admin', 'Platform Admin', 'admin@tripinsel.tn')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    size: 17
  })), /*#__PURE__*/React.createElement("b", null, "Admin"))), /*#__PURE__*/React.createElement("p", {
    className: "xp-foot-switch"
  }, "New to TripInsel?", /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('signup')
  }, "Create an account"))));
}

/* ════════════════════════════════════════════════════════════════
   FORGOT PASSWORD  (email → sent → reset → done)
   ════════════════════════════════════════════════════════════════ */
function Forgot({
  nav
}) {
  const [stage, setStage] = useXs(0); // 0 email, 1 sent, 2 reset, 3 done
  const [email, setEmail] = useXs('');
  const [pw, setPw] = useXs('');
  const [pw2, setPw2] = useXs('');
  const emailOk = /\S+@\S+\.\S+/.test(email);
  const pwOk = pw.length >= 8 && pw === pw2;
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-auth"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-auth-top"
  }, /*#__PURE__*/React.createElement(WM, {
    onClick: () => nav('')
  }), /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: () => nav('signin')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 15
  }), " Back to sign in")), /*#__PURE__*/React.createElement("div", {
    className: "xp-card"
  }, stage === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Account recovery"), /*#__PURE__*/React.createElement("h2", null, "Forgot your password?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Enter your email and we'll send you a link to reset it."), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: 'su-input' + (email && !emailOk ? ' error' : ''),
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !emailOk,
    onClick: () => setStage(1)
  }, "Send reset link"))), stage === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 9999,
      background: 'var(--color-primary-light)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 28
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Check your inbox"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      textAlign: 'center'
    }
  }, "We sent a reset link to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-text-primary)'
    }
  }, email), ". It expires in 30 minutes."), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    onClick: () => setStage(2)
  }, "Open reset link (demo)"), /*#__PURE__*/React.createElement("button", {
    className: "su-btn-ghost",
    onClick: () => setStage(0)
  }, "Use a different email")), /*#__PURE__*/React.createElement("p", {
    className: "xp-foot-switch"
  }, "Didn't get it? ", /*#__PURE__*/React.createElement("button", {
    onClick: () => setStage(1)
  }, "Resend"))), stage === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Almost done"), /*#__PURE__*/React.createElement("h2", null, "Set a new password"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Choose a strong password you haven't used before."), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "New password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "su-input",
    placeholder: "At least 8 characters",
    value: pw,
    onChange: e => setPw(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Confirm password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: 'su-input' + (pw2 && pw !== pw2 ? ' error' : ''),
    placeholder: "Re-enter password",
    value: pw2,
    onChange: e => setPw2(e.target.value)
  }), pw2 && pw !== pw2 && /*#__PURE__*/React.createElement("span", {
    className: "su-err"
  }, "Passwords don't match")), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !pwOk,
    onClick: () => setStage(3)
  }, "Reset password"))), stage === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 9999,
      background: 'var(--color-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Password reset"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      textAlign: 'center'
    }
  }, "Your password has been updated. You can now sign in."), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    onClick: () => nav('signin')
  }, "Back to sign in")))));
}

/* ════════════════════════════════════════════════════════════════
   SIGN UP — role pick → traveller wizard / host flow
   ════════════════════════════════════════════════════════════════ */
function Signup({
  nav
}) {
  const [role, setRole] = useXs(null);
  const finishTraveller = data => {
    setSession({
      role: 'traveller',
      name: `${data.firstName || 'Lina'} ${data.lastName || ''}`.trim(),
      email: data.email || 'traveller@example.com'
    });
    window.location.href = APPS.traveller;
  };
  if (role === 'traveller') {
    return /*#__PURE__*/React.createElement("div", {
      className: "xp-auth",
      style: {
        padding: 0,
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 560,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(TouristWizard, {
      onComplete: finishTraveller
    })));
  }
  if (role === 'host') return /*#__PURE__*/React.createElement(HostSignup, {
    nav: nav,
    onBack: () => setRole(null)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-auth"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-auth-top"
  }, /*#__PURE__*/React.createElement(WM, {
    onClick: () => nav('')
  }), /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: () => nav('')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 15
  }), " Back")), /*#__PURE__*/React.createElement("div", {
    className: "xp-card xp-rolepick"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Create your account"), /*#__PURE__*/React.createElement("h2", null, "How will you use TripInsel?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Pick what fits you best. You can hold separate accounts for each."), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xp-rolecard traveller",
    onClick: () => setRole('traveller')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("h4", null, "I'm a traveller"), /*#__PURE__*/React.createElement("p", null, "Discover and book activities, tours and experiences across Djerba."), /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, "Most popular \xB7 ~1 minute")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    color: "#999"
  })), /*#__PURE__*/React.createElement("button", {
    className: "xp-rolecard host",
    onClick: () => setRole('host')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, /*#__PURE__*/React.createElement("h4", null, "I run a tour business"), /*#__PURE__*/React.createElement("p", null, "List experiences, manage bookings and get paid. Verified hosts get a trust badge."), /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, "Licence required \xB7 ~5 minutes")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    color: "#999"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "xp-staffnote"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13,
    color: "#999"
  }), " TripInsel staff sign in at a private URL with their invitation code."), /*#__PURE__*/React.createElement("p", {
    className: "xp-foot-switch"
  }, "Already have an account?", /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('signin')
  }, "Sign in"))));
}

/* ── Host signup — compact 2-step interactive ── */
function HostSignup({
  nav,
  onBack
}) {
  const [step, setStep] = useXs(0);
  const [d, setD] = useXs({
    business: '',
    email: '',
    password: '',
    phone: '',
    license: '',
    address: '',
    pinned: false
  });
  const u = p => setD(x => ({
    ...x,
    ...p
  }));
  const emailOk = /\S+@\S+\.\S+/.test(d.email);
  const step1Valid = d.business.trim().length >= 2 && emailOk && d.password.length >= 8 && d.phone.replace(/\D/g, '').length >= 6 && d.license.trim().length >= 3;
  const step2Valid = d.pinned && d.address.trim().length > 3;
  const finish = () => {
    setSession({
      role: 'host',
      name: d.business || 'Your business',
      email: d.email
    });
    window.location.href = '#/launch?role=host';
    location.hash = '#/launch';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-host"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-auth-top",
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(WM, {
    onClick: () => nav('')
  }), /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft",
    size: 15
  }), " Roles")), /*#__PURE__*/React.createElement("div", {
    className: "xp-card",
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-stepper",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'step ' + (step === 0 ? 'active' : 'done')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, step > 0 ? /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 12,
    stroke: 3
  }) : '1'), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Business")), /*#__PURE__*/React.createElement("div", {
    className: 'bar' + (step > 0 ? ' done' : '')
  }), /*#__PURE__*/React.createElement("div", {
    className: 'step ' + (step === 1 ? 'active' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Location"))), step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--color-primary)',
      marginBottom: 8
    }
  }, "For tour operators"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 24px var(--font-primary)',
      margin: '0 0 6px'
    }
  }, "Tell us about your business"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      font: '400 14px var(--font-primary)',
      color: 'var(--color-text-secondary)',
      margin: '0 0 22px'
    }
  }, "We review your details before activating listings."), /*#__PURE__*/React.createElement(Field, {
    label: "Business name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    placeholder: "e.g. Djerba Dunes Adventures",
    value: d.business,
    onChange: e => u({
      business: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Business email"
  }, /*#__PURE__*/React.createElement("input", {
    className: 'su-input' + (d.email && !emailOk ? ' error' : ''),
    placeholder: "contact@yourbusiness.tn",
    value: d.email,
    onChange: e => u({
      email: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "su-input",
    placeholder: "At least 8 characters",
    value: d.password,
    onChange: e => u({
      password: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone number"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prefix"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, "\uD83C\uDDF9\uD83C\uDDF3"), "+216"), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    inputMode: "tel",
    placeholder: "55 234 187",
    value: d.phone,
    onChange: e => u({
      phone: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Tourism licence number",
    hint: "ONTT or Ministry of Tourism issued."
  }, /*#__PURE__*/React.createElement("input", {
    className: "su-input",
    placeholder: "e.g. ONTT-2024-08412",
    value: d.license,
    onChange: e => u({
      license: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    disabled: !step1Valid,
    onClick: () => setStep(1)
  }, "Continue to location ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--color-primary)',
      marginBottom: 8
    }
  }, "Step 2 \xB7 Location"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 24px var(--font-primary)',
      margin: '0 0 6px'
    }
  }, "Where do travellers find you?"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      font: '400 14px var(--font-primary)',
      color: 'var(--color-text-secondary)',
      margin: '0 0 18px'
    }
  }, "Drop a pin \u2014 the address fills in automatically."), /*#__PURE__*/React.createElement("div", {
    className: "su-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "su-label"
  }, "Pin your spot"), /*#__PURE__*/React.createElement("div", {
    className: "su-map",
    style: {
      aspectRatio: '16 / 8'
    },
    onClick: () => u({
      pinned: true,
      address: 'Route Touristique, km 8, Houmt Souk, Djerba'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "land",
    viewBox: "0 0 400 200",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M120,60 C 150,38 220,38 270,54 C 320,70 340,96 335,128 C 330,160 280,176 215,172 C 150,168 105,148 95,122 C 85,96 95,80 120,60 Z",
    fill: "#F5EFD9",
    stroke: "rgba(0,0,0,0.10)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ring"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pin"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "42",
    viewBox: "0 0 34 44"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 1c8.8 0 16 7 16 15.6 0 11-16 26.4-16 26.4S1 27.6 1 16.6C1 8 8.2 1 17 1Z",
    fill: "#00AA6C",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "16.5",
    r: "5.5",
    fill: "#fff"
  }))), !d.pinned && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 12,
      transform: 'translateX(-50%)',
      background: 'rgba(22,22,22,0.8)',
      color: '#fff',
      font: '600 11px var(--font-primary)',
      padding: '6px 12px',
      borderRadius: 9999
    }
  }, "Click to drop the pin"))), d.pinned && /*#__PURE__*/React.createElement("div", {
    className: "su-autofilled",
    style: {
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "check",
    size: 12,
    stroke: 3
  }), " Address filled from your pin"), /*#__PURE__*/React.createElement(Field, {
    label: "Street address"
  }, /*#__PURE__*/React.createElement("input", {
    className: 'su-input' + (d.pinned ? ' su-input-auto' : ''),
    placeholder: "Drop the pin to auto-fill",
    value: d.address,
    onChange: e => u({
      address: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "su-actions",
    style: {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "su-btn-ghost",
    style: {
      flex: '0 0 auto'
    },
    onClick: () => setStep(0)
  }, /*#__PURE__*/React.createElement(SuIcon, {
    name: "back",
    size: 16,
    stroke: 2.5
  }), " Back"), /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    style: {
      flex: 1
    },
    disabled: !step2Valid,
    onClick: finish
  }, "Submit for review ", /*#__PURE__*/React.createElement(SuIcon, {
    name: "arrow",
    size: 16,
    stroke: 2.5
  }))))));
}

/* ════════════════════════════════════════════════════════════════
   LAUNCH HUB
   ════════════════════════════════════════════════════════════════ */
function Launch({
  nav
}) {
  const sess = getSession();
  if (!sess) {
    nav('signin');
    return null;
  }
  const m = ROLE_META[sess.role];
  const pending = sess.role === 'host';
  return /*#__PURE__*/React.createElement("div", {
    className: "xp-launch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xp-launch-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'xp-launch-burst ' + sess.role
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 36,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "role-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 12,
    color: "#00703A"
  }), " ", m.label), /*#__PURE__*/React.createElement("h2", null, "Welcome", sess.name ? `, ${sess.name.split(' ')[0]}` : '', "!"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, m.blurb, " Your ", m.app, " is ready."), pending && /*#__PURE__*/React.createElement("div", {
    className: "pending"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "#8A6000"
  }), /*#__PURE__*/React.createElement("span", null, "Your business is under review \u2014 the TripInsel team verifies new hosts within 24 hours. You can set up listings meanwhile.")), /*#__PURE__*/React.createElement("button", {
    className: "su-btn-primary",
    style: {
      width: '100%'
    },
    onClick: () => window.location.href = APPS[sess.role]
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16,
    color: "#fff"
  }), " Enter the ", m.app), /*#__PURE__*/React.createElement("div", {
    className: "xp-launch-foot"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      clearSession();
      nav('signin');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 13
  }), " Log out"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('')
  }, "Back to home"))));
}

/* ════════════════════════════════════════════════════════════════ */
function Experience() {
  const [route, nav] = useRoute();
  if (route === 'signin') return /*#__PURE__*/React.createElement(SignIn, {
    nav: nav
  });
  if (route === 'forgot') return /*#__PURE__*/React.createElement(Forgot, {
    nav: nav
  });
  if (route === 'signup') return /*#__PURE__*/React.createElement(Signup, {
    nav: nav
  });
  if (route === 'launch') return /*#__PURE__*/React.createElement(Launch, {
    nav: nav
  });
  return /*#__PURE__*/React.createElement(Landing, {
    nav: nav
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement("div", {
  className: "xp-root"
}, /*#__PURE__*/React.createElement(Experience, null)));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/landing/experience.jsx", error: String((e && e.message) || e) }); }

// src/pages/notifications/app.jsx
try { (() => {
// TripInsel · Notification system — interactive playground
const {
  useState: useS
} = React;
function NotificationCenter({
  role
}) {
  const [tab, setTab] = useS('All');
  const [items, setItems] = useS(NT_DATA[role]);
  React.useEffect(() => {
    setItems(NT_DATA[role]);
    setTab('All');
  }, [role]);
  const filtered = items.filter(n => NT_tabMatch(tab, n));
  const groups = ['Today', 'Earlier'].map(g => [g, filtered.filter(n => n.group === g)]).filter(([, a]) => a.length);
  const unread = items.filter(i => i.unread).length;
  const read = id => setItems(list => list.map(i => i.id === id ? {
    ...i,
    unread: false
  } : i));
  const act = (n, label) => {
    read(n.id);
    toast({
      type: /confirm|approve|reply|review|investigate/i.test(label) ? 'success' : 'info',
      title: `${label}ed`,
      message: 'Action recorded.'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-block",
    id: "nt-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-block-head",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Full surface"), /*#__PURE__*/React.createElement("h2", null, "Notification center"), /*#__PURE__*/React.createElement("p", null, "The dedicated page \u2014 same data, roomier rows, with filters. Lives at ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'var(--color-bg-subtle)',
      padding: '1px 6px',
      borderRadius: 5,
      font: '600 11px monospace'
    }
  }, "pages/Notifications.jsx"), ".")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setItems(list => list.map(i => ({
      ...i,
      unread: false
    }))),
    style: {
      font: '700 12.5px var(--font-primary)',
      color: 'var(--color-primary)',
      background: 'var(--color-primary-light)',
      border: 'none',
      padding: '9px 14px',
      borderRadius: 9,
      cursor: 'pointer'
    }
  }, "Mark all read", unread > 0 ? ` (${unread})` : '')), /*#__PURE__*/React.createElement("div", {
    className: "nt-block-body",
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-tabs",
    style: {
      borderBottom: '1px solid var(--color-border)',
      padding: '0 0 12px',
      marginBottom: 6
    }
  }, NT_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: 'nt-tab' + (t === tab ? ' active' : ''),
    onClick: () => setTab(t)
  }, t))), groups.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "nt-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 28
  })), /*#__PURE__*/React.createElement("h4", null, "You're all caught up"), /*#__PURE__*/React.createElement("p", null, "Nothing under \u201C", tab, "\u201D.")) : groups.map(([g, arr]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-group-label",
    style: {
      padding: '14px 0 4px'
    }
  }, g), arr.map(n => /*#__PURE__*/React.createElement(NotificationItem, {
    key: n.id,
    n: n,
    onAction: act,
    onRead: read,
    big: true
  }))))));
}

/* ── Inline banners showcase ─────────────────────────────────── */
const BANNERS = {
  traveller: [{
    type: 'warning',
    icon: 'alertCircle',
    h: 'Verify your phone to finish booking',
    p: 'We sent a 6-digit code by SMS to +216 55 234 187. Bookings are held for 15 minutes.',
    acts: [['Enter code', 'go'], ['Resend', 'ghost']]
  }, {
    type: 'success',
    icon: 'checkCircle',
    h: 'Booking confirmed for tomorrow',
    p: 'Sunset camel ride at Ras R’mel · 16:30 · 2 travellers. Free cancellation until 16:30 today.',
    acts: [['View booking', 'go'], ['Add to calendar', 'ghost']]
  }, {
    type: 'info',
    icon: 'zap',
    h: 'A activity you saved dropped in price',
    p: 'El Kantara dive trip is now €68 — €14 less than when you saved it.',
    acts: [['See activity', 'go']]
  }],
  host: [{
    type: 'warning',
    icon: 'clock',
    h: '3 bookings need your confirmation',
    p: 'Travellers are waiting — confirm within 24 hours so the slot isn’t released automatically.',
    acts: [['Review bookings', 'go']]
  }, {
    type: 'success',
    icon: 'wallet',
    h: 'Payout of €428.00 is on its way',
    p: 'Sent to your bank ending ••42. Expect it within 1–2 business days.',
    acts: [['View statement', 'go']]
  }, {
    type: 'info',
    icon: 'shieldCheck',
    h: 'Your business is verified',
    p: 'The trust badge now shows on all your listings — verified hosts get up to 2× more bookings.',
    acts: [['See my listings', 'go']]
  }],
  admin: [{
    type: 'error',
    icon: 'flag',
    h: '2 reviews flagged as suspicious',
    p: 'Multiple travellers reported reviews on Quad biking dunes tour. Investigate before they affect rankings.',
    acts: [['Investigate', 'go'], ['Dismiss', 'ghost']]
  }, {
    type: 'warning',
    icon: 'shieldCheck',
    h: '5 hosts awaiting verification',
    p: 'New local hosts submitted documents. Median review time this week is 14 hours.',
    acts: [['Open queue', 'go']]
  }, {
    type: 'info',
    icon: 'barChart',
    h: 'Weekly platform report is ready',
    p: '+18% bookings week-over-week, 7 new hosts, €12.4k GMV.',
    acts: [['View report', 'go']]
  }]
};
function BannersBlock({
  role
}) {
  const [items, setItems] = useS(BANNERS[role]);
  React.useEffect(() => setItems(BANNERS[role]), [role]);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-block-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Page-level"), /*#__PURE__*/React.createElement("h2", null, "Inline banners"), /*#__PURE__*/React.createElement("p", null, "Persistent, contextual alerts that sit at the top of a page \u2014 not transient like toasts.")), /*#__PURE__*/React.createElement("div", {
    className: "nt-block-body"
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px var(--font-primary)',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, "All banners dismissed \u2014 nice and tidy."), items.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `nt-banner ${b.type}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-body"
  }, /*#__PURE__*/React.createElement("h4", null, b.h), /*#__PURE__*/React.createElement("p", null, b.p), /*#__PURE__*/React.createElement("div", {
    className: "b-acts"
  }, b.acts.map(([label, kind], j) => /*#__PURE__*/React.createElement("button", {
    key: j,
    className: kind,
    onClick: () => kind === 'go' ? toast({
      type: 'success',
      title: label,
      message: 'Routed.'
    }) : setItems(list => list.filter((_, k) => k !== i))
  }, label)))), /*#__PURE__*/React.createElement("button", {
    className: "b-close",
    onClick: () => setItems(list => list.filter((_, k) => k !== i)),
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))))));
}

/* ── Toast trigger playground ────────────────────────────────── */
const TOASTS = {
  traveller: [['success', 'Booking confirmed', () => toast({
    type: 'success',
    title: 'Booking confirmed 🎉',
    message: 'Sunset camel ride · tomorrow 16:30. Check your email for details.',
    actions: [{
      label: 'View',
      primary: true
    }, {
      label: 'Dismiss'
    }]
  })], ['info', 'Trip reminder', () => toast({
    type: 'info',
    title: 'Your trip is tomorrow',
    message: 'Djerba cooking class · pickup at 9:00 from your hotel lobby.'
  })], ['warning', 'Hold expiring', () => toast({
    type: 'warning',
    title: 'Your seats are held for 15 min',
    message: 'Verify your phone to lock in the booking.'
  })], ['error', 'Payment failed', () => toast({
    type: 'error',
    title: 'Payment didn’t go through',
    message: 'Your card was declined. Try another method.',
    actions: [{
      label: 'Retry',
      primary: true
    }]
  })], ['booking', 'Price drop', () => toast({
    type: 'booking',
    title: 'Price drop on a saved activity',
    message: 'El Kantara dive trip is now €68.'
  })]],
  host: [['booking', 'New booking', () => toast({
    type: 'booking',
    title: 'New booking request',
    message: 'Sofia K. · 2 seats · tomorrow 16:30. Confirm within 24h.',
    actions: [{
      label: 'Confirm',
      primary: true
    }, {
      label: 'Later'
    }]
  })], ['success', 'Payout sent', () => toast({
    type: 'success',
    title: 'Payout of €428.00 sent',
    message: 'On its way to your bank ending ••42.'
  })], ['info', 'New review', () => toast({
    type: 'info',
    title: 'Marco left a 5-bubble review',
    message: '“Unforgettable sunset, Ahmed was wonderful.”'
  })], ['warning', 'Confirm soon', () => toast({
    type: 'warning',
    title: '3 bookings need confirmation',
    message: 'Slots release automatically after 24 hours.'
  })], ['error', 'Cancellation', () => toast({
    type: 'error',
    title: 'A booking was cancelled',
    message: 'John R. cancelled El Kantara dive trip.'
  })]],
  admin: [['info', 'New host', () => toast({
    type: 'info',
    title: 'New host to verify',
    message: 'Djerba Dunes Adventures submitted documents.',
    actions: [{
      label: 'Review',
      primary: true
    }]
  })], ['error', 'Flagged content', () => toast({
    type: 'error',
    title: 'Review flagged',
    message: '3 travellers reported a review as suspicious.'
  })], ['warning', 'Payout batch', () => toast({
    type: 'warning',
    title: 'Payout batch awaiting approval',
    message: '87 hosts · approve before Friday 17:00.'
  })], ['success', 'Report ready', () => toast({
    type: 'success',
    title: 'Weekly report ready',
    message: '+18% bookings, €12.4k GMV.'
  })]]
};
function TriggersBlock({
  role
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-block-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Live \xB7 click me"), /*#__PURE__*/React.createElement("h2", null, "Toasts"), /*#__PURE__*/React.createElement("p", null, "Transient confirmations that slide in, count down, and auto-dismiss. Fire one:")), /*#__PURE__*/React.createElement("div", {
    className: "nt-block-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-triggers"
  }, TOASTS[role].map(([type, label, fn], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `nt-trigger ${type}`,
    onClick: fn
  }, /*#__PURE__*/React.createElement("span", {
    className: "swab"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: {
      success: 'checkCircle',
      info: 'bell',
      warning: 'alertCircle',
      error: 'xCircle',
      booking: 'calendar'
    }[type],
    size: 14
  })), label))), /*#__PURE__*/React.createElement("p", {
    className: "nt-note"
  }, "Toasts stack top-right, pause nothing, and respect ", /*#__PURE__*/React.createElement("code", null, "prefers-reduced-motion"), ". Fire several quickly to see them stack.")));
}

/* ════════════════════════════════════════════════════════════════ */
function App() {
  const [role, setRole] = useS('traveller');
  const roleMeta = {
    traveller: {
      label: 'Traveller',
      icon: 'compass',
      who: 'Sofia K.',
      init: 'SK'
    },
    host: {
      label: 'Local host',
      icon: 'briefcase',
      who: 'Ahmed Tours',
      init: 'AT'
    },
    admin: {
      label: 'Admin',
      icon: 'shieldCheck',
      who: 'Platform',
      init: 'PT'
    }
  };
  const rm = roleMeta[role];
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-playground"
  }, /*#__PURE__*/React.createElement(ToastHost, null), /*#__PURE__*/React.createElement("header", {
    className: "nt-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub"
  }), "TripInsel"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Design system \xB7 Components"), /*#__PURE__*/React.createElement("h1", null, "Notifications, end to end."), /*#__PURE__*/React.createElement("p", null, "One coherent system across every role \u2014 live toasts, an animated bell inbox, a full notification center, and page banners. Switch role and try everything."), /*#__PURE__*/React.createElement("div", {
    className: "nt-roles"
  }, Object.entries(roleMeta).map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'nt-role' + (k === role ? ' active' : ''),
    onClick: () => setRole(k)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 14,
    color: k === role ? '#00703A' : '#fff'
  }), v.label)))), /*#__PURE__*/React.createElement("div", {
    className: "nt-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-block",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-faketop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bub"
  }), "TripInsel"), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-primary)',
      color: 'var(--color-text-secondary)'
    }
  }, rm.who), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.dispatchEvent(new Event('nt-simulate')),
    style: {
      font: '700 12.5px var(--font-primary)',
      color: 'var(--color-primary)',
      background: 'var(--color-primary-light)',
      border: 'none',
      padding: '10px 14px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }), " Simulate incoming"), /*#__PURE__*/React.createElement(NotificationBell, {
    role: role
  }), /*#__PURE__*/React.createElement("span", {
    className: "nt-avatar"
  }, rm.init))), /*#__PURE__*/React.createElement("div", {
    className: "nt-block-body",
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13.5px/1.55 var(--font-primary)',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, "The ", /*#__PURE__*/React.createElement("b", null, "bell"), " above is live. Click it to open the inbox, switch tabs, confirm a request, or hit", /*#__PURE__*/React.createElement("b", null, " \u201CSimulate incoming\u201D"), " to watch a notification arrive \u2014 the bell rings, the badge pops, and a toast fires."))), /*#__PURE__*/React.createElement("div", {
    className: "nt-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TriggersBlock, {
    role: role
  }), /*#__PURE__*/React.createElement(NotificationCenter, {
    role: role
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BannersBlock, {
    role: role
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-block-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Anatomy"), /*#__PURE__*/React.createElement("h2", null, "One model, many faces")), /*#__PURE__*/React.createElement("div", {
    className: "nt-block-body"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-primary)',
      color: 'var(--color-text-secondary)',
      margin: '0 0 12px'
    }
  }, "Every notification is the same record rendered at three densities:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      font: '400 13px/1.7 var(--font-primary)',
      color: 'var(--color-text-secondary)',
      margin: 0,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Toast"), " \u2014 transient, top-right, auto-dismiss"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Bell inbox"), " \u2014 compact, grouped by time, unread accent"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Center"), " \u2014 roomy rows on a dedicated page"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Banner"), " \u2014 persistent, page-level, dismissible")), /*#__PURE__*/React.createElement("p", {
    className: "nt-note",
    style: {
      marginTop: 14
    }
  }, "Shape per item: ", /*#__PURE__*/React.createElement("code", null, "type"), ", ", /*#__PURE__*/React.createElement("code", null, "title"), ", ", /*#__PURE__*/React.createElement("code", null, "chip"), ", ", /*#__PURE__*/React.createElement("code", null, "time"), ", ", /*#__PURE__*/React.createElement("code", null, "unread"), ", optional ", /*#__PURE__*/React.createElement("code", null, "actions"), ", ", /*#__PURE__*/React.createElement("code", null, "thumb"), ", ", /*#__PURE__*/React.createElement("code", null, "rating"), ".")))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/notifications/app.jsx", error: String((e && e.message) || e) }); }

// src/pages/notifications/notifications.jsx
try { (() => {
// TripInsel · Notification system — components + data
// Toast store, ToastHost, NotificationBell, NotificationPanel, NotificationItem,
// NotificationCenter, InlineBanner. Role-aware (traveller / host / admin).
// Production homes: components/ui/Toast.jsx, components/ui/NotificationBell.jsx,
// components/layout/NotificationCenter.jsx, context/NotificationContext.jsx.

const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ════════════════════════════════════════════════════════════════
   TOAST STORE — tiny pub/sub so any component can fire a toast.
   ════════════════════════════════════════════════════════════════ */
const ToastStore = (() => {
  let listeners = [];
  let seq = 1;
  return {
    subscribe(fn) {
      listeners.push(fn);
      return () => {
        listeners = listeners.filter(l => l !== fn);
      };
    },
    push(toast) {
      const t = {
        id: seq++,
        duration: 5200,
        ...toast
      };
      listeners.forEach(l => l(t));
      return t.id;
    }
  };
})();
const toast = t => ToastStore.push(t);

/* ── Toast visual ─────────────────────────────────────────────── */
function Toast({
  data,
  onClose
}) {
  const [leaving, setLeaving] = useState(false);
  const close = useCallback(() => {
    setLeaving(true);
    setTimeout(() => onClose(data.id), 380);
  }, [data.id, onClose]);
  useEffect(() => {
    if (!data.duration) return;
    const t = setTimeout(close, data.duration);
    return () => clearTimeout(t);
  }, [data.duration, close]);
  const ICONS = {
    success: 'checkCircle',
    info: 'bell',
    warning: 'alertCircle',
    error: 'xCircle',
    booking: 'calendar'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `nt-toast ${data.type || 'info'} ${leaving ? 'leaving' : ''}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rail"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: data.icon || ICONS[data.type] || 'bell',
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t"
  }, data.title), data.message && /*#__PURE__*/React.createElement("p", {
    className: "m"
  }, data.message), data.actions && /*#__PURE__*/React.createElement("div", {
    className: "act"
  }, data.actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: a.primary ? 'primary' : 'ghost',
    onClick: () => {
      a.onClick && a.onClick();
      close();
    }
  }, a.label)))), /*#__PURE__*/React.createElement("button", {
    className: "close",
    "aria-label": "Dismiss",
    onClick: close
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15
  })), data.duration && /*#__PURE__*/React.createElement("span", {
    className: "progress",
    style: {
      animation: `ntProgress ${data.duration}ms linear forwards`
    }
  }));
}
function ToastHost() {
  const [items, setItems] = useState([]);
  useEffect(() => ToastStore.subscribe(t => setItems(list => [...list, t])), []);
  const remove = useCallback(id => setItems(list => list.filter(t => t.id !== id)), []);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-toast-host"
  }, items.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    data: t,
    onClose: remove
  })));
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
  face3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&fit=crop&auto=format'
};
// deco = small corner badge {icon,bg,fg}
const DECO = {
  confirmed: {
    icon: 'check',
    bg: '#00AA6C',
    fg: '#fff'
  },
  pending: {
    icon: 'clock',
    bg: '#F2A00A',
    fg: '#fff'
  },
  cancelled: {
    icon: 'x',
    bg: '#D93025',
    fg: '#fff'
  },
  review: {
    icon: 'star',
    bg: '#00AA6C',
    fg: '#fff'
  },
  payout: {
    icon: 'wallet',
    bg: '#00AA6C',
    fg: '#fff'
  },
  message: {
    icon: 'share',
    bg: '#2E91D6',
    fg: '#fff'
  },
  system: {
    icon: 'shieldCheck',
    bg: '#5A4FCF',
    fg: '#fff'
  },
  verify: {
    icon: 'shieldCheck',
    bg: '#5A4FCF',
    fg: '#fff'
  }
};
const DATA = {
  traveller: [{
    id: 't1',
    group: 'Today',
    unread: true,
    photo: PHOTO.camel,
    deco: 'confirmed',
    chip: ['Booking', '#D4F5E9', '#00703A'],
    time: '2m',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Your booking for ", /*#__PURE__*/React.createElement("b", null, "Sunset camel ride at Ras R'mel"), " is confirmed for ", /*#__PURE__*/React.createElement("b", null, "tomorrow, 16:30"), "."),
    thumb: PHOTO.camel
  }, {
    id: 't2',
    group: 'Today',
    unread: true,
    photo: PHOTO.face1,
    deco: 'message',
    chip: ['Message', '#E1F0FB', '#1E6FA8'],
    time: '40m',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Ahmed Tours"), " sent you a message about your upcoming trip."),
    actions: [['Reply', 'ok'], ['View', 'no']]
  }, {
    id: 't3',
    group: 'Today',
    unread: false,
    mono: ['zap', '#FEF3C7', '#8A6000'],
    chip: ['Price drop', '#FEF3C7', '#8A6000'],
    time: '3h',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Good news \u2014 a activity you saved, ", /*#__PURE__*/React.createElement("b", null, "El Kantara dive trip"), ", dropped to ", /*#__PURE__*/React.createElement("b", null, "\u20AC68"), " (was \u20AC82)."),
    thumb: PHOTO.diving
  }, {
    id: 't4',
    group: 'Earlier',
    unread: false,
    photo: PHOTO.boat,
    deco: 'review',
    chip: ['Review', '#D4F5E9', '#00703A'],
    time: '2d',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "How was ", /*#__PURE__*/React.createElement("b", null, "Flamingo lagoon boat tour"), "? Leave a review and earn ", /*#__PURE__*/React.createElement("b", null, "\u20AC5 travel credit"), "."),
    actions: [['Write review', 'ok']]
  }, {
    id: 't5',
    group: 'Earlier',
    unread: false,
    mono: ['clock', '#E6F7F1', '#00703A'],
    chip: ['Reminder', '#F2F2F2', '#555'],
    time: '3d',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Reminder: your ", /*#__PURE__*/React.createElement("b", null, "Djerba mosaic cooking class"), " starts in 24 hours. Pickup at 9:00.")
  }],
  host: [{
    id: 'h1',
    group: 'Today',
    unread: true,
    photo: PHOTO.face2,
    deco: 'pending',
    chip: ['New booking', '#FEF3C7', '#8A6000'],
    time: '5m',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Sofia K."), " requested ", /*#__PURE__*/React.createElement("b", null, "2 seats"), " on Sunset camel ride \xB7 tomorrow 16:30. Confirm within 24h."),
    actions: [['Confirm', 'ok'], ['Decline', 'no']]
  }, {
    id: 'h2',
    group: 'Today',
    unread: true,
    mono: ['wallet', '#D4F5E9', '#00703A'],
    chip: ['Payout', '#D4F5E9', '#00703A'],
    time: '1h',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Your weekly payout of ", /*#__PURE__*/React.createElement("b", null, "\u20AC428.00"), " is on its way to your bank \u2014 expect it in 1\u20132 days.")
  }, {
    id: 'h3',
    group: 'Today',
    unread: false,
    photo: PHOTO.face3,
    deco: 'review',
    chip: ['Review', '#D4F5E9', '#00703A'],
    time: '4h',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Marco D."), " left you a ", /*#__PURE__*/React.createElement("b", null, "5-bubble review"), ": \u201CUnforgettable sunset, Ahmed was wonderful.\u201D"),
    rating: 5
  }, {
    id: 'h4',
    group: 'Today',
    unread: false,
    mono: ['calendar', '#E1F0FB', '#1E6FA8'],
    chip: ['Time request', '#E1F0FB', '#1E6FA8'],
    time: '6h',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Lena P."), " suggested a custom time \u2014 ", /*#__PURE__*/React.createElement("b", null, "07:00 sunrise"), " \u2014 for your camel ride. Approve?"),
    actions: [['Approve', 'ok'], ['Decline', 'no']]
  }, {
    id: 'h5',
    group: 'Earlier',
    unread: false,
    mono: ['xCircle', '#FDE8E8', '#A30000'],
    chip: ['Cancellation', '#FDE8E8', '#A30000'],
    time: '2d',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "John R."), " cancelled their booking for El Kantara dive trip. Free cancellation applied.")
  }],
  admin: [{
    id: 'a1',
    group: 'Today',
    unread: true,
    mono: ['shieldCheck', '#ECEBFB', '#5A4FCF'],
    chip: ['Verification', '#ECEBFB', '#5A4FCF'],
    time: '12m',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "New local host ", /*#__PURE__*/React.createElement("b", null, "Djerba Dunes Adventures"), " submitted documents for review."),
    actions: [['Review', 'ok']]
  }, {
    id: 'a2',
    group: 'Today',
    unread: true,
    mono: ['flag', '#FDE8E8', '#A30000'],
    chip: ['Flagged', '#FDE8E8', '#A30000'],
    time: '50m',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "A review on ", /*#__PURE__*/React.createElement("b", null, "Quad biking dunes tour"), " was flagged by 3 travellers as suspicious."),
    actions: [['Investigate', 'ok'], ['Dismiss', 'no']]
  }, {
    id: 'a3',
    group: 'Today',
    unread: false,
    mono: ['barChart', '#E6F7F1', '#00703A'],
    chip: ['Report', '#F2F2F2', '#555'],
    time: '5h',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Weekly platform report is ready: ", /*#__PURE__*/React.createElement("b", null, "+18% bookings"), ", 7 new hosts, \u20AC12.4k GMV.")
  }, {
    id: 'a4',
    group: 'Earlier',
    unread: false,
    mono: ['alertCircle', '#FEF3C7', '#8A6000'],
    chip: ['System', '#FEF3C7', '#8A6000'],
    time: '1d',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Payout batch for ", /*#__PURE__*/React.createElement("b", null, "87 hosts"), " needs your approval before Friday 17:00."),
    actions: [['Approve batch', 'ok']]
  }]
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
function NtAvatar({
  n
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ava"
  }, n.photo ? /*#__PURE__*/React.createElement("img", {
    className: "pic",
    src: n.photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: n.mono[1],
      color: n.mono[2]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.mono[0],
    size: 20,
    color: n.mono[2]
  })), n.deco && DECO[n.deco] && /*#__PURE__*/React.createElement("span", {
    className: "deco",
    style: {
      background: DECO[n.deco].bg,
      color: DECO[n.deco].fg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: DECO[n.deco].icon,
    size: 11,
    color: DECO[n.deco].fg,
    strokeWidth: 2.5
  })));
}

/* ── Single notification (panel density) ──────────────────────── */
function NotificationItem({
  n,
  onAction,
  onRead,
  big
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: (big ? 'nt-center-row' : 'nt-item') + (n.unread ? ' unread' : ''),
    role: "button",
    tabIndex: 0,
    onClick: () => onRead(n.id),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRead(n.id);
      }
    }
  }, /*#__PURE__*/React.createElement(NtAvatar, {
    n: n
  }), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "l1"
  }, n.text), n.rating && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: n.rating,
    size: 13
  })), /*#__PURE__*/React.createElement("p", {
    className: "l2"
  }, n.chip && /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: n.chip[1],
      color: n.chip[2]
    }
  }, n.chip[0]), /*#__PURE__*/React.createElement("span", null, n.time, " ago")), n.actions && /*#__PURE__*/React.createElement("div", {
    className: "acts"
  }, n.actions.map(([label, kind], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: kind,
    onClick: e => {
      e.stopPropagation();
      onAction(n, label);
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, !big && /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, n.time), n.thumb && /*#__PURE__*/React.createElement("img", {
    className: "thumb",
    src: n.thumb,
    alt: ""
  })));
}

/* ════════════════════════════════════════════════════════════════
   BELL + DROPDOWN PANEL
   ════════════════════════════════════════════════════════════════ */
function NotificationBell({
  role
}) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('All');
  const [items, setItems] = useState(DATA[role]);
  const [ring, setRing] = useState(false);
  const [pop, setPop] = useState(false);
  const wrapRef = useRef(null);
  useEffect(() => {
    setItems(DATA[role]);
    setTab('All');
  }, [role]);
  useEffect(() => {
    if (!open) return;
    const close = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  const unread = items.filter(i => i.unread).length;
  const filtered = items.filter(n => tabMatch(tab, n));
  const groups = ['Today', 'Earlier'].map(g => [g, filtered.filter(n => n.group === g)]).filter(([, a]) => a.length);
  const markAll = () => setItems(list => list.map(i => ({
    ...i,
    unread: false
  })));
  const read = id => setItems(list => list.map(i => i.id === id ? {
    ...i,
    unread: false
  } : i));
  const act = (n, label) => {
    read(n.id);
    const ok = /confirm|approve|reply|review|investigate/i.test(label);
    toast({
      type: ok ? 'success' : 'info',
      title: `${label}ed`,
      message: ok ? 'Done — the traveller has been notified.' : 'Noted.'
    });
  };

  // simulate a fresh notification arriving
  const simulate = () => {
    setRing(true);
    setPop(true);
    setTimeout(() => setRing(false), 950);
    setTimeout(() => setPop(false), 450);
    const fresh = {
      traveller: {
        id: 'new' + Date.now(),
        group: 'Today',
        unread: true,
        mono: ['zap', '#FEF3C7', '#8A6000'],
        chip: ['Price drop', '#FEF3C7', '#8A6000'],
        time: 'now',
        text: /*#__PURE__*/React.createElement(React.Fragment, null, "A saved activity just dropped in price \u2014 check it out!")
      },
      host: {
        id: 'new' + Date.now(),
        group: 'Today',
        unread: true,
        photo: PHOTO.face1,
        deco: 'pending',
        chip: ['New booking', '#FEF3C7', '#8A6000'],
        time: 'now',
        text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "A traveller"), " just requested seats on your activity."),
        actions: [['Confirm', 'ok'], ['Decline', 'no']]
      },
      admin: {
        id: 'new' + Date.now(),
        group: 'Today',
        unread: true,
        mono: ['shieldCheck', '#ECEBFB', '#5A4FCF'],
        chip: ['Verification', '#ECEBFB', '#5A4FCF'],
        time: 'now',
        text: /*#__PURE__*/React.createElement(React.Fragment, null, "A new host just submitted verification documents."),
        actions: [['Review', 'ok']]
      }
    }[role];
    setItems(list => [fresh, ...list]);
    toast({
      type: 'booking',
      title: 'New notification',
      message: 'Open the bell to see it.'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-bell-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("button", {
    className: 'nt-bell' + (ring ? ' ringing' : ''),
    onClick: () => setOpen(o => !o),
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  }), unread > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: 'nt-bell-badge' + (pop ? ' pop' : '')
  }, unread))), open && /*#__PURE__*/React.createElement("div", {
    className: "nt-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-panel-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Notifications ", unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "cnt"
  }, unread, " new")), unread > 0 && /*#__PURE__*/React.createElement("button", {
    className: "mark",
    onClick: markAll
  }, "Mark all read")), /*#__PURE__*/React.createElement("div", {
    className: "nt-tabs"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: 'nt-tab' + (t === tab ? ' active' : ''),
    onClick: () => setTab(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "nt-list"
  }, groups.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "nt-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 28
  })), /*#__PURE__*/React.createElement("h4", null, "You're all caught up"), /*#__PURE__*/React.createElement("p", null, "No ", tab !== 'All' ? tab.toLowerCase() : '', " notifications right now.")) : groups.map(([g, arr]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-group-label"
  }, g), arr.map(n => /*#__PURE__*/React.createElement(NotificationItem, {
    key: n.id,
    n: n,
    onAction: act,
    onRead: read
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "nt-panel-foot"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(false);
      document.getElementById('nt-center') && document.getElementById('nt-center').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 14
  }), " Open notification center"))), /*#__PURE__*/React.createElement(SimulateBridge, {
    onSimulate: simulate
  }));
}

// lets the playground "New notification arrives" button reach the bell
function SimulateBridge({
  onSimulate
}) {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/notifications/notifications.jsx", error: String((e && e.message) || e) }); }

// src/pages/provider/app.jsx
try { (() => {
// Provider UI kit — components & screens

const PROVIDER_LINKS = [{
  id: 'overview',
  label: 'Overview',
  icon: 'dashboard'
}, {
  id: 'activities',
  label: 'My activities',
  icon: 'briefcase'
}, {
  id: 'bookings',
  label: 'Bookings',
  icon: 'calendar',
  badge: '3'
}, {
  id: 'wallet',
  label: 'Wallet',
  icon: 'wallet'
}, {
  id: 'reviews',
  label: 'Reviews',
  icon: 'star'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'user'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
const PROVIDER_USER = {
  name: 'Ahmed Tours',
  email: 'ahmed@tours.tn',
  initials: 'AT'
};
const PROVIDER_ACTIVITIES = [{
  id: 'a1',
  title: "Sunset camel ride at Ras R'mel",
  image: '../../../assets/photo-desert.svg',
  category: 'desert',
  categoryLabel: 'Desert',
  price: 45,
  rating: 4.9,
  reviewCount: 1234,
  status: 'active',
  bookings: 124
}, {
  id: 'a6',
  title: 'Lagoon kayak + flamingo sunset',
  image: '../../../assets/photo-sunset.svg',
  category: 'water',
  categoryLabel: 'Water',
  price: 42,
  rating: 4.7,
  reviewCount: 367,
  status: 'active',
  bookings: 89
}, {
  id: 'a8',
  title: 'Quad biking through the salt flats',
  image: '../../../assets/photo-desert.svg',
  category: 'quad',
  categoryLabel: 'Quad',
  price: 55,
  rating: 4.4,
  reviewCount: 189,
  status: 'inactive',
  bookings: 41
}];

/* ── Overview screen ─────────────────────────────────────────────── */
function ProviderOverview({
  go
}) {
  const recent = [{
    ref: 'TI-4829',
    activity: "Sunset camel ride at Ras R'mel",
    date: 'Jun 17, 14:00',
    guests: 2,
    total: 90,
    status: 'confirmed'
  }, {
    ref: 'TI-4811',
    activity: 'Lagoon kayak + flamingo sunset',
    date: 'Jun 15, 17:30',
    guests: 4,
    total: 168,
    status: 'confirmed'
  }, {
    ref: 'TI-4803',
    activity: "Sunset camel ride at Ras R'mel",
    date: 'Jun 14, 14:00',
    guests: 3,
    total: 135,
    status: 'pending'
  }, {
    ref: 'TI-4790',
    activity: 'Lagoon kayak + flamingo sunset',
    date: 'Jun 12, 16:00',
    guests: 2,
    total: 84,
    status: 'completed'
  }, {
    ref: 'TI-4774',
    activity: 'Quad biking through the salt flats',
    date: 'Jun 10, 11:00',
    guests: 1,
    total: 55,
    status: 'cancelled'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 22px var(--font-primary)',
      margin: 0
    }
  }, "Good morning, Ahmed \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '4px 0 0'
    }
  }, "Here's what's happening with your activities today.")), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), "Add new activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total bookings",
    value: "254",
    sub: "Last 30 days",
    icon: "briefcase",
    accent: "#00AA6C",
    trend: 12
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Revenue",
    value: "\u20AC 5,840",
    sub: "After 12% commission",
    icon: "wallet",
    accent: "#2E91D6",
    trend: 8
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg rating",
    value: "4.8",
    sub: "Across 3 activities",
    icon: "award",
    accent: "#F2A00A"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Completion rate",
    value: "97%",
    sub: "vs 91% platform avg",
    icon: "checkCircle",
    accent: "#5A4FCF",
    trend: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0
    }
  }, "Recent bookings"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('bookings'),
    style: {
      font: '600 13px var(--font-primary)',
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.ref,
    columns: [{
      key: 'ref',
      label: 'Ref'
    }, {
      key: 'activity',
      label: 'Activity'
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'guests',
      label: 'Guests',
      align: 'right'
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("strong", null, "\u20AC", r.total)
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }],
    rows: recent
  }));
}

/* ── My activities screen ────────────────────────────────────────── */
function ProviderActivities() {
  const [items, setItems] = useState(PROVIDER_ACTIVITIES);
  const toggle = id => setItems(items.map(a => a.id === id ? {
    ...a,
    status: a.status === 'active' ? 'inactive' : 'active'
  } : a));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, items.length, " activities \xB7 toggle inactive to pause new bookings"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), "Add new activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: "ti-card",
    style: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 80,
      borderRadius: 8,
      backgroundImage: `url(${a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    className: "ti-chip",
    style: {
      padding: '3px 9px',
      font: '700 10px var(--font-primary)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(CategoryDot, {
    category: a.category
  }), a.categoryLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: a.rating,
    showScore: true,
    showCount: a.reviewCount
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "\xB7 ", a.bookings, " bookings this month"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 18px var(--font-primary)'
    }
  }, "\u20AC", a.price, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999'
    }
  }, "/person"))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    active: a.status === 'active',
    onChange: () => toggle(a.id)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    "aria-label": "Edit",
    style: {
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    "aria-label": "Delete",
    style: {
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 16
  })))))));
}
function ToggleSwitch({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onChange,
    style: {
      width: 44,
      height: 24,
      borderRadius: 9999,
      background: active ? 'var(--color-primary)' : '#DDD',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      transition: 'background 0.15s ease',
      flexShrink: 0
    },
    "aria-label": active ? 'Active' : 'Inactive'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: active ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: 9999,
      background: '#fff',
      transition: 'left 0.15s ease'
    }
  }));
}

/* ── Bookings screen ─────────────────────────────────────────────── */
function ProviderBookings() {
  const all = [{
    ref: 'TI-4829',
    activity: "Sunset camel ride at Ras R'mel",
    customer: 'Sofia K.',
    date: 'Jun 17, 14:00',
    guests: 2,
    total: 90,
    status: 'confirmed'
  }, {
    ref: 'TI-4811',
    activity: 'Lagoon kayak + flamingo sunset',
    customer: 'Marc L.',
    date: 'Jun 15, 17:30',
    guests: 4,
    total: 168,
    status: 'confirmed'
  }, {
    ref: 'TI-4803',
    activity: "Sunset camel ride at Ras R'mel",
    customer: 'Erik H.',
    date: 'Jun 14, 14:00',
    guests: 3,
    total: 135,
    status: 'pending'
  }, {
    ref: 'TI-4801',
    activity: 'Lagoon kayak + flamingo sunset',
    customer: 'Anna P.',
    date: 'Jun 13, 16:30',
    guests: 2,
    total: 84,
    status: 'pending'
  }, {
    ref: 'TI-4794',
    activity: "Sunset camel ride at Ras R'mel",
    customer: 'Léa B.',
    date: 'Jun 13, 14:00',
    guests: 4,
    total: 180,
    status: 'pending'
  }, {
    ref: 'TI-4790',
    activity: 'Lagoon kayak + flamingo sunset',
    customer: 'Jonas M.',
    date: 'Jun 12, 16:00',
    guests: 2,
    total: 84,
    status: 'completed'
  }, {
    ref: 'TI-4774',
    activity: 'Quad biking salt flats',
    customer: 'Greta V.',
    date: 'Jun 10, 11:00',
    guests: 1,
    total: 55,
    status: 'cancelled'
  }];
  const [tab, setTab] = useState('all');
  const tabs = [['all', 'All'], ['pending', 'Pending'], ['confirmed', 'Confirmed'], ['completed', 'Completed'], ['cancelled', 'Cancelled']];
  const filtered = tab === 'all' ? all : all.filter(b => b.status === tab);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--color-border)',
      marginBottom: 16
    }
  }, tabs.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      font: '700 13px var(--font-primary)',
      padding: '10px 14px',
      color: tab === id ? 'var(--color-primary)' : '#161616',
      borderBottom: tab === id ? '2px solid var(--color-primary)' : '2px solid transparent',
      marginBottom: -1
    }
  }, label, " (", tab === id ? filtered.length : id === 'all' ? all.length : all.filter(b => b.status === id).length, ")"))), /*#__PURE__*/React.createElement(DataTable, {
    getRowKey: r => r.ref,
    columns: [{
      key: 'ref',
      label: 'Ref',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: '700 13px var(--font-primary)'
        }
      }, r.ref)
    }, {
      key: 'activity',
      label: 'Activity'
    }, {
      key: 'customer',
      label: 'Customer'
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'guests',
      label: 'Guests',
      align: 'right'
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("strong", null, "\u20AC", r.total)
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        status: r.status
      })
    }, {
      key: 'actions',
      label: '',
      align: 'right',
      render: r => r.status === 'pending' ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 6,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-secondary ti-btn-sm"
      }, "Decline"), /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-primary ti-btn-sm"
      }, "Confirm")) : /*#__PURE__*/React.createElement("button", {
        className: "ti-btn ti-btn-ghost ti-btn-sm"
      }, "View")
    }],
    rows: filtered
  }));
}

/* ── Wallet screen (provider) ────────────────────────────────────── */
function ProviderWallet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 24,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 4
    }
  }, "Available to withdraw"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 36px var(--font-primary)',
      letterSpacing: '-0.01em',
      marginBottom: 14
    }
  }, "\u20AC 5,840.20"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUp",
    size: 14
  }), "Withdraw to PayPal"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost"
  }, "Transaction history"))), /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 4
    }
  }, "This month"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "Bookings (gross)"), /*#__PURE__*/React.createElement("strong", null, "\u20AC 6,640.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "Platform commission (12%)"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#A30000'
    }
  }, "\u2212\u20AC 796.80")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, "Net"), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '800 16px var(--font-primary)'
    }
  }, "\u20AC 5,843.20")))), /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: '0 0 12px'
    }
  }, "Recent transactions"), [{
    kind: 'credit',
    label: 'Booking — Sunset camel ride · TI-4829',
    date: 'Jun 17',
    amount: 79.20
  }, {
    kind: 'credit',
    label: 'Booking — Lagoon kayak · TI-4811',
    date: 'Jun 15',
    amount: 147.84
  }, {
    kind: 'commission',
    label: 'Platform commission — Jun',
    date: 'Jun 15',
    amount: -796.80
  }, {
    kind: 'debit',
    label: 'Withdrawal to PayPal',
    date: 'Jun 08',
    amount: -2400.00
  }, {
    kind: 'credit',
    label: 'Booking — Quad biking · TI-4774',
    date: 'Jun 10',
    amount: 48.40
  }].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      background: t.kind === 'credit' ? '#D4F5E9' : t.kind === 'commission' ? '#FEF3C7' : '#FDE8E8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.kind === 'credit' ? 'arrowDown' : t.kind === 'commission' ? 'pieChart' : 'arrowUp',
    size: 14,
    color: t.kind === 'credit' ? '#00703A' : t.kind === 'commission' ? '#8A6000' : '#A30000'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-primary)'
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999'
    }
  }, t.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)',
      color: t.amount > 0 ? '#00703A' : t.kind === 'commission' ? '#8A6000' : '#A30000'
    }
  }, t.amount > 0 ? '+' : '−', "\u20AC", Math.abs(t.amount).toFixed(2))))));
}

/* ── Reviews + Profile + Settings: lightweight stubs ─────────────── */
function ProviderReviews() {
  const reviews = [{
    name: 'Sofia K.',
    country: 'Germany',
    date: 'Jun 2025',
    score: 5,
    title: 'Amazing desert safari!',
    body: 'The guide was incredibly knowledgeable and patient with our small kids.',
    activity: "Sunset camel ride at Ras R'mel"
  }, {
    name: 'Marc L.',
    country: 'France',
    date: 'May 2025',
    score: 4,
    title: 'Beautiful sunset, fast pace',
    body: 'Smooth pickup. Could have been a bit slower for the kids but overall fantastic.',
    activity: 'Lagoon kayak + flamingo sunset'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: 20,
      marginBottom: 20
    },
    className: "ti-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 36px var(--font-primary)'
    }
  }, "4.8"), /*#__PURE__*/React.createElement(Bubbles, {
    score: 4.8,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '400 14px var(--font-primary)',
      color: '#555'
    }
  }, "Across ", /*#__PURE__*/React.createElement("strong", null, "1,790 reviews"), " from confirmed bookings. Your response rate is ", /*#__PURE__*/React.createElement("strong", null, "92%"), " within 24h.")), reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ti-card",
    style: {
      padding: 18,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar"
  }, r.name.split(' ').map(p => p[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999'
    }
  }, r.country, " \xB7 ", r.date, " \xB7 ", r.activity)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: r.score
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: '700 15px var(--font-primary)',
      margin: '8px 0 4px'
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      margin: 0
    }
  }, r.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary ti-btn-sm"
  }, "Reply publicly"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost ti-btn-sm"
  }, "Mark helpful")))));
}
function ProviderProfile() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar",
    style: {
      width: 64,
      height: 64,
      font: '700 22px var(--font-primary)'
    }
  }, "AT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: 0
    }
  }, "Ahmed Tours"), /*#__PURE__*/React.createElement(VerifiedBusiness, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginTop: 4
    }
  }, "Provider since 2022 \xB7 Houmt Souk, Djerba \xB7 License TI-PRO-0214")), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary"
  }, "View public profile")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Business name",
    value: "Ahmed Tours"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Contact email",
    value: "ahmed@tours.tn"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    value: "+216 75 234 100"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Languages",
    value: "EN \xB7 FR \xB7 DE \xB7 AR"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "About",
    value: "Family-run tour operator based in Houmt Souk. Specialists in sunset camel rides, lagoon kayaks, and quad excursions across Djerba and the Tunisian south.",
    full: true
  }))));
}
function Field({
  label,
  value,
  full
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: full ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ti-input",
    style: {
      background: '#F8F8F8'
    }
  }, value));
}
function ProviderSettings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, [{
    title: 'Notification preferences',
    body: 'Email and SMS alerts for new bookings, cancellations, and review replies.'
  }, {
    title: 'Payout schedule',
    body: 'Currently weekly on Mondays. Switch to monthly or on-demand.'
  }, {
    title: 'Commission tier',
    body: 'Standard 12% — eligible for 9% after 500 bookings (currently 254).'
  }, {
    title: 'Cancellation policy',
    body: 'Free cancellation up to 24h before. Tighten or relax for new bookings.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: "ti-card",
    style: {
      padding: 20,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 15px var(--font-primary)',
      margin: '0 0 4px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, s.body)), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary ti-btn-sm"
  }, "Manage"))));
}

/* ── App ─────────────────────────────────────────────────────────── */
function ProviderApp() {
  const [route, setRoute] = useState('overview');
  return /*#__PURE__*/React.createElement(DashboardShell, {
    role: "Provider portal",
    user: PROVIDER_USER,
    links: PROVIDER_LINKS,
    current: route,
    onNavigate: setRoute,
    headerExtras: /*#__PURE__*/React.createElement("button", {
      className: "ti-btn ti-btn-primary"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), "New activity")
  }, route === 'overview' && /*#__PURE__*/React.createElement(ProviderOverview, {
    go: setRoute
  }), route === 'activities' && /*#__PURE__*/React.createElement(ProviderActivities, null), route === 'bookings' && /*#__PURE__*/React.createElement(ProviderBookings, null), route === 'wallet' && /*#__PURE__*/React.createElement(ProviderWallet, null), route === 'reviews' && /*#__PURE__*/React.createElement(ProviderReviews, null), route === 'profile' && /*#__PURE__*/React.createElement(ProviderProfile, null), route === 'settings' && /*#__PURE__*/React.createElement(ProviderSettings, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ProviderApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/provider/app.jsx", error: String((e && e.message) || e) }); }

// src/pages/signup/app.jsx
try { (() => {
// TripInsel sign-up — design canvas layout
// Lays each sign-up screen onto a DCArtboard inside DCSections.

const SignUpCanvas = () => /*#__PURE__*/React.createElement(DesignCanvas, {
  title: "TripInsel \xB7 Sign-up flows",
  subtitle: "Role-aware account creation \u2014 Tourist, Provider and Admin paths. Each artboard is a screen; switch between flows with the section nav. Click any artboard to focus it fullscreen."
}, /*#__PURE__*/React.createElement(DCSection, {
  id: "entry",
  title: "\u2460 Entry",
  subtitle: "The first thing every user sees \u2014 they pick a role before anything role-specific is asked. Only Traveller and Provider are exposed; staff sign-in lives elsewhere."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "role-picker",
  label: "Role picker \xB7 two public roles",
  width: 560,
  height: 780
}, /*#__PURE__*/React.createElement(RolePicker, null))), /*#__PURE__*/React.createElement(DCSection, {
  id: "tourist",
  title: "\u2461 Traveller sign-up \xB7 step-by-step",
  subtitle: "The volume role, redesigned as one professional 3-step wizard: Account \u2192 Verify by SMS \u2192 Personalise. Fully interactive \u2014 click through it. Google-first, with email fallback; phone verified by 6-digit code; profile step is all-optional. The split-screen treatment is kept as a visual variant."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "tourist-wizard",
  label: "Traveller wizard \xB7 interactive (click through)",
  width: 560,
  height: 920
}, /*#__PURE__*/React.createElement(TouristWizard, null)), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "tourist-verify",
  label: "Step 2 \xB7 Verify by SMS (6-digit code)",
  width: 560,
  height: 720
}, /*#__PURE__*/React.createElement(TouristVerifyScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "tourist-split",
  label: "Variant \xB7 Split with photo",
  width: 1040,
  height: 720
}, /*#__PURE__*/React.createElement(TouristSignupSplit, null))), /*#__PURE__*/React.createElement(DCSection, {
  id: "provider",
  title: "\u2462 Local host sign-up",
  subtitle: "Local hosts (formerly 'providers') carry the most data. Two steps: business identity first, then location with a map pin that auto-fills the address. A verification step follows after submit (not shown \u2014 handled by Admin)."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "provider-step1",
  label: "Step 1 \xB7 Business",
  width: 580,
  height: 1040
}, /*#__PURE__*/React.createElement(ProviderStep1, null)), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "provider-step2",
  label: "Step 2 \xB7 Map-first location",
  width: 600,
  height: 1000
}, /*#__PURE__*/React.createElement(ProviderStep2, null))), /*#__PURE__*/React.createElement(DCSection, {
  id: "admin",
  title: "\u2463 Admin sign-up \xB7 private URL only",
  subtitle: "Reached only via a private URL (e.g. /staff/onboard) sent in the invitation email. NOT linked from the public role picker \u2014 that surface only exposes Traveller and Provider. Open admin enrolment is an enumeration and social-engineering risk."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "admin",
  label: "Admin \xB7 invite-only",
  width: 560,
  height: 920
}, /*#__PURE__*/React.createElement(AdminSignup, null))), /*#__PURE__*/React.createElement(DCSection, {
  id: "notes",
  title: "\u2464 Design notes & open questions",
  subtitle: "Decisions made on your behalf and where I'd love your input."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "notes",
  label: "Read me",
  width: 680,
  height: 760,
  style: {
    background: '#FFFCF5'
  }
}, /*#__PURE__*/React.createElement(DesignNotes, null))));
const DesignNotes = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '32px 36px',
    height: '100%',
    boxSizing: 'border-box',
    overflow: 'auto',
    fontFamily: 'var(--font-primary)',
    color: 'var(--color-text-primary)',
    background: '#FFFCF5'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: '700 11px var(--font-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#8A6000',
    marginBottom: 8
  }
}, "Designer's notes"), /*#__PURE__*/React.createElement("h2", {
  style: {
    font: '800 22px var(--font-primary)',
    letterSpacing: '-0.015em',
    margin: '0 0 14px'
  }
}, "Assumptions & open questions"), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "1 \xB7 Traveller sign-up is one step-by-step wizard"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: 0
  }
}, "Per your scenario, the traveller flow is one interactive 3-step wizard \u2014 ", /*#__PURE__*/React.createElement("strong", null, "Account \u2192 Verify \u2192 Complete account"), ":"), /*#__PURE__*/React.createElement("ul", {
  style: {
    font: '400 13px/1.6 var(--font-primary)',
    color: '#555',
    margin: '6px 0 0',
    paddingLeft: 18
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sign up"), " with Google, Apple ", /*#__PURE__*/React.createElement("em", null, "or"), " email/password \u2014 all three are equal entry points."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Phone verification by SMS is required in every case"), ", even after Google/Apple \u2014 the OAuth recap card still asks for a phone and routes through the same 6-digit code step."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Complete account"), " after verifying: first name + last name are ", /*#__PURE__*/React.createElement("strong", null, "required"), "; preferred language, nationality and profile photo are ", /*#__PURE__*/React.createElement("strong", null, "optional"), ". OAuth pre-fills the name (editable); the Finish button stays disabled until first + last name are set.")), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "2 \xB7 Provider address auto-fills from the pin"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: 0
  }
}, "Great suggestion. Step 2 now leads with the map. When the host drops or drags the pin, the system reverse-geocodes the coordinates and writes the result into the address field below \u2014 shown via a green \"Address filled from your pin\" affordance and a subtle green tint on the input so they know it was auto-populated. The field stays editable for hosts whose pin lands on a street number that doesn't match their unit."), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: '4px 0 0'
  }
}, /*#__PURE__*/React.createElement("strong", null, "Postal code removed"), " \u2014 Tunisia's postal codes aren't useful for travellers finding a tour, and Nominatim/Mapbox reverse-geocoding gives us the town/area for free."), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "3 \xB7 Provider location pin uses real reverse geocoding"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: 0
  }
}, "The README mentions Leaflet + React-Leaflet. The map shown is a static sketch \u2014 the production version should pair Leaflet with a reverse-geocoding service (Nominatim is free, Mapbox Geocoding is more reliable) so pin drags fire a debounced lookup that writes the street + town back into the form. Pin and inputs stay two-way bound."), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "4 \xB7 Admin role is hidden from the public role picker"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: 0
  }
}, "Per your call \u2014 and correctly so. The public picker shows only ", /*#__PURE__*/React.createElement("strong", null, "Traveller"), " and ", /*#__PURE__*/React.createElement("strong", null, "Provider"), ". Listing an \"Administrator\" option teaches attackers that the role exists and creates a clickable funnel they'll hammer with credential-stuffing and social engineering. Instead:"), /*#__PURE__*/React.createElement("ul", {
  style: {
    font: '400 13px/1.6 var(--font-primary)',
    color: '#555',
    margin: '6px 0 0',
    paddingLeft: 18
  }
}, /*#__PURE__*/React.createElement("li", null, "Admin invites are sent by email with a one-time code that opens a ", /*#__PURE__*/React.createElement("strong", null, "private URL"), " (e.g. ", /*#__PURE__*/React.createElement("code", {
  style: {
    background: '#F2F2F2',
    padding: '1px 5px',
    borderRadius: 4,
    font: '600 12px monospace'
  }
}, "/staff/onboard?token=\u2026"), ")."), /*#__PURE__*/React.createElement("li", null, "The URL is not linked from marketing, the role picker, or any provider/tourist page."), /*#__PURE__*/React.createElement("li", null, "Codes expire within 24 hours and are single-use."), /*#__PURE__*/React.createElement("li", null, "First sign-in enforces 2FA enrolment and logs the event to the audit trail."), /*#__PURE__*/React.createElement("li", null, "Under the role picker we show a short, neutral hint \u2014 \"", /*#__PURE__*/React.createElement("em", null, "TripInsel staff sign in at a private URL"), "\" \u2014 so an internal user who lands on the public page knows where to go, without naming the role.")), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "5 \xB7 Tourist verifies by SMS code"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 13px/1.55 var(--font-primary)',
    color: '#555',
    margin: 0
  }
}, "Per your call \u2014 right after sign-up the traveller gets a ", /*#__PURE__*/React.createElement("strong", null, "6-digit code by SMS"), " to their phone number and enters it on the verify screen (artboard B). Six separate boxes, auto-advance on type, paste-to-fill, a resend timer, and a 10-minute expiry. Only after the code is confirmed do they reach \"Complete your profile\". On the backend this is a", /*#__PURE__*/React.createElement("code", {
  style: {
    background: '#F2F2F2',
    padding: '1px 5px',
    borderRadius: 4,
    font: '600 12px monospace'
  }
}, "POST /auth/verify-otp"), " with the phone + code; the account stays ", /*#__PURE__*/React.createElement("em", null, "unverified"), " until it succeeds."), /*#__PURE__*/React.createElement("h3", {
  style: {
    font: '700 14px var(--font-primary)',
    margin: '18px 0 6px'
  }
}, "6 \xB7 Where to go from here"), /*#__PURE__*/React.createElement("ul", {
  style: {
    font: '400 13px/1.6 var(--font-primary)',
    color: '#555',
    margin: 0,
    paddingLeft: 18
  }
}, /*#__PURE__*/React.createElement("li", null, "Verification states \xB7 awaiting review \xB7 approved \xB7 rejected"), /*#__PURE__*/React.createElement("li", null, "Mobile breakpoints \u2014 every screen should collapse to a single-column 360 px wide layout"), /*#__PURE__*/React.createElement("li", null, "Provider step 3 \u2014 payment payout details (bank or wallet)"), /*#__PURE__*/React.createElement("li", null, "Sign-in screen, password reset, and \"Resume application\" for unfinished providers")));
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SignUpCanvas, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/signup/app.jsx", error: String((e && e.message) || e) }); }

// src/pages/tourist/app.jsx
try { (() => {
// Tourist UI kit — App router
function TouristApp() {
  const [route, setRoute] = useState({
    name: 'home',
    params: {}
  });
  const go = (name, params = {}) => {
    setRoute({
      name,
      params
    });
    window.scrollTo({
      top: 0
    });
  };
  const current = route.name === 'home' ? 'home' : route.name === 'search' ? 'home' : route.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-page-tourist"
  }, /*#__PURE__*/React.createElement(TouristNavbar, {
    onNavigate: go,
    current: current,
    onSearch: q => go('search', {
      query: q
    }),
    hideSearch: route.name === 'home',
    signedIn: route.name === 'bookings' || route.name === 'booking'
  }), /*#__PURE__*/React.createElement("main", {
    className: "ti-page-content",
    key: route.name + JSON.stringify(route.params)
  }, route.name === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  }), route.name === 'search' && /*#__PURE__*/React.createElement(SearchScreen, {
    params: route.params,
    go: go
  }), route.name === 'detail' && /*#__PURE__*/React.createElement(DetailScreen, {
    params: route.params,
    go: go
  }), route.name === 'booking' && /*#__PURE__*/React.createElement(BookingConfirmScreen, {
    params: route.params,
    go: go
  }), route.name === 'bookings' && /*#__PURE__*/React.createElement(BookingsScreen, {
    go: go
  })), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(TouristApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/tourist/app.jsx", error: String((e && e.message) || e) }); }

// src/pages/tourist/components.jsx
try { (() => {
// Tourist UI kit — small reusable components

const LANGUAGES = [{
  code: 'EN',
  flag: '🇬🇧',
  label: 'English',
  native: 'English'
}, {
  code: 'FR',
  flag: '🇫🇷',
  label: 'French',
  native: 'Français'
}, {
  code: 'DE',
  flag: '🇩🇪',
  label: 'German',
  native: 'Deutsch'
}, {
  code: 'IT',
  flag: '🇮🇹',
  label: 'Italian',
  native: 'Italiano'
}, {
  code: 'AR',
  flag: '🇹🇳',
  label: 'Arabic',
  native: 'العربية'
}, {
  code: 'ES',
  flag: '🇪🇸',
  label: 'Spanish',
  native: 'Español'
}];

/* ── Language switcher (popover) ─────────────────────────────── */
function LanguageSwitcher({
  compact
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('EN');
  const cur = LANGUAGES.find(l => l.code === active);
  useEffect(() => {
    if (!open) return;
    const close = e => {
      if (!e.target.closest('.ti-lang')) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ti-lang' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-lang-btn",
    onClick: e => {
      e.stopPropagation();
      setOpen(v => !v);
    },
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, cur.flag), !compact && /*#__PURE__*/React.createElement("span", null, cur.code, " \xB7 ", cur.native), compact && /*#__PURE__*/React.createElement("span", null, cur.code), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ti-lang-menu",
    role: "listbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, "Choose your language"), LANGUAGES.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.code,
    role: "option",
    "aria-selected": l.code === active,
    className: 'opt' + (l.code === active ? ' active' : ''),
    onClick: () => {
      setActive(l.code);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, l.flag), /*#__PURE__*/React.createElement("span", null, l.label), /*#__PURE__*/React.createElement("span", {
    className: "native"
  }, l.native), l.code === active && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "#00703A",
    strokeWidth: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 12,
    color: "#999"
  }), "We translate listings, reviews and confirmations.")));
}

/* ── Navbar ───────────────────────────────────────────────────────── */
// hideSearch: pass true on Home (the hero owns search there).
//             Inner pages get the compact search in the navbar.
function TouristNavbar({
  onNavigate,
  current,
  onSearch,
  searchValue,
  hideSearch,
  signedIn = false
}) {
  const [v, setV] = useState(searchValue || '');
  const links = [{
    id: 'home',
    label: 'Experiences'
  }, {
    id: 'categories',
    label: 'Categories'
  }, {
    id: 'map',
    label: 'Map'
  }, {
    id: 'reviews',
    label: 'Reviews'
  }, {
    id: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-sticky)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate('home'),
    style: {
      font: '800 22px var(--font-primary)',
      color: 'var(--color-primary)',
      letterSpacing: '-0.02em',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 9999,
      background: 'var(--color-primary)',
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: 'var(--color-primary-bright, #00eb5b)'
    }
  })), "TripInsel"), hideSearch ? /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 28,
      paddingLeft: 12,
      font: '600 14px var(--font-primary)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNavigate('home'),
    style: {
      color: current === l.id ? 'var(--color-primary)' : 'var(--color-text-primary)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l.label))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(v);
    },
    style: {
      flex: 1,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ti-pill-search",
    placeholder: "Search activities \u2014 sunset camel ride, cooking class, dive\u2026",
    value: v,
    onChange: e => setV(e.target.value)
  })), /*#__PURE__*/React.createElement(LanguageSwitcher, null), signedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    onClick: () => onNavigate('bookings')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 14
  }), "My bookings"), /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar",
    title: "Signed in"
  }, "SK")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    style: {
      fontWeight: 700
    },
    onClick: () => {
      window.location.href = '../landing/index.html#/signin';
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary",
    onClick: () => {
      window.location.href = '../landing/index.html#/signup';
    }
  }, "Sign up"))), !hideSearch && /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      display: 'flex',
      gap: 28,
      padding: '0 24px 12px',
      font: '600 13px var(--font-primary)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNavigate('home'),
    style: {
      color: current === l.id ? 'var(--color-primary)' : 'var(--color-text-primary)',
      borderBottom: current === l.id ? '2px solid var(--color-primary)' : '2px solid transparent',
      paddingBottom: 4,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l.label))));
}

/* ── Hero ─────────────────────────────────────────────────────────── */
// Editorial entry. ONE search bar — no date, no traveler picker (those belong
// in the booking widget). Background crossfades between 3 Djerba scenes with
// a slow ken-burns motion. Headline reveals word-by-word.
function Hero({
  onSearch
}) {
  const [v, setV] = useState('');
  const moods = [{
    id: 'sunset',
    label: 'Sunset moments',
    icon: 'zap'
  }, {
    id: 'water',
    label: 'On the water',
    icon: 'mapPin'
  }, {
    id: 'family',
    label: 'With the kids',
    icon: 'users'
  }, {
    id: 'food',
    label: 'Foodie days',
    icon: 'heart'
  }, {
    id: 'culture',
    label: 'Souks & culture',
    icon: 'flag'
  }, {
    id: 'wellness',
    label: 'Slow & restorative',
    icon: 'heart'
  }];
  const [activeMood, setActiveMood] = useState('sunset');
  const heroImages = ['https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=2000&q=85&fit=crop&auto=format', 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=2000&q=85&fit=crop&auto=format', 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=2000&q=85&fit=crop&auto=format'];
  const headline = ['What', 'will', 'you', 'do', 'in'];
  const headline2 = ['Djerba', 'today?'];
  return /*#__PURE__*/React.createElement("section", {
    className: "ti-hero",
    style: {
      position: 'relative',
      minHeight: 600,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '32px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-hero-bg",
    "aria-hidden": true
  }, heroImages.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ti-hero-bg__img",
    style: {
      backgroundImage: `url(${src})`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,40,50,0.10) 0%, rgba(10,40,50,0.32) 45%, rgba(10,40,50,0.80) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ti-reveal",
    style: {
      '--d': '0.2s',
      position: 'absolute',
      top: 28,
      right: 32,
      zIndex: 2,
      background: 'rgba(255,255,255,0.96)',
      borderRadius: 12,
      padding: '10px 14px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      font: '600 12px var(--font-primary)',
      color: '#161616'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ti-live-dot"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "27 travellers"), " booking right now")), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      position: 'relative',
      zIndex: 1,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-reveal",
    style: {
      '--d': '0s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.16)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.30)',
      color: '#fff',
      padding: '6px 12px',
      borderRadius: 9999,
      font: '700 11px var(--font-primary)',
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 12,
    color: "#fff"
  }), "Djerba \xB7 Tunisia \xB7 The island of dreamers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 64px/1.02 var(--font-primary)',
      letterSpacing: '-0.025em',
      margin: '0 0 14px',
      color: '#fff',
      maxWidth: 880
    }
  }, headline.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ti-hero-word",
    style: {
      '--d': `${0.1 + i * 0.07}s`,
      marginRight: '0.25em'
    }
  }, w)), /*#__PURE__*/React.createElement("br", null), headline2.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ti-hero-word",
    style: {
      '--d': `${0.45 + i * 0.09}s`,
      marginRight: '0.25em'
    }
  }, w))), /*#__PURE__*/React.createElement("p", {
    className: "ti-reveal",
    style: {
      '--d': '0.7s',
      font: '400 17px/1.5 var(--font-primary)',
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 28px',
      maxWidth: 560
    }
  }, "342 hand-picked experiences led by verified local hosts. Free cancellation on most. No mystery fees."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch(v);
    },
    className: "ti-hero-search ti-reveal-scale",
    style: {
      '--d': '0.85s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "#555"
  }), /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: "What would you love to do in Djerba?",
    "aria-label": "Search activities"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ti-hero-search-go"
  }, "Search", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 14,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ti-reveal",
    style: {
      '--d': '1.05s',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-primary)',
      color: 'rgba(255,255,255,0.78)',
      marginRight: 4,
      letterSpacing: '0.02em'
    }
  }, "Or browse by mood"), moods.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => setActiveMood(m.id),
    className: 'ti-mood-chip' + (activeMood === m.id ? ' active' : ''),
    style: {
      '--d': `${1.1 + i * 0.05}s`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 13,
    color: activeMood === m.id ? 'var(--color-primary)' : '#fff'
  }), m.label))), /*#__PURE__*/React.createElement("div", {
    className: "ti-reveal",
    style: {
      '--d': '1.3s',
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 26,
      flexWrap: 'wrap',
      color: 'rgba(255,255,255,0.92)',
      font: '600 12px var(--font-primary)',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: 4.8,
    size: 11,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "4.8"), " from 12k+ travellers"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 13,
    color: "#fff"
  }), " 87 verified local hosts"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    strokeWidth: 2.5
  }), " Free cancellation"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 13,
    color: "#fff"
  }), " Instant confirm"))), /*#__PURE__*/React.createElement("div", {
    className: "ti-hero-dots",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })));
}

/* ── "Today in Djerba" contextual strip ──────────────────────────── */
// Sits between hero and content. Weather + golden hour + what's leaving soon.
// Gives the page a sense of place and timing — useful for activity-seekers.
function TodayInDjerba({
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF8EC',
      borderTop: '1px solid #F5E4B8',
      borderBottom: '1px solid #F5E4B8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '14px 24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '700 12px var(--font-primary)',
      color: '#6F4A00',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: '#F2A00A'
    }
  }), "Today in Djerba"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '600 13px var(--font-primary)',
      color: '#3A2A00'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 13,
    color: "#C9853D"
  }), /*#__PURE__*/React.createElement("strong", null, "28\xB0C"), " \xB7 clear \xB7 light breeze"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '600 13px var(--font-primary)',
      color: '#3A2A00'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13,
    color: "#C9853D"
  }), "Golden hour ", /*#__PURE__*/React.createElement("strong", null, "19:14"), " \xB7 sunset ", /*#__PURE__*/React.createElement("strong", null, "19:42")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPick && onPick('sunset'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      border: '1px solid #F2A00A',
      color: '#6F4A00',
      font: '700 12px var(--font-primary)',
      padding: '7px 12px',
      borderRadius: 9999,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 12,
    color: "#6F4A00"
  }), "3 sunset tours leaving in the next 2 hours")));
}

/* ── Category quick-access row ───────────────────────────────────── */
// Editorial photo tiles — each category gets a real Djerba image, name + activity count.
// Replaces the old emoji-circle row.
function CategoryRow({
  onPick
}) {
  const items = [{
    id: 'desert',
    label: 'Desert & dunes',
    count: 28,
    image: 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'water',
    label: 'On the water',
    count: 64,
    image: 'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'cultural',
    label: 'Culture & souks',
    count: 41,
    image: 'https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'cooking',
    label: 'Cooking & food',
    count: 19,
    image: 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'diving',
    label: 'Diving & snorkel',
    count: 22,
    image: 'https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'spa',
    label: 'Hammam & spa',
    count: 12,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'quad',
    label: 'Quad & off-road',
    count: 14,
    image: 'https://images.unsplash.com/photo-1604335398480-1430719fbb01?w=600&q=80&fit=crop&auto=format'
  }, {
    id: 'boat',
    label: 'Boat & sailing',
    count: 17,
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80&fit=crop&auto=format'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      padding: '4px 0'
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onPick(c.id),
    className: "ti-cat-card ti-reveal",
    style: {
      backgroundImage: `url(${c.image})`,
      '--d': `${i * 0.06}s`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.65) 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 12,
      color: '#fff',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 17px var(--font-primary)',
      letterSpacing: '-0.01em'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 11px var(--font-primary)',
      padding: '4px 8px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.20)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255,255,255,0.30)'
    }
  }, c.count)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      width: 22,
      height: 22,
      borderRadius: 9999,
      background: CATEGORY_COLORS[c.id] || '#00AA6C',
      border: '2px solid rgba(255,255,255,0.85)'
    }
  }))));
}

/* ── Curated collections row ─────────────────────────────────────── */
// Editorial "shelf" cards — gives the homepage a magazine feel, not just a search-results list.
function CollectionRow({
  onPick
}) {
  const items = [{
    id: 'first',
    eyebrow: 'For first-timers',
    title: '48 hours of Djerba',
    sub: '8 experiences · plan your weekend',
    tone: '#0F4A4A',
    accent: '#62D5C0'
  }, {
    id: 'sunset',
    eyebrow: 'Editor\u2019s pick',
    title: 'Chasing the sunset',
    sub: '6 golden-hour activities',
    tone: '#7A3B0B',
    accent: '#F2A00A'
  }, {
    id: 'family',
    eyebrow: 'For families',
    title: 'Djerba with little ones',
    sub: '12 kid-friendly experiences',
    tone: '#1B3F7E',
    accent: '#7AB6FF'
  }, {
    id: 'hidden',
    eyebrow: 'Local favourites',
    title: 'Hidden Djerba',
    sub: '9 spots the locals love',
    tone: '#3D2A5A',
    accent: '#B69CFF'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onPick && onPick(c.id),
    className: "ti-collection-card ti-reveal",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 16,
      padding: '22px 20px 20px',
      background: c.tone,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      '--d': `${i * 0.06}s`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -30,
      bottom: -30,
      width: 130,
      height: 130,
      borderRadius: 9999,
      background: c.accent,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 28,
      bottom: 24,
      width: 60,
      height: 60,
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.20)',
      border: '1px solid rgba(255,255,255,0.35)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      font: '700 10px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.10em',
      color: c.accent
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'relative',
      font: '800 22px/1.15 var(--font-primary)',
      letterSpacing: '-0.015em',
      margin: 0,
      color: '#fff',
      maxWidth: '85%'
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      font: '400 13px var(--font-primary)',
      color: 'rgba(255,255,255,0.82)'
    }
  }, c.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '700 13px var(--font-primary)',
      color: '#fff'
    }
  }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 14,
    color: "#fff"
  })))));
}

/* ── Activity card (grid layout) ─────────────────────────────────── */
function ActivityCard({
  a,
  onClick
}) {
  const [saved, setSaved] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    onClick: onClick,
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 200,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-activity-card-img",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 9999,
      padding: '5px 10px',
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(CategoryDot, {
    category: a.category
  }), a.categoryLabel), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setSaved(!saved);
    },
    "aria-label": "Save",
    className: 'ti-heart-btn' + (saved ? ' saved' : ''),
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 16,
    color: saved ? '#00AA6C' : '#161616',
    fill: saved ? '#00AA6C' : 'none'
  })), a.travelersChoice && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(TravelersChoice, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: 0,
      color: '#161616',
      lineHeight: 1.3
    }
  }, a.title), /*#__PURE__*/React.createElement(Bubbles, {
    score: a.rating,
    showScore: true,
    showCount: a.reviewCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, a.location, " \xB7 ", /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 11,
    color: "#555"
  }), " ", a.duration), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 18px var(--font-primary)',
      color: '#161616'
    }
  }, "from \u20AC", a.price, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#999',
      marginLeft: 2
    }
  }, "/person")), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary ti-btn-sm",
    onClick: e => {
      e.stopPropagation();
      onClick();
    }
  }, "Book"))));
}

/* ── Search result row (list layout) ─────────────────────────────── */
function SearchResultRow({
  a,
  rank,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--color-border)',
      cursor: 'pointer'
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 18px var(--font-primary)',
      color: '#161616',
      width: 24,
      paddingTop: 4
    }
  }, rank, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 110,
      borderRadius: 8,
      flexShrink: 0,
      backgroundImage: `url(${a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 18px var(--font-primary)',
      margin: '0 0 4px',
      color: '#161616'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: a.rating,
    showScore: true,
    showCount: a.reviewCount
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginBottom: 6
    }
  }, a.categoryLabel, " \xB7 ", a.duration, " \xB7 ", a.location), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.4 var(--font-primary)',
      color: '#555',
      margin: '0 0 10px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, a.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#00703A',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#00703A",
    strokeWidth: 2.5
  }), "Free cancellation \xB7 from ", /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '800 16px var(--font-primary)',
      color: '#161616',
      marginLeft: 4
    }
  }, "\u20AC", a.price)), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary ti-btn-sm",
    onClick: e => {
      e.stopPropagation();
      onClick();
    }
  }, "Book"))));
}

/* ── Filter bar ──────────────────────────────────────────────────── */
function FilterBar({
  activeCategory,
  onCategoryChange
}) {
  const cats = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'desert',
    label: 'Desert safari'
  }, {
    id: 'water',
    label: 'Water sports'
  }, {
    id: 'cultural',
    label: 'Cultural'
  }, {
    id: 'cooking',
    label: 'Cooking'
  }, {
    id: 'diving',
    label: 'Diving'
  }, {
    id: 'boat',
    label: 'Boat'
  }, {
    id: 'quad',
    label: 'Quad'
  }, {
    id: 'spa',
    label: 'Spa'
  }, {
    id: 'food',
    label: 'Food'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      position: 'sticky',
      top: 96,
      zIndex: 10,
      borderBottom: '1px solid var(--color-border)',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: `ti-chip ${activeCategory === c.id ? 'active' : ''}`,
    onClick: () => onCategoryChange(c.id)
  }, c.id !== 'all' && /*#__PURE__*/React.createElement(CategoryDot, {
    category: c.id
  }), c.label))));
}

/* ── Booking widget (sticky right column) ────────────────────────── */
function BookingWidget({
  activity,
  onBook
}) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [time, setTime] = useState('14:00');
  const slots = ['08:00', '10:00', '14:00', '16:30'];
  const total = adults * activity.price + children * activity.price * 0.6;
  return /*#__PURE__*/React.createElement("aside", {
    className: "ti-card",
    style: {
      padding: 20,
      borderRadius: 16,
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      top: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 24px var(--font-primary)'
    }
  }, "from \u20AC", activity.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "per person")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6
    }
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "ti-input",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: "#555"
  }), "Tue, Jun 17 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6
    }
  }, "Time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 14
    }
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `ti-chip ${s === time ? 'active' : ''}`,
    style: s === time ? {
      background: 'var(--color-primary)',
      color: '#fff',
      borderColor: 'var(--color-primary)'
    } : {},
    onClick: () => setTime(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6
    }
  }, "Participants"), /*#__PURE__*/React.createElement(Counter, {
    label: "Adults",
    value: adults,
    onChange: setAdults
  }), /*#__PURE__*/React.createElement(Counter, {
    label: "Children",
    value: children,
    onChange: setChildren,
    sublabel: "60% rate"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      font: '700 15px var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 18px var(--font-primary)'
    }
  }, "\u20AC", total.toFixed(2))), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary ti-btn-block",
    onClick: () => onBook({
      time,
      adults,
      children,
      total
    })
  }, "Check availability"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(TrustRow, null)));
}
function Counter({
  label,
  value,
  onChange,
  sublabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #F2F2F2'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-primary)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-primary)',
      color: '#999'
    }
  }, sublabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.max(0, value - 1)),
    style: cBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px var(--font-primary)',
      minWidth: 16,
      textAlign: 'center'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(value + 1),
    style: cBtn
  }, "+")));
}
const cBtn = {
  width: 28,
  height: 28,
  borderRadius: 9999,
  border: '1px solid var(--color-border)',
  background: '#fff',
  cursor: 'pointer',
  font: '700 16px var(--font-primary)',
  color: '#161616'
};

/* ── About TripInsel ─────────────────────────────────────────────── */
// Explains the platform's concept on the home page. Three pillars + stat strip.
function AboutTripInsel() {
  const pillars = [{
    icon: 'mapPin',
    tone: '#0F4A4A',
    tint: '#D4F0EC',
    title: 'One island. Every experience.',
    body: 'TripInsel is the dedicated marketplace for Djerba — not a country-wide site that forgets where you are. We focus on one island so every listing is local, verified, and bookable in real time.'
  }, {
    icon: 'checkCircle',
    tone: '#00703A',
    tint: '#D4F5E9',
    title: 'Verified local hosts only',
    body: 'Every host is reviewed by our team — licence checked, location confirmed, insurance in place. The trust badge you see isn\u2019t marketing; it means a human at TripInsel signed off on it.'
  }, {
    icon: 'shieldCheck',
    tone: '#6F4A00',
    tint: '#FFF1D0',
    title: 'Fair prices, transparent rules',
    body: 'The price you see is the price you pay — taxes included. Free cancellation on most experiences up to 24 hours before. Bookings are protected, refunds are automatic.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.10em',
      color: 'var(--color-primary)',
      marginBottom: 10
    }
  }, "About TripInsel"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 32px/1.15 var(--font-primary)',
      letterSpacing: '-0.02em',
      margin: '0 0 10px'
    }
  }, "The way Djerba should be booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15.5px/1.6 var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, "TripInsel connects travellers with the people who actually make Djerba magical \u2014 the camel guides, the cooking grandmothers, the dive instructors who know which reef catches the morning light. We're built here, by people from here.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    className: "ti-card ti-about-card ti-reveal",
    style: {
      padding: 24,
      '--d': `${0.05 + i * 0.08}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: p.tint,
      color: p.tone,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 20,
    color: p.tone
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 18px var(--font-primary)',
      letterSpacing: '-0.01em',
      margin: '0 0 6px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.55 var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, p.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '22px 24px',
      background: 'linear-gradient(135deg, #F2FBF8 0%, #D4F5E9 100%)',
      border: '1px solid #D4F5E9',
      borderRadius: 16,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, [{
    n: '342',
    l: 'Activities listed'
  }, {
    n: '87',
    l: 'Verified local hosts'
  }, {
    n: '12k+',
    l: 'Travellers this year'
  }, {
    n: '4.8',
    l: 'Average rating'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-stat-num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-primary)',
      color: '#555',
      marginTop: 6,
      letterSpacing: '0.02em'
    }
  }, s.l)))));
}

/* ── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#161616',
      color: '#fff',
      padding: '40px 0',
      marginTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
      marginBottom: 32
    }
  }, [{
    title: 'TripInsel',
    items: ['About', 'Press', 'Careers', 'Contact']
  }, {
    title: 'Help',
    items: ['Help center', 'Cancellation', 'Safety', 'Accessibility']
  }, {
    title: 'For local hosts',
    items: ['List your activity', 'Local host hub', 'Insights', 'Verification']
  }, {
    title: 'Discover',
    items: ['Things to do', 'Map', 'About Djerba', 'Travel guide']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)',
      marginBottom: 10
    }
  }, col.title), col.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      display: 'block',
      color: '#bbb',
      font: '400 13px var(--font-primary)',
      padding: '4px 0',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #333',
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 12px var(--font-primary)',
      color: '#999'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 TripInsel \xB7 Made on the island, for the island."), /*#__PURE__*/React.createElement("span", null, "EN \xB7 \u20ACEUR"))));
}
Object.assign(window, {
  LanguageSwitcher,
  TouristNavbar,
  Hero,
  TodayInDjerba,
  CategoryRow,
  CollectionRow,
  ActivityCard,
  SearchResultRow,
  AboutTripInsel,
  FilterBar,
  BookingWidget,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/tourist/components.jsx", error: String((e && e.message) || e) }); }

// src/pages/tourist/screens.jsx
try { (() => {
// Tourist UI kit — screens

const TOURIST_ACTIVITIES = [{
  id: 'a1',
  title: 'Sunset camel ride at Ras R\'mel',
  image: 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=1200&q=80&fit=crop&auto=format',
  category: 'desert',
  categoryLabel: 'Desert',
  rating: 4.9,
  reviewCount: 1234,
  location: 'Houmt Souk',
  duration: '3 hours',
  price: 45,
  travelersChoice: true,
  providerId: 'p1',
  description: 'Ride along the lagoon at golden hour with a local guide. Includes hotel pickup, mint tea on the dune, and time at the sandbar before sunset.'
}, {
  id: 'a2',
  title: 'Flamingo lagoon boat tour',
  image: 'https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=1200&q=80&fit=crop&auto=format',
  category: 'water',
  categoryLabel: 'Water',
  rating: 4.5,
  reviewCount: 842,
  location: 'Ras R\'mel',
  duration: '2 hours',
  price: 38,
  providerId: 'p2',
  description: 'Spot pink flamingos on the lagoon by traditional wooden boat. Snorkel gear included for the open-water stop and a tea break on the sandbar.'
}, {
  id: 'a3',
  title: 'Houmt Souk medina walking tour',
  image: '../../../assets/photo-souk.svg',
  category: 'cultural',
  categoryLabel: 'Cultural',
  rating: 4.7,
  reviewCount: 561,
  location: 'Houmt Souk',
  duration: '2.5 hours',
  price: 28,
  travelersChoice: true,
  providerId: 'p3',
  description: 'A local historian leads you through the spice market, mosaic courtyards, and the Spanish fort. Family-friendly pace.'
}, {
  id: 'a4',
  title: 'Tunisian cooking class with Souad',
  image: 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=1200&q=80&fit=crop&auto=format',
  category: 'cooking',
  categoryLabel: 'Cooking',
  rating: 4.8,
  reviewCount: 412,
  location: 'Midoun',
  duration: '4 hours',
  price: 65,
  providerId: 'p4',
  description: 'Shop the morning market then cook brik, couscous, and Tunisian salad with Souad in her family kitchen. Lunch and tea included.'
}, {
  id: 'a5',
  title: 'Scuba dive at El Kantara reef',
  image: 'https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=1200&q=80&fit=crop&auto=format',
  category: 'diving',
  categoryLabel: 'Diving',
  rating: 4.6,
  reviewCount: 298,
  location: 'El Kantara',
  duration: '3 hours',
  price: 82,
  providerId: 'p5',
  description: 'Two guided dives at one of Djerba\'s clearest reefs. Open Water cert required. All gear, transfers, and a light lunch included.'
}, {
  id: 'a6',
  title: 'Lagoon kayak + flamingo sunset',
  image: 'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=1200&q=80&fit=crop&auto=format',
  category: 'water',
  categoryLabel: 'Water',
  rating: 4.7,
  reviewCount: 367,
  location: 'Ras R\'mel',
  duration: '2 hours',
  price: 42,
  providerId: 'p2',
  description: 'Paddle the calm lagoon at sunset with a guide. Single and double kayaks available. Wildlife spotting and a hot mint tea at the end.'
}, {
  id: 'a7',
  title: 'Hammam & argan spa ritual',
  image: '../../../assets/photo-souk.svg',
  category: 'spa',
  categoryLabel: 'Spa',
  rating: 4.8,
  reviewCount: 521,
  location: 'Midoun',
  duration: '2 hours',
  price: 58,
  providerId: 'p6',
  description: 'A traditional steam, black soap exfoliation, and argan-oil massage in a tiled hammam. Bathrobe and slippers provided.'
}, {
  id: 'a8',
  title: 'Quad biking through the salt flats',
  image: '../../../assets/photo-desert.svg',
  category: 'quad',
  categoryLabel: 'Quad',
  rating: 4.4,
  reviewCount: 189,
  location: 'El Kantara',
  duration: '1.5 hours',
  price: 55,
  providerId: 'p7',
  description: 'Ride solo or tandem across the salt flats with an experienced guide. Helmets, goggles, and instruction provided.'
}];

/* ── Home screen ─────────────────────────────────────────────────── */
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onSearch: q => go('search', {
      query: q
    })
  }), /*#__PURE__*/React.createElement(TodayInDjerba, {
    onPick: cat => go('search', {
      category: cat
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-primary)',
      letterSpacing: '-0.015em',
      margin: '0 0 4px'
    }
  }, "Browse by what you'd love to do"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, "Pick a vibe \u2014 we'll surface the best in it.")), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('search'),
    style: {
      font: '700 13px var(--font-primary)',
      color: 'var(--color-primary)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "See all 340 activities ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 12,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement(CategoryRow, {
    onPick: cat => go('search', {
      category: cat
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-primary)',
      letterSpacing: '-0.015em',
      margin: '0 0 4px'
    }
  }, "Curated by the TripInsel editors"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, "Hand-built collections for every kind of trip."))), /*#__PURE__*/React.createElement(CollectionRow, {
    onPick: () => go('search')
  })), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-primary)',
      letterSpacing: '-0.015em',
      margin: '0 0 4px'
    }
  }, "Experiences travellers love"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: 0
    }
  }, "Top-rated activities this month.")), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('search'),
    style: {
      font: '700 13px var(--font-primary)',
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, "View more ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 12,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ti-grid-activities"
  }, TOURIST_ACTIVITIES.slice(0, 4).map(a => /*#__PURE__*/React.createElement(ActivityCard, {
    key: a.id,
    a: a,
    onClick: () => go('detail', {
      id: a.id
    })
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-primary)',
      letterSpacing: '-0.015em',
      margin: 0
    }
  }, "Travellers' Choice \u2014 Best of Djerba 2025")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '0 0 16px'
    }
  }, "The top 10% of activities, voted by you."), /*#__PURE__*/React.createElement("div", {
    className: "ti-grid-activities"
  }, TOURIST_ACTIVITIES.filter(a => a.travelersChoice).slice(0, 4).map(a => /*#__PURE__*/React.createElement(ActivityCard, {
    key: a.id,
    a: a,
    onClick: () => go('detail', {
      id: a.id
    })
  })))), /*#__PURE__*/React.createElement(AboutTripInsel, null), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      marginTop: 56,
      padding: '44px 32px',
      background: 'linear-gradient(135deg, var(--color-primary-light) 0%, #D4F5E9 60%, #fff 100%)',
      border: '1px solid #B7E3CD',
      borderRadius: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#00703A',
      marginBottom: 8
    }
  }, "For local hosts"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-primary)',
      margin: '0 0 8px',
      color: '#00703A',
      letterSpacing: '-0.015em'
    }
  }, "Share your Djerba with the world."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.55 var(--font-primary)',
      color: '#384a3f',
      margin: '0 0 18px'
    }
  }, "Whether you run sunset camel rides, dive trips or family cooking classes \u2014 list your experience on TripInsel and reach 12k+ travellers a year. Free to join, fair commission, paid weekly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary"
  }, "Become a local host"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost",
    style: {
      background: 'rgba(255,255,255,0.7)'
    }
  }, "How it works"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexShrink: 0
    }
  }, [{
    n: '€2.4k',
    l: 'Avg. monthly earnings'
  }, {
    n: '< 48h',
    l: 'Verification time'
  }, {
    n: '0%',
    l: 'Listing fee'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      background: '#fff',
      padding: '14px 16px',
      borderRadius: 12,
      boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
      minWidth: 120,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-stat-num",
    style: {
      fontSize: 22
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-primary)',
      color: '#555',
      marginTop: 4
    }
  }, s.l))))));
}

/* ── Search results screen ───────────────────────────────────────── */
function SearchScreen({
  params,
  go
}) {
  const [category, setCategory] = useState(params.category || 'all');
  const filtered = category === 'all' ? TOURIST_ACTIVITIES : TOURIST_ACTIVITIES.filter(a => a.category === category);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterBar, {
    activeCategory: category,
    onCategoryChange: setCategory
  }), /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      color: '#00AA6C',
      cursor: 'pointer'
    }
  }, "Djerba"), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 11,
    color: "#999"
  }), " All activities"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 28px var(--font-primary)',
      margin: '0 0 4px'
    }
  }, category === 'all' ? 'All activities in Djerba' : `${filtered[0]?.categoryLabel || category} in Djerba`), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555',
      margin: '0 0 16px'
    }
  }, filtered.length, " results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 8
    }
  }, ['Sort: Relevance', 'Duration', 'Price', 'Rating', 'More filters'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "ti-chip",
    style: {
      background: '#fff'
    }
  }, s, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 11
  })))), /*#__PURE__*/React.createElement("div", null, filtered.map((a, i) => /*#__PURE__*/React.createElement(SearchResultRow, {
    key: a.id,
    a: a,
    rank: i + 1,
    onClick: () => go('detail', {
      id: a.id
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      padding: '24px 0',
      font: '600 14px var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "\u2190 Prev"), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip active"
  }, "1"), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "2"), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'center'
    }
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "24"), /*#__PURE__*/React.createElement("button", {
    className: "ti-chip"
  }, "Next \u2192"))));
}

/* ── Activity detail ─────────────────────────────────────────────── */
function DetailScreen({
  params,
  go
}) {
  const a = TOURIST_ACTIVITIES.find(x => x.id === params.id) || TOURIST_ACTIVITIES[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      color: '#00AA6C',
      cursor: 'pointer'
    }
  }, "Djerba"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 11,
    color: "#999"
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('search', {}),
    style: {
      color: '#00AA6C',
      cursor: 'pointer'
    }
  }, "Experiences"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 11,
    color: "#999"
  }), /*#__PURE__*/React.createElement("span", null, a.categoryLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 32px var(--font-primary)',
      margin: '0 0 10px',
      letterSpacing: '-0.015em'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: a.rating,
    showScore: true,
    showCount: a.reviewCount
  }), /*#__PURE__*/React.createElement(RankingBadge, {
    rank: 1,
    total: 87
  }), a.travelersChoice && /*#__PURE__*/React.createElement(TravelersChoice, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-primary)',
      color: '#555'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 13,
    color: "#555"
  }), " ", a.location, " \xB7 ", /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13,
    color: "#555"
  }), " ", a.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14
  }), "Save"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 14
  }), "Share"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '180px 180px',
      gap: 8,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: 'span 2',
      backgroundImage: `url(${a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=800&q=80&fit=crop&auto=format)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=800&q=80&fit=crop&auto=format)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=800&q=80&fit=crop&auto=format)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=800&q=80&fit=crop&auto=format)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 12,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      background: 'rgba(255,255,255,0.95)',
      border: 'none',
      borderRadius: 9999,
      padding: '6px 12px',
      font: '700 12px var(--font-primary)',
      cursor: 'pointer'
    }
  }, "+12 photos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: '0 0 12px'
    }
  }, "About this experience"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-primary)',
      color: '#161616',
      margin: 0
    }
  }, a.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "clock",
    label: "Duration",
    value: a.duration
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "users",
    label: "Group",
    value: "Up to 12"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "mapPin",
    label: "Meet",
    value: a.location
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "globe",
    label: "Languages",
    value: "EN \xB7 FR \xB7 DE"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: '0 0 12px'
    }
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, ['Local English/French/German-speaking guide', 'Hotel pickup & drop-off', 'Mint tea & dates', 'Camel & all equipment'].map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 14px var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "checkCircle",
    size: 14,
    color: "#00AA6C"
  }), x)), ['Personal travel insurance', 'Tips for guide (optional)'].map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 14px var(--font-primary)',
      color: '#555'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "xCircle",
    size: 14,
    color: "#D93025"
  }), x)))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: '0 0 12px'
    }
  }, "Meeting point"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-subtle)',
      borderRadius: 12,
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-primary)',
      color: '#999'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 18,
    color: "#999"
  }), " Leaflet map \u2014 ", a.location, ", Djerba")), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: '0 0 12px'
    }
  }, "Your local host"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar",
    style: {
      width: 56,
      height: 56,
      font: '700 20px var(--font-primary)'
    }
  }, "AT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '700 16px var(--font-primary)'
    }
  }, "Ahmed Tours"), /*#__PURE__*/React.createElement(VerifiedBusiness, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Bubbles, {
    score: 4.8,
    showScore: true,
    showCount: 3214
  }))), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary ti-btn-sm"
  }, "View profile"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 20px var(--font-primary)',
      margin: '0 0 16px'
    }
  }, "Reviews"), /*#__PURE__*/React.createElement(ReviewSummary, {
    score: a.rating,
    count: a.reviewCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, [{
    name: 'Sofia K.',
    country: 'Germany',
    date: 'Jun 2025',
    score: 5,
    title: 'Amazing desert safari!',
    body: 'The guide was incredibly knowledgeable and patient with our small kids. The sunset on the dunes was unforgettable.'
  }, {
    name: 'Marc L.',
    country: 'France',
    date: 'May 2025',
    score: 4.5,
    title: 'Beautiful sunset, great team',
    body: 'Smooth pickup, friendly camels, and a stunning sunset. The mint tea at the end was a lovely surprise.'
  }].map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: i,
    r: r
  }))))), /*#__PURE__*/React.createElement(BookingWidget, {
    activity: a,
    onBook: () => go('booking', {
      id: a.id
    })
  })));
}
function Stat({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: '#999',
      font: '600 11px var(--font-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 12,
    color: "#999"
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, value));
}
function ReviewSummary({
  score,
  count
}) {
  const breakdown = [{
    b: 5,
    p: 78
  }, {
    b: 4,
    p: 16
  }, {
    b: 3,
    p: 4
  }, {
    b: 2,
    p: 1
  }, {
    b: 1,
    p: 1
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 36px var(--font-primary)',
      lineHeight: 1
    }
  }, score.toFixed(1)), /*#__PURE__*/React.createElement(Bubbles, {
    score: score,
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginTop: 4
    }
  }, count.toLocaleString(), " reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, breakdown.map(({
    b,
    p
  }) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#555',
      width: 12
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: '#F2F2F2',
      borderRadius: 9999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${p}%`,
      height: '100%',
      background: '#00AA6C'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999',
      width: 32,
      textAlign: 'right'
    }
  }, p, "%")))));
}
function ReviewCard({
  r
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-border)',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ti-avatar"
  }, r.name.split(' ').map(p => p[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px var(--font-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-primary)',
      color: '#999'
    }
  }, r.country, " \xB7 ", r.date))), /*#__PURE__*/React.createElement(Bubbles, {
    score: r.score
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: '700 15px var(--font-primary)',
      margin: '6px 0 4px'
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.5 var(--font-primary)',
      margin: 0
    }
  }, r.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 10,
      font: '400 12px var(--font-primary)',
      color: '#555'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "thumbsUp",
    size: 12,
    color: "#555"
  }), " Helpful (12)"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "#00703A",
    strokeWidth: 2.5
  }), " Verified booking")));
}

/* ── Booking confirmation ────────────────────────────────────────── */
function BookingConfirmScreen({
  params,
  go
}) {
  const a = TOURIST_ACTIVITIES.find(x => x.id === params.id) || TOURIST_ACTIVITIES[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      paddingTop: 60,
      maxWidth: 640,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 9999,
      background: 'var(--color-primary-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    },
    className: "ti-confirm-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "#00AA6C",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 32px var(--font-primary)',
      margin: '0 0 8px'
    }
  }, "You're all set!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px var(--font-primary)',
      color: '#555',
      margin: '0 0 24px'
    }
  }, "A confirmation has been sent to your email."), /*#__PURE__*/React.createElement("div", {
    className: "ti-card",
    style: {
      padding: 20,
      textAlign: 'left',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 8,
      backgroundImage: `url(${a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 16px var(--font-primary)',
      margin: '0 0 4px'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "Jun 17 2025 \xB7 14:00 \xB7 2 adults"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555'
    }
  }, "Ref: TI-4829")), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "confirmed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-secondary",
    onClick: () => go('bookings')
  }, "View booking"), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-primary",
    onClick: () => go('home')
  }, "Explore more")));
}

/* ── My bookings ─────────────────────────────────────────────────── */
function BookingsScreen({
  go
}) {
  const [tab, setTab] = useState('upcoming');
  const bookings = [{
    id: 'TI-4829',
    a: TOURIST_ACTIVITIES[0],
    date: 'Jun 17 2025 · 14:00',
    guests: '2 adults',
    total: 90,
    status: 'confirmed',
    tab: 'upcoming'
  }, {
    id: 'TI-4711',
    a: TOURIST_ACTIVITIES[1],
    date: 'Jun 22 2025 · 10:00',
    guests: '4 adults',
    total: 152,
    status: 'pending',
    tab: 'upcoming'
  }, {
    id: 'TI-4602',
    a: TOURIST_ACTIVITIES[3],
    date: 'May 30 2025 · 09:00',
    guests: '2 adults',
    total: 130,
    status: 'completed',
    tab: 'past'
  }, {
    id: 'TI-4521',
    a: TOURIST_ACTIVITIES[2],
    date: 'May 14 2025 · 11:00',
    guests: '3 adults',
    total: 84,
    status: 'cancelled',
    tab: 'cancelled'
  }];
  const filtered = bookings.filter(b => b.tab === tab);
  return /*#__PURE__*/React.createElement("div", {
    className: "ti-container",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 28px var(--font-primary)',
      margin: '0 0 8px'
    }
  }, "My bookings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--color-border)',
      marginBottom: 16
    }
  }, [['upcoming', 'Upcoming'], ['past', 'Past'], ['cancelled', 'Cancelled']].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      font: '700 14px var(--font-primary)',
      padding: '12px 16px',
      color: tab === id ? 'var(--color-primary)' : '#161616',
      borderBottom: tab === id ? '2px solid var(--color-primary)' : '2px solid transparent',
      marginBottom: -1
    }
  }, label, " ", bookings.filter(b => b.tab === id).length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#999',
      fontWeight: 600
    }
  }, "(", bookings.filter(b => b.tab === id).length, ")")))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 48,
      color: '#999'
    }
  }, "No bookings yet.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, filtered.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "ti-card",
    style: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 72,
      borderRadius: 8,
      backgroundImage: `url(${b.a.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 15px var(--font-primary)',
      margin: 0
    }
  }, b.a.title), /*#__PURE__*/React.createElement(StatusBadge, {
    status: b.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-primary)',
      color: '#555',
      marginTop: 4
    }
  }, b.date, " \xB7 ", b.guests, " \xB7 Ref: ", b.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 16px var(--font-primary)'
    }
  }, "\u20AC", b.total.toFixed(2)), /*#__PURE__*/React.createElement("button", {
    className: "ti-btn ti-btn-ghost ti-btn-sm",
    onClick: () => go('detail', {
      id: b.a.id
    })
  }, "View details"))))));
}
Object.assign(window, {
  TOURIST_ACTIVITIES,
  HomeScreen,
  SearchScreen,
  DetailScreen,
  BookingConfirmScreen,
  BookingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/pages/tourist/screens.jsx", error: String((e && e.message) || e) }); }

})();
