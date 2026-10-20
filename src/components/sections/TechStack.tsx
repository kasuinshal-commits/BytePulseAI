import React, { useState } from 'react';
import { Layers, Code, Smartphone, Terminal, Server, Database, Cloud, Palette, Cpu, Sparkles } from 'lucide-react';
import { TECH_STACK } from '../../data/bytePulseData';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Mobile', 'AI & Backend', 'DevOps & Cloud'];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#00F2FE]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-white" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#9B51E0]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#9B51E0]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#06B6D4]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#00F2FE]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00F2FE]" />;
    }
  };

  return (
    <section className="py-20 relative bg-[#090D16] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#00F2FE]" />
            Modern Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on Battle-Tested Technologies
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            We leverage industry standard, low-latency frameworks designed for high concurrency, peak performance, and zero technical debt.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/40'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl bg-[#0F172A] border border-white/5 hover:border-[#00F2FE]/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded bg-white/5">
                  {item.category}
                </span>
              </div>

              <div>
                <div className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-gray-400 line-clamp-2">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Marquee Tech Banner */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-around gap-6 text-xs text-gray-500 font-mono">
          <span className="flex items-center gap-1.5">⚡ React 19 Verified</span>
          <span className="flex items-center gap-1.5">📱 Kotlin Jetpack Compose 1.7</span>
          <span className="flex items-center gap-1.5">🤖 Claude 3.7 & PyTorch RAG</span>
          <span className="flex items-center gap-1.5">🚀 Next.js App Router</span>
          <span className="flex items-center gap-1.5">🔒 SOC-2 Architecture</span>
        </div>

      </div>
    </section>
  );
};
