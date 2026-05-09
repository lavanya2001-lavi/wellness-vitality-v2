"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Logo from '../../../public/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[2000] bg-white shadow-sm py-2 md:py-4">

      {/* CONTAINER */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex flex-col items-center justify-center py-1 group shrink-0">
          <Image
            src={Logo}
            alt="Wellness Vitality Australia"
            className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            width={200}
            height={48}
            style={{ width: 'auto' }}
            priority
          />
          <div className="hidden md:flex mt-1 items-center justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="text-[#3b3f69] font-bold text-[12px] tracking-tight uppercase leading-none">
              Wellness Vitality
            </span>
            <span className="text-[#ca1254] font-semibold text-[11px] tracking-[0.2em] uppercase leading-none">
              Australia
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">

          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition flex items-center gap-1 cursor-pointer">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              {[
                { label: 'Health Assessments', href: '/services/health-assessments', price: 'from $199' },
                { label: 'Integrated Health & Wellness', href: '/services/preventative-health', price: 'from $180' },
                { label: 'Aged Care & NDIS Nursing', href: '/services/aged-care-ndis', price: 'Enquire' },
                { label: 'IV Infusions', href: '/services/iv-infusions', price: 'from $220' },
                { label: 'Custom IV Drips', href: '/custom-iv-drips', price: 'from $220' },
                { label: 'Blood Collection', href: '/services/blood-collection', price: 'from $149' },
                { label: 'Teeth Whitening', href: '/services/teeth-whitening', price: 'from $250' },
                { label: 'Corporate Health Services', href: '/services/corporate-health', price: 'Enquire' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#3b3f69]/5 hover:text-[#3b3f69] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-bold text-[#ca1254] bg-[#ca1254]/5 px-2 py-0.5 rounded-full uppercase tracking-wider">{item.price}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/training" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Training
          </Link>

          <Link href="/booking" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Booking
          </Link>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            About Us
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Contact Us
          </Link>
        </div>

        {/* CTA + MENU */}
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">

          {/* BUTTON (desktop only) */}
          <div className="hidden md:block">
            <Button
              href="/booking"
              variant="primary"
              className="w-[150px] px-4 py-3 text-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Book Now
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden p-1.5 text-[#3b3f69] shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(100vh - 60px)', WebkitOverflowScrolling: 'touch' }}>
          <div className="px-4 py-6 space-y-6">

            <Link href="/" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="space-y-4">
              <div className="text-base font-medium text-gray-800 border-b border-gray-100 pb-2">
                Services
              </div>
              <div className="pl-4 space-y-4">
                {[
                  { label: 'Health Assessments', href: '/services/health-assessments', price: 'from $199' },
                  { label: 'Integrated Health & Wellness', href: '/services/preventative-health', price: 'from $180' },
                  { label: 'Aged Care & NDIS Nursing', href: '/services/aged-care-ndis', price: 'Enquire' },
                  { label: 'IV Infusions', href: '/services/iv-infusions', price: 'from $220' },
                  { label: 'Custom IV Drips', href: '/custom-iv-drips', price: 'from $220' },
                  { label: 'Blood Collection', href: '/services/blood-collection', price: 'from $149' },
                  { label: 'Teeth Whitening', href: '/services/teeth-whitening', price: 'from $250' },
                  { label: 'Corporate Health Services', href: '/services/corporate-health', price: 'Enquire' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between text-sm text-gray-600 hover:text-[#3b3f69]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-bold text-[#ca1254] bg-[#ca1254]/5 px-2 py-0.5 rounded-full uppercase tracking-wider">{item.price}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/training" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Training
            </Link>



            <Link href="/about" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/contact" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>

            {/* BOOK NOW CTA */}
            <Link
              href="/booking"
              className="block w-full text-center bg-[#ca1254] text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-[#a30f44] transition mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now →
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;