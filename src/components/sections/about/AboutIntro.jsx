import React from 'react';
import Image from 'next/image';
import HeroHealthcareImage from '../../../../public/aboutus.png';

const AboutIntro = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-[#f8f9fc] overflow-hidden">

      {/* Background glow elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ca1254]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b3f69]/5 rounded-full blur-3xl" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative group reveal-left">
            <div className="aspect-[5/4] md:aspect-[11/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={HeroHealthcareImage}
                alt="Healthcare service"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gray-100">
              <p className="text-sm text-gray-500">Trusted Care</p>
              <p className="text-lg font-semibold text-[#3b3f69]">
                Registered Nurses
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal-right delay-200">

            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#ca1254]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ca1254]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#3b3f69] mb-6 leading-tight">
              Personalised Healthcare,
              <br />
              <span className="text-[#ca1254] font-medium">
                Centred Around You
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Wellness Vitality Australia provides professional healthcare and
                wellness services delivered by qualified registered nurses,
                focused on personalised treatments and evidence-based care.
              </p>
              <p>
                Through our mobile services, we ensure you receive high-quality 
                care in the comfort of your home, workplace, aged care 
                facility or NDIS residence.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-sm font-medium text-[#3b3f69]">
                  Personalised Care
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-sm font-medium text-[#3b3f69]">
                  Mobile Services
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-sm font-medium text-[#3b3f69]">
                  Clinical Excellence
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-sm font-medium text-[#3b3f69]">
                  Trusted Professionals
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;