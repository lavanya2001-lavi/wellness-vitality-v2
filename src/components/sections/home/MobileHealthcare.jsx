"use client";
import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const slides = [
  {
    title: "Immune Defence IV",
    description:
      "A high-dose blend of Vitamin C, Zinc, and antioxidants to support your immune system.",
    points: ["Immune Support", "Antioxidant Rich", "Recovery Boost"]
  },
  {
    title: "Energy & Performance IV",
    description:
      "Boost energy and reduce fatigue with B-complex vitamins and amino acids.",
    points: ["Energy Boost", "Metabolic Support", "Performance"]
  },
  {
    title: "Beauty & Skin Glow IV",
    description:
      "Promotes radiant skin with glutathione and collagen support.",
    points: ["Skin Glow", "Collagen Support", "Detox"]
  }
];

const IVTherapySlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-10 md:py-16 bg-[rgb(59,63,105)] text-white">

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* STACK ON MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-white/70 mb-3 md:mb-4">
              IV Therapy Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              <span className="block text-white">
                Experience Premium
              </span>
              <span className="block text-[rgb(202,18,84)]">
                IV Infusion Therapy
              </span>
            </h2>

            <p className="text-white/80 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
              Professional IV therapies designed to support recovery, energy,
              and overall wellness delivered by qualified nurses.
            </p>

            {/* <Button
              href="/services/iv-infusions"
              className="bg-[rgb(202,18,84)] text-white px-6 md:px-8 py-3 md:py-4"
            >
              Book Now
            </Button> */}
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* CARD */}
           <div className="mx-auto w-full max-w-[420px] bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-[rgb(59,63,105)] min-h-[260px] md:h-[320px] flex flex-col justify-between transition-all duration-500">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {slides[current].title}
                </h3>

                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base line-clamp-3">
                  {slides[current].description}
                </p>

                <ul className="space-y-2 md:space-y-3">
                  {slides[current].points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs md:text-sm">
                      <div className="w-2 h-2 bg-[rgb(202,18,84)] rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ARROWS (ONLY DESKTOP) */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute -left-0 top-1/2 -translate-y-1/2 bg-white text-[rgb(59,63,105)] w-10 h-10 rounded-full shadow-lg items-center justify-center hover:scale-110 transition"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute -right-0 top-1/2 -translate-y-1/2 bg-white text-[rgb(59,63,105)] w-10 h-10 rounded-full shadow-lg items-center justify-center hover:scale-110 transition"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    current === i
                      ? "w-6 bg-[rgb(202,18,84)]"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IVTherapySlider;