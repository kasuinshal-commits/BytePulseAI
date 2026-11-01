import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign, Layers, ShieldAlert } from 'lucide-react';
import { ESTIMATOR_FEATURES } from '../../data/bytePulseData';
import { ServicePlatform } from '../../types';

interface EstimatorProps {
  onApplyEstimate: (data: {
    platform: string;
    scope: string;
    features: string[];
    timeline: string;
    estimatedRange: string;
  }) => void;
}

export const ServiceEstimator: React.FC<EstimatorProps> = ({ onApplyEstimate }) => {
  const [platform, setPlatform] = useState<ServicePlatform>('both');
  const [scope, setScope] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'ai-copilot',
    'auth-rbac',
    'admin-analytics',
    'ci-cd-devops'
  ]);
  const [timeline, setTimeline] = useState<'express' | 'standard' | 'flexible'>('standard');

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Dynamic calculations
  const calculation = useMemo(() => {
    // Base platform price in INR (optimized for Indian tech & startup market)
    let basePrice = 14400;
    if (platform === 'android') basePrice = 19200;
    if (platform === 'both') basePrice = 31200;

    // Scope multiplier
    let scopeMultiplier = 1.0;
    let baseDays = 14;
    if (scope === 'mvp') {
      scopeMultiplier = 0.85;
      baseDays = 10;
    } else if (scope === 'growth') {
      scopeMultiplier = 1.25;
      baseDays = 21;
    } else if (scope === 'enterprise') {
      scopeMultiplier = 1.75;
      baseDays = 35;
    }

    // Features total
    let featuresTotal = 0;
    let featuresDays = 0;
    selectedFeatures.forEach((fid) => {
      const feat = ESTIMATOR_FEATURES.find((f) => f.id === fid);
      if (feat) {
        featuresTotal += feat.price;
        featuresDays += feat.days;
      }
    });

    // Subtotal
    let rawTotal = (basePrice + featuresTotal) * scopeMultiplier;
    let rawDays = baseDays + featuresDays * 0.55;

    // Urgency multiplier
    let urgencyFactor = 1.0;
    if (timeline === 'express') {
      urgencyFactor = 1.18;
      rawDays = rawDays * 0.65;
    } else if (timeline === 'flexible') {
      urgencyFactor = 0.94;
      rawDays = rawDays * 1.15;
    }

    const finalMid = Math.round((rawTotal * urgencyFactor) / 500) * 500;
    const minPrice = Math.round((finalMid * 0.92) / 500) * 500;
    const maxPrice = Math.round((finalMid * 1.12) / 500) * 500;

    const weeksMin = Math.max(2, Math.round(rawDays / 7));
    const weeksMax = Math.round(weeksMin * 1.3) + 1;

    return {
      minPrice,
      maxPrice,
      weeksMin,
      weeksMax
    };
  }, [platform, scope, selectedFeatures, timeline]);

  const handleProceed = () => {
    const formattedPlatform = platform === 'both' ? 'Web & Android Suite' : platform === 'web' ? 'Web Application' : 'Native Android App';
    const formattedScope = scope === 'mvp' ? 'MVP Launchpad' : scope === 'growth' ? 'Scale & Growth' : 'Enterprise Tier';
    const featureLabels = selectedFeatures
      .map((id) => ESTIMATOR_FEATURES.find((f) => f.id === id)?.label)
      .filter(Boolean) as string[];

    onApplyEstimate({
      platform: formattedPlatform,
      scope: formattedScope,
      features: featureLabels,
      timeline: timeline === 'express' ? 'Express (2-3 Weeks)' : timeline === 'standard' ? 'Standard (4-6 Weeks)' : 'Flexible (7+ Weeks)',
      estimatedRange: `₹${calculation.minPrice.toLocaleString('en-IN')} - ₹${calculation.maxPrice.toLocaleString('en-IN')}`
    });
  };

  return (
    <section id="estimator" className="py-24 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00F2FE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#9B51E0]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Project Cost Calculator
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Configure your technical scope, choose specialized AI modules, and get a realistic price range and delivery timeline in real-time.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            
            {/* Step 1: Target Platform */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] text-xs flex items-center justify-center font-bold">1</span>
                  Select Target Platform
                </h3>
                <span className="text-xs text-gray-400">Core architecture</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'web', label: 'Web Application', desc: 'React 19 / Next.js SSR' },
                  { id: 'android', label: 'Native Android App', desc: 'Kotlin & Jetpack Compose' },
                  { id: 'both', label: 'Web + Android Suite', desc: 'Cross-platform unified sync', recommended: true }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPlatform(item.id as ServicePlatform)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                      platform === item.id
                        ? 'border-[#00F2FE] bg-[#00F2FE]/10 text-white shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                        : 'border-white/10 bg-[#0B0F19] text-gray-300 hover:border-white/20'
                    }`}
                  >
                    {item.recommended && (
                      <span className="absolute -top-2.5 right-3 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] text-[#0B0F19] px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                    <div className="font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope Tier */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] text-xs flex items-center justify-center font-bold">2</span>
                  Project Maturity / Scale Tier
                </h3>
                <span className="text-xs text-gray-400">Complexity level</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'mvp', title: 'MVP / Prototype', desc: 'Core proof of concept to validate and pitch investors.' },
                  { id: 'growth', title: 'Growth / Production', desc: 'Full-featured build with high scale, analytics & billing.' },
                  { id: 'enterprise', title: 'Enterprise Custom', desc: 'High availability, private VPC, custom SLA & SOC-2.' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id as any)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      scope === item.id
                        ? 'border-[#9B51E0] bg-[#9B51E0]/15 text-white shadow-[0_0_15px_rgba(155,81,224,0.2)]'
                        : 'border-white/10 bg-[#0B0F19] text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-gray-400 leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities & AI Modules */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] text-xs flex items-center justify-center font-bold">3</span>
                  Required Capabilities & Modules
                </h3>
                <span className="text-xs text-gray-400">{selectedFeatures.length} selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ESTIMATOR_FEATURES.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#00F2FE]/50 bg-[#00F2FE]/10 text-white'
                          : 'border-white/10 bg-[#0B0F19] text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[#00F2FE] border-[#00F2FE] text-[#0B0F19]'
                            : 'border-gray-500 bg-transparent'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-white leading-tight">
                          {feature.label}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-0.5">
                          +₹{feature.price.toLocaleString('en-IN')} • ~{feature.days} days
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline Urgency */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] text-xs flex items-center justify-center font-bold">4</span>
                  Deployment Urgency
                </h3>
                <span className="text-xs text-gray-400">Sprint cadence</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'express', label: 'Express Sprint', desc: 'Fastest delivery (+20% surge)' },
                  { id: 'standard', label: 'Standard Cadence', desc: 'Optimal sprint pacing' },
                  { id: 'flexible', label: 'Flexible Window', desc: '5% flexibility incentive' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      timeline === item.id
                        ? 'border-[#00F2FE] bg-[#00F2FE]/10 text-white font-semibold'
                        : 'border-white/10 bg-[#0B0F19] text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-gray-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Summary Card (Fixed / Sticky 4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-28">
            <div className="bg-gradient-to-b from-[#161F30] to-[#0F172A] border border-[#00F2FE]/30 rounded-2xl p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-white relative overflow-hidden">
              {/* Subtle neon highlight badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00F2FE]/20 to-transparent px-4 py-1 text-[11px] font-mono text-[#00F2FE]">
                LIVE ESTIMATE
              </div>

              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                Estimated Project Investment
              </div>

              {/* Price Range Display */}
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F2FE] to-[#38BDF8] font-mono tracking-tight mb-2">
                ₹{calculation.minPrice.toLocaleString('en-IN')} - ₹{calculation.maxPrice.toLocaleString('en-IN')}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-300 pb-5 border-b border-white/10 mb-5">
                <Clock className="w-4 h-4 text-[#00F2FE]" />
                Estimated Completion: <span className="font-semibold text-white">{calculation.weeksMin} - {calculation.weeksMax} Weeks</span>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-3 mb-6 text-xs">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Selected Platform:</span>
                  <span className="font-medium text-white capitalize">{platform === 'both' ? 'Web & Android' : platform}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Scope Maturity:</span>
                  <span className="font-medium text-white capitalize">{scope}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Active Modules:</span>
                  <span className="font-medium text-[#00F2FE]">{selectedFeatures.length} Features</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Code Ownership:</span>
                  <span className="font-medium text-emerald-400">100% Client IP</span>
                </div>
              </div>

              {/* Recommended Stack preview */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-6">
                <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9B51E0]" /> Suggested Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-200 font-mono">React 19 / Next.js</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-200 font-mono">Kotlin Jetpack Compose</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-200 font-mono">FastAPI / Python</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-200 font-mono">Docker CI/CD</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleProceed}
                className="w-full btn-primary-glow text-[#0B0F19] text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                Lock In Estimate & Proceed
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-gray-400 flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Fixed-price sprint guarantees available
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
