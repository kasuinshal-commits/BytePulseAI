import React, { useState } from 'react';
import { Compass, Palette, Code2, Rocket, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/bytePulseData';
import { ProcessStep } from '../../types';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#00F2FE]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#9B51E0]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#00F2FE]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#9B51E0]" />;
      default:
        return <Compass className="w-5 h-5 text-[#00F2FE]" />;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 relative bg-[#090D16] border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#00F2FE]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            Predictable Engineering Flow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step Product Roadmap
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A battle-tested agile methodology that eliminates guesswork, minimizes technical debt, and guarantees on-schedule delivery.
          </p>
        </div>

        {/* 4-Step Timeline Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'border-[#00F2FE] bg-[#0F172A] shadow-[0_0_20px_rgba(0,242,254,0.15)]'
                    : 'border-white/10 bg-[#0B0F19] hover:border-white/20 hover:bg-[#0F172A]/50'
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl sm:text-2xl font-black font-mono ${isActive ? 'text-[#00F2FE]' : 'text-gray-500'}`}>
                    {step.number}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                <div className="text-sm font-bold text-white mb-0.5">{step.title}</div>
                <div className="text-xs text-gray-400 truncate">{step.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="rounded-2xl bg-[#0F172A] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Details Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30">
                  PHASE {activeStep.number}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  Estimated Cadence: {activeStep.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeStep.title} — <span className="text-[#00F2FE]">{activeStep.subtitle}</span>
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Key Sprint Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white/5 border border-white/5 p-3 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next / Action button */}
              <div className="pt-2 flex items-center gap-4">
                {activeStepIndex < PROCESS_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00F2FE] hover:text-white transition-colors cursor-pointer"
                  >
                    Next Phase: {PROCESS_STEPS[activeStepIndex + 1].title}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onStartProject}
                    className="btn-primary-glow text-[#0B0F19] text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    Start Phase 1 Discovery Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Visual Process Diagram / Guarantee Badge (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Agile Pipeline Health</span>
                  <span className="text-emerald-400">100% On-Track</span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-gray-400 text-[10px]">CURRENT FOCUS</div>
                    <div className="text-white font-bold">{activeStep.title}</div>
                    <div className="text-[11px] text-[#00F2FE] mt-1">{activeStep.duration}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-gray-400 text-[10px]">CLIENT TRANSPARENCY</div>
                    <div className="text-gray-200">Daily async Loom updates + Shared GitHub & Slack channel</div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-gray-400 text-[10px]">QUALITY ASSURANCE</div>
                    <div className="text-emerald-400">Automated CI/CD regressions on each pull request</div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 text-[11px] text-gray-400 text-center">
                  Sprint Velocity Guarantee: Free rework if milestones miss acceptance criteria.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
