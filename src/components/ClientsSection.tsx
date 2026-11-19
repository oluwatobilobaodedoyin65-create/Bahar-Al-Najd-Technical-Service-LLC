import { motion } from 'motion/react';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function PrivateHomeownersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 shrink-0" aria-hidden="true">
      <path
        d="M9 22.5L24 10L39 22.5V39H9V22.5Z"
        fill="#FFF6E2"
        stroke="#5C3B14"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 23.5L24 9L41.5 23.5L38.8 26.2L24 13.8L9.2 26.2L6.5 23.5Z"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 39V28.5C19.5 27.4 20.4 26.5 21.5 26.5H26.5C27.6 26.5 28.5 27.4 28.5 28.5V39"
        fill="#E4B753"
        stroke="#5C3B14"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RealEstateDevelopersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 shrink-0" aria-hidden="true">
      <rect
        x="8"
        y="19"
        width="10"
        height="20"
        rx="1.2"
        fill="#F6D588"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <rect
        x="18"
        y="9"
        width="13"
        height="30"
        rx="1.2"
        fill="#FFF6E2"
        stroke="#5C3B14"
        strokeWidth="2.1"
      />
      <rect
        x="31"
        y="17"
        width="9"
        height="22"
        rx="1.2"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <path
        d="M22 14H23.8M25.8 14H27.6M22 19H23.8M25.8 19H27.6M22 24H23.8M25.8 24H27.6M22 29H23.8M25.8 29H27.6M11.5 24H14.5M11.5 29H14.5M34.5 22.5H36.8M34.5 27.5H36.8M34.5 32.5H36.8"
        stroke="#5C3B14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="22.5" y="33.5" width="4" height="5.5" fill="#E4B753" stroke="#5C3B14" strokeWidth="1.6" />
    </svg>
  );
}

function HotelsHospitalityIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 shrink-0" aria-hidden="true">
      <rect
        x="10"
        y="14"
        width="28"
        height="25"
        rx="1.8"
        fill="#FFF6E2"
        stroke="#5C3B14"
        strokeWidth="2.1"
      />
      <rect
        x="15"
        y="9"
        width="18"
        height="5.5"
        rx="1.2"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <path
        d="M15.5 19.5H18M22.8 19.5H25.2M30 19.5H32.5M15.5 24.5H18M22.8 24.5H25.2M30 24.5H32.5M15.5 29.5H18M30 29.5H32.5"
        stroke="#5C3B14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 39V31C21 29.9 21.9 29 23 29H25C26.1 29 27 29.9 27 31V39"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <line x1="7" y1="39" x2="41" y2="39" stroke="#5C3B14" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function CommercialOfficesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 shrink-0" aria-hidden="true">
      <rect
        x="15"
        y="9"
        width="18"
        height="30"
        rx="1.5"
        fill="#FFF6E2"
        stroke="#5C3B14"
        strokeWidth="2.1"
      />
      <rect
        x="9"
        y="18"
        width="6"
        height="21"
        rx="1"
        fill="#F6D588"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <rect
        x="33"
        y="18"
        width="6"
        height="21"
        rx="1"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2"
      />
      <path
        d="M20 14.5H22.2M25.8 14.5H28M20 19.5H22.2M25.8 19.5H28M20 24.5H22.2M25.8 24.5H28M20 29.5H22.2M25.8 29.5H28"
        stroke="#5C3B14"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="21.5" y="33.5" width="5" height="5.5" fill="#E4B753" stroke="#5C3B14" strokeWidth="1.6" />
    </svg>
  );
}

function RetailSpacesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 shrink-0" aria-hidden="true">
      <rect
        x="10"
        y="21"
        width="28"
        height="18"
        rx="1.5"
        fill="#FFF6E2"
        stroke="#5C3B14"
        strokeWidth="2.1"
      />
      <path
        d="M7.5 21L10.5 11.5H37.5L40.5 21H7.5Z"
        fill="#F0BE59"
        stroke="#5C3B14"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.5L14.5 21M24 11.5V21M32 11.5L33.5 21"
        stroke="#5C3B14"
        strokeWidth="1.8"
      />
      <path
        d="M7.5 21C7.5 23.2 9.3 25 11.5 25C13.7 25 15.5 23.2 15.5 21C15.5 23.2 17.3 25 19.5 25C21.7 25 23.5 23.2 23.5 21C23.5 23.2 25.3 25 27.5 25C29.7 25 31.5 23.2 31.5 21C31.5 23.2 33.3 25 35.5 25C37.7 25 39.5 23.2 39.5 21"
        fill="#F6D588"
        stroke="#5C3B14"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <rect x="20.5" y="29" width="7" height="10" fill="#F6D588" stroke="#5C3B14" strokeWidth="1.9" />
      <line x1="7" y1="39" x2="41" y2="39" stroke="#5C3B14" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

const CLIENT_CATEGORIES = [
  {
    id: 'homeowners',
    line1: 'Private',
    line2: 'Homeowners',
    Icon: PrivateHomeownersIcon,
  },
  {
    id: 'developers',
    line1: 'Real Estate',
    line2: 'Developers',
    Icon: RealEstateDevelopersIcon,
  },
  {
    id: 'hospitality',
    line1: 'Hotels &',
    line2: 'Hospitality',
    Icon: HotelsHospitalityIcon,
  },
  {
    id: 'offices',
    line1: 'Commercial',
    line2: 'Offices',
    Icon: CommercialOfficesIcon,
  },
  {
    id: 'retail',
    line1: 'Retail',
    line2: 'Spaces',
    Icon: RetailSpacesIcon,
  },
];

export function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="w-full bg-[#F6F1E9] py-10 sm:py-12 lg:py-14 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Entrance + Vertical Gold Rule Draw + Spring Tile Pop-In */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="rounded-[20px] bg-[#072B1C] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-8 shadow-[0_14px_38px_rgba(7,43,28,0.16)] border border-white/5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-0">
            {/* Left Copy Block */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}
              className="lg:w-[360px] xl:w-[395px] lg:shrink-0 lg:pr-8 text-center lg:text-left"
            >
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                OUR RECENT CLIENTS
              </span>

              <h2
                id="clients-heading"
                className="mt-1.5 text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-white leading-[1.15] tracking-[-0.015em]"
              >
                <span className="block">Trusted by</span>
                <span className="block">Homeowners &amp; Businesses</span>
              </h2>

              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-white/82 max-w-[360px] mx-auto lg:mx-0">
                We are proud to work with a growing number of satisfied clients across residential and commercial projects.
              </p>
            </motion.div>

            {/* Vertical Gold Rule Drawing from Center */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE_OUT }}
              className="hidden lg:block w-[1.5px] h-[112px] bg-[#E4B753]/55 shrink-0 origin-center"
              aria-hidden="true"
            />

            {/* Right 5 Cream Category Tiles — Elastic Spring Pop-In */}
            <div className="flex-1 lg:pl-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
                {CLIENT_CATEGORIES.map(({ id, line1, line2, Icon }, idx) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.84, y: 18 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                      delay: 0.16 + idx * 0.07,
                    }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="rounded-[14px] bg-[#FAF4E8] px-3 py-4 sm:py-4.5 flex flex-col items-center justify-center text-center shadow-[0_6px_18px_rgba(0,0,0,0.14)] last:col-span-2 sm:last:col-span-1"
                  >
                    <Icon />
                    <span className="mt-2 text-[13px] font-bold text-[#14261E] leading-[1.22]">
                      <span className="block">{line1}</span>
                      <span className="block">{line2}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
