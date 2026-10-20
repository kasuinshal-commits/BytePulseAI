import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Activity, Smartphone, Monitor, CheckCircle, Wifi, Battery, Play, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../../data/bytePulseData';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'web' | 'android'>('both');
  const [simulatedRequests, setSimulatedRequests] = useState(18420);
  const [aiLatency, setAiLatency] = useState(34);
  const [activeModel, setActiveModel] = useState('Claude 3.7 + Custom RAG');

  // Subtle real-time metric counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedRequests((prev) => prev + Math.floor(Math.random() * 7) - 3);
      setAiLatency((prev) => Math.max(24, Math.min(48, prev + Math.floor(Math.random() * 5) - 2)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Grids & Spotlights */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00F2FE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#9B51E0]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust / Live Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner text-xs sm:text-sm text-gray-300 hover:border-[#00F2FE]/40 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]"></span>
            </span>
            <span className="font-medium text-white">Accepting Q2/Q3 Projects</span>
            <span className="text-gray-500">•</span>
            <span className="text-[#00F2FE] font-medium hidden sm:inline">48-Hour Sprint Kickoff</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>

        {/* Catchy Editorial Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            <span className="block">We Build <span className="whitespace-nowrap">High-Performance</span></span>
            <span className="block text-gradient-cyan-purple">Web & Android Apps</span>
            <span className="block text-white">Powered by AI.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Transforming your boldest ideas into lightning-fast web applications and native mobile experiences with enterprise-grade stability and intelligence.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto btn-primary-glow text-[#0B0F19] text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left mb-16">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Sub-40ms</div>
                <div className="text-[10px] text-gray-400">AI Response Latency</div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#9B51E0]/15 flex items-center justify-center text-[#9B51E0]">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Kotlin 120 FPS</div>
                <div className="text-[10px] text-gray-400">Native Android Speed</div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">99.98% Uptime</div>
                <div className="text-[10px] text-gray-400">Zero-Downtime CI/CD</div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">4.9/5 Rating</div>
                <div className="text-[10px] text-gray-400">Clutch & G2 Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Component: Interactive 3D / Glassmorphism Card Stack */}
        <div className="relative max-w-5xl mx-auto">
          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 mb-4 px-2">
            <div className="p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-1 text-[11px] sm:text-xs overflow-x-auto no-scrollbar max-w-full">
              <button
                onClick={() => setActiveTab('both')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer shrink-0 ${
                  activeTab === 'both'
                    ? 'bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/30 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Dual Stack View
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer shrink-0 ${
                  activeTab === 'web'
                    ? 'bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/30 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Web Dashboard
              </button>
              <button
                onClick={() => setActiveTab('android')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer shrink-0 ${
                  activeTab === 'android'
                    ? 'bg-[#9B51E0]/25 text-[#9B51E0] border border-[#9B51E0]/40 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Android App Mockup
              </button>
            </div>
          </div>

          {/* Interactive Stack Container */}
          <div className="relative rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left / Center: Simulated Web Dashboard (Takes 7 or 12 cols depending on tab) */}
              {(activeTab === 'both' || activeTab === 'web') && (
                <div
                  className={`transition-all duration-300 ${
                    activeTab === 'web' ? 'lg:col-span-12' : 'lg:col-span-7'
                  }`}
                >
                  <div className="rounded-xl bg-[#0F172A] border border-[#1E293B] shadow-2xl overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="bg-[#161F30] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="px-3 py-1 rounded-md bg-[#0B0F19] text-[11px] font-mono text-gray-400 border border-white/5 flex items-center gap-2 max-w-xs truncate">
                        <span className="text-[#00F2FE]">https://</span>
                        <span>cloud.bytepulse.ai/control-plane</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ONLINE
                        </span>
                      </div>
                    </div>

                    {/* Dashboard Internal Body */}
                    <div className="p-4 sm:p-5 space-y-4">
                      {/* Top Metric Bar */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="p-3 rounded-lg bg-[#0B0F19]/80 border border-white/5">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider">AI Latency</div>
                          <div className="text-lg font-bold text-[#00F2FE] font-mono flex items-baseline gap-1">
                            {aiLatency} <span className="text-xs text-gray-400">ms</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#0B0F19]/80 border border-white/5">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider">Throughput</div>
                          <div className="text-lg font-bold text-white font-mono">
                            {simulatedRequests.toLocaleString()}
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#0B0F19]/80 border border-white/5">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider">Lighthouse</div>
                          <div className="text-lg font-bold text-emerald-400 font-mono">
                            99/100
                          </div>
                        </div>
                      </div>

                      {/* Interactive Model Selector & Graph Simulation */}
                      <div className="p-3 rounded-lg bg-[#0B0F19]/60 border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-300 font-medium flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-[#00F2FE]" />
                            Real-Time Edge Inference Pipeline
                          </span>
                          <span className="text-[11px] font-mono text-[#9B51E0] bg-[#9B51E0]/10 px-2 py-0.5 rounded border border-[#9B51E0]/20">
                            {activeModel}
                          </span>
                        </div>

                        {/* Simulated Waveform / Throughput Sparkline */}
                        <div className="h-16 flex items-end gap-1 px-1 pt-2">
                          {[35, 55, 42, 68, 75, 48, 85, 92, 60, 78, 88, 95, 72, 84, 91, 65, 80, 96, 85, 70].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t transition-all duration-500 hover:brightness-125"
                              style={{
                                height: `${h}%`,
                                background: i > 14 
                                  ? 'linear-gradient(to top, #9B51E0, #00F2FE)' 
                                  : 'linear-gradient(to top, rgba(0,242,254,0.15), rgba(0,242,254,0.7))'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Terminal Event Stream */}
                      <div className="p-2.5 rounded-lg bg-[#080C14] border border-white/5 font-mono text-[11px] text-gray-400 flex items-center justify-between">
                        <div className="flex items-center gap-2 truncate">
                          <Terminal className="w-3.5 h-3.5 text-gray-500" />
                          <span className="text-emerald-400">[READY]</span>
                          <span className="truncate">WebSocket node: client connected (TLS 1.3 | HTTP/3)</span>
                        </div>
                        <span className="text-[10px] text-gray-500 shrink-0">just now</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Right / Center: Simulated Android App Preview (Takes 5 or 12 cols depending on tab) */}
              {(activeTab === 'both' || activeTab === 'android') && (
                <div
                  className={`flex justify-center transition-all duration-300 ${
                    activeTab === 'android' ? 'lg:col-span-12' : 'lg:col-span-5'
                  }`}
                >
                  {/* Smartphone Chassis */}
                  <div className="w-full max-w-[310px] rounded-[36px] p-3 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                    {/* Punch Hole Camera */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border border-white/10 z-20" />

                    {/* Phone Screen Glass */}
                    <div className="rounded-[28px] bg-[#0B0F19] overflow-hidden border border-white/10 text-white relative">
                      {/* Android Status Bar */}
                      <div className="pt-2 px-5 pb-2 flex justify-between items-center text-[10px] text-gray-400 border-b border-white/5">
                        <span className="font-semibold text-white">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <Wifi className="w-3 h-3 text-[#00F2FE]" />
                          <span className="text-[9px] font-mono">5G</span>
                          <Battery className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>

                      {/* Android App Internal UI */}
                      <div className="p-4 space-y-3.5">
                        {/* App Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src="/logo-mark.png"
                              alt="BytePulse"
                              className="w-7 h-7 rounded-lg object-cover border border-[#00F2FE]/40"
                            />
                            <div>
                              <div className="text-xs font-bold text-white">BytePulse Native</div>
                              <div className="text-[9px] text-[#00F2FE] font-mono">Jetpack Compose 1.7</div>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                            120 FPS
                          </span>
                        </div>

                        {/* Pulse Card with Animated Glow */}
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#161F30] to-[#0F172A] border border-[#00F2FE]/30 relative overflow-hidden">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400">Hardware Telemetry</span>
                            <span className="text-[10px] text-[#00F2FE] font-mono">On-Device TFLite</span>
                          </div>
                          <div className="text-base font-extrabold text-white mb-2">
                            Neural Pipeline Active
                          </div>
                          {/* Animated Soundwave/Pulse graphic */}
                          <div className="flex items-center gap-1 h-6">
                            {[40, 70, 90, 60, 30, 80, 100, 75, 45, 85, 95, 60, 30].map((v, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-[#00F2FE] to-[#9B51E0] rounded-full animate-pulse"
                                style={{
                                  height: `${v}%`,
                                  animationDelay: `${i * 120}ms`
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Slide-in Alert Simulation */}
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <div className="text-[11px] font-semibold text-white">Zero Frame Drop</div>
                            <div className="text-[9px] text-gray-400">Offline SQLite Room Synced</div>
                          </div>
                        </div>

                        {/* Action Pills */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button className="py-2 px-2.5 rounded-lg bg-[#00F2FE]/15 hover:bg-[#00F2FE]/25 border border-[#00F2FE]/30 text-[#00F2FE] text-[10px] font-bold text-center transition-colors">
                            Run Inference
                          </button>
                          <button className="py-2 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-[10px] font-medium text-center transition-colors">
                            View Logs
                          </button>
                        </div>
                      </div>

                      {/* Android Bottom Navigation Bar */}
                      <div className="pt-2 pb-3 px-6 flex justify-around items-center border-t border-white/5 text-[9px] text-gray-400">
                        <span className="text-[#00F2FE] font-semibold">Pulse</span>
                        <span>Analytics</span>
                        <span>Models</span>
                        <span>Settings</span>
                      </div>
                      {/* Home Indicator */}
                      <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mb-1.5" />
                    </div>
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
