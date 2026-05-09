import React from 'react';

const NAVY = "#3b3f69";
const CRIMSON = "#ca1254";

const pillars = [
  {
    value: 'Clinical Grade',
    desc: 'Evidence-based protocols at every step.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    value: 'Registered Nurses',
    desc: 'Fully registered, experienced practitioners.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 'Mobile First',
    desc: 'Care delivered where you need it most.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const MissionStatement = () => {
  return (
    <section style={{ padding: '40px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          background: NAVY,
          borderRadius: 40,
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(59,63,105,0.25)',
          position: 'relative',
        }}>
          {/* Stripe texture */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)' }} />
          {/* Glow TR */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(202,18,84,0.22) 0%, transparent 70%)', filter: 'blur(100px)', transform: 'translate(25%,-30%)', pointerEvents: 'none' }} />
          {/* Glow BL */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translate(-30%,30%)', pointerEvents: 'none' }} />

          {/* Layout */}
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 1px minmax(0,1.5fr)' }} className="mission-grid">

            {/* LEFT */}
            <div style={{ padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 28 }}>
                  Our Compass
                </div>
                <h2 style={{ fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: 0 }}>
                  Our<br /><span style={{ color: CRIMSON }}>Mission.</span>
                </h2>
                <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.7 }}>
                  Patient-centred care — every session uniquely tailored to individual needs.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {pillars.map((p) => (
                  <div key={p.value} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(202,18,84,0.12)', border: '1px solid rgba(202,18,84,0.25)' }}>
                      {p.icon}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{p.value}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div style={{ alignSelf: 'stretch', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 75%, transparent)' }} />

            {/* RIGHT */}
            <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: 'rgba(202,18,84,0.25)', fontSize: 100, lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: -20, userSelect: 'none' }}>"</div>
              <p style={{ fontSize: 20, color: '#fff', lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>
                To provide{' '}
                <span style={{ color: CRIMSON, fontWeight: 600 }}>safe, professional</span>
                {' '}and{' '}
                <span style={{ color: CRIMSON, fontWeight: 600 }}>accessible</span>
                {' '}healthcare services that support overall wellbeing for individuals, aged care clients and NDIS participants.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.7, paddingLeft: 16, borderLeft: '2px solid rgba(202,18,84,0.5)', marginBottom: 32 }}>
                Every session is uniquely tailored to individual patient needs and requirements.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Aged Care', 'NDIS', 'Mobile Services', 'Clinical Grade'].map((tag) => (
                  <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .mission-grid { grid-template-columns: 1fr !important; }
            .mission-grid > div:nth-child(2) { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default MissionStatement;