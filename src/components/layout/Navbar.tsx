import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

interface NavbarProps {
  onContactClick: () => void;
  onNavigateToEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigateToEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work / Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing / Estimate', href: '#estimator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with pulsating light mark */}
          <a href="#" aria-label="Byte Pulse Home" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B0F19] border border-[#00F2FE]/40 group-hover:border-[#00F2FE] transition-all shadow-[0_0_15px_rgba(0,242,254,0.35)] p-0.5">
              {/* Pulsating dot indicator */}
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE]"></span>
              </span>
              <img
                src="/logo-mark.png"
                alt="Byte Pulse - BytePulseAI Logo"
                className="w-full h-full object-cover rounded-lg transform transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Byte<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#38BDF8]">Pulse</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#9B51E0] font-black">AI</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00F2FE] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer bg-white/5 hover:bg-white/10"
            >
              <Mail className="w-3.5 h-3.5 text-[#00F2FE]" />
              Email Contact
            </button>

            <button
              onClick={onNavigateToEstimate}
              className="btn-primary-glow text-[#0B0F19] text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onNavigateToEstimate}
              className="btn-primary-glow text-[#0B0F19] text-xs font-bold px-3 py-1.5 rounded-lg sm:hidden"
            >
              Estimate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-[#00F2FE] py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 text-center rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#00F2FE]" />
                Contact via Email
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToEstimate();
                }}
                className="w-full py-3 btn-primary-glow text-[#0B0F19] text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                Get Free Project Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
