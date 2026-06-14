// TripInsel · Traveller sign-up — unified step-by-step wizard.
// One cohesive, interactive experience: Account → Verify (SMS) → Profile.
// Maps to backend: register (email/password/phone) → POST /auth/verify-otp → optional profile.
// In production this would live at src/pages/SignupTraveller.jsx, composing
// ui/ components (Stepper, OtpInput, PhotoUploader, LangGrid).

const { useState, useRef, useEffect } = React;

const TW_LANGS = [
  { code: 'EN', flag: '🇬🇧', label: 'English',  native: 'English'  },
  { code: 'FR', flag: '🇫🇷', label: 'French',   native: 'Français' },
  { code: 'DE', flag: '🇩🇪', label: 'German',   native: 'Deutsch'  },
  { code: 'IT', flag: '🇮🇹', label: 'Italian',  native: 'Italiano' },
  { code: 'AR', flag: '🇹🇳', label: 'Arabic',   native: 'العربية' },
  { code: 'ES', flag: '🇪🇸', label: 'Spanish',  native: 'Español'  },
];

const TW_STEPS = [
  { id: 'account', label: 'Account',  icon: 'user' },
  { id: 'verify',  label: 'Verify',   icon: 'phone' },
  { id: 'profile', label: 'Profile',  icon: 'compass' },
];

/* ── OTP input — 6 boxes, auto-advance, paste-to-fill, backspace ── */
function OtpInput({ value, onChange }) {
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
  const onPaste = (e) => {
    e.preventDefault();
    const txt = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
    if (txt) { onChange(txt); const last = Math.min(txt.length, 5); refs.current[last] && refs.current[last].focus(); }
  };
  return (
    <div className="su-otp" onPaste={onPaste}>
      {[0,1,2,3,4,5].map(i => (
        <input key={i} ref={el => refs.current[i] = el}
               className={'su-otp-box' + (value[i] ? ' filled' : '')}
               inputMode="numeric" maxLength={1} value={value[i] || ''}
               onChange={e => handle(i, e.target.value)}
               onKeyDown={e => onKey(i, e)}
               aria-label={`Digit ${i + 1}`} />
      ))}
    </div>
  );
}

