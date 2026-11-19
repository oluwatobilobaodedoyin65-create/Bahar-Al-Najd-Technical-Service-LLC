import { ArrowRight, Layers, Tv } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/siteData';
import { BuiltInOvenIcon, KitchenCabinetIcon, WardrobeHangerIcon } from './Icons';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

function renderServiceIcon(iconKey: ServiceItem['iconKey']) {
  const iconClass = 'w-5 h-5 text-[#0D291D]/85 shrink-0';
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
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-[#F6F1E9] py-14 sm:py-16 lg:py-[70px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header matching reference */}
        <div className="text-center max-w-[700px] mx-auto mb-10 lg:mb-11">
          <div className="inline-flex items-center justify-center gap-3.5 mb-2.5">
            <span className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#A87D2A] uppercase">
              OUR SERVICES
            </span>
            <span className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70" aria-hidden="true" />
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0C2B1E] tracking-[-0.02em] leading-[1.15] text-balance">
            Complete Interior &amp; Technical Services
          </h2>

          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] text-[#3E4E46] leading-relaxed">
            From custom design to expert installation, we deliver functional and stylish spaces.
          </p>
        </div>

        {/* 5 Service Cards in single horizontal row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[18px]">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectService(service)}
              className="group text-left rounded-[14px] bg-[#FAF6F0] border border-[#E5DBCB] overflow-hidden shadow-[0_6px_22px_rgba(12,43,30,0.04)] hover:shadow-[0_14px_30px_rgba(12,43,30,0.1)] hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C3323]"
            >
              {/* Top Photo */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#E9E0D1]">
                <ResilientImage
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col items-center text-center sm:items-stretch sm:text-left justify-between gap-3">
                <div>{renderServiceIcon(service.iconKey)}</div>

                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 sm:gap-2 w-full">
                  <h3 className="text-[14.5px] font-bold text-[#0C2B1E] leading-[1.28] tracking-[-0.01em] text-center sm:text-left">
                    {service.shortTitleLines.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="w-7 h-7 rounded-full border border-[#C69B3E] text-[#0C2B1E] group-hover:bg-[#E4B753] group-hover:border-[#E4B753] flex items-center justify-center shrink-0 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
