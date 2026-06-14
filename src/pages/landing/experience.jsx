// TripInsel · Connected experience orchestrator
// Hash router: #/ landing · #/signin · #/forgot · #/signup · #/launch
// Session persisted in localStorage. Reuses TouristWizard + SuIcon/Field/Input/
// PhoneInput from the signup screens. Routes each role into its real app.
// Production: this is App.jsx + pages/{Landing,SignIn,ForgotPassword,Signup}.jsx
// + context/AuthContext.jsx (session) with React Router instead of hashes.

const { useState: useXs, useEffect: useXe } = React;

/* App destinations (relative links into the existing apps) */
const APPS = {
  traveller: '../tourist/index.html',
  host:      '../provider/index.html',
  admin:     '../admin/index.html',
};
const ROLE_META = {
  traveller: { label: 'Traveller', icon: 'compass', app: 'tourist marketplace', blurb: 'Discover and book Djerba experiences.' },
  host:      { label: 'Local host', icon: 'briefcase', app: 'local-host portal', blurb: 'List activities and manage bookings.' },
  admin:     { label: 'Administrator', icon: 'shieldCheck', app: 'admin dashboard', blurb: 'Verify hosts and oversee the platform.' },
};
const SESSION_KEY = 'ti_session';
const getSession = () => { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; } };
const setSession = (s) => localStorage.setItem(SESSION_KEY, JSON.stringify({ ...s, ts: Date.now() }));
const clearSession = () => localStorage.removeItem(SESSION_KEY);

