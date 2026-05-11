import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceCTA from '@/components/sections/services/ServiceCTA';
import FeatureCards from '@/components/ui/FeatureCards';
import HealthAssessmentImage from '../../../../public/serviceswellnes.png';

const services = [
  'Comprehensive wellness checks',
  'Vital signs monitoring',
  'Cardiovascular risk screening',
  'Diabetes risk screening',
  'Weight and metabolic assessments',
];

const healthAssessmentServices = [
  "Comprehensive Wellness Checks",
  "Vital Signs Monitoring",
  "Cardiovascular Risk Screening",
  "Diabetes Risk Screening",
  "Weight & Metabolic Assessments",
  "Clinical History Review",
  "Physical Wellbeing Evaluation",
  "Personalised Care Recommendations",
];

const healthAssessmentBenefits = [
  { title: "Early Detection", desc: "Identify health risks before they become serious concerns" },
  { title: "Proactive Care", desc: "Identify and remediate health issues before they escalate" },
  { title: "Clinical Standards", desc: "Align with leading healthcare frameworks and TGA guidelines" },
  { title: "Expert Nursing", desc: "Dedicated registered nurses with you at every step of the process" },
];

function ServicesSection() {
  return (
    <section
      style={{
        padding: "80px 0 96px",
        background: "#fff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

      .services-wrap {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* ── HEADER ── */
      .services-header {
        text-align: center;
        margin-bottom: 56px;
      }
      .services-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: #ca1254;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .services-eyebrow::before,
      .services-eyebrow::after {
        content: '';
        display: block;
        width: 28px;
        height: 1.5px;
        background: #ca1254;
        opacity: 0.5;
      }
      .services-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(32px, 4vw, 48px);
        color: #3b3f69;
        line-height: 1.15;
        margin: 0;
        font-weight: 400;
      }
      .services-title span {
        color: #ca1254;
      }

      /* ── GRID ── */
      .services-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2px;
        background: #f0f0f5;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 56px;
        border: 1.5px solid #e6e7f0;
      }
      @media (max-width: 640px) {
        .services-grid { grid-template-columns: 1fr; }
      }

      .service-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 22px 24px;
        background: #fff;
        transition: background 0.18s;
        cursor: default;
      }
      .service-item:hover {
        background: #fdf0f5;
      }
      .service-num {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #ca1254;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
      }
      .service-text {
        font-size: 14.5px;
        color: #3b3f69;
        font-weight: 500;
        line-height: 1.5;
        padding-top: 5px;
      }

      /* ── BENEFITS ── */
      .benefits-strip {
        background: #3b3f69;
        border-radius: 20px;
        padding: 48px 40px 52px;
        position: relative;
        overflow: hidden;
      }
      .benefits-strip::before {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 280px;
        height: 280px;
        background: radial-gradient(circle, rgba(202,18,84,0.18) 0%, transparent 70%);
        pointer-events: none;
      }
      .benefits-strip::after {
        content: '';
        position: absolute;
        bottom: -40px;
        left: -40px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(202,18,84,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      .benefits-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .benefits-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: #ca1254;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .benefits-eyebrow::before,
      .benefits-eyebrow::after {
        content: '';
        display: block;
        width: 20px;
        height: 1.5px;
        background: #ca1254;
        opacity: 0.6;
      }
      .benefits-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(22px, 3vw, 30px);
        color: #fff;
        margin: 0;
        font-weight: 400;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        position: relative;
        z-index: 1;
      }
      @media (max-width: 900px) {
        .benefits-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 0; }
      }
      @media (max-width: 480px) {
        .benefits-grid { grid-template-columns: 1fr; gap: 28px; }
        .benefits-strip { padding: 36px 24px 40px; }
      }

      .benefit-item {
        text-align: center;
        padding: 0 20px;
        border-right: 1px solid rgba(255,255,255,0.1);
      }
      .benefit-item:last-child {
        border-right: none;
      }
      @media (max-width: 900px) {
        .benefit-item { border-right: none; }
      }

      .benefit-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(202,18,84,0.18);
        border: 1.5px solid rgba(202,18,84,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 14px;
      }
      .benefit-icon svg {
        width: 18px;
        height: 18px;
        stroke: #ca1254;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .benefit-title {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 6px;
        letter-spacing: 0.01em;
      }
      .benefit-desc {
        color: rgba(255,255,255,0.65);
        font-size: 12.5px;
        line-height: 1.6;
        font-weight: 400;
      }
    `}</style>

      <div className="services-wrap">
        {/* HEADER */}
        <div className="services-header">
          <div className="services-eyebrow">Services Included</div>
          <h2 className="services-title">
            What's Included in <span>Your Assessment</span>
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {healthAssessmentServices.map((s, i) => (
            <div className="service-item" key={s}>
              <div className="service-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="service-text">{s}</div>
            </div>
          ))}
        </div>

        {/* BENEFITS — Feature Cards Pattern */}
        <div style={{ margin: '0 -24px' }}>
          <FeatureCards
            heading="What Makes Our Assessments Different"
            cards={healthAssessmentBenefits.map((b, i) => ({
              title: b.title,
              description: b.desc,
              icon: [
                <svg key="0" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" /></svg>,
                <svg key="1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                <svg key="2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>,
                <svg key="3" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" /></svg>,
              ][i],
            }))}
            cols={4}
          />
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: 'Booking', desc: 'Schedule a convenient time for your assessment at home or your facility.' },
  { title: 'Clinical Review', desc: 'A thorough review of your medical history and current health status.' },
  { title: 'Testing', desc: 'Conducting vital signs, screenings, and metabolic assessments.' },
  { title: 'Report', desc: 'Receive a detailed health report and recommendations for further care.' },
];

export default function HealthAssessmentsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <ServiceHero
        badge="Clinical Assessment"
        heading="Health Assessments"
        subtext="Comprehensive wellness checks for aged care residents and NDIS participants."
        ctaLabel="Enquire Now"
        ctaHref="/contact"
        secondaryCtaLabel="Book Now"
        secondaryCtaHref="/booking"
      />

      {/* ABOUT */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ca1254]">
                  About This Service
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b3f69] mb-6 sm:mb-8 leading-tight">
                Comprehensive Wellness Screening from <span className="text-[#ca1254]">$199</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#3b3f69]/80 leading-relaxed font-light mb-6 sm:mb-8">
                Our health assessments support integrated health & wellness and early detection for aged care and NDIS clients.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {healthAssessmentBenefits.slice(0, 2).map((b) => (
                  <div
                    key={b.title}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-lg transition"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3b3f69] text-white flex items-center justify-center text-sm">
                      ✔
                    </div>

                    <div>
                      <div className="font-semibold text-sm sm:text-base text-[#3b3f69]">{b.title}</div>
                      <div className="text-xs sm:text-sm text-[#3b3f69]/70">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:block">
              <div className="
                w-full 
                max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full
                rounded-[2rem] lg:rounded-[2.5rem]
                overflow-hidden 
                shadow-[0_20px_60px_rgba(59,63,105,0.25)]
                lg:-skew-y-1
              ">
                <Image
                  src={HealthAssessmentImage}
                  alt="Health Assessment"
                  width={800}
                  height={1000}
                  className="
                    w-full 
                    h-[260px] sm:h-[320px] md:h-[420px] lg:h-auto
                    object-cover 
                    hover:scale-105 
                    transition duration-700
                  "
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* PROCESS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ca1254]">
                Our Method
              </span>
              <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3b3f69]">
              The Assessment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-xl transition"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                  {i + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#3b3f69] mt-4">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3b3f69]/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
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
                Arrange Your Health Assessment
              </h2>

              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                  Starting from $199
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#3b3f69]/70">
                Contact us to arrange a health assessment or book directly online.
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">

              {/* Book Now */}
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

              {/* Enquire */}
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

    </main>
  );
}