import React from 'react';
import Image from 'next/image';
import MobileHealthcareVisit from '../../../../public/mobilehealthcare.png';

const MobileConvenience = () => {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      {/* Subtle decorative gradient accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <div className="relative group reveal-left delay-100">
            <div className="aspect-square rounded-[1rem] overflow-hidden shadow-2xl relative">
              <Image
                src={MobileHealthcareVisit}
                alt="Mobile Healthcare"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-indigo/5 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-indigo uppercase tracking-wider">Mobile First</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Delivering clinical care directly to your doorstep, workplace, or preferred facility.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal-right delay-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Unmatched Flexibility</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">
              Mobile Healthcare <br />
              <span className="italic font-light text-rose">& Convenience</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                We prioritize your convenience and comfort. Wellness Vitality Australia brings professional clinical care to you, ensuring you receive the support you need in the most convenient location.
              </p>
              <p>
                Our mobile healthcare services allow patients to receive professional services in homes, workplaces, aged care facilities and NDIS residences.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                'Private Homes',
                'Workplaces',
                'Aged Care Facilities',
                'NDIS Residences'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  <span className="text-sm font-medium text-indigo/80">{loc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileConvenience;
