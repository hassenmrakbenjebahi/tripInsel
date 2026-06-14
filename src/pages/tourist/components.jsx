// Tourist UI kit — small reusable components

const LANGUAGES = [
  { code: 'EN', flag: '🇬🇧', label: 'English',  native: 'English'  },
  { code: 'FR', flag: '🇫🇷', label: 'French',   native: 'Français' },
  { code: 'DE', flag: '🇩🇪', label: 'German',   native: 'Deutsch'  },
  { code: 'IT', flag: '🇮🇹', label: 'Italian',  native: 'Italiano' },
  { code: 'AR', flag: '🇹🇳', label: 'Arabic',   native: 'العربية' },
  { code: 'ES', flag: '🇪🇸', label: 'Spanish',  native: 'Español'  },
];

/* ── Language switcher (popover) ─────────────────────────────── */
function LanguageSwitcher({ compact }) {
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
  return (
    <div className={'ti-lang' + (open ? ' open' : '')}>
      <button className="ti-lang-btn" onClick={e => { e.stopPropagation(); setOpen(v => !v); }} aria-haspopup="listbox" aria-expanded={open}>
        <span className="flag">{cur.flag}</span>
        {!compact && <span>{cur.code} · {cur.native}</span>}
        {compact && <span>{cur.code}</span>}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div className="ti-lang-menu" role="listbox">
        <div className="head">Choose your language</div>
        {LANGUAGES.map(l => (
          <div key={l.code} role="option" aria-selected={l.code === active}
               className={'opt' + (l.code === active ? ' active' : '')}
               onClick={() => { setActive(l.code); setOpen(false); }}>
            <span className="flag">{l.flag}</span>
            <span>{l.label}</span>
            <span className="native">{l.native}</span>
            {l.code === active && <Icon name="check" size={14} color="#00703A" strokeWidth={2.5} />}
          </div>
        ))}
        <div className="ftr">
          <Icon name="globe" size={12} color="#999" />
          We translate listings, reviews and confirmations.
        </div>
      </div>
    </div>
  );
}

