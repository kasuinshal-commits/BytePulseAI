import React, { useState } from 'react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#070A11] border-t border-white/5 pt-16 pb-12 text-gray-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#00F2FE]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.3)] p-0.5 overflow-hidden">
                <img src="/logo-mark.png" alt="BytePulseAI Logo" className="w-full h-full object-cover rounded" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Byte<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#38BDF8]">Pulse</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#9B51E0] font-black">AI</span>
              </span>
            </a>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.tagline}. We engineer high-velocity custom web applications, native Android experiences, and LLM automation systems for forward-thinking companies.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational • AI Nodes Active
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-[#00F2FE] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-[#00F2FE] transition-colors">Custom Web Development</a></li>
              <li><a href="#services" className="hover:text-[#00F2FE] transition-colors">Native Android Apps (Kotlin)</a></li>
              <li><a href="#services" className="hover:text-[#00F2FE] transition-colors">AI & LLM Integration</a></li>
              <li><a href="#services" className="hover:text-[#00F2FE] transition-colors">UI/UX & Design Systems</a></li>
              <li><a href="#estimator" className="hover:text-[#00F2FE] transition-colors">Cost & Timeline Estimator</a></li>
            </ul>
          </div>

          {/* Quick Links: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Work
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#portfolio" className="hover:text-[#00F2FE] transition-colors">Case Studies & Showcase</a></li>
              <li><a href="#process" className="hover:text-[#00F2FE] transition-colors">4-Step Agile Process</a></li>
              <li><a href="#why-us" className="hover:text-[#00F2FE] transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#00F2FE] transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#00F2FE] transition-colors">Contact via Email</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              AI Engineering Dispatch
            </h4>
            <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
              Bi-weekly technical insights on Jetpack Compose, Next.js architecture, and LLM edge deployment.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="architect@tech.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1 rounded-lg bg-[#00F2FE] text-[#0B0F19] hover:bg-[#38BDF8] transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-gray-500">No marketing fluff. Unsubscribe anytime.</div>
              </form>
            ) : (
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Security & SOC-2</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
