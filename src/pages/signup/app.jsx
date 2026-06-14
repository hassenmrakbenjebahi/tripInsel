// TripInsel sign-up — design canvas layout
// Lays each sign-up screen onto a DCArtboard inside DCSections.

const SignUpCanvas = () => (
  <DesignCanvas
    title="TripInsel · Sign-up flows"
    subtitle="Role-aware account creation — Tourist, Provider and Admin paths. Each artboard is a screen; switch between flows with the section nav. Click any artboard to focus it fullscreen."
  >
    <DCSection
      id="entry"
      title="① Entry"
      subtitle="The first thing every user sees — they pick a role before anything role-specific is asked. Only Traveller and Provider are exposed; staff sign-in lives elsewhere."
    >
      <DCArtboard id="role-picker" label="Role picker · two public roles" width={560} height={780}>
        <RolePicker/>
      </DCArtboard>
    </DCSection>

    <DCSection
      id="tourist"
      title="② Traveller sign-up · step-by-step"
      subtitle="The volume role, redesigned as one professional 3-step wizard: Account → Verify by SMS → Personalise. Fully interactive — click through it. Google-first, with email fallback; phone verified by 6-digit code; profile step is all-optional. The split-screen treatment is kept as a visual variant."
    >
      <DCArtboard id="tourist-wizard" label="Traveller wizard · interactive (click through)" width={560} height={920}>
        <TouristWizard/>
      </DCArtboard>
      <DCArtboard id="tourist-verify" label="Step 2 · Verify by SMS (6-digit code)" width={560} height={720}>
        <TouristVerifyScreen/>
      </DCArtboard>
      <DCArtboard id="tourist-split" label="Variant · Split with photo" width={1040} height={720}>
        <TouristSignupSplit/>
      </DCArtboard>
    </DCSection>

    <DCSection
      id="provider"
      title="③ Local host sign-up"
      subtitle="Local hosts (formerly 'providers') carry the most data. Two steps: business identity first, then location with a map pin that auto-fills the address. A verification step follows after submit (not shown — handled by Admin)."
    >
      <DCArtboard id="provider-step1" label="Step 1 · Business" width={580} height={1040}>
        <ProviderStep1/>
      </DCArtboard>
      <DCArtboard id="provider-step2" label="Step 2 · Map-first location" width={600} height={1000}>
        <ProviderStep2/>
      </DCArtboard>
    </DCSection>

    <DCSection
      id="admin"
      title="④ Admin sign-up · private URL only"
      subtitle="Reached only via a private URL (e.g. /staff/onboard) sent in the invitation email. NOT linked from the public role picker — that surface only exposes Traveller and Provider. Open admin enrolment is an enumeration and social-engineering risk."
    >
      <DCArtboard id="admin" label="Admin · invite-only" width={560} height={920}>
        <AdminSignup/>
      </DCArtboard>
    </DCSection>

    <DCSection
      id="notes"
      title="⑤ Design notes & open questions"
      subtitle="Decisions made on your behalf and where I'd love your input."
    >
      <DCArtboard id="notes" label="Read me" width={680} height={760} style={{ background: '#FFFCF5' }}>
        <DesignNotes/>
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

const DesignNotes = () => (
  <div style={{
    padding: '32px 36px', height: '100%', boxSizing: 'border-box', overflow: 'auto',
    fontFamily: 'var(--font-primary)', color: 'var(--color-text-primary)',
    background: '#FFFCF5',
  }}>
    <div style={{ font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A6000', marginBottom: 8 }}>
      Designer's notes
    </div>
    <h2 style={{ font: '800 22px var(--font-primary)', letterSpacing: '-0.015em', margin: '0 0 14px' }}>Assumptions & open questions</h2>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>1 · Traveller sign-up is one step-by-step wizard</h3>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
      Per your scenario, the traveller flow is one interactive 3-step wizard — <strong>Account → Verify → Complete account</strong>:
    </p>
    <ul style={{ font: '400 13px/1.6 var(--font-primary)', color: '#555', margin: '6px 0 0', paddingLeft: 18 }}>
      <li><strong>Sign up</strong> with Google, Apple <em>or</em> email/password — all three are equal entry points.</li>
      <li><strong>Phone verification by SMS is required in every case</strong>, even after Google/Apple — the OAuth recap card still asks for a phone and routes through the same 6-digit code step.</li>
      <li><strong>Complete account</strong> after verifying: first name + last name are <strong>required</strong>; preferred language, nationality and profile photo are <strong>optional</strong>. OAuth pre-fills the name (editable); the Finish button stays disabled until first + last name are set.</li>
    </ul>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>2 · Provider address auto-fills from the pin</h3>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
      Great suggestion. Step 2 now leads with the map. When the host drops or drags the pin, the system reverse-geocodes
      the coordinates and writes the result into the address field below — shown via a green "Address filled from your pin"
      affordance and a subtle green tint on the input so they know it was auto-populated.
      The field stays editable for hosts whose pin lands on a street number that doesn't match their unit.
    </p>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: '4px 0 0' }}>
      <strong>Postal code removed</strong> — Tunisia's postal codes aren't useful for travellers finding a tour,
      and Nominatim/Mapbox reverse-geocoding gives us the town/area for free.
    </p>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>3 · Provider location pin uses real reverse geocoding</h3>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
      The README mentions Leaflet + React-Leaflet. The map shown is a static sketch — the production version should pair
      Leaflet with a reverse-geocoding service (Nominatim is free, Mapbox Geocoding is more reliable) so pin drags fire a
      debounced lookup that writes the street + town back into the form. Pin and inputs stay two-way bound.
    </p>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>4 · Admin role is hidden from the public role picker</h3>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
      Per your call — and correctly so. The public picker shows only <strong>Traveller</strong> and <strong>Provider</strong>.
      Listing an "Administrator" option teaches attackers that the role exists and creates a clickable funnel they'll
      hammer with credential-stuffing and social engineering. Instead:
    </p>
    <ul style={{ font: '400 13px/1.6 var(--font-primary)', color: '#555', margin: '6px 0 0', paddingLeft: 18 }}>
      <li>Admin invites are sent by email with a one-time code that opens a <strong>private URL</strong> (e.g. <code style={{ background: '#F2F2F2', padding: '1px 5px', borderRadius: 4, font: '600 12px monospace' }}>/staff/onboard?token=…</code>).</li>
      <li>The URL is not linked from marketing, the role picker, or any provider/tourist page.</li>
      <li>Codes expire within 24 hours and are single-use.</li>
      <li>First sign-in enforces 2FA enrolment and logs the event to the audit trail.</li>
      <li>Under the role picker we show a short, neutral hint — "<em>TripInsel staff sign in at a private URL</em>" — so an internal user who lands on the public page knows where to go, without naming the role.</li>
    </ul>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>5 · Tourist verifies by SMS code</h3>
    <p style={{ font: '400 13px/1.55 var(--font-primary)', color: '#555', margin: 0 }}>
      Per your call — right after sign-up the traveller gets a <strong>6-digit code by SMS</strong> to their phone number and
      enters it on the verify screen (artboard B). Six separate boxes, auto-advance on type, paste-to-fill, a resend timer,
      and a 10-minute expiry. Only after the code is confirmed do they reach "Complete your profile". On the backend this is a
      <code style={{ background: '#F2F2F2', padding: '1px 5px', borderRadius: 4, font: '600 12px monospace' }}>POST /auth/verify-otp</code> with the phone + code; the account stays <em>unverified</em> until it succeeds.
    </p>

    <h3 style={{ font: '700 14px var(--font-primary)', margin: '18px 0 6px' }}>6 · Where to go from here</h3>
    <ul style={{ font: '400 13px/1.6 var(--font-primary)', color: '#555', margin: 0, paddingLeft: 18 }}>
      <li>Verification states · awaiting review · approved · rejected</li>
      <li>Mobile breakpoints — every screen should collapse to a single-column 360 px wide layout</li>
      <li>Provider step 3 — payment payout details (bank or wallet)</li>
      <li>Sign-in screen, password reset, and "Resume application" for unfinished providers</li>
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<SignUpCanvas/>);