/* ── Navbar ───────────────────────────────────────────────────────── */
// hideSearch: pass true on Home (the hero owns search there).
//             Inner pages get the compact search in the navbar.
function TouristNavbar({ onNavigate, current, onSearch, searchValue, hideSearch, signedIn = false }) {
  const [v, setV] = useState(searchValue || '');
  const links = [
    { id: 'home',       label: 'Experiences' },
    { id: 'categories', label: 'Categories'  },
    { id: 'map',        label: 'Map'         },
    { id: 'reviews',    label: 'Reviews'     },
    { id: 'about',      label: 'About'       },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#fff',
      borderBottom: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sticky)',
    }}>
      <div className="ti-container" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 24px' }}>
        <a onClick={() => onNavigate('home')} style={{
          font: '800 22px var(--font-primary)', color: 'var(--color-primary)',
          letterSpacing: '-0.02em', cursor: 'pointer', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 9999, background: 'var(--color-primary)',
            position: 'relative', display: 'inline-block',
          }}>
            <span style={{
              position: 'absolute', left: 13, top: 0, width: 16, height: 16, borderRadius: 9999,
              background: 'var(--color-primary-bright, #00eb5b)',
            }}/>
          </span>
          TripInsel
        </a>

        {hideSearch ? (
          <nav style={{ flex: 1, display: 'flex', gap: 28, paddingLeft: 12, font: '600 14px var(--font-primary)' }}>
            {links.map(l => (
              <a key={l.id} onClick={() => onNavigate('home')} style={{
                color: current === l.id ? 'var(--color-primary)' : 'var(--color-text-primary)',
                cursor: 'pointer', textDecoration: 'none',
              }}>{l.label}</a>
            ))}
          </nav>
        ) : (
          <form onSubmit={e => { e.preventDefault(); onSearch && onSearch(v); }} style={{ flex: 1, maxWidth: 520 }}>
            <input className="ti-pill-search" placeholder="Search activities — sunset camel ride, cooking class, dive…"
                   value={v} onChange={e => setV(e.target.value)} />
          </form>
        )}

        <LanguageSwitcher />
        {signedIn ? (
          <>
            <button className="ti-btn ti-btn-ghost" onClick={() => onNavigate('bookings')}>
              <Icon name="briefcase" size={14} />My bookings
            </button>
            <div className="ti-avatar" title="Signed in">SK</div>
          </>
        ) : (
          <>
            <button className="ti-btn ti-btn-ghost" style={{ fontWeight: 700 }} onClick={() => { window.location.href = '../landing/index.html#/signin'; }}>Sign in</button>
            <button className="ti-btn ti-btn-primary" onClick={() => { window.location.href = '../landing/index.html#/signup'; }}>Sign up</button>
          </>
        )}
      </div>
      {!hideSearch && (
        <div className="ti-container" style={{ display: 'flex', gap: 28, padding: '0 24px 12px', font: '600 13px var(--font-primary)' }}>
          {links.map(l => (
            <a key={l.id} onClick={() => onNavigate('home')} style={{
              color: current === l.id ? 'var(--color-primary)' : 'var(--color-text-primary)',
              borderBottom: current === l.id ? '2px solid var(--color-primary)' : '2px solid transparent',
              paddingBottom: 4, cursor: 'pointer', textDecoration: 'none',
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */
// Editorial entry. ONE search bar — no date, no traveler picker (those belong
// in the booking widget). Background crossfades between 3 Djerba scenes with
// a slow ken-burns motion. Headline reveals word-by-word.
function Hero({ onSearch }) {
  const [v, setV] = useState('');
  const moods = [
    { id: 'sunset',  label: 'Sunset moments',     icon: 'zap'   },
    { id: 'water',   label: 'On the water',       icon: 'mapPin'},
    { id: 'family',  label: 'With the kids',      icon: 'users' },
    { id: 'food',    label: 'Foodie days',        icon: 'heart' },
    { id: 'culture', label: 'Souks & culture',    icon: 'flag'  },
    { id: 'wellness',label: 'Slow & restorative', icon: 'heart' },
  ];
  const [activeMood, setActiveMood] = useState('sunset');
  const heroImages = [
    'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=2000&q=85&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=2000&q=85&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=2000&q=85&fit=crop&auto=format',
  ];
  const headline = ['What', 'will', 'you', 'do', 'in'];
  const headline2 = ['Djerba', 'today?'];
  return (
    <section className="ti-hero" style={{
      position: 'relative', minHeight: 600, overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end',
      padding: '32px 0 56px',
    }}>
      {/* Crossfading background — 3 Djerba scenes with ken burns */}
      <div className="ti-hero-bg" aria-hidden>
        {heroImages.map((src, i) => (
          <div key={i} className="ti-hero-bg__img" style={{ backgroundImage: `url(${src})` }} />
        ))}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,40,50,0.10) 0%, rgba(10,40,50,0.32) 45%, rgba(10,40,50,0.80) 100%)',
        }} />
      </div>

      {/* Floating live-trust card (top-right) */}
      <div className="ti-reveal" style={{
        '--d': '0.2s',
        position: 'absolute', top: 28, right: 32, zIndex: 2,
        background: 'rgba(255,255,255,0.96)', borderRadius: 12,
        padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        display: 'flex', alignItems: 'center', gap: 12,
        font: '600 12px var(--font-primary)', color: '#161616',
      }}>
        <span className="ti-live-dot"/>
        <span><strong>27 travellers</strong> booking right now</span>
      </div>

      <div className="ti-container" style={{ position: 'relative', zIndex: 1, paddingBottom: 8 }}>
        {/* Location eyebrow */}
        <div className="ti-reveal" style={{
          '--d': '0s',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.30)',
          color: '#fff', padding: '6px 12px', borderRadius: 9999,
          font: '700 11px var(--font-primary)', letterSpacing: '0.10em', textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          <Icon name="mapPin" size={12} color="#fff" />
          Djerba · Tunisia · The island of dreamers
        </div>

        {/* Editorial headline — word-by-word reveal */}
        <h1 style={{
          font: '800 64px/1.02 var(--font-primary)', letterSpacing: '-0.025em',
          margin: '0 0 14px', color: '#fff', maxWidth: 880,
        }}>
          {headline.map((w, i) => (
            <span key={i} className="ti-hero-word" style={{ '--d': `${0.1 + i * 0.07}s`, marginRight: '0.25em' }}>{w}</span>
          ))}
          <br/>
          {headline2.map((w, i) => (
            <span key={i} className="ti-hero-word" style={{ '--d': `${0.45 + i * 0.09}s`, marginRight: '0.25em' }}>{w}</span>
          ))}
        </h1>
        <p className="ti-reveal" style={{
          '--d': '0.7s',
          font: '400 17px/1.5 var(--font-primary)', color: 'rgba(255,255,255,0.92)',
          margin: '0 0 28px', maxWidth: 560,
        }}>
          342 hand-picked experiences led by verified local hosts. Free cancellation on most. No mystery fees.
        </p>

        {/* ONE search bar — clean, focused, animated */}
        <form
          onSubmit={e => { e.preventDefault(); onSearch(v); }}
          className="ti-hero-search ti-reveal-scale"
          style={{ '--d': '0.85s' }}
        >
          <Icon name="search" size={20} color="#555" />
          <input
            value={v} onChange={e => setV(e.target.value)}
            placeholder="What would you love to do in Djerba?"
            aria-label="Search activities"
          />
          <button type="submit" className="ti-hero-search-go">
            Search
            <Icon name="arrowUpRight" size={14} color="#fff" />
          </button>
        </form>

        {/* Mood chips */}
        <div className="ti-reveal" style={{ '--d': '1.05s', display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, flexWrap: 'wrap' }}>
          <span style={{ font: '600 12px var(--font-primary)', color: 'rgba(255,255,255,0.78)', marginRight: 4, letterSpacing: '0.02em' }}>
            Or browse by mood
          </span>
          {moods.map((m, i) => (
            <button key={m.id} onClick={() => setActiveMood(m.id)}
                    className={'ti-mood-chip' + (activeMood === m.id ? ' active' : '')}
                    style={{ '--d': `${1.1 + i * 0.05}s` }}>
              <Icon name={m.icon} size={13} color={activeMood === m.id ? 'var(--color-primary)' : '#fff'} />
              {m.label}
            </button>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="ti-reveal" style={{
          '--d': '1.3s',
          display: 'flex', alignItems: 'center', gap: 22, marginTop: 26, flexWrap: 'wrap',
          color: 'rgba(255,255,255,0.92)', font: '600 12px var(--font-primary)', letterSpacing: '0.02em',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Bubbles score={4.8} size={11} color="#fff" />
            <strong style={{ color: '#fff' }}>4.8</strong> from 12k+ travellers
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.5)' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="checkCircle" size={13} color="#fff" /> 87 verified local hosts
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.5)' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="check" size={13} color="#fff" strokeWidth={2.5} /> Free cancellation
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.5)' }}/>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="zap" size={13} color="#fff" /> Instant confirm
          </span>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="ti-hero-dots" aria-hidden>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

/* ── "Today in Djerba" contextual strip ──────────────────────────── */
// Sits between hero and content. Weather + golden hour + what's leaving soon.
// Gives the page a sense of place and timing — useful for activity-seekers.
function TodayInDjerba({ onPick }) {
  return (
    <div style={{
      background: '#FFF8EC',
      borderTop: '1px solid #F5E4B8', borderBottom: '1px solid #F5E4B8',
    }}>
      <div className="ti-container" style={{
        display: 'flex', alignItems: 'center', gap: 20, padding: '14px 24px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: '700 12px var(--font-primary)', color: '#6F4A00', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: '#F2A00A' }}/>
          Today in Djerba
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: '600 13px var(--font-primary)', color: '#3A2A00' }}>
          <Icon name="zap" size={13} color="#C9853D" />
          <strong>28°C</strong> · clear · light breeze
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: '600 13px var(--font-primary)', color: '#3A2A00' }}>
          <Icon name="clock" size={13} color="#C9853D" />
          Golden hour <strong>19:14</strong> · sunset <strong>19:42</strong>
        </span>
        <span style={{ flex: 1 }}/>
        <button
          onClick={() => onPick && onPick('sunset')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#fff', border: '1px solid #F2A00A', color: '#6F4A00',
            font: '700 12px var(--font-primary)', padding: '7px 12px', borderRadius: 9999, cursor: 'pointer',
          }}>
          <Icon name="arrowUpRight" size={12} color="#6F4A00" />
          3 sunset tours leaving in the next 2 hours
        </button>
      </div>
    </div>
  );
}

/* ── Category quick-access row ───────────────────────────────────── */
// Editorial photo tiles — each category gets a real Djerba image, name + activity count.
// Replaces the old emoji-circle row.
function CategoryRow({ onPick }) {
  const items = [
    { id: 'desert',   label: 'Desert & dunes',  count: 28, image: 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=600&q=80&fit=crop&auto=format' },
    { id: 'water',    label: 'On the water',     count: 64, image: 'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=600&q=80&fit=crop&auto=format' },
    { id: 'cultural', label: 'Culture & souks',  count: 41, image: 'https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=600&q=80&fit=crop&auto=format' },
    { id: 'cooking',  label: 'Cooking & food',   count: 19, image: 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=600&q=80&fit=crop&auto=format' },
    { id: 'diving',   label: 'Diving & snorkel', count: 22, image: 'https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=600&q=80&fit=crop&auto=format' },
    { id: 'spa',      label: 'Hammam & spa',     count: 12, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop&auto=format' },
    { id: 'quad',     label: 'Quad & off-road',  count: 14, image: 'https://images.unsplash.com/photo-1604335398480-1430719fbb01?w=600&q=80&fit=crop&auto=format' },
    { id: 'boat',     label: 'Boat & sailing',   count: 17, image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80&fit=crop&auto=format' },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
      padding: '4px 0',
    }}>
      {items.map((c, i) => (
        <button key={c.id} onClick={() => onPick(c.id)}
          className="ti-cat-card ti-reveal"
          style={{
            backgroundImage: `url(${c.image})`,
            '--d': `${i * 0.06}s`,
          }}>
          <span style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.65) 100%)',
          }}/>
          <span style={{
            position: 'absolute', left: 14, right: 14, bottom: 12, color: '#fff',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8,
          }}>
            <span style={{ font: '800 17px var(--font-primary)', letterSpacing: '-0.01em' }}>{c.label}</span>
            <span style={{
              font: '700 11px var(--font-primary)', padding: '4px 8px', borderRadius: 9999,
              background: 'rgba(255,255,255,0.20)', backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.30)',
            }}>{c.count}</span>
          </span>
          <span style={{
            position: 'absolute', top: 10, left: 10,
            width: 22, height: 22, borderRadius: 9999, background: CATEGORY_COLORS[c.id] || '#00AA6C',
            border: '2px solid rgba(255,255,255,0.85)',
          }}/>
        </button>
      ))}
    </div>
  );
}

/* ── Curated collections row ─────────────────────────────────────── */
// Editorial "shelf" cards — gives the homepage a magazine feel, not just a search-results list.
function CollectionRow({ onPick }) {
  const items = [
    { id: 'first',   eyebrow: 'For first-timers',  title: '48 hours of Djerba',          sub: '8 experiences · plan your weekend',  tone: '#0F4A4A', accent: '#62D5C0' },
    { id: 'sunset',  eyebrow: 'Editor\u2019s pick',   title: 'Chasing the sunset',           sub: '6 golden-hour activities',           tone: '#7A3B0B', accent: '#F2A00A' },
    { id: 'family',  eyebrow: 'For families',      title: 'Djerba with little ones',     sub: '12 kid-friendly experiences',         tone: '#1B3F7E', accent: '#7AB6FF' },
    { id: 'hidden',  eyebrow: 'Local favourites',  title: 'Hidden Djerba',                sub: '9 spots the locals love',            tone: '#3D2A5A', accent: '#B69CFF' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {items.map((c, i) => (
        <button key={c.id} onClick={() => onPick && onPick(c.id)}
          className="ti-collection-card ti-reveal"
          style={{
            position: 'relative', overflow: 'hidden', borderRadius: 16, padding: '22px 20px 20px',
            background: c.tone, color: '#fff', border: 'none', cursor: 'pointer',
            textAlign: 'left', minHeight: 180, display: 'flex', flexDirection: 'column', gap: 6,
            '--d': `${i * 0.06}s`,
          }}>
          <span style={{
            position: 'absolute', right: -30, bottom: -30, width: 130, height: 130, borderRadius: 9999,
            background: c.accent, opacity: 0.85,
          }}/>
          <span style={{
            position: 'absolute', right: 28, bottom: 24, width: 60, height: 60, borderRadius: 9999,
            background: 'rgba(255,255,255,0.20)', border: '1px solid rgba(255,255,255,0.35)',
          }}/>
          <span style={{
            position: 'relative', font: '700 10px var(--font-primary)', textTransform: 'uppercase',
            letterSpacing: '0.10em', color: c.accent,
          }}>{c.eyebrow}</span>
          <h3 style={{ position: 'relative', font: '800 22px/1.15 var(--font-primary)', letterSpacing: '-0.015em', margin: 0, color: '#fff', maxWidth: '85%' }}>
            {c.title}
          </h3>
          <span style={{ position: 'relative', font: '400 13px var(--font-primary)', color: 'rgba(255,255,255,0.82)' }}>
            {c.sub}
          </span>
          <span style={{ flex: 1 }}/>
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6, font: '700 13px var(--font-primary)', color: '#fff' }}>
            Explore <Icon name="arrowUpRight" size={14} color="#fff" />
          </span>
        </button>
      ))}
    </div>
  );
}

/* ── Activity card (grid layout) ─────────────────────────────────── */
function ActivityCard({ a, onClick }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="ti-card" onClick={onClick} style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'relative', height: 200, overflow: 'hidden',
      }}>
        <div
          className="ti-activity-card-img"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <span style={{
          position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,0.95)',
          borderRadius: 9999, padding: '5px 10px',
          font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.04em',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}><CategoryDot category={a.category} />{a.categoryLabel}</span>
        <button onClick={e => { e.stopPropagation(); setSaved(!saved); }} aria-label="Save"
          className={'ti-heart-btn' + (saved ? ' saved' : '')}
          style={{
            position: 'absolute', top: 10, right: 10, width: 34, height: 34, borderRadius: 9999,
            background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', border: 'none',
          }}>
          <Icon name="heart" size={16} color={saved ? '#00AA6C' : '#161616'} fill={saved ? '#00AA6C' : 'none'} />
        </button>
        {a.travelersChoice && (
          <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
            <TravelersChoice />
          </div>
        )}
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <h3 style={{ font: '700 16px var(--font-primary)', margin: 0, color: '#161616', lineHeight: 1.3 }}>{a.title}</h3>
        <Bubbles score={a.rating} showScore showCount={a.reviewCount} />
        <div style={{ font: '400 13px var(--font-primary)', color: '#555' }}>
          {a.location} · <Icon name="clock" size={11} color="#555" /> {a.duration}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
          <span style={{ font: '800 18px var(--font-primary)', color: '#161616' }}>
            from €{a.price}<span style={{ font: '600 12px var(--font-primary)', color: '#999', marginLeft: 2 }}>/person</span>
          </span>
          <button className="ti-btn ti-btn-primary ti-btn-sm" onClick={e => { e.stopPropagation(); onClick(); }}>Book</button>
        </div>
      </div>
    </div>
  );
}

