import { useEffect } from 'react';
import { ArrowRight, Check, Clock, X } from 'lucide-react';
import { ServiceItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  onClose,
  onRequestServiceQuote,
}: ServiceDetailModalProps) {
  useEffect(() => {
    if (!service) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071610]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[640px] rounded-[18px] bg-[#FAF6F0] border border-[#E5DBCB] shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Photo */}
        <div className="relative w-full aspect-[16/9] bg-[#0B3222]">
          <ResilientImage
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#082419]/80 via-transparent to-black/25"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#082419]/75 hover:bg-[#082419] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                SERVICE OVERVIEW
              </span>
              <h2
                id="service-detail-title"
                className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight mt-0.5"
              >
                {service.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#465950]">
            <Clock className="w-4 h-4 text-[#A87D2A]" />
            <span>Typical Installation Timeline:</span>
            <span className="font-bold text-[#0C2B1E] tabular-nums">{service.turnaround}</span>
          </div>

          <p className="text-[14.5px] leading-[1.65] text-[#35463E]">{service.description}</p>

          <div className="pt-2 border-t border-[#E5DBCB]">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#0C2B1E] mb-3">
              Included in Our Scope
            </h3>
            <ul className="space-y-2.5">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] text-[#283B32]"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0C3323] text-[#E4B753] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={2.6} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-end gap-3 border-t border-[#E5DBCB]">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#8E7F69]/65 hover:bg-[#0C2B1E] hover:text-white text-[#0C2B1E] font-semibold text-[13.5px] px-5 py-2.5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                const title = service.title;
                onClose();
                onRequestServiceQuote(title);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-bold text-[13.5px] px-6 py-2.5 transition-colors cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
