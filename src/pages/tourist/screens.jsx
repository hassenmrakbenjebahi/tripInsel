// Tourist UI kit — screens

const TOURIST_ACTIVITIES = [
  { id: 'a1', title: 'Sunset camel ride at Ras R\'mel', image: 'https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=1200&q=80&fit=crop&auto=format',
    category: 'desert', categoryLabel: 'Desert',
    rating: 4.9, reviewCount: 1234, location: 'Houmt Souk', duration: '3 hours',
    price: 45, travelersChoice: true, providerId: 'p1',
    description: 'Ride along the lagoon at golden hour with a local guide. Includes hotel pickup, mint tea on the dune, and time at the sandbar before sunset.' },
  { id: 'a2', title: 'Flamingo lagoon boat tour', image: 'https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=1200&q=80&fit=crop&auto=format',
    category: 'water', categoryLabel: 'Water',
    rating: 4.5, reviewCount: 842, location: 'Ras R\'mel', duration: '2 hours',
    price: 38, providerId: 'p2',
    description: 'Spot pink flamingos on the lagoon by traditional wooden boat. Snorkel gear included for the open-water stop and a tea break on the sandbar.' },
  { id: 'a3', title: 'Houmt Souk medina walking tour', image: '../../../assets/photo-souk.svg',
    category: 'cultural', categoryLabel: 'Cultural',
    rating: 4.7, reviewCount: 561, location: 'Houmt Souk', duration: '2.5 hours',
    price: 28, travelersChoice: true, providerId: 'p3',
    description: 'A local historian leads you through the spice market, mosaic courtyards, and the Spanish fort. Family-friendly pace.' },
  { id: 'a4', title: 'Tunisian cooking class with Souad', image: 'https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=1200&q=80&fit=crop&auto=format',
    category: 'cooking', categoryLabel: 'Cooking',
    rating: 4.8, reviewCount: 412, location: 'Midoun', duration: '4 hours',
    price: 65, providerId: 'p4',
    description: 'Shop the morning market then cook brik, couscous, and Tunisian salad with Souad in her family kitchen. Lunch and tea included.' },
  { id: 'a5', title: 'Scuba dive at El Kantara reef', image: 'https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=1200&q=80&fit=crop&auto=format',
    category: 'diving', categoryLabel: 'Diving',
    rating: 4.6, reviewCount: 298, location: 'El Kantara', duration: '3 hours',
    price: 82, providerId: 'p5',
    description: 'Two guided dives at one of Djerba\'s clearest reefs. Open Water cert required. All gear, transfers, and a light lunch included.' },
  { id: 'a6', title: 'Lagoon kayak + flamingo sunset', image: 'https://images.unsplash.com/photo-1627298628183-ab85392ea27b?w=1200&q=80&fit=crop&auto=format',
    category: 'water', categoryLabel: 'Water',
    rating: 4.7, reviewCount: 367, location: 'Ras R\'mel', duration: '2 hours',
    price: 42, providerId: 'p2',
    description: 'Paddle the calm lagoon at sunset with a guide. Single and double kayaks available. Wildlife spotting and a hot mint tea at the end.' },
  { id: 'a7', title: 'Hammam & argan spa ritual', image: '../../../assets/photo-souk.svg',
    category: 'spa', categoryLabel: 'Spa',
    rating: 4.8, reviewCount: 521, location: 'Midoun', duration: '2 hours',
    price: 58, providerId: 'p6',
    description: 'A traditional steam, black soap exfoliation, and argan-oil massage in a tiled hammam. Bathrobe and slippers provided.' },
  { id: 'a8', title: 'Quad biking through the salt flats', image: '../../../assets/photo-desert.svg',
    category: 'quad', categoryLabel: 'Quad',
    rating: 4.4, reviewCount: 189, location: 'El Kantara', duration: '1.5 hours',
    price: 55, providerId: 'p7',
    description: 'Ride solo or tandem across the salt flats with an experienced guide. Helmets, goggles, and instruction provided.' },
];

