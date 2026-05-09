'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterLogo from '../../../public/footer.png';

const FooterSection = ({ title, children, id, activeSection, toggleSection }) => {
  const isOpen = activeSection === id;

  return (
    <div className="border-b border-white/5 md:border-none last:border-none">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-5 md:py-0 md:mb-6 text-left group md:cursor-default"
      >
        <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
          {title}
        </h3>
        <span className={`md:hidden transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180 opacity-100' : 'opacity-40'}`}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
      `}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    if (window.innerWidth >= 768) return; // Don't toggle on desktop
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <footer className="bg-[#1a1c3d] text-white pt-16 md:pt-24 pb-8 md:pb-12 mt-auto border-t border-white/5 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 md:gap-8 mb-10 md:mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 mb-4 md:mb-0">
            <Link href="/" className="inline-block mb-6 transition-transform hover:scale-[1.02]">
              <Image
                src={FooterLogo}
                alt="Wellness Vitality Australia"
                className="h-14 md:h-20 w-auto"
                width={180}
                height={72}
                style={{ width: 'auto' }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 pr-4 max-w-sm">
              Experience elite diagnostic and therapeutic services from the comfort of your home. Premium healthcare, delivered with a personal touch and clinical precision.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[
                { name: 'Facebook', href: 'https://www.facebook.com/share/1GEVniWdVF/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
                { name: 'Instagram', href: 'https://www.instagram.com/wellnessvitalityaustralia', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                { name: 'TikTok', href: 'https://www.tiktok.com/@wellnessvitalityaus?_r=1&_t=ZS-959CqimuxpF', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V18a7.48 7.48 0 1 1-10.33-6.94c.32-.12.65-.22.99-.29V14.8c-.13.04-.26.09-.38.15a3.45 3.45 0 1 0 3.32 3.44c0-.01 0-.02 0-.03V.02z" /></svg> },
                { name: 'YouTube', href: 'https://youtube.com/@wellnessvitalityaustralia', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ca1254] hover:text-white transition-all duration-300 border border-white/5 hover:border-[#ca1254]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterSection title="Company" id="company" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Booking', path: '/booking' },
                  { label: 'Contact Us', path: '/contact' },
                  { label: 'FAQ', path: '/faq' },
                  { label: 'Refund Policy', path: '/refund-policy' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.path} className="text-white/60 hover:text-[#ca1254] hover:translate-x-1 block transition-all text-sm font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterSection title="Our Services" id="services" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                {[
                  { label: 'IV Infusion Therapy', path: '/services/iv-infusions' },
                  { label: 'Health Assessments', path: '/services/health-assessments' },
                  { label: 'Blood Collection', path: '/services/blood-collection' },
                  { label: 'Aged Care & NDIS', path: '/services/aged-care-ndis' },
                  { label: 'Professional Teeth Whitening', path: '/services/teeth-whitening' },
                  { label: 'Corporate Health Services', path: '/services/corporate-health' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.path} className="text-white/60 hover:text-[#ca1254] hover:translate-x-1 block transition-all text-sm font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterSection title="Get In Touch" id="contact" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                <li className="flex gap-4 text-white/60 text-sm items-start group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ca1254]/20 transition-colors">
                    <svg className="w-4 h-4 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="pt-1.5 flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Call Us</span>
                    <a href="tel:0296272659" className="font-bold text-white hover:text-[#ca1254] transition-colors">02 9627 2659</a>
                  </div>
                </li>
                <li className="flex gap-4 text-white/60 text-sm items-start group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ca1254]/20 transition-colors">
                    <svg className="w-4 h-4 text-[#ca1254] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="pt-1.5 flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email Us</span>
                    <a href="mailto:admin@wellnessvitalityaustralia.com.au" className="font-bold text-white hover:text-[#ca1254] transition-colors break-all">admin@wellnessvitalityaustralia.com.au</a>
                  </div>
                </li>
              </ul>
            </FooterSection>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left w-full">
          <p className="text-white/30 text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()} Wellness & Vitality Australia. Elite Clinical Services.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white text-[11px] transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white text-[11px] transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
