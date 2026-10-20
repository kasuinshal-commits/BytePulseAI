import React from 'react';
import { Check, X, AlertCircle, Sparkles, ArrowRight, ShieldCheck, Zap, Mail, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

interface ComparisonTableProps {
  onEstimateClick: () => void;
  onContactClick: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onEstimateClick, onContactClick }) => {
  const comparisonRows = [
    {
      feature: "Delivery Velocity",
      bytepulse: "2–6 Weeks (Rapid Agile Sprints)",
      traditional: "3–6 Months (Sluggish Waterfall)",
      freelancers: "Unpredictable & erratic delays",
      highlight: true
    },
    {
      feature: "Technology Stack",
      bytepulse: "React 19, Next.js 15 & Native Kotlin Compose",
      traditional: "Legacy WordPress / PHP / Outdated frameworks",
      freelancers: "Mixed quality & inconsistent libraries",
      highlight: false
    },
    {
      feature: "AI & LLM Integration",
      bytepulse: "Custom Autonomous Agents, RAG & Vector Embeddings",
      traditional: "Rarely offered or outsourced at 4x cost",
      freelancers: "Superficial API wrappers without security",
      highlight: true
    },
    {
      feature: "Pricing Transparency",
      bytepulse: "Fixed Milestone Tiers in ₹ (Zero hidden charges)",
      traditional: "Inflated hourly billing & retainer lock-in",
      freelancers: "Frequent scope creep & mid-project demands",
      highlight: true
    },
    {
      feature: "Quality & Code Warranty",
      bytepulse: "30-Day Post-Launch Warranty & CI/CD Automated Tests",
      traditional: "Expensive monthly maintenance retainers",
      freelancers: "Zero support once the invoice is paid",
      highlight: false
    }
  ];

  return (
    <section className="py-24 relative bg-[#090D16] border-y border-white/5">
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00F2FE]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Clear Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Founders Choose BytePulseAI
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            See how our agile, AI-accelerated engineering pods outperform bloated legacy agencies and unvetted freelancer marketplaces.
          </p>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0F172A] shadow-2xl overflow-hidden">
          {/* Mobile Swipe Notice */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 text-[11px] text-[#00F2FE] bg-[#00F2FE]/5 border-b border-white/10 py-2 px-3 font-medium">
            <span>← Swipe horizontally to see full comparison →</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider font-semibold">
                  <th className="p-5 sm:p-6 text-gray-400 w-1/4">Evaluation Factor</th>
                  
                  {/* BytePulse Column Header */}
                  <th className="p-5 sm:p-6 w-1/3 bg-[#161F30]/90 border-x border-[#00F2FE]/30 relative">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#0B0F19] p-0.5 border border-[#00F2FE]/40 overflow-hidden">
                          <img src="/logo-mark.png" alt="BytePulseAI" className="w-full h-full object-cover rounded" />
                        </div>
                        <span className="text-sm font-extrabold text-white">BytePulseAI</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] text-[#0B0F19] px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>
                  </th>

                  {/* Traditional Agencies */}
                  <th className="p-5 sm:p-6 w-1/4 text-gray-400">
                    <span className="text-xs font-semibold text-gray-300">Traditional IT Agency</span>
                  </th>

                  {/* Freelancers */}
                  <th className="p-5 sm:p-6 w-1/4 text-gray-400">
                    <span className="text-xs font-semibold text-gray-300">Freelancer Marketplaces</span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-white/[0.02] ${row.highlight ? 'bg-white/[0.01]' : ''}`}
                  >
                    {/* Feature Name */}
                    <td className="p-5 sm:p-6 font-semibold text-gray-200">
                      {row.feature}
                    </td>

                    {/* BytePulse Value (Highlighted) */}
                    <td className="p-5 sm:p-6 bg-[#161F30]/60 border-x border-[#00F2FE]/20 text-white font-medium">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-gray-100 font-semibold">{row.bytepulse}</span>
                      </div>
                    </td>

                    {/* Traditional Agency */}
                    <td className="p-5 sm:p-6 text-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5" />
                        </div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* Freelancers */}
                    <td className="p-5 sm:p-6 text-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5" />
                        </div>
                        <span>{row.freelancers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner with Dual CTAs */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#161F30] via-[#0F172A] to-[#161F30] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Zero-Risk Engineering Guarantee
              </h3>
              <p className="text-xs text-gray-400">
                Transparent milestone payments in ₹ with complete code ownership from day one.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onContactClick}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#00F2FE]" />
                Email Inquiry
              </button>

              <button
                onClick={onEstimateClick}
                className="w-1/2 sm:w-auto btn-primary-glow text-[#0B0F19] text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                Lock In Your Sprint
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
