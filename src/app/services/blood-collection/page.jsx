import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import BloodCollectionImage from '../../../../public/images/services/blood-collection.png';

const steps = [
  { step: '01', title: 'Request Service', desc: 'Book online or call us with your pathology request details.' },
  { step: '02', title: 'Confirm Booking', desc: 'Secure a convenient time for our mobile nurse to visit.' },
  { step: '03', title: 'Home Visit', desc: 'Professional blood collection in the comfort of your home.' },
  { step: '04', title: 'Laboratory', desc: 'Samples are safely transported directly to the pathology lab.' },
];

const benefits = [
  'Blood pressure monitoring',
  'Heart rate & rhythm regularity',
  'Oxygen saturation levels',
  'Temperature & Respiratory rate',
];

const locations = [
  {
    title: 'Home Blood Collection',
    desc: 'Comfortable collection in your own residence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Workplace Testing',
    desc: 'Convenient services for employees on-site.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    title: 'Aged Care Services',
    desc: 'Dedicated collection for aged care residents.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'NDIS Support',
    desc: 'Accessible pathology for NDIS participants.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const advantages = [
  { title: 'Home Comfort', desc: 'Eliminate the stress of travel and waiting rooms by having our nurse visit you.' },
  { title: 'Mobility Support', desc: 'Ideal for those with limited mobility or recovering from surgery.' },
  { title: 'Workplace Efficiency', desc: 'Minimal disruption to your workday with on-site collection for employees.' },
  { title: 'Aged Care Specialisation', desc: 'Gentle and professional collection tailored for elderly patients.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BloodCollectionPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .bc-page * { box-sizing: border-box; }

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
          bottom: -100px; left: -80px;
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
          right: -20px;
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
        .benefit-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .benefit-tag:hover {
          border-color: rgba(202,18,84,0.3);
          box-shadow: 0 4px 16px rgba(202,18,84,0.07);
        }

        /* ── Locations ── */
        .locations-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .locations-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .location-card {
          padding: 36px 32px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .location-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .location-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .location-card:hover::before { opacity: 1; }
        .location-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(202,18,84,0.08);
          color: #ca1254;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.3s;
        }
        .location-card:hover .location-icon-wrap {
          background: #ca1254;
          color: #fff;
        }

        /* ── Steps / Process ── */
        .steps-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .steps-section::before {
          content: 'PATH';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 260px;
          font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.15em;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 30px;
          position: relative;
          border: 1.5px solid transparent;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-bg-num {
          position: absolute;
          bottom: -10px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px;
          font-weight: 700;
          line-height: 1;
          color: #ca1254;
          opacity: 0.05;
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
          letter-spacing: 0.03em;
        }

        /* ── Advantages ── */
        .advantages-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .advantages-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .advantage-card {
          padding: 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .advantage-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .advantage-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .advantage-card:hover::before { opacity: 1; }

        /* ── Inline CTA ── */
        .inline-cta {
          padding: 64px 0;
          background: #fff;
        }
        .cta-box {
          background: #3b3f69;
          border-radius: 28px;
          padding: 56px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-box::after {
          content: '';
          position: absolute;
          bottom: -60px; left: -60px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-btn-primary {
          display: inline-block;
          padding: 14px 32px;
          border-radius: 12px;
          background: #ca1254;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: opacity 0.2s, transform 0.2s;
        }
        .cta-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .cta-btn-secondary {
          display: inline-block;
          padding: 14px 32px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.2s;
        }
        .cta-btn-secondary:hover { background: rgba(255,255,255,0.18); transform: translateY(-1px); }
      `}</style>

      <div className="bc-page">
        <ServiceHero
          badge="Pathology Services"
          heading="Blood Collection Services"
          subtext="Professional blood collection services combined with a mini wellness assessment delivered to your location."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Book Now"
          secondaryCtaHref="/booking"
        />

        {/* ── About / Image ── */}
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

              {/* Text — left side this time */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Professional Pathology
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Clinical Pathology & <br />
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>Wellness Assessment</em> from $149
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '24px', maxWidth: '440px' }}>
                  Wellness Vitality Australia offers professional blood collection services combined with a mini wellness assessment for $149.
                </p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#3b3f69', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Included Observations:
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {benefits.map((b) => (
                    <div key={b} className="benefit-tag">
                      <CheckIcon />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#6b7280', fontWeight: 300, maxWidth: '440px' }}>
                  This service provides a convenient snapshot of your current health and wellbeing while ensuring a safe and professional clinical experience.
                </p>
              </div>

              {/* Image — right side */}
              <div className="order-first md:order-last relative">
                <div className="about-image-wrap">
                  <Image
                    src={BloodCollectionImage}
                    alt="Professional Blood Collection"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">Qualified</div>
                  <div className="stat-label">Registered nurses only</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Locations — Feature Cards ── */}
        <FeatureCards
          heading="Where We Collect"
          cards={locations.map((item) => ({
            title: item.title,
            description: item.desc,
            icon: <div className="w-10 h-10" style={{ color: '#ca1254' }}>{item.icon}</div>,
          }))}
          cols={4}
        />

        {/* ── Process Steps ── */}
        <section className="steps-section">
          <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Simple Four-Step Journey
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="step-card">
                  <div className="step-bg-num">{item.step}</div>
                  <div className="step-badge">{item.step}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advantages ── */}
        <section className="advantages-section">
          <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Mobile Advantages
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Why Choose Mobile Collection?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((item) => (
                <div key={item.title} className="advantage-card">
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: '#ca1254', flexShrink: 0 }} />
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.7', margin: 0, paddingLeft: '16px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

            <div className="
      rounded-2xl sm:rounded-3xl
      bg-[#f4f5fa]
      px-6 sm:px-10 lg:px-14
      py-8 sm:py-10
      flex flex-col lg:flex-row items-center justify-between gap-6
    ">

              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left max-w-xl">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#3b3f69]/60 mb-2">
                  Quick Booking
                </p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                  Book a Blood Collection Service
                </h2>

                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $149
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Book a convenient blood collection today or enquire with our team.
                </p>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">

                <a
                  href="/booking"
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
                  Book Now
                </a>

                <a
                  href="/contact"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-lg
            bg-white
            text-[#3b3f69]
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