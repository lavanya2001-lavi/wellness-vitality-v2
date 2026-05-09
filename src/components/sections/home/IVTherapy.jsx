"use client";

import React from "react";
import Button from "@/components/ui/Button";

const ivPacks = [
  {
    title: "Immune Defence IV",
    description:
      "Typically includes Vitamin C, B Complex, Zinc and Magnesium.",
    points: ["Vitamin C", "B Complex", "Zinc", "Magnesium"],
    price: "$260",
    accent: "rose",
  },
  {
    title: "Energy & Performance Recovery",
    description:
      "Includes B Complex, B12, Magnesium and Vitamin C.",
    points: ["B Complex", "B12", "Magnesium", "Vitamin C"],
    price: "$240",
    accent: "indigo",
  },
  {
    title: "Beauty & Skin Glow IV",
    description:
      "Often includes Vitamin C, Biotin, Zinc and Glutathione.",
    points: ["Vitamin C", "Biotin", "Zinc", "Glutathione"],
    price: "$320",
    accent: "rose",
  },
  {
    title: "Detox & Liver Support IV",
    description:
      "Commonly includes Glutathione, Vitamin C, Taurine and B vitamins.",
    points: ["Glutathione", "Vitamin C", "Taurine", "B Vitamins"],
    price: "$300",
    accent: "indigo",
  },
  {
    title: "Hydration & Recovery IV",
    description:
      "Saline with electrolytes, Vitamin C, B Complex and Magnesium.",
    points: ["Electrolytes", "Vitamin C", "B Complex", "Magnesium"],
    price: "$220",
    accent: "rose",
  },
  {
    title: "Athlete Recovery IV",
    description:
      "Magnesium, Taurine, Vitamin C and B vitamins for muscle recovery.",
    points: ["Magnesium", "Taurine", "Vitamin C", "B Vitamins"],
    price: "$260",
    accent: "indigo",
  },
  {
    title: "NAD+ Therapy",
    description:
      "Nicotinamide adenine dinucleotide (NAD+) supports cellular energy, mitochondrial function and metabolic processes.",
    points: [
      "Cellular Energy",
      "Mitochondrial Function",
      "Metabolic Support",
    ],
    price: "$499 (250mg)",
    accent: "rose",
  },
];

const IVTherapy = () => {
  return (
    <section
      id="iv-therapy"
      className="py-10 md:py-16 bg-[#f8f9fc] relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-medium text-[rgb(59,63,105)] mb-6">
            IV Infusion Therapy
          </h2>

          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IV therapy delivers vitamins, minerals and nutrients directly into
            the bloodstream, allowing higher nutrient availability compared with
            oral supplements.
          </p>

          <div className="mt-6 md:mt-8 h-1 w-16 md:w-20 bg-[rgb(202,18,84)] mx-auto" />
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">

          {ivPacks.map((pack, index) => (
            <div
              key={pack.title}
              className={`
                relative bg-white p-4 sm:p-8 
                border border-gray-100
                shadow-[0_8px_25px_rgba(0,0,0,0.05)] 
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] 
                hover:border-[rgb(202,18,84)]/20
                transition duration-300 
                flex flex-col h-full w-full max-w-sm

                ${index === ivPacks.length - 1
                  ? "lg:col-span-3 lg:mx-auto"
                  : ""
                }
              `}
            >

              {/* PRICE BADGE */}
             <div
  className={`absolute top-3 right-3 px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md
  ${pack.accent === "rose"
      ? "bg-[rgb(202,18,84)] text-white"
      : "bg-[rgb(59,63,105)] text-white"
    }`}
>
                {pack.price}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-2xl font-medium text-[rgb(59,63,105)] mb-3 pr-10 sm:pr-16">
                {pack.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                {pack.description}
              </p>

              {/* BULLET POINTS */}
              <ul className="space-y-2 mb-6">
                {pack.points.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-center gap-2 text-xs sm:text-sm text-[rgb(59,63,105)]/80 ${i > 1 ? "hidden md:flex" : ""
                      }`}
                  >
                    <svg className="w-3.5 h-3.5 text-[rgb(202,18,84)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                href="/services/iv-infusions"
                variant="ghost"
                className={`mt-auto w-full px-6 sm:px-8 py-3 sm:py-5 text-xs sm:text-base !rounded-none font-medium border tracking-wide transition-all duration-300 ${pack.accent === "rose"
                  ? "border-[rgb(202,18,84)] text-[rgb(202,18,84)] hover:bg-[rgb(202,18,84)] hover:text-white"
                  : "border-[rgb(59,63,105)] text-[rgb(59,63,105)] hover:bg-[rgb(59,63,105)] hover:text-white"
                  }`}
              >
                Book Now
              </Button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IVTherapy;