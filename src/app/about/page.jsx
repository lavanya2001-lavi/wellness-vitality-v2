import React from 'react';
import Hero from '@/components/sections/about/Hero';
import AboutIntro from '@/components/sections/about/AboutIntro';
import MissionStatement from '@/components/sections/about/MissionStatement';
import ClinicalExcellence from '@/components/sections/about/ClinicalExcellence';
import MobileConvenience from '@/components/sections/about/MobileConvenience';
import BookingCTA from '@/components/sections/home/BookingCTA';
import Newsletter from '@/components/sections/home/Newsletter';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutIntro />
      {/* <MissionStatement /> */}
      <ClinicalExcellence />
      <MobileConvenience />
      
      <BookingCTA />
      <Newsletter />

      {/* Clinical Disclaimer */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <p className="text-xs text-gray-400 italic w-full leading-relaxed">
            <span className="font-bold text-gray-500 not-italic block mb-2 uppercase tracking-widest text-[10px]">Clinical Disclaimer</span>
            All services are administered by qualified healthcare professionals following appropriate clinical protocols. Individual suitability is determined through clinical assessment. Results may vary and are dependent on individual health requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
