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
      className="relative w-full bg-[#EFE5D6] overflow-hidden"
    >
      {/* Background Interior Armchair & Plant Photo matching Reference Banner */}
      <div className="absolute inset-0">
        <ResilientImage
          src={CTA_BANNER_IMAGE}
          alt="Warm minimalist interior corner with taupe accent armchair and potted indoor plant"
          loading="lazy"
          className="w-full h-full object-cover object-left sm:object-center"
        />
        {/* Smooth Seamless Sand-Cream Gradient Fade for High Readability on Right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#EFE5D6]/85 via-[#EFE5D6]/92 to-[#EFE5D6] md:from-transparent md:via-[#EFE5D6]/82 md:to-[#EFE5D6]"
          aria-hidden="true"
        />
      </div>

      {/* Content Centered on Mobile, Aligned on Right Half on Desktop */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto md:mx-0 md:ml-[46%] lg:ml-[48%] max-w-[540px] text-center md:text-left">
          <h2
            id="cta-banner-heading"
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0C2B1E] tracking-[-0.02em] leading-[1.14] text-balance"
          >
            Let&apos;s Bring Your Space to Life
          </h2>

          <p className="mt-2.5 text-[15px] sm:text-[16px] text-[#35463E] leading-relaxed">
            Get a free consultation and a customized quote for your project.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3.5">
            {/* Prominent Gold WhatsApp CTA */}
            <button
              type="button"
              onClick={onWhatsAppQuote}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] active:scale-[0.98] text-[#092117] font-bold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_8px_22px_rgba(228,183,83,0.34)] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2B1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE5D6]"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            </button>

            {/* Outlined Secondary Call Us CTA */}
            <a
              href={SITE_CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#8E7F69]/75 bg-[#FAF6F0]/65 hover:bg-[#0C2B1E] hover:border-[#0C2B1E] hover:text-white text-[#0C2B1E] font-semibold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2B1E]"
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
