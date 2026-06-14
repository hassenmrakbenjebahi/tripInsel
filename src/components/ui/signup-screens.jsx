// TripInsel sign-up screens — all React components
// Each component renders a single sign-up screen as a self-contained .su-screen.
// Designed to slot inside a DCArtboard.

// ─────────────────────────────────────────────────────────────
// Icons — minimal Lucide-style strokes (2px, currentColor)
// ─────────────────────────────────────────────────────────────
const SuIcon = ({ name, size = 18, stroke = 2 }) => {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: stroke,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'mail':       return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case 'lock':       return <svg {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>;
    case 'eye':        return <svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'user':       return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'users':      return <svg {...p}><circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 16 0"/><path d="M17 8a4 4 0 0 1 4 4M17 4a4 4 0 0 1 0 8"/></svg>;
    case 'phone':      return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.51a2 2 0 0 1-.45 2.11L8 9.5a16 16 0 0 0 6 6l1.16-1.27a2 2 0 0 1 2.11-.45c.81.27 1.65.47 2.51.59A2 2 0 0 1 22 16.92Z"/></svg>;
    case 'globe':      return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>;
    case 'briefcase':  return <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M2 13h20"/></svg>;
    case 'pin':        return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'shield':     return <svg {...p}><path d="M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'badge':      return <svg {...p}><path d="M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"/></svg>;
    case 'check':      return <svg {...p}><path d="m20 6-11 11-5-5"/></svg>;
    case 'camera':     return <svg {...p}><path d="M3 7h4l2-3h6l2 3h4v13H3V7Z"/><circle cx="12" cy="13" r="4"/></svg>;
    case 'arrow':      return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'back':       return <svg {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>;
    case 'zap':        return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>;
    case 'compass':    return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/></svg>;
    case 'shieldlock': return <svg {...p}><path d="M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3Z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10 10V9a2 2 0 0 1 4 0v1"/></svg>;
    case 'warning':    return <svg {...p}><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>;
    case 'pdf':        return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
    case 'plus':       return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'crown':      return <svg {...p}><path d="M3 7l4 5 5-7 5 7 4-5v12H3V7Z"/></svg>;
    default: return null;
  }
};

// ─────────────────────────────────────────────────────────────
// Top bar (logo + sign-in link)
// ─────────────────────────────────────────────────────────────
const SuTop = ({ signIn = true }) => (
  <div className="su-top">
    <span className="wm"><span className="wm-bub"></span>TripInsel</span>
    {signIn && (
      <div className="right">
        Already have an account?<a href="#">Sign in</a>
      </div>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────
// Reusable input
// ─────────────────────────────────────────────────────────────
const Field = ({ label, optional, hint, error, children }) => (
  <div className={"su-field" + (error ? "" : "")}>
    <label className="su-label">{label}{optional && <span className="opt">· Optional</span>}</label>
    {children}
    {hint && !error && <span className="su-hint">{hint}</span>}
    {error && <span className="su-err">{error}</span>}
  </div>
);

const Input = ({ value, placeholder, leadIcon, trailIcon, focused, error, type = 'text' }) => (
  <div className="su-input-wrap">
    {leadIcon && <span className="lead"><SuIcon name={leadIcon} size={16}/></span>}
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className={"su-input" + (focused ? " focused" : "") + (error ? " error" : "")}
      readOnly
    />
    {trailIcon && <button className="trail" type="button"><SuIcon name={trailIcon} size={16}/></button>}
  </div>
);

const PhoneInput = ({ value, prefix = '+216', flag = '🇹🇳', focused }) => (
  <div className="su-phone">
    <div className="prefix">
      <span><span className="flag">{flag}</span>{prefix}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
    <input type="tel" defaultValue={value} className={"su-input" + (focused ? " focused" : "")} readOnly />
  </div>
);

const Uploader = ({ initial = 'A', name = 'Add a profile photo', hint = 'JPG or PNG · max 4 MB', cta = 'Upload', loaded = false }) => (
  <div className="su-uploader">
    <div className="av" aria-hidden>{loaded ? <SuIcon name="check" size={20}/> : initial}</div>
    <div className="meta">
      <b>{name}</b>
      <span>{hint}</span>
    </div>
    <button type="button" className="pick">{cta}</button>
  </div>
);

/* ── Circular profile-photo uploader for the tourist flow ───────── */
const PhotoUploader = ({ initials = 'LB', loaded = false, src }) => (
  <div className="su-photo-uploader">
    <div className="ring">
      <div className="bubble" aria-hidden>
        {loaded && src ? (
          <img src={src} alt=""/>
        ) : (
          <span className="initials">{initials}</span>
        )}
        <button type="button" className="cam" aria-label="Upload photo">
          <SuIcon name="camera" size={14} stroke={2.2}/>
        </button>
      </div>
    </div>
    <div className="meta">
      <b>Add a profile photo <span className="optional">· Optional</span></b>
      <span>Helps local hosts recognise you on meet-up. JPG or PNG · max 4 MB.</span>
      <div className="actions">
        <button type="button" className="pick">{loaded ? 'Replace' : 'Choose photo'}</button>
        {loaded && <button type="button" className="ghost">Remove</button>}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// (1) Role picker
// ─────────────────────────────────────────────────────────────
const RolePicker = () => (
  <div className="su-screen">
    <SuTop />
    <div className="su-body centered">
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div className="su-eyebrow">Create your account</div>
        <h1 className="su-h1">How will you use TripInsel?</h1>
        <p className="su-sub">Pick the option that fits you best. You can't switch roles later — but you can hold separate accounts.</p>

        <div className="role-grid">
          <button type="button" className="role-card tourist selected">
            <span className="ic"><SuIcon name="compass" size={22}/></span>
            <div className="body">
              <h4>I'm a traveller</h4>
              <p>Discover and book activities, tours and experiences across Djerba.</p>
              <span className="who">Most popular · takes 1 minute</span>
            </div>
            <span className="check"><SuIcon name="check" size={14} stroke={3}/></span>
          </button>

          <button type="button" className="role-card provider">
            <span className="ic"><SuIcon name="briefcase" size={22}/></span>
            <div className="body">
              <h4>I run a tour business</h4>
              <p>List experiences, manage bookings and get paid. Verified businesses get a trust badge.</p>
              <span className="who">Licence number required · ~5 minutes</span>
            </div>
            <span className="check"></span>
          </button>
        </div>

        <div className="su-actions">
          <button className="su-btn-primary" type="button">
            Continue as traveller <SuIcon name="arrow" size={16} stroke={2.5}/>
          </button>
        </div>

        <p className="su-legal">
          By continuing you agree to our <a href="#">Terms</a> and <a href="#">Privacy policy</a>.
          TripInsel is operated from Djerba, Tunisia.
        </p>

        <div className="su-staff-note">
          <SuIcon name="shieldlock" size={14}/>
          <span>TripInsel staff sign in at a private URL with their invitation code.</span>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// (2) Tourist sign-up — Variant A: centered single column
// ─────────────────────────────────────────────────────────────
const TouristSignup = () => (
  <div className="su-screen">
    <SuTop />
    <div className="su-body centered">
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div className="su-eyebrow">Travellers · 30 seconds</div>
        <h1 className="su-h1">Book Djerba's best experiences</h1>
        <p className="su-sub">Sign up with one tap. We'll ask for your preferred language and the rest after — only if you want to share.</p>

        {/* Google-first OAuth — top of the screen */}
        <div className="su-oauth-stack">
          <button type="button" className="su-oauth-btn primary">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/>
              <path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/>
            </svg>
            Continue with Google
            <span className="badge">Recommended</span>
          </button>
          <button type="button" className="su-oauth-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#161616">
              <path d="M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        <div className="su-divider">or use your email</div>

        <Field label="Email">
          <Input leadIcon="mail" placeholder="you@example.com" focused/>
        </Field>

        <Field label="Password">
          <Input leadIcon="lock" trailIcon="eye" type="password" value="••••••••••" />
          <div className="su-strength">
            <span className="seg on-1"></span>
            <span className="seg on-2"></span>
            <span className="seg on-3"></span>
            <span className="seg"></span>
          </div>
          <span className="su-hint">8+ characters · mix letters and numbers.</span>
        </Field>

        <Field label="Phone number" hint="For booking SMS reminders and account recovery.">
          <PhoneInput value="55 234 187"/>
        </Field>

        <div className="su-section-divider">
          <span className="lbl">Optional · personalise your trip</span>
          <span className="sub">Skip anything · finish later from your profile</span>
        </div>

        <Field>
          <PhotoUploader initials="L"/>
        </Field>

        <div className="su-actions">
          <button className="su-btn-primary" type="button">Create account <SuIcon name="arrow" size={16} stroke={2.5}/></button>
        </div>

        <p className="su-legal">
          By creating an account you agree to TripInsel's <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.
          We'll occasionally email you about Djerba experiences — opt out anytime.
        </p>

        <div className="su-trust">
          <span><SuIcon name="lock" size={13}/> Secure</span><span className="dot"/>
          <span><SuIcon name="check" size={13}/> Free cancellation</span><span className="dot"/>
          <span><SuIcon name="zap" size={13}/> Instant confirm</span>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// (2c) Tourist — SMS verification. Shown right after sign-up:
//      traveller receives a 6-digit code by SMS and enters it here.
// ─────────────────────────────────────────────────────────────
const TouristVerifySms = () => {
  const code = ['4', '7', '2', '', '', ''];   // static demo: first 3 filled
  return (
    <div className="su-screen">
      <SuTop signIn={false}/>
      <div className="su-body centered">
        <div style={{ width: '100%', maxWidth: 420 }}>
          <div className="su-otp-icon">
            <SuIcon name="phone" size={26}/>
          </div>

          <div className="su-eyebrow" style={{ textAlign: 'center' }}>Verify your number</div>
          <h1 className="su-h1" style={{ textAlign: 'center', marginBottom: 8 }}>Enter the 6-digit code</h1>
          <p className="su-sub" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            We sent a verification code by SMS to<br/>
            <strong style={{ color: 'var(--color-text-primary)' }}>+216 55 234 187</strong>
            <button type="button" className="su-link-inline">Change</button>
          </p>

          {/* 6 separate code boxes */}
          <div className="su-otp">
            {code.map((d, i) => (
              <input key={i} className={'su-otp-box' + (d ? ' filled' : '') + (i === 3 ? ' active' : '')}
                     inputMode="numeric" maxLength={1} defaultValue={d} readOnly={false}/>
            ))}
          </div>

          <div className="su-actions" style={{ marginTop: 26 }}>
            <button className="su-btn-primary" type="button">
              Verify & continue <SuIcon name="arrow" size={16} stroke={2.5}/>
            </button>
          </div>

          <div className="su-otp-resend">
            <span>Didn't get a code?</span>
            <button type="button" className="su-link-inline strong">Resend SMS</button>
            <span className="su-otp-timer">· in 0:28</span>
          </div>

          <p className="su-legal" style={{ textAlign: 'center' }}>
            Standard message rates may apply. The code expires in 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// (2b) Tourist — "Complete your profile" step shown AFTER verification.
//      All fields optional. User lands here pre-filled with Google name + email,
//      picks language / nationality, can skip straight to browsing.
// ─────────────────────────────────────────────────────────────
const TouristCompleteProfile = () => (
  <div className="su-screen">
    <SuTop signIn={false}/>
    <div className="su-body centered">
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div className="su-google-card">
          <div className="g-avatar">L</div>
          <div className="g-meta">
            <b>Signed in as Lina Bouazizi</b>
            <span>lina.b@gmail.com · via Google</span>
          </div>
          <SuIcon name="check" size={16} stroke={2.5}/>
        </div>

        <div className="su-eyebrow" style={{ marginTop: 18 }}>Almost there</div>
        <h1 className="su-h1">Personalise your trip</h1>
        <p className="su-sub">Your number's verified. All of this is optional — we'll use it to show prices, listings and confirmations the way you like, and you can skip anything and finish later from your profile.</p>

        <Field>
          <PhotoUploader initials="L" loaded src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&auto=format" />
        </Field>

        <Field label="Preferred language" optional hint="We translate listings, reviews and confirmations.">
          <div className="su-lang-grid">
            {[
              { code: 'EN', flag: '🇬🇧', label: 'English',  native: 'English',  active: true },
              { code: 'FR', flag: '🇫🇷', label: 'French',   native: 'Français' },
              { code: 'DE', flag: '🇩🇪', label: 'German',   native: 'Deutsch'  },
              { code: 'IT', flag: '🇮🇹', label: 'Italian',  native: 'Italiano' },
              { code: 'AR', flag: '🇹🇳', label: 'Arabic',   native: 'العربية' },
              { code: 'ES', flag: '🇪🇸', label: 'Spanish',  native: 'Español'  },
            ].map(l => (
              <button key={l.code} type="button" className={'su-lang-card' + (l.active ? ' active' : '')}>
                <span className="flag">{l.flag}</span>
                <span className="lab">{l.label}</span>
                <span className="nat">{l.native}</span>
                {l.active && <span className="tick"><SuIcon name="check" size={12} stroke={3}/></span>}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Nationality" optional>
          <Input leadIcon="globe" value="Tunisian" placeholder="Pick your country"/>
        </Field>

        <Field label="Phone number" optional hint="For booking SMS reminders.">
          <PhoneInput value="55 234 187"/>
        </Field>

        <div className="su-actions">
          <button className="su-btn-primary" type="button">
            Save and start exploring <SuIcon name="arrow" size={16} stroke={2.5}/>
          </button>
          <button className="su-btn-ghost" type="button">
            Skip for now
          </button>
        </div>

        <p className="su-legal">You can update these any time from <strong>Settings → Preferences</strong>.</p>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// (3) Tourist sign-up — Variant B: split-screen with Djerba photo
// ─────────────────────────────────────────────────────────────
const TouristSignupSplit = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=1400&q=85&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=1400&q=85&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=1400&q=85&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1591279004443-6e8c0e7f7e7e?w=1400&q=85&fit=crop&auto=format',
  ];
  return (
  <div className="su-split">
    <div className="photo">
      {/* Crossfading background with ken-burns motion */}
      <div className="su-photo-bg" aria-hidden>
        {heroImages.map((src, i) => (
          <div key={i} className="su-photo-bg__img" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>

      {/* Soft animated grain + gradient overlay (kept from before) */}
      <div className="su-photo-shimmer" aria-hidden></div>

      {/* Stats — fade in on load */}
      <div className="stats su-anim-fadeIn" style={{ '--d': '0.2s' }}>
        <div className="stat"><div className="n">12k+</div><div className="l">Travellers</div></div>
        <div className="stat"><div className="n">340</div><div className="l">Activities</div></div>
        <div className="stat"><div className="n">4.8</div><div className="l">Avg. rating</div></div>
      </div>

      {/* Floating location chips — gently drift */}
      <div className="su-loc-chip su-loc-1">
        <span className="dot"></span>
        <span><b>Ras R'mel</b><br/>Flamingo lagoon</span>
      </div>
      <div className="su-loc-chip su-loc-2">
        <span className="dot"></span>
        <span><b>Houmt Souk</b><br/>Old town</span>
      </div>

      {/* Floating activity-card preview */}
      <div className="su-float-card">
        <div className="thumb"></div>
        <div className="info">
          <div className="cat">Sunset · 2h</div>
          <div className="title">Camel ride at Ras R'mel</div>
          <div className="meta">
            <span className="star">★</span> 4.9
            <span className="dot-sep"></span>
            <span className="price">€38</span>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="su-photo-dots" aria-hidden>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Copy — slides up on load */}
      <div className="pcopy">
        <div className="eb su-anim-fadeIn" style={{ '--d': '0.3s' }}>
          <SuIcon name="zap" size={11} stroke={2.5}/> One island · one app
        </div>
        <h2 className="su-anim-slideUp" style={{ '--d': '0.4s' }}>Djerba, your way.</h2>
        <p className="su-anim-slideUp" style={{ '--d': '0.55s' }}>
          Sunset camel rides, flamingo lagoons, mosaic-tile cooking classes — all in one place.
          Free cancellation on most experiences.
        </p>
      </div>
    </div>

    <div className="form-side">
      <div className="top">
        <span className="wm" style={{ font: '800 20px var(--font-primary)', letterSpacing: '-0.02em', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="wm-bub" style={{ width: 18, height: 18, borderRadius: 9999, background: 'var(--color-primary)', position: 'relative', display: 'inline-block' }}></span>
          TripInsel
        </span>
        <div style={{ font: '400 13px var(--font-primary)', color: '#555' }}>
          Already a member?<a href="#" style={{ color: 'var(--color-primary)', fontWeight: 700, marginLeft: 4, textDecoration: 'none' }}>Sign in</a>
        </div>
      </div>

      <div className="su-eyebrow">Travellers · sign up</div>
      <h1 className="su-h1" style={{ marginBottom: 6 }}>Create your traveller account</h1>
      <p className="su-sub">Three quick details to get started. You can add your name and language later.</p>

      <Field label="Email">
        <Input leadIcon="mail" value="lina.b@example.com" focused/>
      </Field>

      <Field label="Password">
        <Input leadIcon="lock" trailIcon="eye" type="password" value="••••••••" />
      </Field>

      <Field label="Phone number" hint="For SMS booking reminders and account recovery.">
        <PhoneInput value="55 234 187"/>
      </Field>

      <div className="su-section-divider">
        <span className="lbl">Optional — personalise your trip</span>
      </div>

      <div className="su-row">
        <Field label="First name" optional><Input value="Lina"/></Field>
        <Field label="Last name" optional><Input value="Bouazizi"/></Field>
      </div>

      <div className="su-row">
        <Field label="Nationality" optional>
          <Input leadIcon="globe" value="Tunisian"/>
        </Field>
        <Field label="Language" optional>
          <Input value="English"/>
        </Field>
      </div>

      <div className="su-actions">
        <button className="su-btn-primary" type="button">Create account <SuIcon name="arrow" size={16} stroke={2.5}/></button>
        <div className="su-divider">or continue with</div>
        <div className="su-oauth">
          <button type="button"><span style={{ fontWeight: 800, color: '#4285F4' }}>G</span> Google</button>
          <button type="button"><span style={{ color: '#161616', fontSize: 14 }}></span> Apple</button>
        </div>
      </div>

      <p className="su-legal">By creating an account you agree to our <a href="#">Terms</a> and <a href="#">Privacy policy</a>.</p>
    </div>
  </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Stepper helper
// ─────────────────────────────────────────────────────────────
const Stepper = ({ steps, current }) => (
  <div className="su-stepper">
    {steps.map((label, i) => (
      <React.Fragment key={i}>
        <div className={"step " + (i === current ? "active" : i < current ? "done" : "")}>
          <span className="dot">{i < current ? <SuIcon name="check" size={12} stroke={3}/> : i + 1}</span>
          <span className="label">{label}</span>
        </div>
        {i < steps.length - 1 && <div className={"bar " + (i < current ? "done" : "")}></div>}
      </React.Fragment>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────
// (4) Provider sign-up — Step 1: account + business
// ─────────────────────────────────────────────────────────────
const ProviderStep1 = () => (
  <div className="su-screen">
    <SuTop />
    <div className="su-body" style={{ alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <Stepper steps={['Business', 'Location', 'Verify']} current={0}/>

        <div className="su-eyebrow">For tour operators</div>
        <h1 className="su-h1">Tell us about your business</h1>
        <p className="su-sub">We'll review your details before activating your listings. Your trust badge appears once verified.</p>

        <Field label="Business name" hint="As it appears on your licence.">
          <Input leadIcon="briefcase" value="Djerba Dunes Adventures" focused/>
        </Field>

        <Field label="Business email">
          <Input leadIcon="mail" placeholder="contact@yourbusiness.tn"/>
        </Field>

        <Field label="Phone number">
          <PhoneInput value="55 234 187"/>
        </Field>

        <Field label="Password" hint="Use 8+ characters with a mix of letters and numbers.">
          <Input leadIcon="lock" trailIcon="eye" type="password" value="••••••••" />
        </Field>

        <Field label="Tourism licence number" hint="ONTT or Ministry of Tourism issued.">
          <Input leadIcon="badge" placeholder="e.g. ONTT-2024-08412"/>
        </Field>

        <Field label="Business logo" optional>
          <Uploader initial="DD" name="Djerba Dunes logo.png" hint="318 KB · uploaded" cta="Replace" loaded/>
        </Field>

        <div className="su-actions">
          <button className="su-btn-primary" type="button">
            Continue to location <SuIcon name="arrow" size={16} stroke={2.5}/>
          </button>
        </div>

        <p className="su-legal">
          Your details are reviewed by the TripInsel team within 1–2 business days.
          You'll be notified by email.
        </p>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// (5) Provider sign-up — Step 2: address + map pin
// ─────────────────────────────────────────────────────────────
const ProviderStep2 = () => (
  <div className="su-screen">
    <SuTop />
    <div className="su-body" style={{ alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 520 }}>
        <Stepper steps={['Business', 'Location', 'Verify']} current={1}/>

        <div className="su-eyebrow">Step 2 · Location</div>
        <h1 className="su-h1">Drop a pin where travellers find you</h1>
        <p className="su-sub">Search or drag the pin. The street address fills in automatically — no typing required.</p>

        <Field label="Pin your exact spot" hint="This is the location shown on your listings and used to calculate travel time.">
          <div className="su-map" role="img" aria-label="Map of Djerba with a dropped pin near Aghir">
            <div className="grid"></div>
            <DjerbaShape/>
            <span className="lab-sea">Mediterranean Sea</span>
            <span className="lab-djerba">Djerba</span>
            <input className="map-search" defaultValue="Aghir, Djerba" readOnly/>
            <div className="ring"></div>
            <div className="pin">
              <svg width="34" height="44" viewBox="0 0 34 44">
                <path d="M17 1c8.8 0 16 7 16 15.6 0 11-16 26.4-16 26.4S1 27.6 1 16.6C1 8 8.2 1 17 1Z" fill="#00AA6C" stroke="#fff" strokeWidth="2"/>
                <circle cx="17" cy="16.5" r="5.5" fill="#fff"/>
              </svg>
            </div>
            <div className="coords">33.7344° N, 11.0123° E</div>
            <div className="controls">
              <button type="button" aria-label="Zoom in">+</button>
              <button type="button" aria-label="Zoom out">−</button>
            </div>
          </div>
        </Field>

        {/* Auto-filled chip — confirms what just happened */}
        <div className="su-autofilled">
          <SuIcon name="check" size={14} stroke={3}/>
          <span>Address filled from your pin · Drag the pin to refine</span>
        </div>

        <Field label="Street address" hint="You can edit this if needed.">
          <div className="su-input-wrap">
            <span className="lead"><SuIcon name="pin" size={16}/></span>
            <input
              className="su-input su-input-auto"
              defaultValue="Route Touristique, km 12.5, Aghir, Djerba"
              readOnly
            />
          </div>
        </Field>

        <Field label="Town / area">
          <Input value="Aghir"/>
        </Field>

        <div className="su-actions" style={{ flexDirection: 'row' }}>
          <button className="su-btn-ghost" type="button" style={{ flex: '0 0 auto' }}>
            <SuIcon name="back" size={16} stroke={2.5}/> Back
          </button>
          <button className="su-btn-primary" type="button" style={{ flex: 1 }}>
            Continue <SuIcon name="arrow" size={16} stroke={2.5}/>
          </button>
        </div>

        <p className="su-legal">
          Location is approximate until we verify it. Sensitive locations (e.g. private villas) can be hidden on request.
        </p>
      </div>
    </div>
  </div>
);

// Schematic Djerba island shape behind the pin
const DjerbaShape = () => (
  <svg className="land" viewBox="0 0 400 250" preserveAspectRatio="none">
    <path d="M120,80 C 150,55 220,55 270,72 C 320,88 340,120 335,158 C 330,196 280,215 215,210 C 150,205 105,180 95,150 C 85,120 95,100 120,80 Z"
          fill="#F5EFD9" stroke="rgba(0,0,0,0.10)" strokeWidth="1.5"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// (6) Admin sign-up
// ─────────────────────────────────────────────────────────────
const AdminSignup = () => (
  <div className="su-screen">
    <SuTop signIn={false}/>
    <div className="su-body" style={{ alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div className="su-eyebrow" style={{ color: '#5A4FCF' }}>Internal · admin access</div>
        <h1 className="su-h1">Create an administrator account</h1>
        <p className="su-sub">Admins approve providers, set commissions and manage categories. You'll need an invitation code from the platform owner.</p>

        <div className="su-admin-banner">
          <SuIcon name="warning" size={16}/>
          <span>This form creates a privileged account. All actions are logged. Don't share your invitation code.</span>
        </div>

        <Field label="Invitation code" hint="6-character code from your invite email.">
          <Input leadIcon="shieldlock" value="TI-9F4A2B" focused/>
        </Field>

        <Field label="Full name">
          <Input leadIcon="user" value="Ahmed Trabelsi"/>
        </Field>

        <Field label="Work email">
          <Input leadIcon="mail" value="ahmed@tripinsel.tn"/>
        </Field>

        <Field label="Phone number" hint="Used for 2-factor authentication.">
          <PhoneInput value="98 412 760"/>
        </Field>

        <Field label="Password">
          <Input leadIcon="lock" trailIcon="eye" type="password" value="••••••••••••" />
          <div className="su-strength">
            <span className="seg on-1"></span>
            <span className="seg on-2"></span>
            <span className="seg on-3"></span>
            <span className="seg on-4"></span>
          </div>
          <span className="su-hint">Strong · 12 characters with symbols.</span>
        </Field>

        <Field label="Profile photo" optional>
          <Uploader initial="A" name="Add a photo" hint="Helps your team recognise actions in the audit log."/>
        </Field>

        <div className="su-actions">
          <button className="su-btn-primary" type="button">
            Create admin account <SuIcon name="arrow" size={16} stroke={2.5}/>
          </button>
        </div>

        <p className="su-legal">
          By creating this account you accept TripInsel's <a href="#">Internal acceptable use policy</a>.
          Two-factor authentication will be set up on first sign-in.
        </p>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// Export to window so app.jsx can use them
// ─────────────────────────────────────────────────────────────
Object.assign(window, {
  SuIcon, SuTop, Field, Input, PhoneInput, Uploader, PhotoUploader, Stepper,
  RolePicker, TouristSignup, TouristVerifySms, TouristSignupSplit, TouristCompleteProfile,
  ProviderStep1, ProviderStep2, AdminSignup,
});
