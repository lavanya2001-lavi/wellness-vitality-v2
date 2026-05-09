import React from 'react';
import Link from 'next/link';
import ServiceHero from '@/components/sections/services/ServiceHero';
import Button from '@/components/ui/Button';



const featuredPackages = [
  { name: 'Hydration Revival Infusion', price: '$280', desc: 'Vitamin C, Magnesium, B-Complex & Zinc' },
  { name: 'Anti-Inflammatory Infusion', price: '$350', desc: 'Vitamin C, Magnesium, B-Complex, Zinc & Taurine' },
  { name: 'Immune Defence Infusion', price: '$430', desc: 'Vitamin C, B-Complex, Zinc, Selenium & Glutathione' },
  { name: 'Recovery & Performance Infusion', price: '$455', desc: 'Vitamin C, Magnesium, B-complex, Vitamin B12, Taurine & GB Shot' },
  { name: 'Calm & Restore Infusion', price: '$350', desc: 'Magnesium, GABA, Taurine' },
  { name: 'Liver Health Support Infusion', price: '$375', desc: 'Vitamin C, B-Complex, Glutathione, Glycine & B12' },
  { name: 'Hair, Skin & Nails Infusion', price: '$395', desc: 'Vitamin C, Magnesium, B-Complex, Zinc, Biotin, Glutathione' },
  { name: 'The Glow Infusion', price: '$420', desc: 'Vitamin C, B-Complex, Zinc & High Dose Glutathione' },
];

const addOns = [
  { name: 'Vitamin C', price: 'From $54' },
  { name: 'Magnesium', price: '$35' },
  { name: 'Zinc', price: '$54' },
  { name: 'B complex', price: '$54' },
  { name: 'B Complex Plus', price: '$64' },
  { name: 'Selenium', price: '$70' },
  { name: 'Glutathione', price: '$120' },
  { name: 'Glycine', price: '$64' },
  { name: 'GB Shot', price: '$64' },
  { name: 'SD Shot', price: '$70' },
  { name: 'Taurine', price: '$70' },
  { name: 'NAD Packages', price: '100mg $225 | 250mg $475 | 500mg $695' }
];

const boosters = [
  { name: 'Vitamin B12 Shot', price: '$59', desc: 'Increase metabolism, boost energy, regulate mood, sleep and appetite' },
  { name: 'Biotin B7', price: '$54', desc: 'The elixir for your hair, skin and nails to thrive' },
  { name: 'COQ10', price: '$54', desc: 'Support exercise performance and recovery while helping to reduce fatigue and enhance endurance' },
  { name: 'Glutathione Shot', price: '$99', desc: 'May slow the ageing process as you detoxify your liver' },
  { name: 'Vitamin D', price: '$99', desc: 'Helps your immune system against viruses & builds density in your bones' },
  { name: 'ALA Complex', price: '$58', desc: 'Powerful antioxidant that supports cellular energy, nerve health and metabolic balance while helping protect the body from oxidative stress' },
  { name: 'NAD Subcutaneous', price: '$225', desc: 'Powerful coenzymes that enable cells to produce energy, repair DNA and regulate ageing' },
];

