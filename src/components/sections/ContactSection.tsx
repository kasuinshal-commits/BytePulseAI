import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileCode, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

interface ContactSectionProps {
  prefillData?: {
    platform: string;
    scope: string;
    features: string[];
    timeline: string;
    estimatedRange: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web & Android Ecosystem');
  const [budget, setBudget] = useState('₹18,000 - ₹45,000');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (prefillData) {
      setService(prefillData.platform);
      setBudget(prefillData.estimatedRange);
      setDetails(
        `Pre-configured from Estimator:\n• Scope: ${prefillData.scope}\n• Timeline: ${prefillData.timeline}\n• Modules: ${prefillData.features.join(', ')}\n\nProject details: `
      );
    }
  }, [prefillData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDetails('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090D16] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00F2FE]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Fast-Track Consultation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Engineer Your Next Product
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Receive a detailed technical architectural proposal and fixed-price quote within 24 hours.
          </p>
        </div>

        {/* Form & Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Engineering Channels
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                Skip the bureaucracy. Chat with our core solutions engineering team directly via your preferred channel.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 mb-6">
                {/* Channel 1: Primary Email with 1-click copy */}
                <div className="w-full p-4 rounded-xl bg-gradient-to-r from-[#00F2FE]/10 to-[#9B51E0]/10 border border-[#00F2FE]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#00F2FE]/20 text-[#00F2FE] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Direct Engineering Email
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20BytePulseAI`}
                        className="text-xs text-[#00F2FE] hover:underline font-mono"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=Project%20Inquiry%20-%20BytePulseAI`}
                      className="px-3 py-1 rounded-lg bg-[#00F2FE] text-[#0B0F19] text-[11px] font-bold hover:bg-[#38BDF8] transition-colors"
                    >
                      Open Mail
                    </a>
                  </div>
                </div>

                {/* Channel 2: PRD / Requirements Submission */}
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Project%20PRD%20/%20Technical%20Scope%20Review`}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#9B51E0]/15 text-[#9B51E0] flex items-center justify-center shrink-0">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                        Send PRD / Technical Document
                      </div>
                      <div className="text-xs text-gray-400">
                        Email your requirements doc or wireframes
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00F2FE] group-hover:translate-x-1 transition-all" />
                </a>

                {/* Channel 3: Rapid Response Guarantee */}
                <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-left flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Guaranteed 24h Response
                      </div>
                      <div className="text-xs text-gray-400">
                        Architectural feasibility & proposal in under 24 hours
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">24h SLA</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-5 border-t border-white/5 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Non-Disclosure Agreement (NDA) on request</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00F2FE]" />
                  <span>Transparent sprint velocity with zero lock-in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Generation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Request Technical Proposal & Scope
                    </h3>
                    <span className="text-xs text-[#00F2FE] font-mono">Step 1 of 1</span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Your Full Name <span className="text-[#00F2FE]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Business Email <span className="text-[#00F2FE]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@venture.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed and Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F2FE] transition-colors"
                      >
                        <option value="Custom Web Development">Custom Web Development (React / Next.js)</option>
                        <option value="Native Android App">Native Android App (Kotlin / Compose)</option>
                        <option value="Web & Android Ecosystem">Web & Android Ecosystem (Both)</option>
                        <option value="AI & Automation Integration">AI & Automation / LLM Copilot</option>
                        <option value="UI/UX & Digital Strategy">UI/UX & Digital Strategy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F2FE] transition-colors"
                      >
                        <option value="< ₹18,000">&lt; ₹18,000 (Consulting / MVP Prototype)</option>
                        <option value="₹18,000 - ₹45,000">₹18,000 – ₹45,000 (Standard Web / Android Build)</option>
                        <option value="₹45,000 - ₹90,000">₹45,000 – ₹90,000 (Full-Stack & Native App + AI)</option>
                        <option value="₹90,000+">₹90,000+ (Enterprise Multi-Platform Suite)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your application goals, target audience, preferred tech stack, or integrations needed..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-glow text-[#0B0F19] font-bold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin" />
                        Generating Architecture Scope...
                      </span>
                    ) : (
                      <>
                        Submit Inquiry & Get Free Scope
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    🔒 We respect your confidentiality. Zero spam. We reply within 24 business hours.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Our Lead Architect is reviewing your requirements for <span className="text-[#00F2FE] font-medium">{service}</span> and will send an initial architectural breakdown to <span className="text-white font-mono">{email}</span>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=Follow-up:%20Inquiry%20from%20${encodeURIComponent(name)}`}
                      className="btn-primary-glow text-[#0B0F19] text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer"
                    >
                      Need Urgent Response? Email Directly
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
