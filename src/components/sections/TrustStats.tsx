import React from 'react';
import { Star, ShieldCheck, Award, Users, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA, STATS_DATA, FAQS } from '../../data/bytePulseData';

export const TrustStats: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#0B0F19]">
      {/* Background radial spotlight */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00F2FE]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Counter Banner */}
        <div id="why-us" className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#0F172A] via-[#161F30] to-[#0F172A] border border-white/10 shadow-2xl mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F2FE] to-[#38BDF8] font-mono tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header: Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Ambitious Founders & Tech Leaders
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            See how startups and enterprise engineering teams scale their product roadmaps with BytePulseAI.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-7 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-[#00F2FE]/30 transition-all duration-300 flex flex-col justify-between relative shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none" />

              <div>
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                    {testimonial.metricBadge}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Executive Role & Organization */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F2FE]/15 to-[#9B51E0]/15 border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE] shrink-0 shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                  <ShieldCheck className="w-5 h-5 text-[#00F2FE]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-white truncate">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5 whitespace-nowrap overflow-hidden">
                    <span className="text-gray-300 truncate">{testimonial.company}</span>
                    <span className="text-gray-600 shrink-0">•</span>
                    <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <CheckCircle className="w-3 h-3 shrink-0" />
                      <span>Verified Client</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Everything you need to know about working with BytePulseAI
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-3.5 border-l border-white/10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
