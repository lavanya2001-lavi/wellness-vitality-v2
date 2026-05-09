import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import IvInfusionImage from '../../../../public/images/services/iv-infusion.png';

const therapies = [
  { name: 'Immune Defence IV', price: '$260', desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { name: 'Energy & Performance IV', price: '$240', desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { name: 'Beauty & Skin Glow IV', price: '$320', desc: 'Glutathione, biotin, and collagen-boosting nutrients.' },
  { name: 'Detox & Liver Support IV', price: '$300', desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { name: 'Hydration & Recovery IV', price: '$220', desc: 'Electrolytes and minerals for rapid rehydration.' },
  { name: 'Athlete Recovery IV', price: '$260', desc: 'Targeted nutrients to accelerate muscle recovery.' },
];

const nutrients = [
  { name: 'Vitamin C', desc: 'Supports immune function and antioxidant protection.', accent: 'navy' },
  { name: 'Vitamin D3', desc: 'Essential for bone health and immune regulation.', accent: 'rose' },
  { name: 'Biotin', desc: 'Promotes healthy hair, skin, and metabolic function.', accent: 'navy' },
  { name: 'B Complex', desc: 'Fuels energy production and nervous system support.', accent: 'rose' },
  { name: 'Methylcobalamin', desc: 'Active form of B12 for energy and neurological health.', accent: 'navy' },
  { name: 'Magnesium Sulphate', desc: 'Relaxes muscles, supports sleep and nerve function.', accent: 'rose' },
  { name: 'Zinc', desc: 'Crucial for immune system, wound healing and DNA synthesis.', accent: 'navy' },
  { name: 'Selenium', desc: 'Powerful antioxidant supporting thyroid and metabolic function.', accent: 'rose' },
  { name: 'Taurine', desc: 'Supports cardiovascular health and cellular hydration.', accent: 'navy' },
  { name: 'Arginine', desc: 'Boosts nitric oxide for circulation and recovery.', accent: 'rose' },
  { name: 'Glutamine', desc: 'Gut lining repair and immune system fuel source.', accent: 'navy' },
  { name: 'Lysine', desc: 'Collagen synthesis and immune support.', accent: 'rose' },
  { name: 'Ornithine', desc: 'Supports detoxification and growth hormone release.', accent: 'navy' },
  { name: 'Glutathione', desc: 'Master antioxidant for liver detox and skin brightening.', accent: 'rose' },
  { name: 'Coenzyme Q10', desc: 'Vital cellular energy coenzyme powering repair and metabolism.', accent: 'navy' },
  { name: 'Alpha Lipoic Acid', desc: 'Universal antioxidant supporting nerve health and glucose metabolism.', accent: 'rose' },
  { name: 'NAD+', desc: 'Critical coenzyme for cellular energy, anti-ageing, and DNA repair.', accent: 'navy' },
];

const midPoint = Math.ceil(nutrients.length / 2);
const row1 = nutrients.slice(0, midPoint);
const row2 = nutrients.slice(midPoint);

const benefits = [
  'Direct nutrient delivery into the bloodstream',
  'Higher absorption than oral supplementation',
  'Supports cellular energy production',
];

const steps = [
  { title: 'Consultation', desc: 'Initial clinical assessment with our registered nurse to determine suitability and goals.' },
  { title: 'Preparation', desc: 'Custom formulation of your nutrient therapy based on your individual requirements.' },
  { title: 'Administration', desc: 'Professional administration by a qualified nurse in a relaxed environment.' },
  { title: 'Recovery', desc: 'Relax as nutrients are delivered directly into your bloodstream.' },
];

const suitability = [
  { group: 'Active Professionals', reason: 'To support energy levels and cognitive function during high-demand periods.' },
  { group: 'Athletes & Fitness Enthusiasts', reason: 'For rapid rehydration and muscle recovery post-exertion.' },
  { group: 'Frequent Travellers', reason: 'To combat jet lag, support the immune system and restore hydration.' },
  { group: 'Overall Wellness Seekers', reason: 'Maintaining optimal nutrient levels for vitality and long-term health.' },
];

// Nutrient SVG icons — clean, clinical
const NutrientIcon = ({ accent }) => (
  <div style={{
    width: 44, height: 44, borderRadius: 13, flexShrink: 0,
    background: accent === 'rose' ? 'rgba(202,18,84,0.1)' : 'rgba(59,63,105,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke={accent === 'rose' ? '#ca1254' : '#3b3f69'}
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  </div>
);

export default function IVInfusionsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .iv-page * { box-sizing: border-box; }

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
          margin: 0 0 20px;
        }
        .page-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e8e9f0 30%, #e8e9f0 70%, transparent);
        }

        /* ── About ── */
        .about-section {
          padding: 48px 0;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .about-section { padding: 96px 0; }
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
          position: absolute; inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
          pointer-events: none;
        }
        .stat-pill {
          position: absolute;
          bottom: 16px; left: 12px;
          background: #fff;
          border-radius: 14px;
          padding: 10px 14px;
          box-shadow: 0 8px 32px rgba(59,63,105,0.15);
          display: flex; align-items: center; gap: 10px;
          z-index: 10;
        }
        @media (min-width: 768px) {
          .stat-pill {
            bottom: 28px; left: -20px;
            padding: 14px 20px;
            gap: 12px;
          }
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; font-weight: 600; color: #ca1254; line-height: 1;
        }
        .stat-label {
          font-size: 11px; color: #3b3f69; font-weight: 600;
          line-height: 1.4; max-width: 80px;
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

        /* ── Marquee / Nutrients ── */
        .nutrients-section {
          padding: 64px 0 96px 0;
          background: #fff;
          overflow: hidden;
          position: relative;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 100s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 100s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        .nutrient-card {
          flex-shrink: 0;
          width: 300px;
          background: #fff;
          border-radius: 18px;
          border: 1.5px solid #f0f0f5;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .nutrient-card:hover {
          box-shadow: 0 8px 28px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.2);
        }

        /* ── Treatments ── */
        .treatments-section {
          padding: 96px 0 48px 0;
          background: linear-gradient(160deg, #f9f5f7 0%, #f5f6fa 100%);
          position: relative;
          overflow: hidden;
        }
        .treatments-section::before {
          content: 'IV';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 400px; font-weight: 700;
          color: rgba(59,63,105,0.03);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
        }
        .treatment-card {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1.5px solid #f0f0f5;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .treatment-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .treatment-card:hover {
          box-shadow: 0 20px 56px rgba(59,63,105,0.1);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .treatment-card:hover::before { opacity: 1; }

        /* ── Steps ── */
        .steps-section {
          padding: 64px 0 96px 0;
          background: #fff;
          position: relative;
        }
        .step-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 30px;
          border: 1.5px solid #f0f0f5;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
        }
        .step-card:hover {
          box-shadow: 0 20px 48px rgba(59,63,105,0.12);
          border-color: rgba(202,18,84,0.15);
          transform: translateY(-4px);
        }
        .step-bg-num {
          position: absolute; bottom: -10px; right: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px; font-weight: 700; line-height: 1;
          color: #ca1254; opacity: 0.05;
          pointer-events: none; user-select: none;
        }
        .step-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 10px;
          background: linear-gradient(135deg, #ca1254, #e84d8a);
          color: #fff; font-size: 12px; font-weight: 700;
          margin-bottom: 20px;
        }

        /* ── Benefits Atmospheric Redesign ── */
        .benefits-section {
          padding: 64px 0;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2f8 100%);
          position: relative; overflow: hidden;
        }
        @media (min-width: 768px) {
          .benefits-section { padding: 120px 0; }
        }
        .benefits-section::before {
          content: '';
          position: absolute; top: -100px; right: -5%;
          width: 50vw; height: 50vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,63,105,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .benefits-section::after {
          content: '';
          position: absolute; bottom: -100px; left: -5%;
          width: 40vw; height: 40vw; border-radius: 50%;
          background: radial-gradient(circle, rgba(202,18,84,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .benefit-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 0;
          border-bottom: 2px solid rgba(59,63,105,0.06);
        }
        .benefit-row:last-child { border-bottom: none; }
        .benefit-check {
          width: 24px; height: 24px; border-radius: 50%;
          background: #ca1254;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          margin-top: 2px;
          box-shadow: 0 4px 12px rgba(202,18,84,0.2);
        }
        .stat-block {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 24px 16px;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          box-shadow: 0 10px 30px -10px rgba(59, 63, 105, 0.08);
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .stat-block { padding: 40px 24px; border-radius: 24px; }
        }
        .stat-block:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px -12px rgba(59, 63, 105, 0.12);
          border-color: rgba(202, 18, 84, 0.25);
          background: rgba(255, 255, 255, 0.9);
        }
        .stat-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px;
          background: #fff;
          border: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          color: #3b3f69;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .stat-block:hover .stat-icon-wrap {
          background: #ca1254;
          color: #fff;
          border-color: #ca1254;
          transform: rotate(5deg);
        }

        /* ── Suitability ── */
        .suitability-section {
          padding: 96px 0;
          background: #fafafa;
          position: relative;
        }
        .suit-card {
          padding: 36px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f0f0f5;
          transition: all 0.3s;
          position: relative; overflow: hidden;
        }
        .suit-card::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #ca1254, #e84d8a);
          opacity: 0; transition: opacity 0.3s;
        }
        .suit-card:hover {
          box-shadow: 0 16px 48px rgba(59,63,105,0.1);
          border-color: rgba(202,18,84,0.18);
          transform: translateY(-2px);
        }
        .suit-card:hover::before { opacity: 1; }
      `}</style>

      <div className="iv-page">
        <ServiceHero
          badge="Nutrient Therapy"
          heading="IV Infusions"
          subtext="Targeted intravenous nutrient therapies for energy, immunity, and recovery."
          ctaLabel="Book IV Infusion"
          ctaHref="/booking"
          secondaryCtaLabel="Enquire Now"
          secondaryCtaHref="/contact"
          tertiaryCtaLabel="Custom IV Drips"
          tertiaryCtaHref="/custom-iv-drips"
        />

        {/* ── About / Image ── */}
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              {/* Image */}
              <div className="order-first md:order-none relative">
                <div className="about-image-wrap">
                  <Image
                    src={IvInfusionImage}
                    alt="IV Infusion Wellness"
                    width={800} height={1000}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Bioavailability guaranteed</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  About This Service
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}>
                  Restorative Nutrient Infusions from{' '}
                  <em style={{ color: '#ca1254', fontStyle: 'italic' }}>$220</em>
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.75', color: '#6b7280', fontWeight: 300, marginBottom: '32px', maxWidth: '440px' }}>
                  IV infusion therapy bypasses the digestive system entirely, delivering essential vitamins, minerals, and nutrients directly into the bloodstream for 100% bioavailability and faster results.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#3b3f69', lineHeight: 1, marginBottom: '6px' }}>100%</div>
                    <div style={{ fontSize: '10px', color: 'rgba(59,63,105,0.5)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>Absorption</div>
                  </div>
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#ca1254', lineHeight: 1, marginBottom: '6px' }}>Qualified</div>
                    <div style={{ fontSize: '10px', color: 'rgba(202,18,84,0.5)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>Registered Nurses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nutrients Marquee ── */}
        <section className="nutrients-section">
          <div className="page-container" style={{ marginBottom: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="eyebrow" style={{ color: '#3b3f69', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
                Clinical Formulations
                <span className="eyebrow-line" style={{ background: '#3b3f69', opacity: 0.3 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: '0 0 12px' }}>
                Nutrients Used in Infusions
              </h2>
              <p style={{ fontSize: '15px', color: '#9ca3af', fontWeight: 300, maxWidth: '520px', margin: '0 auto' }}>
                Pharmaceutical-grade vitamins, minerals, and amino acids in every formulation.
              </p>
            </div>
          </div>

          {/* Marquee rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, white 8%, white 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, white 8%, white 92%, transparent)' }}>
            {/* Row 1 — left */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="marquee-left" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
                {[...row1, ...row1, ...row1, ...row1].map((n, idx) => (
                  <div key={`r1-${idx}`} className="nutrient-card">
                    <NutrientIcon accent={n.accent} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#3b3f69', marginBottom: '4px' }}>{n.name}</div>
                      <div style={{ fontSize: '12.5px', color: '#9ca3af', fontWeight: 300, lineHeight: '1.55' }}>{n.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2 — right */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="marquee-right" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
                {[...row2, ...row2, ...row2, ...row2].map((n, idx) => (
                  <div key={`r2-${idx}`} className="nutrient-card">
                    <NutrientIcon accent={n.accent} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#3b3f69', marginBottom: '4px' }}>{n.name}</div>
                      <div style={{ fontSize: '12.5px', color: '#9ca3af', fontWeight: 300, lineHeight: '1.55' }}>{n.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Badge */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '999px', background: '#fff', border: '1.5px solid #f0f0f5', fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#3b3f69', boxShadow: '0 2px 12px rgba(59,63,105,0.07)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Highest Clinical Standards
            </div>
          </div>
        </section>

        {/* ── Treatments & Pricing ── */}
        <section className="treatments-section">
          <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                Therapies & Pricing
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                IV Infusion Therapies
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {therapies.map((t) => (
                <div key={t.name} className="treatment-card">
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', lineHeight: '1.35' }}>{t.name}</h3>
                    <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0 }}>{t.desc}</p>
                  </div>
                  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(59,63,105,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Pricing</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#ca1254', background: 'rgba(202,18,84,0.07)', padding: '6px 14px', borderRadius: '999px' }}>{t.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Custom Drips CTA ── */}
        <section className="py-12 md:py-16 bg-[#ca1254] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="eyebrow" style={{ color: '#fff', justifyContent: 'center' }}>
              <span className="eyebrow-line" style={{ background: '#fff', opacity: 0.4 }} />
              Personalised Therapy
              <span className="eyebrow-line" style={{ background: '#fff', opacity: 0.4 }} />
            </div>
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', marginBottom: '16px' }}>
              Looking for Custom IV Drips?
            </h2>
            <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', fontWeight: 300, marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px' }}>
              Explore personalised IV formulations and flexible pricing options tailored to your needs.
            </p>
            <a
              href="/custom-iv-drips"
              className="
                inline-block 
                px-10 py-4 
                rounded-xl 
                bg-white text-[#ca1254] 
                font-bold text-sm 
                shadow-lg shadow-black/10
                hover:shadow-xl hover:-translate-y-0.5 
                transition-all duration-300
                w-full sm:w-auto
                min-w-[240px]
              "
            >
              View Custom IV Drips
            </a>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="steps-section">
          <div className="page-container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ color: '#ca1254', justifyContent: 'center' }}>
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                The Process
                <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', margin: 0 }}>
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={step.title} className="step-card">
                  <div className="step-bg-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-badge">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#3b3f69', marginBottom: '10px', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#6b7280', fontWeight: 300, lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clinical Benefits ── */}
        <section className="benefits-section">
          <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Benefits */}
              <div>
                <div className="eyebrow" style={{ color: '#ca1254' }}>
                  <span className="eyebrow-line" style={{ background: '#ca1254', opacity: 0.4 }} />
                  Clinical Advantages
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', color: '#3b3f69', marginBottom: '36px' }}>
                  How IV Therapy <br /><em style={{ color: '#ca1254', fontStyle: 'italic' }}>Supports Your Wellness</em>
                </h2>
                <div className="flex flex-col">
                  {[
                    { t: 'Direct Bioavailability', d: 'Nutrients bypass the digestive system for immediate 100% absorption.' },
                    { t: 'Rapid Rehydration', d: 'Instantly restores fluid balance and essential electrolytes at a cellular level.' },
                    { t: 'Cellular Energy', d: 'Coenzymes and vitamins fuel ATP production for sustained natural energy.' }
                  ].map((b) => (
                    <div key={b.t} className="benefit-row">
                      <div className="benefit-check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: '#3b3f69', marginBottom: '6px' }}>{b.t}</div>
                        <div style={{ fontSize: '14.5px', color: '#64748b', fontWeight: 300, lineHeight: '1.6' }}>{b.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    val: '60m', 
                    label: 'Typical Session',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  },
                  { 
                    val: '100%', 
                    label: 'Absorption Rate',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10A8 8 0 004 12c0 6 8 10 8 10z"/></svg>
                  },
                  { 
                    val: 'Registered', 
                    label: 'Nursing Staff',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
                  },
                  { 
                    val: '17+', 
                    label: 'Key Nutrients',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  },
                ].map((s) => (
                  <div key={s.label} className="stat-block">
                    <div className="stat-icon-wrap">
                      {s.icon}
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 600, color: '#3b3f69', lineHeight: 1, marginBottom: '8px', wordBreak: 'break-word' }}>{s.val}</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(59,63,105,0.45)', textTransform: 'uppercase', letterSpacing: '0.18em', lineHeight: '1.4' }}>{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Suitability — Feature Cards ── */}
        <FeatureCards
          heading="Is IV Therapy for You?"
          cards={suitability.map((item) => ({
            title: item.group,
            description: item.reason,
            icon: (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ),
          }))}
          cols={4}
        />

        <section className="py-14 sm:py-16 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

            <div className="bg-[#3b3f69] rounded-xl sm:rounded-2xl px-6 sm:px-10 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                  Ready to Book Your IV Infusion?
                </h2>

                <p className="text-sm sm:text-base text-white/80 max-w-xl">
                  Book your IV infusion through our secure booking system.
                </p>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                {/* Primary */}
                <a
                  href="/booking"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-md
            bg-[#ca1254]
            text-white
            font-semibold
            text-sm
            text-center
            hover:opacity-90
            transition
          "
                >
                  Book IV Infusion
                </a>

                {/* Secondary */}
                <a
                  href="/contact"
                  className="
            w-full sm:w-auto
            px-6 py-3
            rounded-md
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