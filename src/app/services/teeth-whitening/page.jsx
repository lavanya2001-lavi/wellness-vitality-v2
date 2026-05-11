import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import TeethWhiteningImage from '../../../../public/hometeethwhite.png';

const benefits = [
  { title: 'Ultrasound Technology', icon: '🔊', desc: 'Vibrates stain molecules and improves gel penetration for deeper results.' },
  { title: 'Dual-Client Treatment', icon: '👥', desc: 'Simultaneous treatment capability for couples or group bookings.' },
  { title: 'Up to 5 to 14 Shades Lighter', icon: '💎', desc: 'High-end acceleration technology for significantly brighter results.' },
  { title: 'Reduced Sensitivity', icon: '🛡️', desc: 'Advanced LED & Ultrasonic combination designed to minimize discomfort.' },
];

const steps = [
  { title: 'Consultation', desc: 'Our clinical team assesses your teeth and discusses your whitening goals.' },
  { title: 'Preparation', desc: 'Gingival protection is applied to ensure a safe and comfortable experience.' },
  { title: 'Whitening', desc: 'Professional-grade whitening gel is applied and activated using LED technology.' },
  { title: 'The Reveal', desc: 'Experience an immediate, noticeably brighter smile in just one session.' },
];

const suitability = [
  { title: 'Special Occasions', desc: 'Perfect for weddings, anniversaries, or professional photoshoots.' },
  { title: 'Coffee & Tea Drinkers', desc: 'Effective removal of extrinsic stains from daily habits.' },
  { title: 'Confidence Boost', desc: 'For anyone looking to enhance their smile and overall self-esteem.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TeethWhiteningPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .tw-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
        .tw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .tw-eyebrow-line {
          display: block;
          width: 24px;
          height: 1.5px;
        }

        /* ── Section titles ── */
        .tw-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .tw-about-section {
          padding: 64px 0;
          background: #fff;
          position: relative;
        }

        .tw-about-image-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(59,63,105,0.14), 0 4px 16px rgba(59,63,105,0.08);
        }
        .tw-about-image-wrap img {
          transition: transform 0.7s ease-in-out !important;
        }
        .tw-about-image-wrap:hover img {
          transform: scale(1.05);
        }
        .tw-stat-pill {
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
        .tw-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .tw-stat-label {
          font-size: 11px;
          color: #3b3f69;
          font-weight: 600;
          line-height: 1.4;
          max-width: 80px;
        }
        .tw-benefit-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(202,18,84,0.12);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: #3b3f69;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .tw-benefit-tag:hover {
          border-color: rgba(202,18,84,0.35);
          box-shadow: 0 4px 16px rgba(202,18,84,0.1);
        }

        /* ── Stats Banner ── */
        .tw-stats-section {
          padding: 64px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .tw-stats-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(202,18,84,0.02) 0%, transparent 70%);
          pointer-events: none;
        }
        .tw-stat-card {
          padding: 48px 32px;
          background: #fff;
          border-radius: 32px;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(59,63,105,0.04);
        }
        .tw-stat-card:hover {
          border-color: #ca1254;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(202,18,84,0.08);
        }
        .tw-stat-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: rgba(202, 18, 84, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #ca1254;
          transition: all 0.3s ease;
        }
        .tw-stat-card:hover .tw-stat-icon-wrap {
          transform: scale(1.1) rotate(5deg);
          background: #ca1254;
          color: #fff;
        }
        .tw-stat-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
          margin-bottom: 10px;
        }
        .tw-stat-desc {
          font-size: 11px;
          color: #3b3f69;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
        }

        /* ── Steps Section ── */
        .tw-steps-section {
          padding: 64px 0;
          background: #f5f6fa;
          position: relative;
          overflow: hidden;
        }
        .tw-steps-section::before {
          content: 'WHITENING';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 160px;
          font-weight: 700;
          color: rgba(202,18,84,0.04);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .tw-step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .tw-step-card:hover {
          box-shadow: 0 20px 48px rgba(202,18,84,0.14);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-4px);
        }
        .tw-step-num-bg {
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 96px;
          font-weight: 700;
          line-height: 1;
          color: #ca1254;
          opacity: 0.06;
          pointer-events: none;
          user-select: none;
        }
        .tw-step-badge {
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
        .tw-step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Suitability cards ── */
        .tw-suit-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .tw-suit-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(202,18,84,0.2) 30%, rgba(202,18,84,0.2) 70%, transparent);
        }
        .tw-suit-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid rgba(202,18,84,0.1);
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tw-suit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tw-suit-card:hover {
          box-shadow: 0 16px 48px rgba(202,18,84,0.12);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .tw-suit-card:hover::before {
          opacity: 1;
        }
        .tw-suit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .tw-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .tw-stat-pill { left: 12px; bottom: 16px; }
          .tw-steps-section::before { font-size: 60px; }
          .tw-stat-big { font-size: 52px; }
        }
      `}</style>

      <div className="tw-page">
        <ServiceHero
          badge="Aesthetic Care"
          heading="Professional Teeth Whitening"
          subtext="Safe and effective clinical teeth whitening for a brighter, more confident smile."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Book Now"
          secondaryCtaHref="/booking"
        />

        {/* ── About / Image Section ── */}
        <section className="tw-about-section">
          <div className="tw-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

              {/* Image */}
              <div style={{ position: 'relative' }}>
                <div className="tw-about-image-wrap">
                  <Image
                    src={TeethWhiteningImage}
                    alt="Professional Teeth Whitening Results"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="tw-stat-pill">
                  <div className="tw-stat-num">8+</div>
                  <div className="tw-stat-label">Shades whiter in one visit</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="tw-eyebrow" style={{ color: '#ca1254' }}>
                  <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Premium Aesthetic
                  <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="tw-section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Clinical Grade Whitening from{' '}
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>$250</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  Wellness Vitality Australia utilizes a professional-grade cosmetic teeth whitening accelerator, considered one of the highest-end portable systems on the market. Featuring advanced Ultrasonic technology and dual LED heads, our system optimizes gel penetration while reducing chair time.
                </p>
                <div style={{ padding: '20px', background: '#fef2f2', borderRadius: '16px', border: '1px solid #fee2e2', marginBottom: '32px' }}>
                  <p style={{ fontSize: '13px', color: '#b91c1c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Safety Precaution
                  </p>
                  <p style={{ fontSize: '12px', color: '#7f1d1d', lineHeight: '1.5' }}>
                    Our system's ultrasound feature is highly effective, however, we disable this specific mode for patients with cardiac pacemakers as a standard clinical safety protocol.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((b) => (
                    <div key={b.title} className="tw-benefit-tag">
                      <CheckIcon />
                      <span>{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Banner ── */}
        <section className="tw-stats-section">
          <div className="tw-stats-mesh" />
          <div className="tw-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="tw-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
                The Whitening Difference
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.5 }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 42px)', color: '#3b3f69', margin: 0 }}>
                Real Results, <em style={{ color: '#ca1254', fontStyle: 'italic' }}>Instantly</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { 
                  num: '5-14', 
                  label: 'Shades Lighter',
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                },
                { 
                  num: 'Ultrasonic', 
                  label: 'Technology',
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                },
                { 
                  num: 'Dual', 
                  label: 'Treatment Heads',
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                },
              ].map((s) => (
                <div key={s.label} className="tw-stat-card">
                  <div className="tw-stat-icon-wrap">
                    {s.icon}
                  </div>
                  <div className="tw-stat-big">{s.num}</div>
                  <div className="tw-stat-desc">{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                *Actual results vary based on gel concentration, enamel condition, existing stains, and lifestyle factors.
              </p>
            </div>
          </div>
        </section>

        {/* ── Steps Section ── */}
        <section className="tw-steps-section">
          <div className="tw-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="tw-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                The Whitening Experience
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((step, i) => (
                <div key={step.title} style={{ position: 'relative' }}>
                  <div className="tw-step-card">
                    <div className="tw-step-num-bg">{i + 1}</div>
                    <div className="tw-step-badge">{String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <div className="tw-step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Suitability — Feature Cards ── */}
        <FeatureCards
          heading="The Perfect Smile for You"
          cards={suitability.map((item, i) => ({
            title: item.title,
            description: item.desc,
            icon: [
              <svg key="0" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m13.16 13.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7m13.16-13.16.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>,
              <svg key="1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /></svg>,
              <svg key="2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
            ][i],
          }))}
          cols={3}
        />

        {/* ── Pricing Section ── */}
        <section className="py-12 bg-white border-t border-gray-50">
          <div className="tw-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="tw-eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Investment
                <span className="tw-eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Whitening Packages
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Single Session', price: '$250', features: ['60-minute session', 'Standard whitening', 'Post-care guide'] },
                { title: 'Triple Session', price: '$259', features: ['3x intensive rounds', 'Deep stain removal', 'Maximum results'], popular: true },
                { title: 'Couples Session', price: '$499', features: ['Simultaneous treatment', 'Two people, one visit', 'Perfect for pairs'] },
              ].map((plan) => (
                <div key={plan.title} style={{
                  padding: '40px 32px',
                  borderRadius: '24px',
                  background: plan.popular ? '#3b3f69' : '#fff',
                  border: '1.5px solid #f0f0f5',
                  textAlign: 'center',
                  boxShadow: plan.popular ? '0 20px 40px rgba(59,63,105,0.15)' : 'none',
                  position: 'relative'
                }}>
                  {plan.popular && (
                    <div style={{
                      position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                      background: '#ca1254', color: '#fff', fontSize: '10px', fontWeight: 800,
                      padding: '6px 16px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>Most Popular</div>
                  )}
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: plan.popular ? '#fff' : '#3b3f69', marginBottom: '16px' }}>{plan.title}</h3>
                  <div style={{ fontSize: '48px', fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", color: plan.popular ? '#fff' : '#ca1254', marginBottom: '24px' }}>{plan.price}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', textAlign: 'left' }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ fontSize: '14px', color: plan.popular ? 'rgba(255,255,255,0.7)' : '#6b7280', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/booking" style={{
                    display: 'block', padding: '14px', borderRadius: '10px',
                    background: plan.popular ? '#ca1254' : 'rgba(59,63,105,0.05)',
                    color: plan.popular ? '#fff' : '#3b3f69', fontWeight: 700, fontSize: '14px',
                    textDecoration: 'none', transition: 'all 0.2s'
                  }}>Book This Plan</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section style={{ padding: '48px 0', background: '#fff' }}>
          <div className="tw-container">
            <div className="
              rounded-[28px]
              bg-[#f5f6fa]
              border border-[#eaebf0]
              p-8 md:p-14
              flex flex-col lg:flex-row
              items-center lg:items-center
              justify-between
              gap-8
              relative
              overflow-hidden
            ">
              {/* decorative circle removed */}
              <div className="relative z-10 text-center lg:text-left">
                <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(59,63,105,0.5)', marginBottom: '8px', fontWeight: 700 }}>
                  Get Started
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: '#3b3f69', marginBottom: '10px', lineHeight: 1.2 }}>
                  Ready to Enhance Your Smile?
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ca1254', background: 'rgba(202,18,84,0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                    Single – $250
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ca1254', background: 'rgba(202,18,84,0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                    Triple – $259
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ca1254', background: 'rgba(202,18,84,0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                    Couples – $499
                  </span>
                </div>
                <p style={{ fontSize: '15px', color: 'rgba(59,63,105,0.65)', fontWeight: 300 }}>
                  Book online or contact us to begin your whitening journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 relative z-10 w-full sm:w-auto">
                <a href="/booking" className="
                  px-8 py-4 rounded-xl
                  bg-gradient-to-br from-[#ca1254] to-[#e84d8a]
                  text-white font-semibold text-sm
                  text-center
                  shadow-lg shadow-[#ca1254]/30
                  hover:opacity-90 transition
                ">
                  Book Now
                </a>
                <a href="/contact" className="
                  px-8 py-4 rounded-xl
                  bg-white text-[#3b3f69]
                  font-semibold text-sm
                  text-center
                  border border-[#3b3f69]/15
                  hover:opacity-90 transition
                ">
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