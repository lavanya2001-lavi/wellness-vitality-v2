"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

import IvInfusionImage from "../../../../public/images/services/IV Nutrient Therapy.png";
import HealthAssessmentImage from "../../../../public/images/services/Healthcare.png";
import TeethWhiteningImage from "../../../../public/images/services/teeth-whitening.png";
import AgedCareImage from "../../../../public/images/services/agedcare.png";
import BloodCollectionImage from "../../../../public/images/services/bloodcollection.png";
import CorporateHealthImage from "../../../../public/images/services/coprate.png";

const services = [
  {
    title: "IV Infusions",
    description:
      "Targeted intravenous nutrient therapies designed to support energy, recovery and immune health.",
    image: IvInfusionImage,
  },
  {
    title: "Health Assessments",
    description:
      "Comprehensive wellness checks and health & wellness screening for aged care and NDIS clients.",
    image: HealthAssessmentImage,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening services delivered by qualified healthcare professionals. Improves smile appearance and can lighten teeth by up to 6 to 8 shades.",
    image: TeethWhiteningImage,
  },
  {
    title: "Aged Care & NDIS Nursing",
    description:
      "Professional nursing services supporting ongoing healthcare needs.",
    image: AgedCareImage,
  },
  {
    title: "Blood Collection",
    description:
      "Convenient blood testing services available at home or care facilities.",
    image: BloodCollectionImage,
  },
  {
    title: "Corporate Health Services",
    description:
      "Workplace health checks and corporate IV hydration services.",
    image: CorporateHealthImage,
  },
];

const Services = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#3b3f69] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl md:mx-auto text-sm md:text-lg leading-relaxed">
            We offer a range of nurse-led services including IV infusions, teeth whitening, blood collection, and clinical nursing reports. Delivered via our mobile service, our care is safe, convenient, and tailored to your individual needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-[160px] sm:h-[200px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                width={600}
                height={600}
              />

              {/* TITLE */}
              <div className="absolute bottom-0 w-full bg-white/95 p-3 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#3b3f69] leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-[#ca1254] flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg md:text-xl">{service.title}</h3>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <a href="/booking">
                  <button className="bg-[#ca1254] text-white px-8 py-2.5 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#a30f44] transition-all font-bold group/btn">
                    Book Now
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-8 md:mt-12">
          <Button href="/services" className="px-8 md:px-10 py-3">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Services;