export default function CustomIvDripsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        :root {
          --rose:        #ca1254;
          --rose-mid:    #e84d8a;
          --rose-100:    #fce8f1;   /* very light rose tint */
          --rose-50:     #fef5f9;   /* near-white rose */
          --rose-border: rgba(202,18,84,0.14);
          --white:       #ffffff;
          --gray-50:     #fafafa;
          --gray-100:    #f5f5f7;
          --gray-border: #ebebeb;
          --gray-text:   #6b7280;
          --gray-muted:  #9ca3af;
          --ink:         #111111;
        }

        .cdp * { box-sizing: border-box; }

        .cdp-wrap {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── shared eyebrow ── */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 14px;
        }
        .eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--rose);
          opacity: 0.4;
        }

        /* ── shared section title ── */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: var(--ink);
          margin: 0 0 20px;
        }



        /* ═══════════════════════════════
           SECTION 2 — FEATURED PACKAGES
        ═══════════════════════════════ */
        .pkg-section {
          padding: 64px 0;
          background: var(--gray-50);
          position: relative;
        }
        .pkg-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        .pkg-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .pkg-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .pkg-grid { grid-template-columns: 1fr; } }

        .pkg-card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 12px 48px rgba(202,18,84,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--rose);
          transition: height 0.3s;
        }
        .pkg-card:hover {
          box-shadow: 0 20px 50px rgba(202,18,84,0.08);
          transform: translateY(-5px);
        }
        .pkg-card:hover::before { height: 3px; }

        .pkg-icon {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: var(--rose);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 22px;
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .pkg-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 14px;
          line-height: 1.2;
        }
        .pkg-desc {
          font-size: 14px;
          color: #7d828f;
          font-weight: 300;
          line-height: 1.6;
          margin: 0 0 32px;
          flex: 1;
        }
        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.04);
        }
        .pkg-price-label {
          font-size: 10px;
          font-weight: 700;
          color: #a3a8b5;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          display: block;
          margin-bottom: 6px;
        }
        .pkg-price {
          font-size: 24px;
          font-weight: 700;
          color: var(--rose);
        }
        .pkg-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--rose);
          background: var(--rose-100);
          padding: 6px 12px;
          border-radius: 999px;
        }

        /* ═══════════════════════════════
           SECTION 3 — ADD-ONS
        ═══════════════════════════════ */
        .addons-section {
          padding: 64px 0;
          background: var(--white);
          position: relative;
        }
        .addons-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        .addons-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 780px) {
          .addons-layout { grid-template-columns: 1fr; gap: 40px; }
        }

        .addons-intro-text {
          font-size: 14.5px;
          color: var(--gray-text);
          font-weight: 300;
          line-height: 1.7;
          margin: 0;
        }

        .addons-list { display: flex; flex-direction: column; gap: 4px; }

        .addon-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 22px;
          background: var(--gray-100);
          border-radius: 12px;
          border: 1.5px solid transparent;
          transition: all 0.25s ease;
        }
        .addon-row:hover {
          background: var(--rose-50);
          border-color: var(--rose-border);
          transform: translateX(4px);
        }
        .addon-left { display: flex; align-items: center; gap: 14px; }
        .addon-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--rose-100);
          border: 2px solid var(--rose);
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .addon-row:hover .addon-dot { background: var(--rose); }
        .addon-name { font-size: 14px; font-weight: 500; color: var(--ink); }
        .addon-price { font-size: 14.5px; font-weight: 700; color: var(--rose); }

        /* ═══════════════════════════════
           SECTION 4 — CTA  (LIGHT)
        ═══════════════════════════════ */
        .cta-section {
          padding: 64px 0;
          background: var(--gray-50);
          position: relative;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-border), transparent);
        }

        /* Light CTA box — rose border + very soft rose fill */
        .cta-box {
          background: var(--white);
          border: 1.5px solid var(--rose-border);
          border-radius: 28px;
          padding: 72px 80px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 60px;
          box-shadow: 0 20px 64px rgba(202,18,84,0.07);
        }
        @media (max-width: 780px) {
          .cta-box { grid-template-columns: 1fr; padding: 52px 40px; gap: 40px; }
        }

        /* soft rose glow blobs — very subtle */
        .cta-box::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(202,18,84,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-box::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -60px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(232,77,138,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 18px;
          opacity: 0.8;
        }
        .cta-eyebrow-line {
          display: block;
          width: 24px; height: 1px;
          background: var(--rose);
          opacity: 0.4;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 50px);
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 16px;
          line-height: 1.12;
          position: relative;
          z-index: 1;
        }
        .cta-sub {
          font-size: 15.5px;
          color: var(--gray-text);
          font-weight: 300;
          line-height: 1.65;
          max-width: 480px;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 210px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        /* solid rose primary */
        .cta-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 28px;
          background: var(--rose);
          color: #fff;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .cta-btn-primary:hover {
          background: var(--rose-mid);
          box-shadow: 0 10px 32px rgba(202,18,84,0.28);
        }

        /* light rose outline secondary */
        .cta-btn-outline {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 28px;
          background: transparent;
          color: var(--rose);
          border: 1.5px solid var(--rose-border);
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .cta-btn-outline:hover {
          background: var(--rose-50);
          border-color: rgba(202,18,84,0.3);
        }
      `}</style>

      <div className="cdp">

        {/* ── Hero — UNTOUCHED ── */}
        <ServiceHero
          badge="Tailored Therapy"
          heading="Custom IV Drips & Pricing"
          subtext="Designing a clinical formulation based entirely on your unique requirements. Choose from our comprehensive library of vitamins, minerals and amino acids."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Back to IV Infusions"
          secondaryCtaHref="/services/iv-infusions"
        />



        {/* ═══════════════════════════════
            SECTION 2 — FEATURED PACKAGES
        ═══════════════════════════════ */}
        <section className="pkg-section">
          <div className="cdp-wrap">
            <div className="pkg-header">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line" />
                Scientifically Formulated
                <span className="eyebrow-line" />
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                Infusion Menu
              </h2>
              <p style={{ fontSize: '15.5px', color: '#9ca3af', fontWeight: 300, marginTop: '10px', maxWidth: '460px', margin: '10px auto 0' }}>
                Our most popular nutrient combinations for targeted recovery and performance.
              </p>
            </div>

            <div className="pkg-grid">
              {featuredPackages.map((t) => (
                <div key={t.name} className="pkg-card">
                  <div>
                    <div className="pkg-icon">
                      $
                    </div>
                    <h3 className="pkg-name">{t.name}</h3>
                    <p className="pkg-desc">{t.desc}</p>
                  </div>
                  <div className="pkg-footer">
                    <div>
                      <span className="pkg-price-label">Pricing</span>
                      <span className="pkg-price">{t.price}</span>
                    </div>
                    <span className="pkg-badge">All Inclusive</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            SECTION 3 — ADD-ONS
        ═══════════════════════════════ */}
        <section className="addons-section">
          <div className="cdp-wrap">

            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line" />
                Enhance Your Drip
                <span className="eyebrow-line" />
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(30px, 3vw, 40px)', margin: '0 0 16px' }}>
                Service Add-ons & Boosters
              </h2>
              <p style={{ fontSize: '15.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.7', maxWidth: '580px', margin: '0 auto' }}>
                Complement any IV therapy with targeted boosters — curated by our clinicians to amplify your results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* IV ADD ONS */}
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#ebebeb] shadow-sm">
                <h3 className="text-2xl font-bold font-serif text-[#3b3f69] mb-6 pb-4 border-b-2 border-[#f5f5f7]">
                  IV ADD ONS
                </h3>
                <div className="flex flex-col">
                  {addOns.map(item => (
                    <div key={item.name} className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                      <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">{item.name}</span>
                      <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40"></div>
                      <span className="text-[#ca1254] font-bold text-[15px]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOOSTERS MENU */}
              <div className="bg-[#3b3f69] rounded-[24px] p-8 md:p-10 shadow-lg">
                <h3 className="text-2xl font-bold font-serif text-white mb-6 pb-4 border-b-2 border-white/10">
                  BOOSTERS MENU
                </h3>
                <div className="flex flex-col">
                  {boosters.map((item) => (
                    <div key={item.name} className="py-4 border-b border-white/10 last:border-0 group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">{item.name}</h4>
                        <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5"></div>
                        <span className="text-[#ca1254] font-bold text-[16px] ml-4">{item.price}</span>
                      </div>
                      <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTION 4 — CTA  (LIGHT)
        ═══════════════════════════════ */}
        <section className="cta-section">
          <div className="cdp-wrap">
            <div className="cta-box">

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="cta-eyebrow">
                  <span className="cta-eyebrow-line" />
                  Begin Your Transformation
                </div>
                <h2 className="cta-heading">
                  Ready to Design<br className="hidden md:block" /> Your Custom Drip?
                </h2>
                <p className="cta-sub">
                  Our clinicians are ready to assist you in formulating a nutrient therapy protocol that perfectly matches your vitality goals.
                </p>
              </div>

              <div className="cta-buttons">
                <Button href="/booking" variant="primary" className="cta-btn-primary">
                  Book Consultation
                </Button>
                <Button href="/contact" variant="outline" className="cta-btn-outline">
                  Enquire via Email
                </Button>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}