import React from 'react';
import { Globe, Smartphone, Cpu, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/bytePulseData';
import { ServiceItem } from '../../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#00F2FE]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#9B51E0]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#00F2FE]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#9B51E0]" />;
      default:
        return <Globe className="w-6 h-6 text-[#00F2FE]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#0B0F19]">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9B51E0]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B51E0]/10 border border-[#9B51E0]/25 text-[#9B51E0] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering High-Performance Digital Products
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            From reactive web platforms to native Android apps and specialized AI pipelines, we deliver production-ready software built to outscale the competition.
          </p>
        </div>

        {/* 4-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-2xl p-7 sm:p-8 bg-[#0F172A] border border-white/10 hover:border-[#00F2FE]/50 transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(0,242,254,0.15)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Corner Glow on hover */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#00F2FE]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header: Icon, Badge, Metric */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-13 h-13 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center group-hover:border-[#00F2FE]/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-gray-300 mb-1">
                      {service.badge}
                    </span>
                    <div className="text-[11px] font-mono text-[#00F2FE]">
                      {service.metrics}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00F2FE] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Key Deliverables / Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-[#00F2FE]/15 text-[#00F2FE] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA Footer */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0B0F19] text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00F2FE] hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  Request Scope
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
