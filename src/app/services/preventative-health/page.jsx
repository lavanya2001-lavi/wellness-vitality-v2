import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import PreventativeHealthImage from '../../../../public/assessment.png';

const vitaminServices = [
  'B12 injections',
  'Vitamin D injections',
  'Amino acid injections',
  'Vitality & energy injections',
];

const lifestyleServices = [
  'Nutrition guidance',
  'Supplement advice',
  'Lifestyle consultations',
  'Health optimisation programmes',
];

const benefits = [
  'Improved energy levels',
  'Supports immune function',
  'Promotes long-term wellbeing',
  'Personalised health support',
];

const steps = [
  { title: 'Initial Consultation', desc: 'Discuss your health goals and lifestyle to identify key areas for improvement.' },
  { title: 'Nutrient Review', desc: 'Clinical assessment of your vitamin and nutrient requirements.' },
  { title: 'Personalised Plan', desc: 'Creation of a tailored vitamin therapy and lifestyle programme.' },
  { title: 'Ongoing Support', desc: 'Regular check-ins and adjustments to keep you on your wellness path.' },
];

const wellnessFocus = [
  { title: 'Nutrient Optimisation', desc: 'Targeting specific deficiencies to enhance your daily vitality.' },
  { title: 'Integrated Wellness', desc: 'A proactive approach to health that reduces long-term risks.' },
  { title: 'Personalised Wellness', desc: 'Evidence-based advice tailored to your unique lifestyle goals.' },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PreventativeHealthPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .ph-page * { box-sizing: border-box; }

        /* ── Eyebrow ── */
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

        /* ── Section titles ── */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.12;
          color: #3b3f69;
          margin: 0 0 20px;
        }

        /* ── About section ── */
        .about-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -80px;
          width: 500px;
          height: 500px;
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
        .about-stat-pill {
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
        .about-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #ca1254;
          line-height: 1;
        }
        .about-stat-label {
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

        /* ── Services ── */
        .services-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .service-card {
          background: #fff;
          border: 1.5px solid #f0f0f5;
          border-radius: 24px;
          padding: 40px;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .service-card:hover {
          box-shadow: 0 20px 56px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.2);
          transform: translateY(-3px);
        }
        .service-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .service-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          font-size: 14px;
          color: #555;
          font-weight: 400;
          border-bottom: 1px solid #f5f5f7;
        }
        .service-list-item:last-child { border-bottom: none; }
        .service-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Steps ── */
        .steps-section {
          padding: 96px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .steps-section::before {
          content: 'WELLNESS';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 200px;
          font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid transparent;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-num-bg {
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
        .step-connector {
          position: absolute;
          top: 32px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ca1254, transparent);
          opacity: 0.25;
          z-index: 1;
        }

        /* ── Focus cards ── */
        .focus-section {
          padding: 96px 0;
          background: #fff;
          position: relative;
        }
        .focus-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }
        .focus-card {
          padding: 40px 36px;
          border-radius: 24px;
          background: #fff;
          border: 1.5px solid #f0f0f5;
          text-align: left;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .focus-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .focus-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-3px);
        }
        .focus-card:hover::before {
          opacity: 1;
        }
        .focus-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(202,18,84,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 640px) {
          .about-stat-pill { left: 12px; bottom: 16px; }
          .steps-section::before { font-size: 80px; }
        }
      `}</style>

      <div className="ph-page">
        <ServiceHero
          badge="Health & Wellness Support"
          heading="Integrated Health & Wellness"
          subtext="Supporting long-term health through vitamin therapies and lifestyle guidance."
          ctaLabel="Enquire Now"
          ctaHref="/contact"
          secondaryCtaLabel="Book Now"
          secondaryCtaHref="/booking"
        />

        {/* ── About / Image Section ── */}
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              {/* Image */}
              <div className="relative">
                <div className="about-image-wrap">
                  <Image
                    src={PreventativeHealthImage}
                    alt="Wellness and Vitamin Support"
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                {/* Floating stat pill */}
                <div className="about-stat-pill">
                  <div className="about-stat-num">100%</div>
                  <div className="about-stat-label">Personalised care plans</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Our Philosophy
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Proactive Vitality Support from{' '}
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>$180</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  Our health & wellness services focus on improving overall wellbeing through targeted vitamin support and professional lifestyle guidance. A proactive approach that starts from within.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((b) => (
                    <div key={b} className="benefit-tag">
                      <CheckIcon />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="services-section">
          <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#3b3f69', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
                Services Included
                <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Wellness Support
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Vitamin Card */}
              <div className="service-card">
                <div className="service-card-icon" style={{ background: 'rgba(202,18,84,0.08)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#3b3f69', marginBottom: '6px' }}>
                  Vitamin & Nutrient Support
                </h3>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '20px', fontWeight: 400 }}>
                  Targeted injections to replenish what your body needs most.
                </p>
                <div>
                  {vitaminServices.map((s) => (
                    <div key={s} className="service-list-item">
                      <span className="service-dot" style={{ background: '#ca1254' }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Card */}
              <div className="service-card">
                <div className="service-card-icon" style={{ background: 'rgba(59,63,105,0.08)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#3b3f69', marginBottom: '6px' }}>
                  Lifestyle Support
                </h3>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '20px', fontWeight: 400 }}>
                  Holistic guidance to align your habits with your health goals.
                </p>
                <div>
                  {lifestyleServices.map((s) => (
                    <div key={s} className="service-list-item">
                      <span className="service-dot" style={{ background: '#3b3f69' }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Steps Section ── */}
        <section className="steps-section">
          <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                Your Path to Wellness
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((step, i) => (
                <div key={step.title} style={{ position: 'relative' }}>
                  <div className="step-card">
                    <div className="step-num-bg">{i + 1}</div>
                    <div className="step-badge">{String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wellness Focus — Feature Cards ── */}
        <FeatureCards
          heading="Our Approach to Health"
          cards={wellnessFocus.map((item, i) => ({
            title: item.title,
            description: item.desc,
            icon: [
              <svg key="0" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
              <svg key="1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
              <svg key="2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
            ][i],
          }))}
          cols={3}
        />

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
                  Get Started
                </p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                  Start Your Wellness Journey
                </h2>

                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $180
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Get in touch to start your wellness journey or book your initial consultation.
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