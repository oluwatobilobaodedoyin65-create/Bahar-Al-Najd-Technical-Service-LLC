import { ArrowRight, Expand } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS, ProjectItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onViewAllProjects: () => void;
  onInspectProject: (project: ProjectItem) => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection({
  onViewAllProjects,
  onInspectProject,
}: ProjectsSectionProps) {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full bg-[#F6F1E9] pt-14 sm:pt-16 lg:pt-[68px] pb-10 sm:pb-12 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opposing Horizontal Header Reveal */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:text-left justify-between gap-4 mb-7 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <span className="block text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#A87D2A] uppercase">
              FEATURED PROJECTS
            </span>
            <h2 className="mt-1 text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0C2B1E] tracking-[-0.02em] leading-[1.15]">
              Our Recent Work
            </h2>
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onViewAllProjects}
            className="self-center sm:self-auto inline-flex items-center gap-2 rounded-full border border-[#8E7F69]/65 bg-transparent hover:bg-[#0C2B1E] hover:border-[#0C2B1E] hover:text-white text-[#0C2B1E] font-semibold text-[13.5px] px-5 py-2.5 transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3323]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
          </motion.button>
        </div>

        {/* Gallery Curtain & Scale-Settle Reveal for the 4 Project Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[18px]">
          {featuredProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{
                opacity: 0,
                scale: 0.92,
                clipPath: 'inset(14% 0% 0% 0% round 14px)',
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0% round 14px)',
              }}
              viewport={{ once: true, amount: 'some' }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: EASE_OUT,
              }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onInspectProject(project)}
              aria-label={`Inspect project: ${project.title}`}
              className="group relative aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-[#E5DBCB] shadow-[0_6px_22px_rgba(12,43,30,0.06)] hover:shadow-[0_16px_32px_rgba(12,43,30,0.16)] transition-shadow duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3323]"
            >
              <ResilientImage
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />

              {/* Subtle Hover Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082419]/85 via-[#082419]/15 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#E4B753]">
                      {project.category}
                    </span>
                    <span className="block text-[14px] font-bold text-white leading-snug mt-0.5">
                      {project.title}
                    </span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
