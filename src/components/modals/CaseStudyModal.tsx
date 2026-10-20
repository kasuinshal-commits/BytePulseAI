import React from 'react';
import { X, CheckCircle, ExternalLink, Zap, Layers, Trophy, Mail } from 'lucide-react';
import { ProjectItem } from '../../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl text-white overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 relative z-10 bg-[#0F172A]/90">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20 mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Client: <span className="text-gray-200 font-medium">{project.client}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-300">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center">
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#38BDF8]">
                  {m.value}
                </div>
                <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#00F2FE]" /> Project Architecture Overview
            </h4>
            <p className="leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111827]/70 border border-red-500/20 rounded-xl p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                The Engineering Challenge
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#111827]/70 border border-[#00F2FE]/30 rounded-xl p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#00F2FE] mb-2 flex items-center gap-1.5">
                The BytePulseAI Solution
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Quantifiable Results */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-emerald-400" /> Verifiable Business Outcomes
            </h4>
            <ul className="space-y-2.5">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#9B51E0]" /> Stack Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0B0F19] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            Want similar architecture for your next venture?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="btn-primary-glow text-[#0B0F19] font-bold px-5 py-2 rounded-lg text-xs flex items-center justify-center gap-2 w-1/2 sm:w-auto cursor-pointer"
            >
              Inquire About This Build
              <Mail className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