/* hash routing */
const useRoute = () => {
  const [route, setRoute] = useXs(() => location.hash.replace('#/', '') || '');
  useXe(() => {
    const h = () => setRoute(location.hash.replace('#/', '') || '');
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  return [route, (r) => { location.hash = '#/' + r; window.scrollTo(0, 0); }];
};

/* ── small wordmark ── */
const WM = ({ light, onClick }) => (
  <a className={'xp-wm' + (light ? ' light' : '')} onClick={onClick} style={{ cursor: 'pointer' }}>
    <span className="bub" />TripInsel
  </a>
);

/* ════════════════════════════════════════════════════════════════
   LANDING
   ════════════════════════════════════════════════════════════════ */
function Landing({ nav }) {
  const sess = getSession();
  const goApp = (role) => { window.location.href = APPS[role]; };
  const demo = (role) => {
    const names = { traveller: 'Sofia K.', host: 'Ahmed Tours', admin: 'Platform Admin' };
    const emails = { traveller: 'sofia@example.com', host: 'ahmed@tours.tn', admin: 'admin@tripinsel.tn' };
    setSession({ role, name: names[role], email: emails[role], demo: true });
    goApp(role);
  };
  return (
    <div className="xp-landing">
      <div className="xp-brandside">
        <div className="photo" /><div></div>
        <WM light />
        <div className="mid">
          <div className="eyebrow">TripAdvisor for Djerba</div>
          <h1>Every experience on the island, in one place.</h1>
          <p>Book sunset camel rides, flamingo lagoons and cooking classes — led by verified local hosts. Or list your own and reach thousands of travellers.</p>
        </div>
        <div className="xp-stats">
          <div><div className="n">342</div><div className="l">Activities</div></div>
          <div><div className="n">87</div><div className="l">Local hosts</div></div>
          <div><div className="n">4.8★</div><div className="l">Avg rating</div></div>
        </div>
      </div>

      <div className="xp-actionside">
        <div className="xp-actionwrap">
          <a className="xp-wm top-wm" style={{ cursor: 'pointer' }}><span className="bub" />TripInsel</a>

          {sess ? (
            <div className="xp-session-card">
              <span className="av">{(sess.name || 'U').split(' ').map(w => w[0]).join('').slice(0,2)}</span>
              <div className="m"><b>Welcome back, {sess.name.split(' ')[0]}</b><span>Signed in as {ROLE_META[sess.role].label}</span></div>
              <button className="go" onClick={() => goApp(sess.role)}>Continue</button>
            </div>
          ) : null}

          <h2>{sess ? 'Or start fresh' : 'Welcome to TripInsel'}</h2>
          <p className="sub">{sess ? 'Sign in with a different account or create a new one.' : 'Sign in to your account, or create one in under a minute.'}</p>

          <button className="xp-cta primary" onClick={() => nav('signin')}>Sign in</button>
          <button className="xp-cta ghost" onClick={() => nav('signup')}>Create an account</button>

          <div className="xp-divider">Explore as a demo</div>
          <div className="xp-demos">
            <button className="xp-demo traveller" onClick={() => demo('traveller')}>
              <span className="ic"><Icon name="compass" size={19} /></span>
              <span className="t"><b>Traveller</b><span>Browse &amp; book activities</span></span>
              <Icon name="chevronRight" size={16} color="#999" />
            </button>
            <button className="xp-demo host" onClick={() => demo('host')}>
              <span className="ic"><Icon name="briefcase" size={19} /></span>
              <span className="t"><b>Local host</b><span>Manage your activities</span></span>
              <Icon name="chevronRight" size={16} color="#999" />
            </button>
            <button className="xp-demo admin" onClick={() => demo('admin')}>
              <span className="ic"><Icon name="shieldCheck" size={19} /></span>
              <span className="t"><b>Administrator</b><span>Oversee the platform</span></span>
              <Icon name="chevronRight" size={16} color="#999" />
            </button>
          </div>

          <p className="xp-legal">By continuing you agree to our <a>Terms</a> &amp; <a>Privacy policy</a>.</p>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   SIGN IN  (+ forgot link)
   ════════════════════════════════════════════════════════════════ */
function SignIn({ nav }) {
  const [email, setEmail] = useXs('');
  const [pw, setPw] = useXs('');
  const [show, setShow] = useXs(false);
  const emailOk = /\S+@\S+\.\S+/.test(email);
  const valid = emailOk && pw.length >= 1;

  const signInAs = (role, name, mail) => {
    setSession({ role, name, email: mail || email, demo: role !== 'traveller' });
    window.location.href = APPS[role];
  };
  const submit = (e) => { e.preventDefault(); if (valid) signInAs('traveller', 'Sofia K.'); };

  return (
    <div className="xp-auth">
      <div className="xp-auth-top">
        <WM onClick={() => nav('')} />
        <button className="back" onClick={() => nav('')}><Icon name="chevronLeft" size={15} /> Back</button>
      </div>
      <div className="xp-card">
        <div className="eyebrow">Welcome back</div>
        <h2>Sign in</h2>
        <p className="sub">Sign in to pick up where you left off.</p>

        <div className="su-oauth-stack">
          <button type="button" className="su-oauth-btn primary" onClick={() => signInAs('traveller', 'Lina Bouazizi', 'lina.b@gmail.com')}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
            Continue with Google
          </button>
          <button type="button" className="su-oauth-btn" onClick={() => signInAs('traveller', 'Lina Bouazizi', 'lina.b@icloud.com')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#161616"><path d="M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"/></svg>
            Continue with Apple
          </button>
        </div>
        <div className="su-divider">or with your email</div>

        <form onSubmit={submit}>
          <div className="su-field">
            <label className="su-label">Email</label>
            <div className="su-input-wrap">
              <span className="lead"><Icon name="bell" size={15} color="#999" /></span>
              <input className={'su-input' + (email && !emailOk ? ' error' : '')} placeholder="you@example.com"
                     value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="su-field">
            <div className="xp-label-row">
              <label className="su-label">Password</label>
              <button type="button" className="xp-forgot-link" onClick={() => nav('forgot')}>Forgot password?</button>
            </div>
            <div className="su-input-wrap">
              <span className="lead"><Icon name="lock" size={15} color="#999" /></span>
              <input type={show ? 'text' : 'password'} className="su-input" placeholder="Your password"
                     value={pw} onChange={e => setPw(e.target.value)} />
              <button type="button" className="trail" onClick={() => setShow(s => !s)} style={{ font: '700 12px var(--font-primary)', color: 'var(--color-primary)' }}>{show ? 'Hide' : 'Show'}</button>
            </div>
          </div>
          <div className="su-actions" style={{ marginTop: 18 }}>
            <button className="su-btn-primary" disabled={!valid} type="submit">Sign in</button>
          </div>
        </form>

        <div className="su-divider">demo accounts · one tap</div>
        <div className="xp-signin-demos">
          <button className="xp-signin-demo traveller" onClick={() => signInAs('traveller', 'Sofia K.', 'sofia@example.com')}>
            <span className="ic"><Icon name="compass" size={17} /></span><b>Traveller</b>
          </button>
          <button className="xp-signin-demo host" onClick={() => signInAs('host', 'Ahmed Tours', 'ahmed@tours.tn')}>
            <span className="ic"><Icon name="briefcase" size={17} /></span><b>Host</b>
          </button>
          <button className="xp-signin-demo admin" onClick={() => signInAs('admin', 'Platform Admin', 'admin@tripinsel.tn')}>
            <span className="ic"><Icon name="shieldCheck" size={17} /></span><b>Admin</b>
          </button>
        </div>

        <p className="xp-foot-switch">New to TripInsel?<button onClick={() => nav('signup')}>Create an account</button></p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FORGOT PASSWORD  (email → sent → reset → done)
   ════════════════════════════════════════════════════════════════ */
function Forgot({ nav }) {
  const [stage, setStage] = useXs(0); // 0 email, 1 sent, 2 reset, 3 done
  const [email, setEmail] = useXs('');
  const [pw, setPw] = useXs('');
  const [pw2, setPw2] = useXs('');
  const emailOk = /\S+@\S+\.\S+/.test(email);
  const pwOk = pw.length >= 8 && pw === pw2;

  return (
    <div className="xp-auth">
      <div className="xp-auth-top">
        <WM onClick={() => nav('')} />
        <button className="back" onClick={() => nav('signin')}><Icon name="chevronLeft" size={15} /> Back to sign in</button>
      </div>
      <div className="xp-card">
        {stage === 0 && (
          <>
            <div className="eyebrow">Account recovery</div>
            <h2>Forgot your password?</h2>
            <p className="sub">Enter your email and we'll send you a link to reset it.</p>
            <div className="su-field">
              <label className="su-label">Email</label>
              <input className={'su-input' + (email && !emailOk ? ' error' : '')} placeholder="you@example.com"
                     value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="su-actions" style={{ marginTop: 16 }}>
              <button className="su-btn-primary" disabled={!emailOk} onClick={() => setStage(1)}>Send reset link</button>
            </div>
          </>
        )}
        {stage === 1 && (
          <>
            <div style={{ width: 60, height: 60, borderRadius: 9999, background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
              <Icon name="checkCircle" size={28} />
            </div>
            <h2 style={{ textAlign: 'center' }}>Check your inbox</h2>
            <p className="sub" style={{ textAlign: 'center' }}>We sent a reset link to <strong style={{ color: 'var(--color-text-primary)' }}>{email}</strong>. It expires in 30 minutes.</p>
            <div className="su-actions">
              <button className="su-btn-primary" onClick={() => setStage(2)}>Open reset link (demo)</button>
              <button className="su-btn-ghost" onClick={() => setStage(0)}>Use a different email</button>
            </div>
            <p className="xp-foot-switch">Didn't get it? <button onClick={() => setStage(1)}>Resend</button></p>
          </>
        )}
        {stage === 2 && (
          <>
            <div className="eyebrow">Almost done</div>
            <h2>Set a new password</h2>
            <p className="sub">Choose a strong password you haven't used before.</p>
            <div className="su-field">
              <label className="su-label">New password</label>
              <input type="password" className="su-input" placeholder="At least 8 characters" value={pw} onChange={e => setPw(e.target.value)} />
            </div>
            <div className="su-field">
              <label className="su-label">Confirm password</label>
              <input type="password" className={'su-input' + (pw2 && pw !== pw2 ? ' error' : '')} placeholder="Re-enter password" value={pw2} onChange={e => setPw2(e.target.value)} />
              {pw2 && pw !== pw2 && <span className="su-err">Passwords don't match</span>}
            </div>
            <div className="su-actions" style={{ marginTop: 16 }}>
              <button className="su-btn-primary" disabled={!pwOk} onClick={() => setStage(3)}>Reset password</button>
            </div>
          </>
        )}
        {stage === 3 && (
          <>
            <div style={{ width: 60, height: 60, borderRadius: 9999, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
              <Icon name="check" size={30} strokeWidth={2.5} />
            </div>
            <h2 style={{ textAlign: 'center' }}>Password reset</h2>
            <p className="sub" style={{ textAlign: 'center' }}>Your password has been updated. You can now sign in.</p>
            <div className="su-actions">
              <button className="su-btn-primary" onClick={() => nav('signin')}>Back to sign in</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   SIGN UP — role pick → traveller wizard / host flow
   ════════════════════════════════════════════════════════════════ */
function Signup({ nav }) {
  const [role, setRole] = useXs(null);

  const finishTraveller = (data) => {
    setSession({ role: 'traveller', name: `${data.firstName || 'Lina'} ${data.lastName || ''}`.trim(), email: data.email || 'traveller@example.com' });
    window.location.href = APPS.traveller;
  };

  if (role === 'traveller') {
    return (
      <div className="xp-auth" style={{ padding: 0, background: '#fff' }}>
        <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
          <TouristWizard onComplete={finishTraveller} />
        </div>
      </div>
    );
  }
  if (role === 'host') return <HostSignup nav={nav} onBack={() => setRole(null)} />;

  return (
    <div className="xp-auth">
      <div className="xp-auth-top">
        <WM onClick={() => nav('')} />
        <button className="back" onClick={() => nav('')}><Icon name="chevronLeft" size={15} /> Back</button>
      </div>
      <div className="xp-card xp-rolepick">
        <div className="eyebrow">Create your account</div>
        <h2>How will you use TripInsel?</h2>
        <p className="sub">Pick what fits you best. You can hold separate accounts for each.</p>
        <div className="grid">
          <button className="xp-rolecard traveller" onClick={() => setRole('traveller')}>
            <span className="ic"><Icon name="compass" size={22} /></span>
            <span className="t"><h4>I'm a traveller</h4><p>Discover and book activities, tours and experiences across Djerba.</p><span className="who">Most popular · ~1 minute</span></span>
            <Icon name="chevronRight" size={18} color="#999" />
          </button>
          <button className="xp-rolecard host" onClick={() => setRole('host')}>
            <span className="ic"><Icon name="briefcase" size={22} /></span>
            <span className="t"><h4>I run a tour business</h4><p>List experiences, manage bookings and get paid. Verified hosts get a trust badge.</p><span className="who">Licence required · ~5 minutes</span></span>
            <Icon name="chevronRight" size={18} color="#999" />
          </button>
        </div>
        <div className="xp-staffnote"><Icon name="lock" size={13} color="#999" /> TripInsel staff sign in at a private URL with their invitation code.</div>
        <p className="xp-foot-switch">Already have an account?<button onClick={() => nav('signin')}>Sign in</button></p>
      </div>
    </div>
  );
}

/* ── Host signup — compact 2-step interactive ── */
function HostSignup({ nav, onBack }) {
  const [step, setStep] = useXs(0);
  const [d, setD] = useXs({ business: '', email: '', password: '', phone: '', license: '', address: '', pinned: false });
  const u = (p) => setD(x => ({ ...x, ...p }));
  const emailOk = /\S+@\S+\.\S+/.test(d.email);
  const step1Valid = d.business.trim().length >= 2 && emailOk && d.password.length >= 8 && d.phone.replace(/\D/g,'').length >= 6 && d.license.trim().length >= 3;
  const step2Valid = d.pinned && d.address.trim().length > 3;

  const finish = () => {
    setSession({ role: 'host', name: d.business || 'Your business', email: d.email });
    window.location.href = '#/launch?role=host';
    location.hash = '#/launch';
  };

  return (
    <div className="xp-host">
      <div className="xp-auth-top" style={{ maxWidth: 560 }}>
        <WM onClick={() => nav('')} />
        <button className="back" onClick={onBack}><Icon name="chevronLeft" size={15} /> Roles</button>
      </div>
      <div className="xp-card" style={{ maxWidth: 520 }}>
        <div className="su-stepper" style={{ marginBottom: 22 }}>
          <div className={'step ' + (step === 0 ? 'active' : 'done')}><span className="dot">{step > 0 ? <SuIcon name="check" size={12} stroke={3}/> : '1'}</span><span className="label">Business</span></div>
          <div className={'bar' + (step > 0 ? ' done' : '')}></div>
          <div className={'step ' + (step === 1 ? 'active' : '')}><span className="dot">2</span><span className="label">Location</span></div>
        </div>

        {step === 0 ? (
          <>
            <div className="eyebrow" style={{ font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: 8 }}>For tour operators</div>
            <h2 style={{ font: '800 24px var(--font-primary)', margin: '0 0 6px' }}>Tell us about your business</h2>
            <p className="sub" style={{ font: '400 14px var(--font-primary)', color: 'var(--color-text-secondary)', margin: '0 0 22px' }}>We review your details before activating listings.</p>
            <Field label="Business name"><input className="su-input" placeholder="e.g. Djerba Dunes Adventures" value={d.business} onChange={e => u({ business: e.target.value })} /></Field>
            <Field label="Business email"><input className={'su-input' + (d.email && !emailOk ? ' error' : '')} placeholder="contact@yourbusiness.tn" value={d.email} onChange={e => u({ email: e.target.value })} /></Field>
            <Field label="Password"><input type="password" className="su-input" placeholder="At least 8 characters" value={d.password} onChange={e => u({ password: e.target.value })} /></Field>
            <Field label="Phone number">
              <div className="su-phone">
                <div className="prefix"><span><span className="flag">🇹🇳</span>+216</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>
                <input className="su-input" inputMode="tel" placeholder="55 234 187" value={d.phone} onChange={e => u({ phone: e.target.value })} />
              </div>
            </Field>
            <Field label="Tourism licence number" hint="ONTT or Ministry of Tourism issued."><input className="su-input" placeholder="e.g. ONTT-2024-08412" value={d.license} onChange={e => u({ license: e.target.value })} /></Field>
            <div className="su-actions"><button className="su-btn-primary" disabled={!step1Valid} onClick={() => setStep(1)}>Continue to location <SuIcon name="arrow" size={16} stroke={2.5}/></button></div>
          </>
        ) : (
          <>
            <div className="eyebrow" style={{ font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: 8 }}>Step 2 · Location</div>
            <h2 style={{ font: '800 24px var(--font-primary)', margin: '0 0 6px' }}>Where do travellers find you?</h2>
            <p className="sub" style={{ font: '400 14px var(--font-primary)', color: 'var(--color-text-secondary)', margin: '0 0 18px' }}>Drop a pin — the address fills in automatically.</p>
            <div className="su-field">
              <label className="su-label">Pin your spot</label>
              <div className="su-map" style={{ aspectRatio: '16 / 8' }} onClick={() => u({ pinned: true, address: 'Route Touristique, km 8, Houmt Souk, Djerba' })}>
                <div className="grid"></div>
                <svg className="land" viewBox="0 0 400 200" preserveAspectRatio="none"><path d="M120,60 C 150,38 220,38 270,54 C 320,70 340,96 335,128 C 330,160 280,176 215,172 C 150,168 105,148 95,122 C 85,96 95,80 120,60 Z" fill="#F5EFD9" stroke="rgba(0,0,0,0.10)" strokeWidth="1.5"/></svg>
                <div className="ring"></div>
                <div className="pin"><svg width="32" height="42" viewBox="0 0 34 44"><path d="M17 1c8.8 0 16 7 16 15.6 0 11-16 26.4-16 26.4S1 27.6 1 16.6C1 8 8.2 1 17 1Z" fill="#00AA6C" stroke="#fff" strokeWidth="2"/><circle cx="17" cy="16.5" r="5.5" fill="#fff"/></svg></div>
                {!d.pinned && <div style={{ position: 'absolute', left: '50%', bottom: 12, transform: 'translateX(-50%)', background: 'rgba(22,22,22,0.8)', color: '#fff', font: '600 11px var(--font-primary)', padding: '6px 12px', borderRadius: 9999 }}>Click to drop the pin</div>}
              </div>
            </div>
            {d.pinned && <div className="su-autofilled" style={{ margin: '0 0 14px' }}><SuIcon name="check" size={12} stroke={3}/> Address filled from your pin</div>}
            <Field label="Street address"><input className={'su-input' + (d.pinned ? ' su-input-auto' : '')} placeholder="Drop the pin to auto-fill" value={d.address} onChange={e => u({ address: e.target.value })} /></Field>
            <div className="su-actions" style={{ flexDirection: 'row' }}>
              <button className="su-btn-ghost" style={{ flex: '0 0 auto' }} onClick={() => setStep(0)}><SuIcon name="back" size={16} stroke={2.5}/> Back</button>
              <button className="su-btn-primary" style={{ flex: 1 }} disabled={!step2Valid} onClick={finish}>Submit for review <SuIcon name="arrow" size={16} stroke={2.5}/></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   LAUNCH HUB
   ════════════════════════════════════════════════════════════════ */
function Launch({ nav }) {
  const sess = getSession();
  if (!sess) { nav('signin'); return null; }
  const m = ROLE_META[sess.role];
  const pending = sess.role === 'host';
  return (
    <div className="xp-launch">
      <div className="xp-launch-card">
        <div className={'xp-launch-burst ' + sess.role}><Icon name={m.icon} size={36} color="#fff" /></div>
        <div className="role-badge"><Icon name={m.icon} size={12} color="#00703A" /> {m.label}</div>
        <h2>Welcome{sess.name ? `, ${sess.name.split(' ')[0]}` : ''}!</h2>
        <p className="sub">{m.blurb} Your {m.app} is ready.</p>
        {pending && (
          <div className="pending"><Icon name="clock" size={16} color="#8A6000" />
            <span>Your business is under review — the TripInsel team verifies new hosts within 24 hours. You can set up listings meanwhile.</span></div>
        )}
        <button className="su-btn-primary" style={{ width: '100%' }} onClick={() => window.location.href = APPS[sess.role]}>
          <Icon name="arrowRight" size={16} color="#fff" /> Enter the {m.app}
        </button>
        <div className="xp-launch-foot">
          <button onClick={() => { clearSession(); nav('signin'); }}><Icon name="logout" size={13} /> Log out</button>
          <button onClick={() => nav('')}>Back to home</button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════ */
function Experience() {
  const [route, nav] = useRoute();
  if (route === 'signin') return <SignIn nav={nav} />;
  if (route === 'forgot') return <Forgot nav={nav} />;
  if (route === 'signup') return <Signup nav={nav} />;
  if (route === 'launch') return <Launch nav={nav} />;
  return <Landing nav={nav} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<div className="xp-root"><Experience /></div>);
