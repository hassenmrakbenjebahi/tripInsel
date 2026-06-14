// TripInsel · Create Activity — STEP-BY-STEP wizard + live preview.
// Maps 1:1 to CreateActivityDto + CreateAvailabilitySlotDto.
// Activity attributes (steps 1–5) are filled first, then Availability (step 6).

const { useState, useMemo, useRef, useEffect, Fragment } = React;

/* ── Reference data ──────────────────────────────────────────────── */
const CATEGORIES = [
  { value: 'DESERT_SAFARI', dot: 'desert',   label: 'Desert & camel',    icon: 'compass' },
  { value: 'WATER_SPORTS',  dot: 'water',    label: 'Water sports',      icon: 'zap' },
  { value: 'DIVING',        dot: 'diving',   label: 'Diving & snorkel',  icon: 'mapPin' },
  { value: 'BOAT_TRIP',     dot: 'boat',     label: 'Boat trips',        icon: 'compass' },
  { value: 'COOKING_CLASS', dot: 'cooking',  label: 'Cooking class',     icon: 'heart' },
  { value: 'CULTURAL_TOUR', dot: 'cultural', label: 'Culture & souk',    icon: 'flag' },
  { value: 'QUAD_BIKING',   dot: 'quad',     label: 'Quad & buggy',      icon: 'zap' },
  { value: 'WELLNESS',      dot: 'spa',      label: 'Spa & wellness',    icon: 'heart' },
  { value: 'FISHING',       dot: 'boat',     label: 'Fishing trips',     icon: 'compass' },
  { value: 'HORSE_RIDING',  dot: 'desert',   label: 'Horse riding',      icon: 'compass' },
  { value: 'GUIDED_HIKE',   dot: 'cultural', label: 'Guided hikes',      icon: 'mapPin' },
  { value: 'PHOTOGRAPHY',   dot: 'spa',      label: 'Photo tours',       icon: 'externalLink' },
  { value: 'NIGHTLIFE',     dot: 'quad',     label: 'Nightlife & shows', icon: 'zap' },
  { value: 'FOOD_TOUR',     dot: 'cooking',  label: 'Food tours',        icon: 'heart' },
  { value: 'POTTERY',       dot: 'cultural', label: 'Pottery workshop',  icon: 'flag' },
];
const PRICING_TYPES = [
  { value: 'PER_PERSON', label: 'Per person', help: 'Travellers pay your base price for each participant.' },
  { value: 'PER_GROUP',  label: 'Per group',  help: 'One flat price covers a whole group up to the size you set.' },
];
const DURATIONS = [15, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360, 480, 600, 720, 1440];
const SAMPLE_PHOTOS = [
  'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=900&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1591279004443-6e8c0e7f7e7e?w=900&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1597835766347-9c1a9c4c8c8f?w=900&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80&fit=crop&auto=format',
];
const MAX_IMAGES = 10;

const STEPS = [
  { id: 'basics',   label: 'Basics',       icon: 'edit',        phase: 'Activity' },
  { id: 'photos',   label: 'Photos',       icon: 'externalLink',phase: 'Activity' },
  { id: 'pricing',  label: 'Pricing',      icon: 'wallet',      phase: 'Activity' },
  { id: 'capacity', label: 'Capacity',     icon: 'clock',       phase: 'Activity' },
  { id: 'details',  label: 'Inclusions',   icon: 'checkCircle', phase: 'Activity' },
  { id: 'slots',    label: 'Availability', icon: 'calendar',    phase: 'Availability' },
];

/* ── Helpers ─────────────────────────────────────────────────────── */
function fmtDuration(min) {
  if (!min || min <= 0) return null;
  const h = Math.floor(min / 60), m = min % 60;
  return (h ? h + 'h' : '') + (h && m ? ' ' : '') + (m ? m + 'm' : '');
}
function slotDuration(start, end) {
  if (!start || !end) return null;
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins <= 0) return null;
  return fmtDuration(mins);
}

/* ── Field primitives ────────────────────────────────────────────── */
function Label({ children, required, optional }) {
  return (
    <span className="ca-label">
      {children}
      {required && <span className="req">*</span>}
      {optional && <span className="opt">· Optional</span>}
    </span>
  );
}

/* Enhanced number stepper — big tap targets, hold-to-repeat, clamps. */
function NumberStepper({ value, onChange, min = 1, max = 9999, step = 1, suffix, size }) {
  const clamp = (v) => Math.max(min, Math.min(max, v));
  const repeat = useRef(null);
  const start = (dir) => {
    onChange(clamp((Number(value) || 0) + dir * step));
    let delay = 400;
    const tick = () => {
      onChange(prev => clamp((Number(prev) || 0) + dir * step));
      repeat.current = setTimeout(tick, delay);
      delay = Math.max(60, delay * 0.8);
    };
    repeat.current = setTimeout(tick, delay);
  };
  const stop = () => { if (repeat.current) { clearTimeout(repeat.current); repeat.current = null; } };
  useEffect(() => () => stop(), []);
  const atMin = Number(value) <= min, atMax = Number(value) >= max;
  return (
    <div className={'ca-stepper' + (size === 'lg' ? ' lg' : '')}>
      <button type="button" className="dec" aria-label="Decrease" disabled={atMin}
              onMouseDown={() => start(-1)} onMouseUp={stop} onMouseLeave={stop}
              onClick={(e) => e.preventDefault()}>
        <Icon name="minus" size={size === 'lg' ? 18 : 15} />
      </button>
      <div className="val">
        <input type="number" inputMode="numeric" min={min} max={max} value={value}
               onChange={e => onChange(e.target.value === '' ? '' : clamp(Number(e.target.value)))}
               onBlur={e => onChange(clamp(Number(e.target.value) || min))} />
        {suffix && <span className="sfx">{suffix}</span>}
      </div>
      <button type="button" className="inc" aria-label="Increase" disabled={atMax}
              onMouseDown={() => start(1)} onMouseUp={stop} onMouseLeave={stop}
              onClick={(e) => e.preventDefault()}>
        <Icon name="plus" size={size === 'lg' ? 18 : 15} />
      </button>
    </div>
  );
}

/* Money input with stepper-free clean affix */
function MoneyInput({ value, onChange, suffix }) {
  return (
    <div className="ca-money">
      <span className="cur">€</span>
      <input type="number" inputMode="decimal" min="0.01" max="10000" step="0.50" placeholder="0.00"
             value={value} onChange={e => onChange(e.target.value)} />
      {suffix && <span className="sfx">{suffix}</span>}
    </div>
  );
}

