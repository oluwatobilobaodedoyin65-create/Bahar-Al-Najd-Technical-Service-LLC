import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ProjectGalleryModalProps {
  isOpen: boolean;
  selectedProject: ProjectItem | null;
  onSelectProject: (project: ProjectItem | null) => void;
  onClose: () => void;
  onRequestQuote: (serviceName?: string) => void;
}

const CATEGORIES: Array<'All' | ProjectItem['category']> = [
  'All',
  'Kitchens',
  'TV & Living',
  'Wardrobes & Bedrooms',
  'Interior Finishing',
];

export function ProjectGalleryModal({
  isOpen,
  selectedProject,
  onSelectProject,
  onClose,
  onRequestQuote,
}: ProjectGalleryModalProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectItem['category']>('All');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) {
          onSelectProject(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, selectedProject, onSelectProject, onClose]);

  if (!isOpen) return null;

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071610]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projects-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1040px] max-h-[90vh] rounded-[18px] bg-[#FAF6F0] border border-[#E5DBCB] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B3222] px-6 py-5 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
              PORTFOLIO ARCHIVE
            </span>
            <h2
              id="projects-modal-title"
              className="text-[22px] font-extrabold text-white leading-tight mt-0.5"
            >
              {selectedProject ? selectedProject.title : 'Completed Interior Projects'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project gallery"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {selectedProject ? (
            <div className="space-y-5">
              <div className="aspect-[16/9] w-full rounded-[14px] overflow-hidden bg-[#E5DBCB]">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-[640px]">
                  <div className="text-[12px] font-semibold text-[#A87D2A] uppercase tracking-[0.14em]">
                    {selectedProject.category} · {selectedProject.location}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-[#35463E]">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectProject(null)}
                    className="rounded-full border border-[#8E7F69]/65 hover:bg-[#0C2B1E] hover:text-white text-[#0C2B1E] font-semibold text-[13.5px] px-4 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    All Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const cat = selectedProject.title;
                      onClose();
                      onRequestQuote(cat);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-bold text-[13.5px] px-5 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Request Similar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Interactive Category Filter Bar */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#0C3323] text-white'
                          : 'bg-[#EFE8DC] text-[#35463E] hover:bg-[#E4DAC9] hover:text-[#0C2B1E]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="group text-left rounded-[14px] overflow-hidden bg-white border border-[#E5DBCB] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#E5DBCB]">
                      <ResilientImage
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="block text-[11px] font-semibold text-[#A87D2A] uppercase tracking-[0.12em]">
                        {project.category}
                      </span>
                      <h3 className="mt-0.5 text-[15px] font-bold text-[#0C2B1E]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] text-[#55665E] line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
