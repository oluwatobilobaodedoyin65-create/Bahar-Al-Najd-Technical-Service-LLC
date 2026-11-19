import { ArrowRight, LampCeiling, Layers, Tv } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, ServiceItem } from '../data/siteData';
import { BuiltInOvenIcon, KitchenCabinetIcon, WardrobeHangerIcon } from './Icons';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function renderServiceIcon(iconKey: ServiceItem['iconKey']) {
  const iconClass = 'w-5 h-5 lg:w-[22px] lg:h-[22px] text-[#0D291D]/85 shrink-0';
  switch (iconKey) {
    case 'kitchen':
      return <KitchenCabinetIcon className={iconClass} />;
    case 'tv':
      return <Tv className={iconClass} strokeWidth={1.5} />;
    case 'wardrobe':
      return <WardrobeHangerIcon className={iconClass} />;
    case 'panels':
      return <Layers className={iconClass} strokeWidth={1.5} />;
    case 'appliance':
      return <BuiltInOvenIcon className={iconClass} />;
    case 'lighting':
      return <LampCeiling className={iconClass} strokeWidth={1.5} />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-[#F6F1E9] py-14 sm:py-16 lg:py-[76px] overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header with Drawing Gold Hairline Rules */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="text-center max-w-[700px] mx-auto mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3.5 mb-2.5">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70 origin-right"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#A87D2A] uppercase">
              OUR SERVICES
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70 origin-left"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0C2B1E] tracking-[-0.02em] leading-[1.15] text-balance">
            Complete Interior &amp; Technical Services
          </h2>

          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] text-[#3E4E46] leading-relaxed">
            From custom design to expert installation, we deliver functional and stylish spaces.
          </p>
        </motion.div>

        {/* Staggered Elevation Wave for the 6 Enlarged Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <motion.button
              key={service.id}
              type="button"
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{
                duration: 0.55,
                delay: (idx % 3) * 0.1 + Math.floor(idx / 3) * 0.08,
                ease: EASE_OUT,
              }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelectService(service)}
              className="group w-full text-center md:text-left rounded-[16px] bg-[#FAF6F0] border border-[#E5DBCB] overflow-hidden shadow-[0_6px_24px_rgba(12,43,30,0.05)] hover:shadow-[0_18px_36px_rgba(12,43,30,0.12)] transition-shadow duration-200 flex flex-col items-stretch cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3323]"
            >
              {/* Enlarged High-Visibility Interior Photo */}
              <div className="w-full aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#E9E0D1]">
                <ResilientImage
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body (Strictly centered on mobile < md, left-aligned on desktop md+) */}
              <div className="w-full p-4 sm:p-5 flex-1 flex flex-col items-center text-center md:items-stretch md:text-left justify-between gap-3.5">
                <div className="w-full flex items-center justify-center md:justify-start">
                  {renderServiceIcon(service.iconKey)}
                </div>

                <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-3">
                  <div className="w-full text-center md:text-left">
                    <h3 className="text-[15.5px] lg:text-[17px] font-bold text-[#0C2B1E] leading-[1.28] tracking-[-0.01em]">
                      {service.title}
                    </h3>
                    <p className="hidden lg:block mt-1.5 text-[13px] leading-[1.5] text-[#4A5B53] line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-[#C69B3E] text-[#0C2B1E] group-hover:bg-[#E4B753] group-hover:border-[#E4B753] flex items-center justify-center shrink-0 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
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
