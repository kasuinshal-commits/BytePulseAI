import React, { useState } from 'react';
import { ExternalLink, Sparkles, Trophy, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/bytePulseData';
import { ProjectItem } from '../../types';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'android' | 'ai'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category === 'web' || p.category === 'both';
    if (filter === 'android') return p.category === 'android' || p.category === 'both';
    if (filter === 'ai') return p.category === 'ai';
    return true;
  });

  return (
    <section id="portfolio" className="py-24 relative bg-[#0B0F19] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#9B51E0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Work & Case Studies
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl">
              Explore how we helped high-growth ventures engineer native Android apps, modern Next.js web applications, and autonomous AI agents.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0F172A] p-1.5 rounded-xl border border-white/10 shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Apps' },
              { id: 'android', label: 'Android Apps' },
              { id: 'ai', label: 'AI Solutions' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#00F2FE] text-[#0B0F19] shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#0F172A] border border-white/10 hover:border-[#00F2FE]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
            >
              {/* Mockup Card Top Image with Glass Overlays */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                {/* Category Badge & Click prompt */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 text-white">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:text-[#00F2FE] group-hover:border-[#00F2FE]/50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Key Metrics Overlaid at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                      <div className="text-xs font-bold text-[#00F2FE] font-mono">{m.value}</div>
                      <div className="text-[10px] text-gray-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-1">
                    Client: <span className="text-gray-300">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00F2FE] transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#00F2FE] flex items-center gap-1 group-hover:underline">
                    View Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
