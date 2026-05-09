"use client";

import React from "react";

const TeethWhitening = () => {
    return (
        <section className="relative py-10 md:py-14 overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[rgba(66,153,225,0.08)]" />

            {/* SUBTLE EFFECT */}
            <div className="absolute top-[-60px] left-[-40px] w-[200px] h-[200px] bg-[rgba(66,153,225,0.5)] opacity-20 blur-3xl rounded-full" />
            <div className="absolute bottom-[-60px] right-[-40px] w-[200px] h-[200px] bg-[#ca1254]/10 blur-3xl rounded-full" />

            <div className="relative max-w-3xl mx-auto px-4 text-center">

                {/* SMALL LABEL */}
                <p className="text-[#ca1254] text-sm font-medium mb-1">
                    Smile Enhancement
                </p>

                {/* HEADING */}
                <h2 className="text-2xl md:text-4xl font-semibold text-[#3b3f69] mb-3 leading-tight">
                    Professional Teeth Whitening
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                    Safe and effective services using advanced ultrasonic technology to brighten your 
                    smile by up to 5–14 shades. Delivered by qualified healthcare professionals directly to your home or office.
                </p>

                {/* CTA */}
                <a href="/booking">
                    <button className="bg-[#ca1254] text-white px-8 py-2.5 rounded-lg text-sm md:text-base hover:bg-[#a30f44] transition flex items-center justify-center gap-2 mx-auto group cursor-pointer">
                        Book Teeth Whitening
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </a>

            </div>

        </section>
    );
};

export default TeethWhitening;