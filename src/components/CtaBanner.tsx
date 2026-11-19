import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { CTA_BANNER_IMAGE, SITE_CONTACT } from '../data/siteData';
import { WhatsAppIcon } from './Icons';
import { ResilientImage } from './ResilientImage';

interface CtaBannerProps {
  onWhatsAppQuote: () => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function CtaBanner({ onWhatsAppQuote }: CtaBannerProps) {
  return (
    <section
      id="contact"
      aria-labelledby="cta-banner-heading"
      className="relative isolate w-full bg-[#072116] lg:bg-[#EFE5D6] overflow-hidden"
    >
      {/* Background Interior Armchair & Plant Photo — Atmospheric Zoom Settle */}
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <ResilientImage
          src={CTA_BANNER_IMAGE}
          alt="Warm minimalist interior corner with taupe accent armchair and potted indoor plant"
          loading="lazy"
          className="relative z-0 w-full h-full object-cover object-left lg:object-center brightness-[0.35] lg:brightness-100"
        />

        {/* Heavy Mobile & Tablet Dark Forest-Green Overlay over image for maximum text clarity */}
        <div
          className="absolute inset-0 z-10 bg-[#04160E]/82 lg:hidden"
          aria-hidden="true"
        />

        {/* Desktop Smooth Seamless Sand-Cream Gradient Fade on Right */}
        <div
          className="hidden lg:block absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#EFE5D6]/85 to-[#EFE5D6]"
          aria-hidden="true"
        />
      </motion.div>

      {/* Spotlight Content Rise */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="mx-auto lg:mx-0 lg:ml-[48%] max-w-[540px] text-center lg:text-left">
          <motion.h2
            id="cta-banner-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white lg:text-[#0C2B1E] tracking-[-0.02em] leading-[1.14] text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] lg:drop-shadow-none"
          >
            Let&apos;s Bring Your Space to Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
            className="mt-2.5 text-[15px] sm:text-[16px] text-white/95 lg:text-[#35463E] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)] lg:drop-shadow-none"
          >
            Get a free consultation and a customized quote for your project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
            className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
          >
            {/* Prominent Gold WhatsApp CTA */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16 }}
              onClick={onWhatsAppQuote}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-bold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_8px_22px_rgba(228,183,83,0.34)] transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:focus-visible:ring-[#0C2B1E]"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            </motion.button>

            {/* Outlined Secondary Call Us CTA */}
            <motion.a
              href={SITE_CONTACT.phoneHref}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-[#04160E]/65 hover:bg-white hover:text-[#092117] text-white lg:border-[#8E7F69]/75 lg:bg-[#FAF6F0]/65 lg:hover:bg-[#0C2B1E] lg:hover:border-[#0C2B1E] lg:hover:text-white lg:text-[#0C2B1E] font-semibold text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={2} />
              <span>Call Us</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
