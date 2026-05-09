"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: "About IV Therapy",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      {
        q: "What makes IV therapy different?",
        a: "IV therapy delivers nutrients directly into the bloodstream, bypassing the digestive system entirely for 100% absorption and faster clinical effects.",
      },
      {
        q: "Can I customise my IV drip?",
        a: "Absolutely. After a thorough clinical assessment, our nurses tailor formulations specifically to your hydration, recovery, or wellness goals.",
      },
      {
        q: "How long does a session take?",
        a: "Most IV infusions take between 30–60 minutes, depending on the specific formulation and infusion rate prescribed for you.",
      },
      {
        q: "Is IV therapy painful?",
        a: "You may feel a small pinch during cannula insertion, similar to a standard blood test. Most clients find the procedure comfortable and relaxing.",
      },
      {
        q: "What can IV therapy support?",
        a: "Our infusions support hydration, fatigue, immune function, athletic recovery, and nutritional deficiencies under clinical guidance.",
      },
    ],
  },
  {
    category: "Safety & Clinical Standards",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      {
        q: "Who performs the infusions?",
        a: "All infusions are administered by Registered Nurses (RNs) with specialised training in cannulation and clinical monitoring.",
      },
      {
        q: "How do you ensure safety?",
        a: "We follow strict clinical protocols including pre-session screening, aseptic technique, and continuous observation during the session.",
      },
      {
        q: "Are there any side effects?",
        a: "Side effects are uncommon but may include mild bruising or temporary discomfort. Patients are monitored closely throughout by our RNs.",
      },
    ],
  },
  {
    category: "Appointments & Eligibility",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      {
        q: "Do I need a blood test?",
        a: "Not always. However, for certain services like iron infusions, recent pathology results are required to ensure clinical appropriateness.",
      },
      {
        q: "Is it covered by Medicare?",
        a: "Most wellness-based IV infusions are not covered by Medicare. We can guide you if any specific services justify individual coverage.",
      },
      {
        q: "How often can I get therapy?",
        a: "Frequency depends on your individual health goals. Some clients attend weekly for support, while others come monthly or as needed.",
      },
    ],
  },
  {
    category: "Preparation & Aftercare",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      {
        q: "What should I do before?",
        a: "Stay hydrated, eat a light meal beforehand, and inform us of any medications, allergies, or medical conditions.",
      },
      {
        q: "What happens after?",
        a: "Clients typically feel refreshed. We recommend drinking water and avoiding strenuous physical activity for a few hours.",
      },
    ],
  },
  {
    category: "Mobile Services",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      {
        q: "Can I have an IV at home?",
        a: "Yes. We offer fully mobile IV services where our RNs come to you, maintaining the highest clinical standards of professional nursing care.",
      },
      {
        q: "Why choose Wellness Vitality?",
        a: "We are clinically led, RN-managed, and focus on delivering premium, personalised care with an uncompromising focus on results.",
      },
    ],
  },
];

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`h-fit border rounded-3xl transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#3b3f69]/20 bg-white shadow-xl shadow-gray-100' : 'border-gray-100 bg-gray-50/30 hover:bg-white hover:border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full px-5 py-5 text-left flex items-start justify-between group cursor-pointer"
      >
        <span className={`text-sm md:text-[15px] font-semibold leading-relaxed transition-colors ${isOpen ? 'text-[#ca1254]' : 'text-[#3b3f69]/90'}`}>
          {q}
        </span>
        <div className={`shrink-0 ml-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#ca1254] text-white rotate-180' : 'bg-white text-gray-400'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <div className="px-5">
          <div className="h-px w-full bg-gray-100 mb-4" />
          <p className="text-gray-500 leading-relaxed text-xs md:text-sm font-normal font-sans">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState({ cat: 0, item: 0 });

  const toggle = (catIdx, itemIdx) => {
    if (openItem?.cat === catIdx && openItem?.item === itemIdx) {
      setOpenItem(null);
    } else {
      setOpenItem({ cat: catIdx, item: itemIdx });
    }
  };

  return (
    <main className="min-h-screen bg-white font-serif text-[#1A1A1A]">
      
      {/* Standard Hero Section - Smoother Spacing */}
      <section className="relative pt-40 pb-30 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#ca1254]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] !text-white">Help Centre</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="text-lg !text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-6 font-sans">
            Find expert clinical answers regarding our mobile services and IV therapies.
          </p>

          <div className="mt-8 w-16 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>
      
      {/* CONTENT - Reduced py-24 to py-16 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {faqs.map((group, catIdx) => (
            <div key={group.category} className="mb-14 last:mb-0">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-[#3b3f69]/5 text-[#3b3f69] flex items-center justify-center flex-shrink-0 scale-90">
                  {group.icon}
                </div>
                <div>
                  <h2 className="text-[17px] font-semibold text-[#3b3f69]/90 uppercase tracking-widest leading-none mb-1.5 font-serif">
                    {group.category}
                  </h2>
                  <div className="h-1 w-6 bg-[#ca1254] rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {group.items.map((item, itemIdx) => (
                  <AccordionItem
                    key={itemIdx}
                    q={item.q}
                    a={item.a}
                    isOpen={openItem?.cat === catIdx && openItem?.item === itemIdx}
                    onToggle={() => toggle(catIdx, itemIdx)}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* CTA - Smoother Gap (mt-20 instead of mt-32) */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-2xl border border-[#3b3f69]/10 bg-[#3b3f69]/5 px-6 py-10 md:px-12 md:py-12 shadow-[0_5px_20px_rgba(59,63,105,0.05)] font-serif">
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ca1254]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3b3f69]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                <div className="text-center lg:text-left max-w-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3b3f69]/50 mb-2">
                    Expert Support
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-[#3b3f69] leading-tight">
                    Still have questions?
                  </h2>
                  <p className="text-xs text-gray-400 mt-2 font-sans">
                    Our registered clinical nurses are ready to discuss your specific health goals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                   <Link 
                     href="/contact" 
                     className="w-full sm:min-w-[170px] px-8 py-3.5 bg-[#ca1254] text-white font-semibold text-center transition text-[11px] uppercase tracking-widest"
                   >
                     Contact Team
                   </Link>
                   <Link 
                     href="/booking" 
                     className="w-full sm:min-w-[170px] px-8 py-3.5 bg-white border border-gray-100 text-[#3b3f69] font-semibold text-center transition text-[11px] uppercase tracking-widest"
                   >
                     Book Session
                   </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER PADDING TWEAK */}
      <section className="py-10 bg-white border-t border-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center text-[11px] text-gray-400 italic font-light font-sans">
          Professional clinical nursing team. All enquiries are handled confidentially and in accordance with Australian healthcare privacy standards.
        </div>
      </section>

    </main>
  );
}