/* Searchable category combobox — scales to any number of categories. */
function CategorySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const boxRef = useRef(null);
  const selected = CATEGORIES.find(c => c.value === value);
  const filtered = CATEGORIES.filter(c => c.label.toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => {
    if (!open) return;
    const close = e => { if (boxRef.current && !boxRef.current.contains(e.target)) { setOpen(false); setQ(''); } };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  return (
    <div className={'ca-combo' + (open ? ' open' : '')} ref={boxRef}>
      <button type="button" className={'ca-combo-trigger' + (selected ? ' has-val' : '')}
              onClick={() => setOpen(o => !o)}>
        {selected ? (
          <span className="val">
            <span className="swatch" style={{ background: CATEGORY_COLORS[selected.dot] }} />
            {selected.label}
          </span>
        ) : (
          <span className="ph">Select a category…</span>
        )}
        <Icon name="chevronDown" size={16} color="#888" />
      </button>
      {open && (
        <div className="ca-combo-menu">
          <div className="ca-combo-search">
            <Icon name="search" size={15} color="#888" />
            <input autoFocus value={q} onChange={e => setQ(e.target.value)}
                   placeholder={`Search ${CATEGORIES.length} categories…`} />
            {q && <button className="clr" onClick={() => setQ('')}><Icon name="x" size={13} color="#888" /></button>}
          </div>
          <div className="ca-combo-list">
            {filtered.length === 0 && <div className="ca-combo-empty">No categories match “{q}”.</div>}
            {filtered.map(c => (
              <button key={c.value} type="button"
                      className={'ca-combo-opt' + (c.value === value ? ' active' : '')}
                      onClick={() => { onChange(c.value); setOpen(false); setQ(''); }}>
                <span className="ic" style={{ background: CATEGORY_COLORS[c.dot] + '22', color: CATEGORY_COLORS[c.dot] }}>
                  <Icon name={c.icon} size={14} color={CATEGORY_COLORS[c.dot]} />
                </span>
                <span className="lab">{c.label}</span>
                {c.value === value && <Icon name="check" size={15} color="#00AA6C" strokeWidth={3} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════ */
function CreateActivity() {
  const [step, setStep] = useState(0);
  const [maxSeen, setMaxSeen] = useState(0);
  const [form, setForm] = useState({
    title: '', description: '', category: '',
    pricingType: 'PER_PERSON', basePrice: '', maxParticipantsPerUnit: 4,
    duration: 120, maxParticipants: 8,
    photos: [],
    includedItems: ['Hotel pickup & drop-off', 'Local English-speaking guide'],
    requirements: ['Comfortable shoes', 'Sun protection'],
    allowTimeSuggestions: false,
    slots: [
      { id: 1, startTime: '09:00', endTime: '11:00', capacity: 8 },
    ],
  });
  const set = (patch) => setForm(f => ({ ...f, ...patch }));
  const slotSeq = useRef(3);
  const [toast, setToast] = useState(false);
  const scrollRef = useRef(null);

  /* preview flash */
  const [flash, setFlash] = useState(false);
  const flashKey = `${form.title}|${form.category}|${form.basePrice}|${form.photos[0]}|${form.duration}|${form.pricingType}|${form.maxParticipants}`;
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }
    setFlash(true); const t = setTimeout(() => setFlash(false), 500); return () => clearTimeout(t);
  }, [flashKey]);

  /* handlers */
  const addPhoto = (url) => { if (form.photos.length < MAX_IMAGES) set({ photos: [...form.photos, url] }); };
  const removePhoto = (i) => set({ photos: form.photos.filter((_, j) => j !== i) });
  const moveCover = (i) => { const n = [...form.photos]; const [p] = n.splice(i, 1); n.unshift(p); set({ photos: n }); };
  const addSlot = () => set({ slots: [...form.slots, { id: slotSeq.current++, startTime: '10:00', endTime: '12:00', capacity: form.maxParticipants }] });
  const updateSlot = (id, patch) => set({ slots: form.slots.map(s => s.id === id ? { ...s, ...patch } : s) });
  const removeSlot = (id) => set({ slots: form.slots.filter(s => s.id !== id) });
  const updateList = (key, i, val) => set({ [key]: form[key].map((b, j) => j === i ? val : b) });
  const addItem = (key) => set({ [key]: [...form[key], ''] });
  const removeItem = (key, i) => set({ [key]: form[key].filter((_, j) => j !== i) });

  /* per-step validity (gates the Next button) */
  const titleErr = form.title.length > 0 && form.title.trim().length < 5;
  const descErr = form.description.length > 0 && form.description.trim().length < 20;
  const stepValid = [
    form.title.trim().length >= 5 && form.title.length <= 255 && !!form.category && form.description.trim().length >= 20,
    form.photos.length >= 1,
    Number(form.basePrice) >= 0.01 && Number(form.basePrice) <= 10000 && (form.pricingType !== 'PER_GROUP' || form.maxParticipantsPerUnit >= 1),
    form.duration >= 15 && form.duration <= 1440 && form.maxParticipants >= 1 && form.maxParticipants <= 100,
    true,
    form.slots.length >= 1 && form.slots.every(s => slotDuration(s.startTime, s.endTime) && s.capacity >= 1),
  ];

  const goNext = () => {
    if (step < STEPS.length - 1 && stepValid[step]) {
      const n = step + 1; setStep(n); setMaxSeen(m => Math.max(m, n));
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  };
  const goBack = () => { if (step > 0) { setStep(step - 1); if (scrollRef.current) scrollRef.current.scrollTop = 0; } };
  const jumpTo = (i) => { if (i <= maxSeen) { setStep(i); if (scrollRef.current) scrollRef.current.scrollTop = 0; } };

  const allValid = stepValid.every(Boolean);
  const publish = () => { if (!allValid) return; setToast(true); setTimeout(() => setToast(false), 3400); };

  const cat = CATEGORIES.find(c => c.value === form.category);
  const isGroup = form.pricingType === 'PER_GROUP';
  const isLast = step === STEPS.length - 1;

  /* ── current phase divider ── */
  const phase = STEPS[step].phase;

  return (
    <>
      <div className="ca-topbar">
        <button className="ca-back" aria-label="Back to activities"><Icon name="chevronLeft" size={18} /></button>
        <div>
          <div className="crumb">My activities · New listing</div>
          <h2>Create a new activity</h2>
        </div>
      </div>

      {/* ── Stepper bar ── */}
      <div className="ca-wiz-steps">
        {STEPS.map((s, i) => {
          const state = i === step ? 'active' : (i < step || i <= maxSeen && stepValid[i] && i < step) ? 'done' : (i <= maxSeen ? 'seen' : 'todo');
          const done = i < step || (i <= maxSeen && i !== step && stepValid[i]);
          return (
            <Fragment key={s.id}>
              <button type="button"
                className={'ca-wiz-step ' + (i === step ? 'active' : done ? 'done' : i <= maxSeen ? 'seen' : 'todo')}
                onClick={() => jumpTo(i)} disabled={i > maxSeen}>
                <span className="bub">{done ? <Icon name="check" size={14} color="#fff" strokeWidth={3} /> : i + 1}</span>
                <span className="lab">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && <span className={'ca-wiz-bar' + (i < step ? ' done' : '')} />}
            </Fragment>
          );
        })}
      </div>

      <div className="ca-layout">
        {/* ───────────── STEP PANE ───────────── */}
        <div className="ca-form" ref={scrollRef}>
          <div className="ca-phase-tag">{phase === 'Availability' ? 'Availability' : 'Activity details'} · Step {step + 1} of {STEPS.length}</div>

          <div className="ca-step-card" key={step}>
            {/* STEP 1 · BASICS */}
            {step === 0 && (
              <>
                <div className="ca-step-head">
                  <h3><Icon name="edit" size={18} color="#00703A" />The basics</h3>
                  <p>What travellers see first. Be specific — “Sunset camel ride at Ras R'mel” beats “Camel tour”.</p>
                </div>
                <div className="ca-field">
                  <Label required>Title</Label>
                  <input className={'ca-input' + (titleErr ? ' err' : '')} maxLength={255}
                         placeholder="e.g. Sunset camel ride at Ras R'mel"
                         value={form.title} onChange={e => set({ title: e.target.value })} />
                  <div className="ca-input-counter" style={titleErr ? { color: '#A30000' } : {}}>
                    {titleErr ? 'At least 5 characters' : `${form.title.length}/255`}
                  </div>
                </div>
                <div className="ca-field">
                  <Label required>Category</Label>
                  <CategorySelect value={form.category} onChange={v => set({ category: v })} />
                  <span className="ca-help">Choose the category that best fits — travellers filter activities by this.</span>
                </div>
                <div className="ca-field">
                  <Label required>Description</Label>
                  <textarea className={'ca-input' + (descErr ? ' err' : '')} maxLength={5000}
                            placeholder="Walk travellers through the experience — the highlights, the pace, who it's perfect for…"
                            value={form.description} onChange={e => set({ description: e.target.value })} />
                  <div className="ca-input-counter" style={descErr ? { color: '#A30000' } : {}}>
                    {descErr ? 'At least 20 characters' : `${form.description.length}/5000 · 20 minimum`}
                  </div>
                </div>
              </>
            )}

            {/* STEP 2 · PHOTOS */}
            {step === 1 && (
              <>
                <div className="ca-step-head">
                  <h3><Icon name="externalLink" size={18} color="#00703A" />Photos</h3>
                  <p>Up to {MAX_IMAGES} images. The first is your cover — listings with 4+ photos get up to 2× the bookings.</p>
                </div>
                <div className="ca-photo-flow">
                  {form.photos.map((p, i) => (
                    <div key={i} className={'ca-photo-tile' + (i === 0 ? ' cover' : '')}>
                      <img src={p} alt="" />
                      {i === 0 && <span className="cover-badge">Cover</span>}
                      {i !== 0 && <button className="mk-cover" onClick={() => moveCover(i)}>Make cover</button>}
                      <button className="rm" aria-label="Remove" onClick={() => removePhoto(i)}><Icon name="x" size={13} color="#fff" /></button>
                    </div>
                  ))}
                  {form.photos.length < MAX_IMAGES && (
                    <button className="ca-photo-add" onClick={() => addPhoto(SAMPLE_PHOTOS[form.photos.length % SAMPLE_PHOTOS.length])}>
                      <Icon name="plus" size={20} color="#999" /><span>Add photo</span>
                    </button>
                  )}
                </div>
                <div className="ca-sample-strip">
                  <span className="lbl">{form.photos.length}/{MAX_IMAGES} added · pick a sample:</span>
                  {SAMPLE_PHOTOS.map((url, i) => (
                    <div key={i} className="ca-sample" onClick={() => addPhoto(url)}><img src={url} alt="" /></div>
                  ))}
                </div>
              </>
            )}

            {/* STEP 3 · PRICING */}
            {step === 2 && (
              <>
                <div className="ca-step-head">
                  <h3><Icon name="wallet" size={18} color="#00703A" />Pricing</h3>
                  <p>Choose how you charge, then set the base price. TripInsel takes 12% commission; you keep the rest, paid weekly.</p>
                </div>
                <div className="ca-field">
                  <Label required>Pricing type</Label>
                  <div className="ca-seg">
                    {PRICING_TYPES.map(pt => (
                      <button key={pt.value} type="button"
                              className={'ca-seg-btn' + (form.pricingType === pt.value ? ' active' : '')}
                              onClick={() => set({ pricingType: pt.value })}>
                        <Icon name={pt.value === 'PER_PERSON' ? 'user' : 'users'} size={15}
                              color={form.pricingType === pt.value ? '#00703A' : '#555'} />
                        {pt.label}
                      </button>
                    ))}
                  </div>
                  <span className="ca-help">{PRICING_TYPES.find(p => p.value === form.pricingType).help}</span>
                </div>
                <div className="ca-field">
                  <Label required>Base price</Label>
                  <MoneyInput value={form.basePrice} onChange={v => set({ basePrice: v })} suffix={isGroup ? '/ group' : '/ person'} />
                  <span className="ca-help">Between €0.01 and €10,000.</span>
                </div>
                {isGroup && (
                  <div className="ca-field">
                    <Label required>Participants per unit</Label>
                    <NumberStepper value={form.maxParticipantsPerUnit} onChange={v => set({ maxParticipantsPerUnit: v })}
                                   min={1} max={100} suffix="people" />
                    <span className="ca-help">How many people one group price covers.</span>
                  </div>
                )}
                {Number(form.basePrice) >= 0.01 && (
                  <div className="ca-payout">
                    <Icon name="wallet" size={14} color="#00703A" />
                    You keep <strong>{formatEUR(Number(form.basePrice) * 0.88)}</strong> per {isGroup ? 'group' : 'person'} after the 12% commission.
                  </div>
                )}
              </>
            )}

            {/* STEP 4 · CAPACITY & DURATION */}
            {step === 3 && (
              <>
                <div className="ca-step-head">
                  <h3><Icon name="clock" size={18} color="#00703A" />Duration & capacity</h3>
                  <p>How long it runs and the most people you can host at once.</p>
                </div>
                <div className="ca-field">
                  <Label required>Duration</Label>
                  <div className="ca-duration-grid">
                    {DURATIONS.map(m => (
                      <button key={m} type="button"
                              className={'ca-dur-chip' + (form.duration === m ? ' active' : '')}
                              onClick={() => set({ duration: m })}>
                        {fmtDuration(m)}
                      </button>
                    ))}
                  </div>
                  <span className="ca-help">15 minutes to 24 hours.</span>
                </div>
                <div className="ca-field">
                  <Label required>Maximum participants</Label>
                  <NumberStepper value={form.maxParticipants} onChange={v => set({ maxParticipants: v })}
                                 min={1} max={100} suffix="people" size="lg" />
                  <span className="ca-help">Across all bookings in one slot · max 100.</span>
                </div>
              </>
            )}

            {/* STEP 5 · INCLUSIONS */}
            {step === 4 && (
              <>
                <div className="ca-step-head">
                  <h3><Icon name="checkCircle" size={18} color="#00703A" />Inclusions & requirements</h3>
                  <p>Set expectations clearly. Both lists appear on the activity page — these are optional but boost bookings.</p>
                </div>
                <div className="ca-field">
                  <Label optional>What's included</Label>
                  <div className="ca-bullets">
                    {form.includedItems.map((b, i) => (
                      <div key={i} className="ca-bullet-row inc">
                        <span className="mark"><Icon name="check" size={12} color="#00703A" strokeWidth={3} /></span>
                        <input className="ca-input" value={b} placeholder="e.g. Hotel pickup"
                               onChange={e => updateList('includedItems', i, e.target.value)} />
                        <button className="rm" aria-label="Remove" onClick={() => removeItem('includedItems', i)}><Icon name="x" size={14} /></button>
                      </div>
                    ))}
                  </div>
                  <button className="ca-add-bullet" type="button" onClick={() => addItem('includedItems')}>
                    <Icon name="plus" size={13} color="#00AA6C" /> Add included item
                  </button>
                </div>
                <div className="ca-field">
                  <Label optional>Requirements</Label>
                  <div className="ca-bullets">
                    {form.requirements.map((b, i) => (
                      <div key={i} className="ca-bullet-row req-row">
                        <span className="mark"><Icon name="flag" size={11} color="#8A6000" /></span>
                        <input className="ca-input" value={b} placeholder="e.g. Comfortable shoes, able to swim"
                               onChange={e => updateList('requirements', i, e.target.value)} />
                        <button className="rm" aria-label="Remove" onClick={() => removeItem('requirements', i)}><Icon name="x" size={14} /></button>
                      </div>
                    ))}
                  </div>
                  <button className="ca-add-bullet" type="button" onClick={() => addItem('requirements')}>
                    <Icon name="plus" size={13} color="#00AA6C" /> Add requirement
                  </button>
                </div>
              </>
            )}

            {/* STEP 6 · AVAILABILITY */}
            {step === 5 && (
              <>
                <div className="ca-step-head avail">
                  <h3><Icon name="calendar" size={18} color="#00703A" />Availability slots</h3>
                  <p>Now the scheduling. Add the daily departure times travellers can book — each slot carries its own capacity.</p>
                </div>
                <div className="ca-slots">
                  {form.slots.map((s, idx) => {
                    const dur = slotDuration(s.startTime, s.endTime);
                    const overCap = s.capacity > form.maxParticipants;
                    const invalid = !dur;
                    return (
                      <div key={s.id} className={'ca-slot2' + (invalid ? ' invalid' : '')}>
                        <div className="ca-slot2-head">
                          <div className="ca-slot2-id">
                            <span className="badge">{idx + 1}</span>
                            <span className="ttl">Time slot {idx + 1}</span>
                          </div>
                          <div className="ca-slot2-head-right">
                            {dur
                              ? <span className="ca-slot2-dur"><Icon name="clock" size={12} color="#00703A" />{dur}</span>
                              : <span className="ca-slot2-dur err"><Icon name="alertCircle" size={12} color="#A30000" />End after start</span>}
                            <button className="ca-slot2-rm" aria-label="Remove slot"
                                    disabled={form.slots.length <= 1} onClick={() => removeSlot(s.id)}>
                              <Icon name="trash" size={15} />
                            </button>
                          </div>
                        </div>
                        <div className="ca-slot2-body">
                          <div className="ca-slot2-field">
                            <label className="mini-label"><Icon name="clock" size={11} color="#888" /> Start</label>
                            <input type="time" className="ca-input" value={s.startTime}
                                   onChange={e => updateSlot(s.id, { startTime: e.target.value })} />
                          </div>
                          <span className="ca-slot2-sep"><Icon name="arrowRight" size={16} color="#C8C8C8" /></span>
                          <div className="ca-slot2-field">
                            <label className="mini-label"><Icon name="clock" size={11} color="#888" /> End</label>
                            <input type="time" className="ca-input" value={s.endTime}
                                   onChange={e => updateSlot(s.id, { endTime: e.target.value })} />
                          </div>
                          <div className="ca-slot2-divider" />
                          <div className="ca-slot2-field cap">
                            <label className="mini-label"><Icon name="users" size={11} color="#888" /> Capacity</label>
                            <NumberStepper value={s.capacity} onChange={v => updateSlot(s.id, { capacity: v })} min={1} max={100} suffix="seats" />
                          </div>
                        </div>
                        {overCap && (
                          <div className="ca-slot2-warn">
                            <Icon name="alertCircle" size={13} color="#8A6000" />
                            Capacity ({s.capacity}) is above this activity's max participants ({form.maxParticipants}). Travellers can't book more than the activity allows.
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <button className="ca-add-slot" type="button" onClick={addSlot} style={{ marginTop: 12 }}>
                  <Icon name="plus" size={15} color="#00AA6C" /> Add another time slot
                </button>
                <label className="ca-toggle-row" onClick={() => set({ allowTimeSuggestions: !form.allowTimeSuggestions })}>
                  <span className={'ca-switch' + (form.allowTimeSuggestions ? ' on' : '')}><span className="knob" /></span>
                  <span className="tt">
                    <b>Allow travellers to suggest a time</b>
                    <span>If none of your slots fit, travellers can request a custom time and you approve or decline it.</span>
                  </span>
                </label>
              </>
            )}
          </div>

          {/* ── Wizard navigation ── */}
          <div className="ca-wiz-nav">
            <button className="ca-nav-back" type="button" onClick={goBack} disabled={step === 0}>
              <Icon name="chevronLeft" size={16} /> Back
            </button>
            <div className="ca-nav-spacer" />
            {!isLast ? (
              <button className="ca-nav-next" type="button" onClick={goNext} disabled={!stepValid[step]}>
                Continue · {STEPS[step + 1].label} <Icon name="arrowRight" size={16} color="#fff" />
              </button>
            ) : (
              <button className="ca-nav-next publish" type="button" onClick={publish} disabled={!allValid}>
                <Icon name="zap" size={15} color="#fff" /> Publish activity
              </button>
            )}
          </div>
        </div>

        {/* ───────────── PREVIEW RAIL ───────────── */}
        <aside className="ca-rail">
          <div className="ca-rail-label"><span className="ca-live-dot" /> Live preview · what tourists see</div>
          <div className={'ca-preview-card' + (flash ? ' ca-flash' : '')}>
            <div className={'pc-img' + (form.photos[0] ? '' : ' empty')}
                 style={form.photos[0] ? { backgroundImage: `url(${form.photos[0]})` } : {}}>
              {!form.photos[0] && <><Icon name="externalLink" size={22} color="#999" />Add a cover photo</>}
              {cat && <span className="pc-cat"><CategoryDot category={cat.dot} />{cat.label}</span>}
              <span className="pc-heart"><Icon name="heart" size={15} color="#161616" /></span>
              <span className="pc-new">New</span>
              {form.photos.length > 1 && <span className="pc-count"><Icon name="externalLink" size={11} color="#fff" />{form.photos.length}</span>}
            </div>
            <div className="pc-body">
              <h4 className={'pc-title' + (form.title ? '' : ' placeholder')}>{form.title || 'Your activity title'}</h4>
              <div className="pc-meta">
                {fmtDuration(form.duration) && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="clock" size={12} color="#555" />{fmtDuration(form.duration)}</span>
                )}
                <span className="dot" />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="users" size={12} color="#555" />Up to {form.maxParticipants}</span>
              </div>
              <div className="pc-foot">
                <div className="pc-price">
                  {Number(form.basePrice) >= 0.01
                    ? <><b>{formatEUR(Number(form.basePrice))}</b> <span>{isGroup ? `/ group of ${form.maxParticipantsPerUnit}` : '/ person'}</span></>
                    : <span style={{ font: '600 12px var(--font-primary)', color: '#999' }}>Set a price →</span>}
                </div>
                <button className="pc-book">Book</button>
              </div>
            </div>
          </div>

          {/* mini step summary */}
          <div className="ca-checklist">
            <div className="ttl"><h4>Your progress</h4>
              <div className="ca-progress-ring">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#E8E8E8" strokeWidth="4" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#00AA6C" strokeWidth="4"
                          strokeLinecap="round" strokeDasharray={2 * Math.PI * 16}
                          strokeDashoffset={2 * Math.PI * 16 * (1 - stepValid.filter(Boolean).length / STEPS.length)}
                          transform="rotate(-90 20 20)"
                          style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.16,1,0.3,1)' }} />
                </svg>
                <span className="pct">{Math.round(stepValid.filter(Boolean).length / STEPS.length * 100)}%</span>
              </div>
            </div>
            {STEPS.map((s, i) => (
              <button key={s.id} className={'ca-check-item as-btn' + (stepValid[i] ? ' done' : '') + (i === step ? ' current' : '')}
                      disabled={i > maxSeen} onClick={() => jumpTo(i)}>
                <span className="box">{stepValid[i] && <Icon name="check" size={13} color="#fff" strokeWidth={3} />}</span>
                {s.label}
                {i === step && <span className="now">Now</span>}
              </button>
            ))}
          </div>
          <div className="ca-rail-note">New listings are reviewed by the TripInsel team within 24 hours before going live.</div>
        </aside>
      </div>

      <div className={'ca-toast' + (toast ? ' show' : '')}>
        <span className="ic"><Icon name="check" size={15} color="#fff" strokeWidth={3} /></span>
        Activity submitted! We'll review “{form.title}” within 24 hours.
      </div>
    </>
  );
}

/* ── App shell ───────────────────────────────────────────────────── */
const HOST_LINKS = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'activities', label: 'My activities', icon: 'briefcase' },
  { id: 'bookings', label: 'Bookings', icon: 'calendar', badge: '3' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'reviews', label: 'Reviews', icon: 'star' },
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];
const HOST_USER = { name: 'Ahmed Tours', email: 'ahmed@tours.tn', initials: 'AT' };

function CreateActivityApp() {
  return (
    <DashboardShell role="Local host" user={HOST_USER} links={HOST_LINKS}
                    current="activities" onNavigate={() => {}}>
      <CreateActivity />
    </DashboardShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CreateActivityApp />);
