import Image from 'next/image';
import Hero from '@/components/sections/services/Hero';
import BookingCTA from '@/components/sections/home/BookingCTA';
import Button from '@/components/ui/Button';
import FeatureCards from '@/components/ui/FeatureCards';

// Service Images from Homepage
import IvInfusionImage from '../../../public/images/services/IV Nutrient Therapy.png';
import HealthAssessmentImage from '../../../public/images/services/Healthcare.png';
import TeethWhiteningImage from '../../../public/images/services/teeth-whitening.png';
import AgedCareImage from '../../../public/images/services/agedcare.png';
import BloodCollectionImage from '../../../public/images/services/bloodcollection.png';
import CorporateHealthImage from '../../../public/images/services/coprate.png';
import PreventativeHealthImage from '../../../public/images/services/healthimage.png';

const whyChooseCards = [
  {
    title: 'Registered Nurses',
    description: 'Every service is delivered by fully qualified, registered nurses.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Delivery',
    description: 'Sydney-wide mobile healthcare, we come to your home, office, or facility.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast & Convenient',
    description: 'Easy online booking with same-day availability for most services.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Clinically Safe',
    description: 'Strict adherence to Australian healthcare standards and clinical protocols.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'Health Assessments',
    description: 'Comprehensive wellness checks and health & wellness screening for aged care and NDIS clients. Proactive early detection to identify health risks before they escalate.',
    slug: 'health-assessments',
    image: HealthAssessmentImage,
    accent: 'indigo',
    features: ['Vital Signs Monitoring', 'Cardiovascular Risk', 'Clinical Reporting']
  },
  {
    title: 'Integrated Health & Wellness',
    description: 'A proactive approach targeting specific nutrient deficiencies through professional vitamin therapies, nutrition guidance and bespoke lifestyle consultations.',
    slug: 'preventative-health',
    image: PreventativeHealthImage,
    accent: 'rose',
    features: ['Vitamin Support', 'Nutrition Guidance', 'Ongoing Maintenance']
  },
  {
    title: 'Aged Care & NDIS Nursing',
    description: 'Compassionate, professional nursing services delivering evidence-based care tailored to individual requirements, supporting independent living and long-term health.',
    slug: 'aged-care-ndis',
    image: AgedCareImage,
    accent: 'indigo',
    features: ['Dignified Care', 'Medication Management', 'Wound Care']
  },
  {
    title: 'Custom IV Infusions',
    description: 'Targeted intravenous nutrient therapies designed specifically to support energy levels, optimise recovery, and strengthen immune health functions systemically.',
    slug: 'iv-infusions',
    image: IvInfusionImage,
    accent: 'rose',
    features: ['Fast Absorption', 'Personalised Blends', 'Energy Optimisation']
  },
  {
    title: 'Clinical Blood Collection',
    description: 'Professional blood collection services combined with a mini wellness assessment including blood pressure, heart rate, and oxygen saturation monitoring.',
    slug: 'blood-collection',
    image: BloodCollectionImage,
    accent: 'indigo',
    features: ['Pathology Testing', 'Wellness Assessment', 'Clinical Monitoring']
  },
  {
    title: 'Professional Teeth Whitening',
    description: 'High-end cosmetic whitening accelerator featuring advanced Ultrasonic technology and dual LED heads. Professional results starting from $250.',
    slug: 'teeth-whitening',
    image: TeethWhiteningImage,
    accent: 'rose',
    features: ['Ultrasonic Tech', 'Dual LED Heads', '5-14 Shades Lighter']
  },
  {
    title: 'Corporate Health Services',
    description: 'Bespoke workplace health checks, professional reporting and corporate IV hydration services strategically designed to optimise teamwork, safety and energy.',
    slug: 'corporate-health',
    image: CorporateHealthImage,
    accent: 'indigo',
    features: ['Employee Engagement', 'Confidential Screening', 'On-Site Delivery']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        /* Custom utilities */
        .service-image-card {
          box-shadow: 0 40px 80px rgba(59,63,105, 0.1);
        }
        
        .service-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .service-eyebrow-line {
          display: block;
          width: 32px;
          height: 1.5px;
        }

        .feature-bubble {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.4);
        }

      `}</style>

      <Hero />

      {/* ── Services alternating list ── */}
      <section className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-full md:w-[600px] h-[600px] bg-[#ca1254]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full md:w-[600px] h-[600px] bg-[#3b3f69]/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

          <div className="text-center mb-20 lg:mb-28">
            <div className="service-eyebrow text-[#ca1254]">
              <span className="service-eyebrow-line bg-[#ca1254]/40" />
              Comprehensive Care
              <span className="service-eyebrow-line bg-[#ca1254]/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3b3f69] max-w-4xl mx-auto leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tailored therapies supporting your <br className="hidden md:block" />
              <span className="italic text-[#ca1254]">long-term vitality.</span>
            </h2>
          </div>

          <div className="space-y-32 lg:space-y-40">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const themeColor = service.accent === 'rose' ? '#ca1254' : '#3b3f69';
              const secondaryColor = service.accent === 'rose' ? 'rgba(202,18,84,0.1)' : 'rgba(59,63,105,0.1)';

              return (
                <div key={service.slug} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}>

                  {/* Image side */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                      </div>

                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />

                      {/* Floating feature bubbles */}
                      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        {service.features.map(feat => (
                          <span key={feat} className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Shadow/Glow decoration behind image */}
                    <div
                      className={`absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
                      style={{ background: secondaryColor }}
                    />
                  </div>

                  {/* Text side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: secondaryColor, color: themeColor }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                        Clinical Protocol
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {service.title}
                    </h3>

                    <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <Button
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]"
                      >
                        Explore Service
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Adding a gentle background separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full" />

      {/* Feature cards shifted below the elegant grid to serve as an "Assurance" block */}
      <div className="bg-white">
        <FeatureCards
          heading="Why Choose Wellness Vitality"
          cards={whyChooseCards}
          cols={4}
        />
      </div>

      {/* Horizontal CTA section styled like homepage newsletter */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-[#3b3f69]/10 bg-[#3b3f69]/5 backdrop-blur-sm px-8 py-10 md:px-12 md:py-12 shadow-[0_20px_50px_rgba(59,63,105,0.08)]">

            {/* Background accents */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ca1254]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3b3f69]/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ca1254]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">
                    Take the first step
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#3b3f69] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ready to reclaim your <span className="italic text-[#ca1254]">vitality?</span>
                </h2>

                <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
                  Book your session with qualified healthcare professionals and experience personalised, patient-centred care delivered to you.
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button
                  href="/booking"
                  className="w-full sm:w-auto px-10 py-4 bg-[#ca1254] text-white rounded-xl font-bold text-sm shadow-[0_10px_25px_rgba(202,18,84,0.25)] hover:shadow-[0_15px_30px_rgba(202,18,84,0.35)] hover:-translate-y-1 transition-all duration-300"
                >
                  Book a Session
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  className="w-full sm:w-auto px-10 py-4 border-[#3b3f69]/20 text-[#3b3f69] rounded-xl font-bold text-sm hover:bg-white hover:border-[#3b3f69] transition-all duration-300"
                >
                  Talk to our team
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
