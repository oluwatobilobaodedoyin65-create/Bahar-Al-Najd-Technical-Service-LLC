import { Fragment } from 'react';
import {
  ArrowRight,
  Check,
  MessageSquareMore,
  PencilRuler,
  Settings,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Discuss your needs, ideas, and vision.',
    Icon: MessageSquareMore,
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Create and finalize a tailored solution for your space.',
    Icon: PencilRuler,
  },
  {
    number: '03',
    title: 'Installation',
    description: 'Professional execution and clean installation.',
    Icon: Settings,
  },
  {
    number: '04',
    title: 'Handover',
    description: 'A beautifully finished space, ready to enjoy.',
    Icon: Check,
  },
];

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="w-full bg-[#F6F1E9] pb-14 sm:pb-16 lg:pb-[70px]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Rounded Deep Forest-Green Process Banner from Reference */}
        <div className="rounded-[20px] bg-[#09281B] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-9 shadow-[0_14px_38px_rgba(9,40,27,0.14)] border border-white/5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
            {/* Left Intro Block */}
            <div className="lg:w-[270px] xl:w-[290px] lg:shrink-0 lg:pr-8 lg:border-r lg:border-white/15">
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                OUR PROCESS
              </span>
              <h2
                id="process-heading"
                className="mt-1.5 text-[24px] sm:text-[26px] font-extrabold text-white leading-[1.18] tracking-[-0.02em] text-balance"
              >
                A Simple, Hassle-Free Process
              </h2>
              <p className="mt-2 text-[12.5px] leading-[1.55] text-white/70">
                From consultation to final handover, we make your interior installation smooth, transparent, and stress-free.
              </p>
            </div>

            {/* Right 4 Horizontal Steps with Connecting Arrows */}
            <div className="flex-1 lg:pl-8 xl:pl-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start lg:items-center gap-6 lg:gap-2">
                {PROCESS_STEPS.map((step, index) => {
                  const Icon = step.Icon;
                  return (
                    <Fragment key={step.number}>
                      <div className="flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-4 lg:gap-2.5">
                        {/* White Circular Icon Badge matching Reference */}
                        <div className="relative w-12 h-12 rounded-full bg-white text-[#09281B] flex items-center justify-center shrink-0 shadow-[0_6px_16px_rgba(0,0,0,0.22)]">
                          <Icon className="w-5 h-5" strokeWidth={2} />
                        </div>

                        <div>
                          <div className="flex items-center lg:justify-center gap-1.5 text-[14px] font-bold text-white leading-snug">
                            <span className="text-[#E4B753] tabular-nums text-[12px] font-bold">
                              {step.number}
                            </span>
                            <span className="text-white/35" aria-hidden="true">
                              —
                            </span>
                            <span>{step.title}</span>
                          </div>
                          <p className="mt-1 text-[12px] leading-[1.45] text-white/72 max-w-[185px] lg:mx-auto">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index < PROCESS_STEPS.length - 1 && (
                        <div
                          className="hidden lg:flex items-center justify-center text-white/45 px-1 -mt-6"
                          aria-hidden="true"
                        >
                          <ArrowRight className="w-4 h-4" strokeWidth={1.7} />
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