/* ── Progress stepper ─────────────────────────────────────────── */
function WizSteps({ step }) {
  return (
    <div className="tw-steps">
      {TW_STEPS.map((s, i) => (
        <React.Fragment key={s.id}>
          <div className={'tw-step ' + (i === step ? 'active' : i < step ? 'done' : 'todo')}>
            <span className="bub">{i < step ? <SuIcon name="check" size={14} stroke={3}/> : <SuIcon name={s.icon} size={14}/>}</span>
            <span className="lab">{s.label}</span>
          </div>
          {i < TW_STEPS.length - 1 && <span className={'tw-bar' + (i < step ? ' done' : '')} />}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════ */
function TouristWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState({
    email: '', password: '', phone: '', otp: '',
    photo: null, lang: '', nationality: '',
    firstName: '', lastName: '', via: null,
  });
  const upd = (patch) => setData(d => ({ ...d, ...patch }));
  const [timer, setTimer] = useState(28);

  // resend countdown on verify step
  useEffect(() => {
    if (step !== 1) return;
    setTimer(28);
    const t = setInterval(() => setTimer(x => x > 0 ? x - 1 : 0), 1000);
    return () => clearInterval(t);
  }, [step]);

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n); };

  // step validity
  const emailOk = /\S+@\S+\.\S+/.test(data.email);
  const passOk = data.password.length >= 8;
  const phoneOk = data.phone.replace(/\D/g, '').length >= 6;
  // Phone verification is ALWAYS required, whatever the sign-up method.
  const oauthed = data.via === 'google' || data.via === 'apple';
  const accountValid = phoneOk && (oauthed || (emailOk && passOk));
  const otpValid = data.otp.length === 6;
  // After verification: first + last name are required; language, nationality + photo optional.
  const profileValid = data.firstName.trim().length >= 1 && data.lastName.trim().length >= 1;

  const OAUTH = {
    google: { name: 'Lina Bouazizi', first: 'Lina', last: 'Bouazizi', email: 'lina.b@gmail.com', label: 'Google' },
    apple:  { name: 'Lina Bouazizi', first: 'Lina', last: 'Bouazizi', email: 'lina.b@icloud.com', label: 'Apple' },
  };
  const continueWith = (provider) => {
    const o = OAUTH[provider];
    upd({ via: provider, firstName: o.first, lastName: o.last, email: o.email });
  };

  return (
    <div className="su-screen tw-screen">
      <SuTop signIn={step === 0} />

      <div className="tw-body">
        <div className="tw-card">
          <WizSteps step={step} />

          <div className={'tw-pane ' + (dir > 0 ? 'in-right' : 'in-left')} key={step}>

            {/* ───── STEP 1 · ACCOUNT ───── */}
            {step === 0 && (
              <>
                <div className="tw-head">
                  <div className="su-eyebrow">Step 1 of 3 · Travellers</div>
                  <h1 className="su-h1">Create your account</h1>
                  <p className="su-sub">Sign up with Google, Apple, or your email — whichever you prefer. We'll verify your phone next.</p>
                </div>

                {!oauthed ? (
                  <>
                    <div className="su-oauth-stack">
                      <button type="button" className="su-oauth-btn primary" onClick={() => continueWith('google')}>
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/>
                          <path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/>
                        </svg>
                        Continue with Google
                      </button>
                      <button type="button" className="su-oauth-btn" onClick={() => continueWith('apple')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#161616"><path d="M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"/></svg>
                        Continue with Apple
                      </button>
                    </div>
                    <div className="su-divider">or sign up with email</div>
                    <div className="su-field">
                      <label className="su-label">Email</label>
                      <div className="su-input-wrap">
                        <span className="lead"><SuIcon name="mail" size={16}/></span>
                        <input className={'su-input' + (data.email && !emailOk ? ' error' : '')} placeholder="you@example.com"
                               value={data.email} onChange={e => upd({ email: e.target.value })}/>
                      </div>
                    </div>
                    <div className="su-field">
                      <label className="su-label">Password</label>
                      <div className="su-input-wrap">
                        <span className="lead"><SuIcon name="lock" size={16}/></span>
                        <input type="password" className="su-input" placeholder="At least 8 characters"
                               value={data.password} onChange={e => upd({ password: e.target.value })}/>
                      </div>
                      {data.password.length > 0 && (
                        <div className="su-strength">
                          <span className={'seg' + (data.password.length >= 1 ? ' on-1' : '')}></span>
                          <span className={'seg' + (data.password.length >= 6 ? ' on-2' : '')}></span>
                          <span className={'seg' + (data.password.length >= 8 ? ' on-3' : '')}></span>
                          <span className={'seg' + (data.password.length >= 12 ? ' on-4' : '')}></span>
                        </div>
                      )}
                    </div>
                    <div className="su-field">
                      <label className="su-label">Phone number</label>
                      <div className="su-phone">
                        <div className="prefix"><span><span className="flag">🇹🇳</span>+216</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                        <input className="su-input" inputMode="tel" placeholder="55 234 187"
                               value={data.phone} onChange={e => upd({ phone: e.target.value })}/>
                      </div>
                      <span className="su-hint">We'll text a 6-digit code to confirm this number.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="su-google-card">
                      <div className="g-avatar" style={data.via === 'apple' ? { background: '#161616' } : {}}>
                        {data.via === 'apple'
                          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M16.4 1.5c.1 1.1-.4 2.3-1.1 3.1-.7.8-1.9 1.5-3 1.4-.2-1.1.4-2.3 1.1-3.1.8-.8 2-1.4 3-1.4Zm3.5 17.4c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.4-4 3.4-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-4-3.2-2.7-4.1-3-9-1.3-11.6 1.2-1.8 3.1-2.9 4.9-2.9 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.4 9.1Z"/></svg>
                          : 'L'}
                      </div>
                      <div className="g-meta"><b>{data.firstName} {data.lastName}</b><span>{data.email} · via {OAUTH[data.via].label}</span></div>
                      <SuIcon name="check" size={16} stroke={2.5}/>
                    </div>
                    <div className="su-field" style={{ marginTop: 16 }}>
                      <label className="su-label">Phone number</label>
                      <div className="su-phone">
                        <div className="prefix"><span><span className="flag">🇹🇳</span>+216</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                        <input className="su-input" inputMode="tel" placeholder="55 234 187" autoFocus
                               value={data.phone} onChange={e => upd({ phone: e.target.value })}/>
                      </div>
                      <span className="su-hint">Verification by SMS is required for every account — even with {OAUTH[data.via].label}.</span>
                    </div>
                    <button type="button" className="su-link-inline strong" style={{ marginTop: 4 }} onClick={() => upd({ via: null })}>← Use a different method</button>
                  </>
                )}

                <div className="su-actions">
                  <button className="su-btn-primary" disabled={!accountValid} onClick={() => go(1)}>
                    Send verification code <SuIcon name="arrow" size={16} stroke={2.5}/>
                  </button>
                </div>
                <p className="su-legal">By continuing you agree to TripInsel's <a href="#">Terms</a> and <a href="#">Privacy policy</a>.</p>
              </>
            )}

            {/* ───── STEP 2 · VERIFY ───── */}
            {step === 1 && (
              <>
                <div className="tw-head center">
                  <div className="su-otp-icon"><SuIcon name="phone" size={26}/></div>
                  <div className="su-eyebrow">Step 2 of 3 · Verify</div>
                  <h1 className="su-h1">Enter the 6-digit code</h1>
                  <p className="su-sub">
                    Sent by SMS to <strong style={{ color: 'var(--color-text-primary)' }}>+216 {data.phone || '55 234 187'}</strong>
                    <button type="button" className="su-link-inline" onClick={() => go(0)}>Change</button>
                  </p>
                </div>

                <OtpInput value={data.otp} onChange={v => upd({ otp: v })} />

                <div className="su-actions" style={{ marginTop: 24 }}>
                  <button className="su-btn-primary" disabled={!otpValid} onClick={() => go(2)}>
                    Verify &amp; continue <SuIcon name="arrow" size={16} stroke={2.5}/>
                  </button>
                </div>

                <div className="su-otp-resend">
                  <span>Didn't get a code?</span>
                  {timer > 0
                    ? <span className="su-otp-timer">Resend in 0:{String(timer).padStart(2, '0')}</span>
                    : <button type="button" className="su-link-inline strong" onClick={() => setTimer(28)}>Resend SMS</button>}
                </div>
                <p className="su-legal" style={{ textAlign: 'center' }}>The code expires in 10 minutes. Standard message rates may apply.</p>
              </>
            )}

            {/* ───── STEP 3 · PROFILE ───── */}
            {step === 2 && (
              <>
                <div className="tw-head">
                  <div className="tw-verified-chip"><SuIcon name="check" size={13} stroke={3}/> Number verified</div>
                  <div className="su-eyebrow" style={{ marginTop: 12 }}>Step 3 of 3 · Complete your account</div>
                  <h1 className="su-h1">Tell us who you are</h1>
                  <p className="su-sub">Your name and language help hosts greet you and keep everything in the language you read best.</p>
                </div>

                <div className="su-row">
                  <Field label="First name">
                    <input className="su-input" placeholder="Lina"
                           value={data.firstName} onChange={e => upd({ firstName: e.target.value })}/>
                  </Field>
                  <Field label="Last name">
                    <input className="su-input" placeholder="Bouazizi"
                           value={data.lastName} onChange={e => upd({ lastName: e.target.value })}/>
                  </Field>
                </div>

                <div className="su-field">
                  <label className="su-label">Preferred language<span className="opt"> · Optional</span></label>
                  <div className="su-lang-grid">
                    {TW_LANGS.map(l => (
                      <button key={l.code} type="button"
                              className={'su-lang-card' + (data.lang === l.code ? ' active' : '')}
                              onClick={() => upd({ lang: l.code })}>
                        <span className="flag">{l.flag}</span>
                        <span className="lab">{l.label}</span>
                        <span className="nat">{l.native}</span>
                        {data.lang === l.code && <span className="tick"><SuIcon name="check" size={12} stroke={3}/></span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="su-field">
                  <label className="su-label">Nationality<span className="opt"> · Optional</span></label>
                  <div className="su-input-wrap">
                    <span className="lead"><SuIcon name="globe" size={16}/></span>
                    <input className="su-input" value={data.nationality} onChange={e => upd({ nationality: e.target.value })} placeholder="Pick your country"/>
                  </div>
                </div>

                <Field>
                  <PhotoUploader initials={(data.firstName[0] || 'L').toUpperCase()}/>
                </Field>

                <div className="su-actions">
                  <button className="su-btn-primary" disabled={!profileValid} onClick={() => go(3)}>
                    Finish &amp; start exploring <SuIcon name="arrow" size={16} stroke={2.5}/>
                  </button>
                </div>
                <p className="su-legal">First name and last name are required. Language, nationality and photo are optional — you can add them later.</p>
              </>
            )}

            {/* ───── DONE ───── */}
            {step === 3 && (
              <div className="tw-done">
                <div className="tw-done-burst"><SuIcon name="check" size={34} stroke={3}/></div>
                <h1 className="su-h1" style={{ textAlign: 'center' }}>You're all set{data.firstName ? `, ${data.firstName}` : ''}!</h1>
                <p className="su-sub" style={{ textAlign: 'center', margin: '0 auto 24px' }}>
                  Your traveller account is ready. 342 Djerba experiences are waiting.
                </p>
                <div className="su-actions" style={{ maxWidth: 320, margin: '0 auto' }}>
                  <button className="su-btn-primary" onClick={() => go(0)}>
                    <SuIcon name="compass" size={16}/> Browse experiences
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* footer nav (back) — hidden on first + done */}
          {step > 0 && step < 3 && (
            <div className="tw-foot">
              <button className="tw-back" onClick={() => go(step - 1)}><SuIcon name="back" size={15} stroke={2.5}/> Back</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.TouristWizard = TouristWizard;

/* ─────────────────────────────────────────────────────────────
   Standalone SMS OTP verification screen — same step shown on its
   own as a designed artboard (pre-filled to look complete).
   ───────────────────────────────────────────────────────────── */
function TouristVerifyScreen() {
  const [otp, setOtp] = useState('472');
  return (
    <div className="su-screen tw-screen">
      <SuTop signIn={false} />
      <div className="tw-body">
        <div className="tw-card">
          <WizSteps step={1} />
          <div className="tw-pane">
            <div className="tw-head center">
              <div className="su-otp-icon"><SuIcon name="phone" size={26}/></div>
              <div className="su-eyebrow">Step 2 of 3 · Verify</div>
              <h1 className="su-h1">Enter the 6-digit code</h1>
              <p className="su-sub">
                Sent by SMS to <strong style={{ color: 'var(--color-text-primary)' }}>+216 55 234 187</strong>
                <button type="button" className="su-link-inline">Change</button>
              </p>
            </div>

            <OtpInput value={otp} onChange={setOtp} />

            <div className="su-actions" style={{ marginTop: 24 }}>
              <button className="su-btn-primary" disabled={otp.length !== 6}>
                Verify &amp; continue <SuIcon name="arrow" size={16} stroke={2.5}/>
              </button>
            </div>

            <div className="su-otp-resend">
              <span>Didn't get a code?</span>
              <span className="su-otp-timer">Resend in 0:24</span>
            </div>
            <p className="su-legal" style={{ textAlign: 'center' }}>The code expires in 10 minutes. Standard message rates may apply.</p>
          </div>

          <div className="tw-foot">
            <button className="tw-back"><SuIcon name="back" size={15} stroke={2.5}/> Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TouristVerifyScreen = TouristVerifyScreen;