/* ── Search result row (list layout) ─────────────────────────────── */
function SearchResultRow({ a, rank, onClick }) {
  return (
    <div style={{
      display: 'flex', gap: 16, padding: '16px 0',
      borderBottom: '1px solid var(--color-border)', cursor: 'pointer',
    }} onClick={onClick}>
      <span style={{ font: '800 18px var(--font-primary)', color: '#161616', width: 24, paddingTop: 4 }}>{rank}.</span>
      <div style={{
        width: 160, height: 110, borderRadius: 8, flexShrink: 0,
        backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ font: '700 18px var(--font-primary)', margin: '0 0 4px', color: '#161616' }}>{a.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <Bubbles score={a.rating} showScore showCount={a.reviewCount} />
        </div>
        <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginBottom: 6 }}>
          {a.categoryLabel} · {a.duration} · {a.location}
        </div>
        <p style={{ font: '400 14px/1.4 var(--font-primary)', color: '#555', margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {a.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ font: '400 13px var(--font-primary)', color: '#00703A', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon name="check" size={12} color="#00703A" strokeWidth={2.5} />
            Free cancellation · from <strong style={{ font: '800 16px var(--font-primary)', color: '#161616', marginLeft: 4 }}>€{a.price}</strong>
          </span>
          <button className="ti-btn ti-btn-primary ti-btn-sm" onClick={e => { e.stopPropagation(); onClick(); }}>Book</button>
        </div>
      </div>
    </div>
  );
}

/* ── Filter bar ──────────────────────────────────────────────────── */
function FilterBar({ activeCategory, onCategoryChange }) {
  const cats = [
    { id: 'all', label: 'All' },
    { id: 'desert', label: 'Desert safari' },
    { id: 'water', label: 'Water sports' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'diving', label: 'Diving' },
    { id: 'boat', label: 'Boat' },
    { id: 'quad', label: 'Quad' },
    { id: 'spa', label: 'Spa' },
    { id: 'food', label: 'Food' },
  ];
  return (
    <div style={{ background: '#fff', position: 'sticky', top: 96, zIndex: 10, borderBottom: '1px solid var(--color-border)', padding: '12px 0' }}>
      <div className="ti-container" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {cats.map(c => (
          <button key={c.id} className={`ti-chip ${activeCategory === c.id ? 'active' : ''}`} onClick={() => onCategoryChange(c.id)}>
            {c.id !== 'all' && <CategoryDot category={c.id} />}
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Booking widget (sticky right column) ────────────────────────── */
function BookingWidget({ activity, onBook }) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [time, setTime] = useState('14:00');
  const slots = ['08:00', '10:00', '14:00', '16:30'];
  const total = adults * activity.price + children * activity.price * 0.6;
  return (
    <aside className="ti-card" style={{ padding: 20, borderRadius: 16, boxShadow: 'var(--shadow-md)', position: 'sticky', top: 110 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 14 }}>
        <span style={{ font: '800 24px var(--font-primary)' }}>from €{activity.price}</span>
        <span style={{ font: '400 13px var(--font-primary)', color: '#555' }}>per person</span>
      </div>
      <div style={{ font: '700 11px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Date</div>
      <div className="ti-input" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <Icon name="calendar" size={14} color="#555" />Tue, Jun 17 2025
      </div>
      <div style={{ font: '700 11px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Time</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {slots.map(s => (
          <button key={s} className={`ti-chip ${s === time ? 'active' : ''}`}
                  style={s === time ? { background: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' } : {}}
                  onClick={() => setTime(s)}>{s}</button>
        ))}
      </div>
      <div style={{ font: '700 11px var(--font-primary)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Participants</div>
      <Counter label="Adults" value={adults} onChange={setAdults} />
      <Counter label="Children" value={children} onChange={setChildren} sublabel="60% rate" />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', font: '700 15px var(--font-primary)' }}>
        <span>Total</span><span style={{ font: '800 18px var(--font-primary)' }}>€{total.toFixed(2)}</span>
      </div>
      <button className="ti-btn ti-btn-primary ti-btn-block" onClick={() => onBook({ time, adults, children, total })}>
        Check availability
      </button>
      <div style={{ marginTop: 12 }}><TrustRow /></div>
    </aside>
  );
}
function Counter({ label, value, onChange, sublabel }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F2F2F2' }}>
      <div>
        <div style={{ font: '600 14px var(--font-primary)' }}>{label}</div>
        {sublabel && <div style={{ font: '400 11px var(--font-primary)', color: '#999' }}>{sublabel}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => onChange(Math.max(0, value - 1))} style={cBtn}>−</button>
        <span style={{ font: '700 14px var(--font-primary)', minWidth: 16, textAlign: 'center' }}>{value}</span>
        <button onClick={() => onChange(value + 1)} style={cBtn}>+</button>
      </div>
    </div>
  );
}
const cBtn = { width: 28, height: 28, borderRadius: 9999, border: '1px solid var(--color-border)', background: '#fff', cursor: 'pointer', font: '700 16px var(--font-primary)', color: '#161616' };

/* ── About TripInsel ─────────────────────────────────────────────── */
// Explains the platform's concept on the home page. Three pillars + stat strip.
function AboutTripInsel() {
  const pillars = [
    {
      icon: 'mapPin',
      tone: '#0F4A4A', tint: '#D4F0EC',
      title: 'One island. Every experience.',
      body: 'TripInsel is the dedicated marketplace for Djerba — not a country-wide site that forgets where you are. We focus on one island so every listing is local, verified, and bookable in real time.',
    },
    {
      icon: 'checkCircle',
      tone: '#00703A', tint: '#D4F5E9',
      title: 'Verified local hosts only',
      body: 'Every host is reviewed by our team — licence checked, location confirmed, insurance in place. The trust badge you see isn\u2019t marketing; it means a human at TripInsel signed off on it.',
    },
    {
      icon: 'shieldCheck',
      tone: '#6F4A00', tint: '#FFF1D0',
      title: 'Fair prices, transparent rules',
      body: 'The price you see is the price you pay — taxes included. Free cancellation on most experiences up to 24 hours before. Bookings are protected, refunds are automatic.',
    },
  ];
  return (
    <div className="ti-container" style={{ marginTop: 56 }}>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 28px' }}>
        <div style={{ font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.10em', color: 'var(--color-primary)', marginBottom: 10 }}>
          About TripInsel
        </div>
        <h2 style={{ font: '800 32px/1.15 var(--font-primary)', letterSpacing: '-0.02em', margin: '0 0 10px' }}>
          The way Djerba should be booked.
        </h2>
        <p style={{ font: '400 15.5px/1.6 var(--font-primary)', color: '#555', margin: 0 }}>
          TripInsel connects travellers with the people who actually make Djerba magical — the camel guides, the cooking grandmothers, the dive instructors who know which reef catches the morning light. We're built here, by people from here.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {pillars.map((p, i) => (
          <div key={p.title} className="ti-card ti-about-card ti-reveal"
               style={{ padding: 24, '--d': `${0.05 + i * 0.08}s` }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: p.tint, color: p.tone,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 14,
            }}>
              <Icon name={p.icon} size={20} color={p.tone} />
            </div>
            <h3 style={{ font: '700 18px var(--font-primary)', letterSpacing: '-0.01em', margin: '0 0 6px' }}>
              {p.title}
            </h3>
            <p style={{ font: '400 14px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Numbers strip */}
      <div style={{
        marginTop: 16, padding: '22px 24px',
        background: 'linear-gradient(135deg, #F2FBF8 0%, #D4F5E9 100%)',
        border: '1px solid #D4F5E9',
        borderRadius: 16,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
      }}>
        {[
          { n: '342',  l: 'Activities listed' },
          { n: '87',   l: 'Verified local hosts' },
          { n: '12k+', l: 'Travellers this year' },
          { n: '4.8',  l: 'Average rating' },
        ].map(s => (
          <div key={s.l} style={{ textAlign: 'center' }}>
            <div className="ti-stat-num">{s.n}</div>
            <div style={{ font: '600 12px var(--font-primary)', color: '#555', marginTop: 6, letterSpacing: '0.02em' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#161616', color: '#fff', padding: '40px 0', marginTop: 60 }}>
      <div className="ti-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginBottom: 32 }}>
          {[
            { title: 'TripInsel', items: ['About', 'Press', 'Careers', 'Contact'] },
            { title: 'Help', items: ['Help center', 'Cancellation', 'Safety', 'Accessibility'] },
            { title: 'For local hosts', items: ['List your activity', 'Local host hub', 'Insights', 'Verification'] },
            { title: 'Discover', items: ['Things to do', 'Map', 'About Djerba', 'Travel guide'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ font: '700 14px var(--font-primary)', marginBottom: 10 }}>{col.title}</div>
              {col.items.map(i => <a key={i} style={{ display: 'block', color: '#bbb', font: '400 13px var(--font-primary)', padding: '4px 0', textDecoration: 'none', cursor: 'pointer' }}>{i}</a>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: 20, display: 'flex', justifyContent: 'space-between', font: '400 12px var(--font-primary)', color: '#999' }}>
          <span>© 2025 TripInsel · Made on the island, for the island.</span>
          <span>EN · €EUR</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  LanguageSwitcher, TouristNavbar, Hero, TodayInDjerba, CategoryRow, CollectionRow,
  ActivityCard, SearchResultRow, AboutTripInsel,
  FilterBar, BookingWidget, Footer,
});
