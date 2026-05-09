import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import AgedCareImage from '../../../../public/images/services/aged-care.png';

const services = [
  'Medication administration',
  'Wound care and dressings',
  'Catheter care',
  'Continence assessments',
  'Pressure injury risk management',
  'Chronic disease monitoring',
  'Post-hospital care',
];

const benefits = [
  { title: 'Professional Clinical Support', desc: 'Registered nurses providing expert nursing care.' },
  { title: 'Improved Quality of Care', desc: 'Evidence-based care tailored to individual health needs.' },
  { title: 'Reduced Hospital Visits', desc: 'Proactive management to minimise unnecessary hospitalisations.' },
  { title: 'Ongoing Health Management', desc: 'Consistent monitoring and support for long-term health.' },
];

const steps = [
  { title: 'Initial Inquiry', desc: 'Contact us to discuss your specific nursing requirements.' },
  { title: 'Clinical Assessment', desc: 'Our head nurse will conduct a thorough assessment of care needs.' },
  { title: 'Care Planning', desc: 'Development of a tailored clinical care plan in coordination with your health team.' },
  { title: 'Dedicated Care', desc: 'Consistent, professional nursing support delivered at your location.' },
];

const careBenefits = [
  { title: 'Dignified Care', desc: 'Focusing on independence and dignity in every clinical interaction.' },
  { title: 'Collaborative Approach', desc: 'Working closely with GPs and specialists to ensure care continuity.' },
  { title: 'Community Focused', desc: 'Building trusted relationships with residents and families.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AgedCareNDISPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ac-page * { box-sizing: border-box; }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }
        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── About ── */
        .about-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .about-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
          pointer-events: none;
        }
        .stat-pill {
          position: absolute;
          bottom: 28px;
          left: -20px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }
        .stat-card {
          padding: 20px 24px;
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid #f0f0f5;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          border-color: rgba(202,18,84,0.2);
          box-shadow: 0 4px 20px rgba(202,18,84,0.07);
        }

        /* ── Services & Benefits ── */
        .sb-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .sb-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .service-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: #fff;
          border: 1.5px solid #f0f0f5;
          font-size: 14px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .service-row:hover {
          border-color: rgba(202,18,84,0.25);
          background: #fdf0f5;
          transform: translateX(4px);
        }
        .service-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(59,63,105,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .service-row:hover .service-icon-wrap {
          background: rgba(202,18,84,0.12);
        }
        .benefit-card {
          padding: 24px;
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #f0f0f5;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .benefit-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .benefit-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Process ── */
        .process-section {
          padding: 96px 0;
          background: #3b3f69;
          position: relative;
          overflow: hidden;
        }
        .process-section::before {
          content: 'CARE';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 260px;
          font-weight: 700;
          color: rgba(255,255,255,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.15em;
        }
        .process-section::after {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .step-card {
          padding: 36px 30px;
          background: rgba(255,255,255,0.05);
          border-radius: 24px;
          border: 1.5px solid rgba(255,255,255,0.08);
          position: relative;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .step-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(202,18,84,0.4);
          transform: translateY(-4px);
        }
        .step-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .step-card:hover::before { opacity: 1; }
        .step-bg-num {
          position: absolute;
          bottom: -12px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px;
          font-weight: 700;
          line-height: 1;
          color: rgba(255,255,255,0.04);
          pointer-events: none;
          user-select: none;
        }
        .step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        /* ── Care Benefits ── */
        .care-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
        }
        .care-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e0e1ec 30%, #e0e1ec 70%, transparent);
        }
        .care-card {
          padding: 40px 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .care-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .care-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .care-card:hover::before { opacity: 1; }
        .care-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="ac-page">
        <ServiceHero
          badge="Aged Care & NDIS"
          heading="Aged Care & NDIS Nursing Services"
          subtext="Professional nursing care tailored to support ongoing healthcare needs."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Book Now"
          secondaryCtaHref="/booking"
        />

        {/* ── About / Image ── */}
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              {/* Image */}
              <div className="order-first md:order-none relative">
                <div className="about-image-wrap">
                  <Image
                    src={AgedCareImage}
                    alt="Compassionate Nursing Care"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Registered nurses</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Trusted Care
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Dignified Clinical Nursing from{' '}
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>$160</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '8px', maxWidth: '440px' }}>
                  Reliable and compassionate nursing services for aged care residents and NDIS participants, supporting daily healthcare needs with a focus on dignity and quality of life.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                  <div className="stat-card">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#3b3f69] leading-none mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>24/7</div>
                    <div className="text-[10px] text-[#3b3f69]/50 uppercase tracking-widest font-semibold">Support Potential</div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#ca1254] leading-none mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Qualified</div>
                    <div className="text-[10px] text-[#ca1254]/50 uppercase tracking-widest font-semibold">Registered Nurses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services & Benefits ── */}
        <section className="sb-section">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Services */}
              <div>
                <div className="eyebrow" style={{ color: '#3b3f69' }}>
                  <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
                  Services Included
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 38px)' }}>
                  Clinical Nursing Services
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {services.map((s) => (
                    <div key={s} className="service-row">
                      <div className="service-icon-wrap">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Why Choose Us
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 38px)' }}>
                  The Benefits of Our Care
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                  {benefits.map((b) => (
                    <div key={b.title} className="benefit-card">
                      <div className="benefit-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#3b3f69', marginBottom: '5px' }}>{b.title}</div>
                        <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65' }}>{b.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Process Section ── */}
        <section className="process-section">
          <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
                The Process
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', color: '#fff', margin: 0 }}>
                Our Care Process
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="step-card">
                  <div className="step-bg-num">{i + 1}</div>
                  <div className="step-badge">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Care Benefits — Feature Cards ── */}
        <FeatureCards
          heading="Dedicated to Clinical Excellence"
          cards={careBenefits.map((item, i) => ({
            title: item.title,
            description: item.desc,
            icon: [
              <svg key="0" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
              <svg key="1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" /></svg>,
              <svg key="2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" /></svg>,
            ][i],
          }))}
          cols={3}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

            <div className="bg-[#f4f5fa] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#ca1254] mb-2">
                  Get Support
                </p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                  Personalised Nursing Support
                </h2>

                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $160
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Contact us for personalised nursing support or book a consultation online.
                </p>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                {/* Book Now */}
                <a
                  href="/booking"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-lg
            bg-[#3b3f69]
            text-white
            font-semibold
            text-sm
            text-center
            hover:opacity-90
            transition
          "
                >
                  Book Now
                </a>

                {/* Enquire */}
                <a
                  href="/contact"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-lg
            bg-[#ca1254]
            text-white
            font-semibold
            text-sm
            text-center
            hover:opacity-90
            transition
          "
                >
                  Enquire Now
                </a>

              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}