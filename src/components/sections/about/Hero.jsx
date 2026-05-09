import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] !text-white">
            Expert Care
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold !text-white mb-6 leading-[1.15] tracking-tight">
          Mobile Healthcare & <br className="hidden md:block" />
          <span className="text-[#ca1254] font-semibold">IV Wellness</span> Services
        </h1>

        {/* Description */}
        <p className="text-lg !text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
          Personalised healthcare centred around you.
        </p>

        {/* Divider */}
        <div className="mt-10 w-20 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;