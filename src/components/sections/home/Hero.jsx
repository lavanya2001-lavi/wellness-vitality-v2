"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroImage from "../../../../public/heroimagepic.png";

const Hero = () => {
  return (
    <section
      className="relative pt-32 lg:pt-40 pb-0 lg:pb-20 overflow-hidden"
      style={{ backgroundColor: "rgb(59, 63, 105)" }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16 pt-4 pb-0 lg:pb-8 relative z-10 text-center lg:text-left">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TAG */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-medium mx-auto lg:mx-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)"
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[rgb(202,18,84)] animate-pulse" />
              <span
                className="text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                Mobile Healthcare & IV Wellness
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.3rem] font-medium leading-[1.1] mb-6 !text-white"
            >
              Mobile IV Therapy & <br className="hidden sm:block" />
              Clinical Services
            </h1>

            {/* PARAGRAPH */}
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Personalised healthcare centred around you. Mobile IV infusions and wellness services delivered by registered nurses.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-row justify-center lg:justify-start gap-3 mb-4">
              <Button
                href="/booking"
                variant="primary"
                className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 text-[14px] font-semibold !rounded-none"
                style={{ boxShadow: "0 10px 30px rgba(202,18,84,0.25)" }}
              >
                Book Treatment
              </Button>

              <Button
                href="/services"
                variant="outlineWhite"
                className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 text-[14px] font-semibold !rounded-none"
              >
                Our Services
              </Button>
            </div>

            {/* MOBILE IMAGE */}
            <div className="lg:hidden -mx-6 -mt-10 relative">
              <Image
                src={HeroImage}
                alt="Healthcare Professionals"
                width={600}
                height={400}
                className="w-full h-auto block"
                style={{ maxWidth: '380px', margin: '0 auto' }}
                priority
              />
            </div>

            {/* BENEFITS BAR (MOBILE) */}
            <div className="lg:hidden bg-[rgb(45,49,85)] -mx-6 px-6 py-4 flex flex-row justify-center gap-6">
              {[
                "REGISTERED NURSES",
                "MOBILE HEALTHCARE",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[rgb(202,18,84)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] font-bold text-white/80 tracking-widest whitespace-nowrap">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* BENEFITS (DESKTOP) */}
            <div className="hidden lg:flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10">
              {[
                "REGISTERED NURSES",
                "MOBILE HEALTHCARE",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[rgb(202,18,84)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ADJUSTED SPACING ON MOBILE */}
          <div className="h-[180px] sm:h-[220px] lg:hidden"></div>

        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="absolute right-0 lg:right-[7%] bottom-0 lg:bottom-3 w-full lg:w-[50%] h-[400px] sm:h-[500px] lg:h-[95%] flex items-end justify-center lg:justify-end pointer-events-none z-0">
        <Image
          src={HeroImage}
          alt="Healthcare Professionals"
          className="w-full h-auto max-h-full object-contain object-bottom lg:object-right opacity-100 transition-opacity duration-500"
          width={1000}
          height={700}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;