import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServiceEstimator } from './components/sections/ServiceEstimator';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { Portfolio } from './components/sections/Portfolio';
import { TechStack } from './components/sections/TechStack';
import { TrustStats } from './components/sections/TrustStats';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { BytePulseCopilot } from './components/chat/BytePulseCopilot';
import { ProjectItem } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [estimatorPrefill, setEstimatorPrefill] = useState<{
    platform: string;
    scope: string;
    features: string[];
    timeline: string;
    estimatedRange: string;
  } | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setEstimatorPrefill({
      platform: serviceName,
      scope: 'Standard Architecture',
      features: ['Core Modules', 'API Integration'],
      timeline: 'Standard (4-6 Weeks)',
      estimatedRange: 'Custom Quote via Email'
    });
    handleScrollToSection('contact');
  };

  const handleApplyEstimate = (data: {
    platform: string;
    scope: string;
    features: string[];
    timeline: string;
    estimatedRange: string;
  }) => {
    setEstimatorPrefill(data);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#00F2FE]/20 selection:text-[#00F2FE] overflow-x-hidden w-full max-w-full">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onContactClick={() => handleScrollToSection('contact')}
        onNavigateToEstimate={() => handleScrollToSection('estimator')}
      />

      {/* Main Content */}
      <main className="flex-grow overflow-x-hidden w-full max-w-full">
        {/* 1. Hero Section */}
        <Hero
          onStartProject={() => handleScrollToSection('estimator')}
          onExploreServices={() => handleScrollToSection('services')}
        />

        {/* 2. Interactive Service Estimator / Cost Calculator */}
        <ServiceEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 3. Core Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* 4. 4-Step Process Roadmap */}
        <Process onStartProject={() => handleScrollToSection('contact')} />

        {/* 5. BytePulseAI vs Traditional Agencies vs Freelancers */}
        <ComparisonTable
          onEstimateClick={() => handleScrollToSection('estimator')}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* 6. Showcase / Portfolio Section */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Tech Stack Grid / Carousel */}
        <TechStack />

        {/* 8. Trust & Testimonials + Stats Counter */}
        <TrustStats />

        {/* 9. Lead Generation Contact Form */}
        <ContactSection prefillData={estimatorPrefill} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating AI Copilot */}
      <BytePulseCopilot />

      {/* Case Study Details Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => {
          setEstimatorPrefill({
            platform: projectName || 'Case Study Architecture',
            scope: 'Production Grade',
            features: ['Full Stack', 'Cloud & AI Deployment'],
            timeline: 'Standard (4-6 Weeks)',
            estimatedRange: 'Custom Quote via Email'
          });
          handleScrollToSection('contact');
        }}
      />
    </div>
  );
}

export default App;
