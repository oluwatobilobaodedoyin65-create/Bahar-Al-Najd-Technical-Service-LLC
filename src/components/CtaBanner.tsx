import { ArrowRight, Phone } from 'lucide-react';
import { CTA_BANNER_IMAGE, SITE_CONTACT } from '../data/siteData';
import { WhatsAppIcon } from './Icons';
import { ResilientImage } from './ResilientImage';

interface CtaBannerProps {
  onWhatsAppQuote: () => void;
}

export function CtaBanner({ onWhatsAppQuote }: CtaBannerProps) {
  return (
    <section
      id="contact"
      aria-labelledby="cta-banner-heading"
      className="relative isolate w-full bg-[#072116] lg:bg-[#EFE5D6] overflow-hidden"
    >
      {/* Background Interior Armchair & Plant Photo (z-0: strictly behind CTA text) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ResilientImage
          src={CTA_BANNER_IMAGE}
          alt="Warm minimalist interior corner with taupe accent armchair and potted indoor plant"
          loading="lazy"
          className="w-full h-full object-cover object-left lg:object-center"
        />

        {/* Mobile & Tablet Dark Overlay over image so white text & buttons are unmistakably legible */}
        <div
          className="absolute inset-0 bg-[#072116]/75 lg:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#061A12]/55 via-[#061A12]/45 to-[#061A12]/65 lg:hidden"
          aria-hidden="true"
        />

        {/* Desktop Smooth Seamless Sand-Cream Gradient Fade on Right */}
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#EFE5D6]/85 to-[#EFE5D6]"
          aria-hidden="true"
        />
      </div>

      {/* Content Centered on Mobile/Tablet (white over dark overlay), Aligned on Right Half on Desktop (dark green over sand) */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="mx-auto lg:mx-0 lg:ml-[48%] max-w-[540px] text-center lg:text-left">
          <h2
            id="cta-banner-heading"
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white lg:text-[#0C2B1E] tracking-[-0.02em] leading-[1.14] text-balance"
          >
            Let&apos;s Bring Your Space to Life
          </h2>

          <p className="mt-2.5 text-[15px] sm:text-[16px] text-white/90 lg:text-[#35463E] leading-relaxed">
            Get a free consultation and a customized quote for your project.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
            {/* Prominent Gold WhatsApp CTA */}
            <button
              type="button"
              onClick={onWhatsAppQuote}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] active:scale-[0.98] text-[#092117] font-bold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_8px_22px_rgba(228,183,83,0.34)] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:focus-visible:ring-[#0C2B1E]"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            </button>

            {/* Outlined Secondary Call Us CTA */}
            <a
              href={SITE_CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-black/25 hover:bg-white hover:text-[#092117] text-white lg:border-[#8E7F69]/75 lg:bg-[#FAF6F0]/65 lg:hover:bg-[#0C2B1E] lg:hover:border-[#0C2B1E] lg:hover:text-white lg:text-[#0C2B1E] font-semibold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={2} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
