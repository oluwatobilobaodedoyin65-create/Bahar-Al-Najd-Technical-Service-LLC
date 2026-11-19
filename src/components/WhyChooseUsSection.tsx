import { Gem, ShieldCheck, Users } from 'lucide-react';
import { WHY_CHOOSE_IMAGE } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

const FEATURES = [
  {
    id: 'craftsmanship',
    titleLine1: 'Skilled',
    titleLine2: 'Craftsmanship',
    description:
      'Professional workmanship focused on delivering quality installations and beautiful finishes.',
    Icon: Gem,
  },
  {
    id: 'detail',
    titleLine1: 'Attention',
    titleLine2: 'to Detail',
    description:
      'Careful finishing and attention to every detail of your interior project.',
    Icon: ShieldCheck,
  },
  {
    id: 'customer',
    titleLine1: 'Customer-',
    titleLine2: 'Focused Service',
    description:
      "Reliable communication and a service experience focused on the customer's needs.",
    Icon: Users,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0B3222] overflow-hidden"
    >
      {/* Mobile / Tablet Top Photo */}
      <div className="lg:hidden relative w-full aspect-[16/9] max-h-[340px] overflow-hidden">
        <ResilientImage
          src={WHY_CHOOSE_IMAGE}
          alt="Luxury contemporary living room with marble TV wall, fluted oak slats, and illuminated wooden shelves"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-2 bg-[#E4B753]"
          aria-hidden="true"
        />
      </div>

      {/* Desktop Left Full-Bleed Architectural Photo */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[56%] overflow-hidden">
        <ResilientImage
          src={WHY_CHOOSE_IMAGE}
          alt="Luxury contemporary living room with marble TV wall, fluted oak slats, and illuminated wooden shelves"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B3222]/35"
          aria-hidden="true"
        />
      </div>

      {/* Desktop Sweeping Gold & Forest-Green Curved Overlay matching Reference Blueprint */}
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Outer Warm Gold Crescent Ribbon */}
        <path
          d="M 745 0 C 668 135 668 285 745 420 L 1440 420 L 1440 0 Z"
          fill="#E4B753"
        />
        {/* Inner Deep Forest-Green Curved Panel */}
        <path
          d="M 764 0 C 686 135 686 285 764 420 L 1440 420 L 1440 0 Z"
          fill="#0B3222"
        />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:ml-[48%] py-11 sm:py-13 lg:py-14 lg:pl-12 xl:pl-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3.5 mb-2.5">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
              WHY CHOOSE US
            </span>
            <span className="w-12 sm:w-16 h-[1px] bg-[#E4B753]/75" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-extrabold text-white leading-[1.16] tracking-[-0.02em] max-w-[500px] text-balance">
            Trusted for Quality,
            <br />
            Detail and Reliability
          </h2>

          {/* Three Feature Columns */}
          <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/20">
            {FEATURES.map(({ id, titleLine1, titleLine2, description, Icon }, idx) => (
              <div
                key={id}
                className={`flex flex-col items-start sm:items-center sm:text-center ${
                  idx === 0
                    ? 'sm:pr-5'
                    : idx === 1
                    ? 'sm:px-5'
                    : 'sm:pl-5'
                }`}
              >
                <Icon
                  className="w-10 h-10 text-[#E4B753] mb-3 shrink-0"
                  strokeWidth={1.35}
                />
                <h3 className="text-[14.5px] font-bold text-white leading-[1.28]">
                  <span className="block">{titleLine1}</span>
                  <span className="block">{titleLine2}</span>
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-white/75 max-w-[200px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
