"use client";

import React, { useRef, useState } from 'react';
import { Stethoscope, HeartHandshake, House } from 'lucide-react';

const features = [
    {
        title: 'You are cared for.',
        description:
            'Every service is delivered by Registered nurses, ensuring safe, professional and personalised care at every step.',
        icon: <Stethoscope size={56} strokeWidth={1.4} />,
    },
    {
        title: 'You are supported.',
        description:
            'We take the time to understand your needs, offering guidance, reassurance and care tailored to your health goals.',
        icon: <HeartHandshake size={56} strokeWidth={1.4} />,
    },
    {
        title: 'You are comfortable.',
        description:
            'With mobile healthcare services, we bring clinical care to your home, workplace or care facility, making healthcare simple and stress-free.',
        icon: <House size={56} strokeWidth={1.4} />,
    },
];

const CareSection = () => {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const width = container.offsetWidth;
        const index = Math.round(scrollLeft / width);

        setActive(index);
    };

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;

        const width = container.offsetWidth;

        container.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-10 md:py-16">

            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

                {/* MOBILE */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scroll-smooth no-scrollbar"
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full snap-center p-8 rounded-xl"
                            style={{ backgroundColor: '#f5f5f5' }}
                        >
                            <div className="mb-6" style={{ color: 'rgb(202,18,84)' }}>
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-medium mb-3" style={{ color: 'rgb(59,63,105)' }}>
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mb-10 md:hidden">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`h-1.5 w-6 ${index === active ? 'bg-[rgb(59,63,105)]' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

                {/* ✅ DESKTOP (SLIGHTLY WIDER - PERFECT BALANCE) */}
                <div className="hidden md:grid grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl"
                            style={{ backgroundColor: '#f5f5f5' }}
                        >
                            <div className="mb-6" style={{ color: 'rgb(202,18,84)' }}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-medium mb-3" style={{ color: 'rgb(59,63,105)' }}>
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

                {/* ✅ QUOTE (MATCHED WIDTH) */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className="text-center py-6 px-6 rounded-md"
                        style={{ backgroundColor: 'rgb(202,18,84)' }}
                    >
                        <p className="text-white text-lg md:text-xl font-medium">
                            This is <span className="italic font-semibold">personalised care</span>. This is <span className="italic font-semibold">Wellness Vitality Australia</span>.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareSection;