import { Clock, Gem, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_IMAGE } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    id: 'craftsmanship',
    titleLine1: 'Skilled',
    titleLine2: 'Craftsmanship',
    description:
      'Professional workmanship focused on delivering quality installations and beautiful finishes.',
    Icon: Gem,
    mobileOnly: false,
  },
  {
    id: 'detail',
    titleLine1: 'Attention',
    titleLine2: 'to Detail',
    description:
      'Careful finishing and attention to every detail of your interior project.',
    Icon: ShieldCheck,
    mobileOnly: false,
  },
  {
    id: 'customer',
    titleLine1: 'Customer-',
    titleLine2: 'Focused Service',
    description:
      "Reliable communication and a service experience focused on the customer's needs.",
    Icon: Users,
    mobileOnly: false,
  },
  {
    id: 'timely',
    titleLine1: 'On-Time',
    titleLine2: 'Completion',
    description:
      'Dependable scheduling and punctual handover without compromising finish quality.',
    Icon: Clock,
    mobileOnly: true,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0B3222] overflow-hidden"
    >
      {/* Mobile / Tablet Top Photo — Zoom-Out Settle */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.75, ease: EASE_OUT }}
        className="lg:hidden relative w-full aspect-[16/9] max-h-[340px] overflow-hidden"
      >
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
      </motion.div>

      {/* Desktop Left Full-Bleed Architectural Photo — Parallax-like Zoom Settle */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.85, ease: EASE_OUT }}
        className="hidden lg:block absolute inset-y-0 left-0 w-[56%] overflow-hidden"
      >
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
      </motion.div>

      {/* Desktop Sweeping Gold & Forest-Green Curved Overlay */}
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
      >
        <path
          d="M 745 0 C 668 135 668 285 745 420 L 1440 420 L 1440 0 Z"
          fill="#E4B753"
        />
        <path
          d="M 764 0 C 686 135 686 285 764 420 L 1440 420 L 1440 0 Z"
          fill="#0B3222"
        />
      </svg>

      {/* Content Container — Directional Slide from Right */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:ml-[48%] py-11 sm:py-13 lg:py-14 lg:pl-12 xl:pl-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 mb-2.5">
              <span className="lg:hidden w-10 h-[1px] bg-[#E4B753]/75" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                WHY CHOOSE US
              </span>
              <span className="w-10 sm:w-16 h-[1px] bg-[#E4B753]/75" aria-hidden="true" />
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-extrabold text-white leading-[1.16] tracking-[-0.02em] max-w-[500px] mx-auto lg:mx-0 text-balance">
              Trusted for Quality,
              <br />
              Detail and Reliability
            </h2>
          </motion.div>

          {/* Feature Grid: Staggered Scale & Fade Pillars */}
          <div className="mt-7 sm:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-0 lg:divide-x lg:divide-white/20">
            {FEATURES.map(
              ({ id, titleLine1, titleLine2, description, Icon, mobileOnly }, idx) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 22, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.16 + idx * 0.1,
                    ease: EASE_OUT,
                  }}
                  whileHover={{ y: -3 }}
                  className={`${
                    mobileOnly ? 'lg:hidden' : ''
                  } flex flex-col items-center text-center rounded-xl bg-white/[0.04] border border-white/10 p-4 lg:p-0 lg:bg-transparent lg:border-0 lg:rounded-none ${
                    idx === 0
                      ? 'lg:pr-5'
                      : idx === 1
                      ? 'lg:px-5'
                      : idx === 2
                      ? 'lg:pl-5'
                      : ''
                  }`}
                >
                  <Icon
                    className="w-9 h-9 sm:w-10 sm:h-10 text-[#E4B753] mb-2.5 sm:mb-3 shrink-0"
                    strokeWidth={1.35}
                  />
                  <h3 className="text-[14px] sm:text-[14.5px] font-bold text-white leading-[1.28]">
                    <span className="block">{titleLine1}</span>
                    <span className="block">{titleLine2}</span>
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[11.5px] sm:text-[12px] leading-[1.5] text-white/75 max-w-[200px]">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
