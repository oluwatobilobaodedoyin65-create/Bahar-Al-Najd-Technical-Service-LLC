import { useState } from 'react';
import { BenefitsStrip } from './components/BenefitsStrip';
import { ClientsSection } from './components/ClientsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LegalModal } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { ProcessSection } from './components/ProcessSection';
import { ProjectGalleryModal } from './components/ProjectGalleryModal';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { ShowcaseModal } from './components/ShowcaseModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProjectItem, ServiceItem } from './data/siteData';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteChannel, setQuoteChannel] = useState<'whatsapp' | 'form'>('form');
  const [quoteService, setQuoteService] = useState<string>('');

  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  const openQuoteModal = (
    channel: 'whatsapp' | 'form' = 'form',
    serviceName: string = ''
  ) => {
    setQuoteChannel(channel);
    setQuoteService(serviceName);
    setQuoteOpen(true);
  };

  const openProjectInspector = (project: ProjectItem) => {
    setInspectedProject(project);
    setGalleryOpen(true);
  };

  const openFullGallery = () => {
    setInspectedProject(null);
    setGalleryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E9] text-[#0D291D]">
      {/* 1. Navigation / Header */}
      <Navbar onOpenQuote={openQuoteModal} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onRequestQuote={() => openQuoteModal('form')}
          onWatchWork={() => setShowcaseOpen(true)}
          onSelectService={(service) => setActiveService(service)}
        />

        {/* 3. Benefits / Trust Strip */}
        <BenefitsStrip />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={(service) => setActiveService(service)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 6 & 7. Featured Projects & Our Process (exact visual cadence from reference) */}
        <ProjectsSection
          onViewAllProjects={openFullGallery}
          onInspectProject={openProjectInspector}
        />
        <ProcessSection />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Our Recent Clients Section */}
        <ClientsSection />

        {/* 10. Final Call-to-Action Section */}
        <CtaBanner onWhatsAppQuote={() => openQuoteModal('whatsapp')} />
      </main>

      {/* 11. Footer */}
      <Footer
        onSelectService={(service) => setActiveService(service)}
        onOpenLegal={(doc) => setLegalDoc(doc)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteOpen}
        initialChannel={quoteChannel}
        initialService={quoteService}
        onClose={() => setQuoteOpen(false)}
      />

      <ServiceDetailModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onRequestServiceQuote={(serviceTitle) => openQuoteModal('whatsapp', serviceTitle)}
      />

      <ShowcaseModal
        isOpen={showcaseOpen}
        onClose={() => setShowcaseOpen(false)}
        onRequestQuote={() => openQuoteModal('form')}
      />

      <ProjectGalleryModal
        isOpen={galleryOpen}
        selectedProject={inspectedProject}
        onSelectProject={setInspectedProject}
        onClose={() => {
          setGalleryOpen(false);
          setInspectedProject(null);
        }}
        onRequestQuote={(title) => openQuoteModal('whatsapp', title)}
      />

      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