/* ── Home screen ─────────────────────────────────────────────────── */
function HomeScreen({ go }) {
  return (
    <>
      <Hero onSearch={q => go('search', { query: q })} />
      <TodayInDjerba onPick={cat => go('search', { category: cat })} />

      <div className="ti-container" style={{ paddingTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <h2 style={{ font: '800 26px var(--font-primary)', letterSpacing: '-0.015em', margin: '0 0 4px' }}>Browse by what you'd love to do</h2>
            <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: 0 }}>Pick a vibe — we'll surface the best in it.</p>
          </div>
          <a onClick={() => go('search')} style={{ font: '700 13px var(--font-primary)', color: 'var(--color-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            See all 340 activities <Icon name="chevronRight" size={12} color="var(--color-primary)" />
          </a>
        </div>
        <CategoryRow onPick={cat => go('search', { category: cat })} />
      </div>

      <div className="ti-container" style={{ marginTop: 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <h2 style={{ font: '800 26px var(--font-primary)', letterSpacing: '-0.015em', margin: '0 0 4px' }}>Curated by the TripInsel editors</h2>
            <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: 0 }}>Hand-built collections for every kind of trip.</p>
          </div>
        </div>
        <CollectionRow onPick={() => go('search')} />
      </div>

      <div className="ti-container" style={{ marginTop: 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <h2 style={{ font: '800 26px var(--font-primary)', letterSpacing: '-0.015em', margin: '0 0 4px' }}>Experiences travellers love</h2>
            <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: 0 }}>Top-rated activities this month.</p>
          </div>
          <a onClick={() => go('search')} style={{ font: '700 13px var(--font-primary)', color: 'var(--color-primary)', cursor: 'pointer' }}>
            View more <Icon name="chevronRight" size={12} color="var(--color-primary)" />
          </a>
        </div>
        <div className="ti-grid-activities">
          {TOURIST_ACTIVITIES.slice(0, 4).map(a => (
            <ActivityCard key={a.id} a={a} onClick={() => go('detail', { id: a.id })} />
          ))}
        </div>
      </div>

      <div className="ti-container" style={{ marginTop: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <h2 style={{ font: '800 26px var(--font-primary)', letterSpacing: '-0.015em', margin: 0 }}>Travellers' Choice — Best of Djerba 2025</h2>
        </div>
        <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '0 0 16px' }}>The top 10% of activities, voted by you.</p>
        <div className="ti-grid-activities">
          {TOURIST_ACTIVITIES.filter(a => a.travelersChoice).slice(0, 4).map(a => (
            <ActivityCard key={a.id} a={a} onClick={() => go('detail', { id: a.id })} />
          ))}
        </div>
      </div>

      <AboutTripInsel />

      <div className="ti-container" style={{
        marginTop: 56, padding: '44px 32px',
        background: 'linear-gradient(135deg, var(--color-primary-light) 0%, #D4F5E9 60%, #fff 100%)',
        border: '1px solid #B7E3CD',
        borderRadius: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <div style={{ maxWidth: 520 }}>
          <div style={{ font: '700 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00703A', marginBottom: 8 }}>
            For local hosts
          </div>
          <h2 style={{ font: '800 26px var(--font-primary)', margin: '0 0 8px', color: '#00703A', letterSpacing: '-0.015em' }}>Share your Djerba with the world.</h2>
          <p style={{ font: '400 15px/1.55 var(--font-primary)', color: '#384a3f', margin: '0 0 18px' }}>
            Whether you run sunset camel rides, dive trips or family cooking classes — list your experience on TripInsel and reach 12k+ travellers a year. Free to join, fair commission, paid weekly.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="ti-btn ti-btn-primary">Become a local host</button>
            <button className="ti-btn ti-btn-ghost" style={{ background: 'rgba(255,255,255,0.7)' }}>How it works</button>
          </div>
        </div>
        <div style={{
          display: 'flex', gap: 10, flexShrink: 0,
        }}>
          {[
            { n: '€2.4k', l: 'Avg. monthly earnings' },
            { n: '< 48h',  l: 'Verification time' },
            { n: '0%',     l: 'Listing fee' },
          ].map(s => (
            <div key={s.l} style={{
              background: '#fff', padding: '14px 16px', borderRadius: 12,
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              minWidth: 120, textAlign: 'center',
            }}>
              <div className="ti-stat-num" style={{ fontSize: 22 }}>{s.n}</div>
              <div style={{ font: '600 11px var(--font-primary)', color: '#555', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Search results screen ───────────────────────────────────────── */
function SearchScreen({ params, go }) {
  const [category, setCategory] = useState(params.category || 'all');
  const filtered = category === 'all' ? TOURIST_ACTIVITIES : TOURIST_ACTIVITIES.filter(a => a.category === category);
  return (
    <>
      <FilterBar activeCategory={category} onCategoryChange={setCategory} />
      <div className="ti-container" style={{ paddingTop: 24 }}>
        <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginBottom: 8 }}>
          <a onClick={() => go('home')} style={{ color: '#00AA6C', cursor: 'pointer' }}>Djerba</a> <Icon name="chevronRight" size={11} color="#999" /> All activities
        </div>
        <h1 style={{ font: '800 28px var(--font-primary)', margin: '0 0 4px' }}>
          {category === 'all' ? 'All activities in Djerba' : `${filtered[0]?.categoryLabel || category} in Djerba`}
        </h1>
        <p style={{ font: '400 14px var(--font-primary)', color: '#555', margin: '0 0 16px' }}>{filtered.length} results</p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
          {['Sort: Relevance', 'Duration', 'Price', 'Rating', 'More filters'].map(s => (
            <button key={s} className="ti-chip" style={{ background: '#fff' }}>{s} <Icon name="chevronDown" size={11} /></button>
          ))}
        </div>
        <div>
          {filtered.map((a, i) => (
            <SearchResultRow key={a.id} a={a} rank={i + 1} onClick={() => go('detail', { id: a.id })} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '24px 0', font: '600 14px var(--font-primary)' }}>
          <button className="ti-chip">← Prev</button>
          <button className="ti-chip active">1</button>
          <button className="ti-chip">2</button>
          <button className="ti-chip">3</button>
          <span style={{ alignSelf: 'center' }}>…</span>
          <button className="ti-chip">24</button>
          <button className="ti-chip">Next →</button>
        </div>
      </div>
    </>
  );
}

/* ── Activity detail ─────────────────────────────────────────────── */
function DetailScreen({ params, go }) {
  const a = TOURIST_ACTIVITIES.find(x => x.id === params.id) || TOURIST_ACTIVITIES[0];
  return (
    <div className="ti-container" style={{ paddingTop: 24 }}>
      <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginBottom: 14 }}>
        <a onClick={() => go('home')} style={{ color: '#00AA6C', cursor: 'pointer' }}>Djerba</a>
        <Icon name="chevronRight" size={11} color="#999" />
        <a onClick={() => go('search', {})} style={{ color: '#00AA6C', cursor: 'pointer' }}>Experiences</a>
        <Icon name="chevronRight" size={11} color="#999" />
        <span>{a.categoryLabel}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, marginBottom: 16 }}>
        <div>
          <h1 style={{ font: '800 32px var(--font-primary)', margin: '0 0 10px', letterSpacing: '-0.015em' }}>{a.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
            <Bubbles score={a.rating} showScore showCount={a.reviewCount} />
            <RankingBadge rank={1} total={87} />
            {a.travelersChoice && <TravelersChoice />}
          </div>
          <div style={{ font: '400 14px var(--font-primary)', color: '#555' }}>
            <Icon name="mapPin" size={13} color="#555" /> {a.location} · <Icon name="clock" size={13} color="#555" /> {a.duration}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="ti-btn ti-btn-ghost"><Icon name="heart" size={14} />Save</button>
          <button className="ti-btn ti-btn-ghost"><Icon name="share" size={14} />Share</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '180px 180px', gap: 8, marginBottom: 28 }}>
        <div style={{ gridRow: 'span 2', backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12 }} />
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1555330596-bad55d96c09d?w=800&q=80&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12 }} />
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1627981699439-6b96f3b2b6cc?w=800&q=80&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12 }} />
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1628017830792-8b69a3ddd9fc?w=800&q=80&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12 }} />
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1555330949-30bee6e79672?w=800&q=80&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12, position: 'relative' }}>
          <button style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: 9999, padding: '6px 12px', font: '700 12px var(--font-primary)', cursor: 'pointer' }}>+12 photos</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 32 }}>
        <div>
          <section style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 24, marginBottom: 24 }}>
            <h2 style={{ font: '700 20px var(--font-primary)', margin: '0 0 12px' }}>About this experience</h2>
            <p style={{ font: '400 15px/1.6 var(--font-primary)', color: '#161616', margin: 0 }}>{a.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 20 }}>
              <Stat icon="clock" label="Duration" value={a.duration} />
              <Stat icon="users" label="Group" value="Up to 12" />
              <Stat icon="mapPin" label="Meet" value={a.location} />
              <Stat icon="globe" label="Languages" value="EN · FR · DE" />
            </div>
          </section>
          <section style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 24, marginBottom: 24 }}>
            <h2 style={{ font: '700 20px var(--font-primary)', margin: '0 0 12px' }}>What's included</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {['Local English/French/German-speaking guide', 'Hotel pickup & drop-off', 'Mint tea & dates', 'Camel & all equipment'].map(x => (
                <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 8, font: '400 14px var(--font-primary)' }}>
                  <Icon name="checkCircle" size={14} color="#00AA6C" />{x}
                </div>
              ))}
              {['Personal travel insurance', 'Tips for guide (optional)'].map(x => (
                <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 8, font: '400 14px var(--font-primary)', color: '#555' }}>
                  <Icon name="xCircle" size={14} color="#D93025" />{x}
                </div>
              ))}
            </div>
          </section>
          <section style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 24, marginBottom: 24 }}>
            <h2 style={{ font: '700 20px var(--font-primary)', margin: '0 0 12px' }}>Meeting point</h2>
            <div style={{ background: 'var(--color-bg-subtle)', borderRadius: 12, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 13px var(--font-primary)', color: '#999' }}>
              <Icon name="mapPin" size={18} color="#999" /> Leaflet map — {a.location}, Djerba
            </div>
          </section>
          <section style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 24, marginBottom: 24 }}>
            <h2 style={{ font: '700 20px var(--font-primary)', margin: '0 0 12px' }}>Your local host</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="ti-avatar" style={{ width: 56, height: 56, font: '700 20px var(--font-primary)' }}>AT</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <strong style={{ font: '700 16px var(--font-primary)' }}>Ahmed Tours</strong>
                  <VerifiedBusiness />
                </div>
                <div style={{ marginTop: 4 }}><Bubbles score={4.8} showScore showCount={3214} /></div>
              </div>
              <button className="ti-btn ti-btn-secondary ti-btn-sm">View profile</button>
            </div>
          </section>
          <section>
            <h2 style={{ font: '700 20px var(--font-primary)', margin: '0 0 16px' }}>Reviews</h2>
            <ReviewSummary score={a.rating} count={a.reviewCount} />
            <div style={{ marginTop: 20 }}>
              {[
                { name: 'Sofia K.', country: 'Germany', date: 'Jun 2025', score: 5, title: 'Amazing desert safari!', body: 'The guide was incredibly knowledgeable and patient with our small kids. The sunset on the dunes was unforgettable.' },
                { name: 'Marc L.', country: 'France', date: 'May 2025', score: 4.5, title: 'Beautiful sunset, great team', body: 'Smooth pickup, friendly camels, and a stunning sunset. The mint tea at the end was a lovely surprise.' },
              ].map((r, i) => <ReviewCard key={i} r={r} />)}
            </div>
          </section>
        </div>
        <BookingWidget activity={a} onBook={() => go('booking', { id: a.id })} />
      </div>
    </div>
  );
}
function Stat({ icon, label, value }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#999', font: '600 11px var(--font-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
        <Icon name={icon} size={12} color="#999" />{label}
      </div>
      <div style={{ font: '700 14px var(--font-primary)' }}>{value}</div>
    </div>
  );
}
function ReviewSummary({ score, count }) {
  const breakdown = [{ b: 5, p: 78 }, { b: 4, p: 16 }, { b: 3, p: 4 }, { b: 2, p: 1 }, { b: 1, p: 1 }];
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: '16px 0' }}>
      <div>
        <div style={{ font: '800 36px var(--font-primary)', lineHeight: 1 }}>{score.toFixed(1)}</div>
        <Bubbles score={score} size={16} />
        <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginTop: 4 }}>{count.toLocaleString()} reviews</div>
      </div>
      <div style={{ flex: 1 }}>
        {breakdown.map(({ b, p }) => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0' }}>
            <span style={{ font: '400 12px var(--font-primary)', color: '#555', width: 12 }}>{b}</span>
            <div style={{ flex: 1, height: 8, background: '#F2F2F2', borderRadius: 9999, overflow: 'hidden' }}>
              <div style={{ width: `${p}%`, height: '100%', background: '#00AA6C' }} />
            </div>
            <span style={{ font: '400 12px var(--font-primary)', color: '#999', width: 32, textAlign: 'right' }}>{p}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function ReviewCard({ r }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-border)', padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <div className="ti-avatar">{r.name.split(' ').map(p => p[0]).join('')}</div>
        <div>
          <div style={{ font: '700 14px var(--font-primary)' }}>{r.name}</div>
          <div style={{ font: '400 12px var(--font-primary)', color: '#999' }}>{r.country} · {r.date}</div>
        </div>
      </div>
      <Bubbles score={r.score} />
      <h4 style={{ font: '700 15px var(--font-primary)', margin: '6px 0 4px' }}>{r.title}</h4>
      <p style={{ font: '400 14px/1.5 var(--font-primary)', margin: 0 }}>{r.body}</p>
      <div style={{ display: 'flex', gap: 16, marginTop: 10, font: '400 12px var(--font-primary)', color: '#555' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}><Icon name="thumbsUp" size={12} color="#555" /> Helpful (12)</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="check" size={12} color="#00703A" strokeWidth={2.5} /> Verified booking</span>
      </div>
    </div>
  );
}

/* ── Booking confirmation ────────────────────────────────────────── */
function BookingConfirmScreen({ params, go }) {
  const a = TOURIST_ACTIVITIES.find(x => x.id === params.id) || TOURIST_ACTIVITIES[0];
  return (
    <div className="ti-container" style={{ paddingTop: 60, maxWidth: 640, textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: 9999, background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }} className="ti-confirm-icon">
        <Icon name="check" size={36} color="#00AA6C" strokeWidth={3} />
      </div>
      <h1 style={{ font: '800 32px var(--font-primary)', margin: '0 0 8px' }}>You're all set!</h1>
      <p style={{ font: '400 16px var(--font-primary)', color: '#555', margin: '0 0 24px' }}>A confirmation has been sent to your email.</p>
      <div className="ti-card" style={{ padding: 20, textAlign: 'left', display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
        <div style={{ width: 80, height: 80, borderRadius: 8, backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <h3 style={{ font: '700 16px var(--font-primary)', margin: '0 0 4px' }}>{a.title}</h3>
          <div style={{ font: '400 13px var(--font-primary)', color: '#555' }}>Jun 17 2025 · 14:00 · 2 adults</div>
          <div style={{ font: '400 13px var(--font-primary)', color: '#555' }}>Ref: TI-4829</div>
        </div>
        <StatusBadge status="confirmed" />
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="ti-btn ti-btn-secondary" onClick={() => go('bookings')}>View booking</button>
        <button className="ti-btn ti-btn-primary" onClick={() => go('home')}>Explore more</button>
      </div>
    </div>
  );
}

/* ── My bookings ─────────────────────────────────────────────────── */
function BookingsScreen({ go }) {
  const [tab, setTab] = useState('upcoming');
  const bookings = [
    { id: 'TI-4829', a: TOURIST_ACTIVITIES[0], date: 'Jun 17 2025 · 14:00', guests: '2 adults', total: 90, status: 'confirmed', tab: 'upcoming' },
    { id: 'TI-4711', a: TOURIST_ACTIVITIES[1], date: 'Jun 22 2025 · 10:00', guests: '4 adults', total: 152, status: 'pending', tab: 'upcoming' },
    { id: 'TI-4602', a: TOURIST_ACTIVITIES[3], date: 'May 30 2025 · 09:00', guests: '2 adults', total: 130, status: 'completed', tab: 'past' },
    { id: 'TI-4521', a: TOURIST_ACTIVITIES[2], date: 'May 14 2025 · 11:00', guests: '3 adults', total: 84, status: 'cancelled', tab: 'cancelled' },
  ];
  const filtered = bookings.filter(b => b.tab === tab);
  return (
    <div className="ti-container" style={{ paddingTop: 32 }}>
      <h1 style={{ font: '800 28px var(--font-primary)', margin: '0 0 8px' }}>My bookings</h1>
      <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--color-border)', marginBottom: 16 }}>
        {[['upcoming', 'Upcoming'], ['past', 'Past'], ['cancelled', 'Cancelled']].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            font: '700 14px var(--font-primary)', padding: '12px 16px',
            color: tab === id ? 'var(--color-primary)' : '#161616',
            borderBottom: tab === id ? '2px solid var(--color-primary)' : '2px solid transparent', marginBottom: -1,
          }}>{label} {bookings.filter(b => b.tab === id).length > 0 && <span style={{ color: '#999', fontWeight: 600 }}>({bookings.filter(b => b.tab === id).length})</span>}</button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 48, color: '#999' }}>No bookings yet.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map(b => (
            <div key={b.id} className="ti-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 96, height: 72, borderRadius: 8, backgroundImage: `url(${b.a.image})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h3 style={{ font: '700 15px var(--font-primary)', margin: 0 }}>{b.a.title}</h3>
                  <StatusBadge status={b.status} />
                </div>
                <div style={{ font: '400 13px var(--font-primary)', color: '#555', marginTop: 4 }}>
                  {b.date} · {b.guests} · Ref: {b.id}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ font: '800 16px var(--font-primary)' }}>€{b.total.toFixed(2)}</div>
                <button className="ti-btn ti-btn-ghost ti-btn-sm" onClick={() => go('detail', { id: b.a.id })}>View details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, {
  TOURIST_ACTIVITIES, HomeScreen, SearchScreen, DetailScreen,
  BookingConfirmScreen, BookingsScreen,
});
