import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/siteData';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = PLACEHOLDER_TESTIMONIALS.length;

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleItems = [
    PLACEHOLDER_TESTIMONIALS[startIndex % total],
    PLACEHOLDER_TESTIMONIALS[(startIndex + 1) % total],
    PLACEHOLDER_TESTIMONIALS[(startIndex + 2) % total],
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#0B3222] py-14 sm:py-16 lg:py-[68px] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row with Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left justify-between gap-6 mb-9 lg:mb-10"
        >
          <div className="max-w-[580px]">
            <div className="inline-flex items-center justify-center md:justify-start gap-3.5 mb-2.5">
              <span className="md:hidden w-10 h-[1px] bg-[#E4B753]/70" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                TESTIMONIALS
              </span>
              <span className="w-10 md:w-12 h-[1px] bg-[#E4B753]/70" aria-hidden="true" />
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white tracking-[-0.02em] leading-[1.15]">
              What Our Clients Say
            </h2>

            <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-white/78 leading-relaxed">
              Real feedback from clients who trusted Bahar Al Najd with their spaces.
            </p>
          </div>

          {/* Subtle Circular Navigation Arrows with Spring Tap */}
          <div className="flex items-center justify-center gap-2.5 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.93 }}
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#E4B753]/60 text-white hover:bg-[#E4B753] hover:text-[#092419] hover:border-[#E4B753] flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.2} />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.93 }}
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#E4B753]/60 text-white hover:bg-[#E4B753] hover:text-[#092419] hover:border-[#E4B753] flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.2} />
            </motion.button>
          </div>
        </motion.div>

        {/* Directional AnimatePresence Carousel Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.34, ease: EASE_OUT }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {visibleItems.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[14px] bg-[#FAF6F0] border border-[#E5DBCB]/80 p-6 flex flex-col justify-between text-center md:text-left shadow-[0_10px_28px_rgba(4,18,12,0.22)]"
                >
                  <div>
                    {/* Star Rating */}
                    <div
                      className="flex items-center justify-center md:justify-start gap-1 mb-4"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 fill-[#E4B753] text-[#E4B753]"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[14px] leading-[1.65] text-[#283B32]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Avatar & Name */}
                  <div className="mt-6 pt-4 border-t border-[#E5DBCB] flex flex-col md:flex-row items-center gap-2.5 md:gap-3.5">
                    <div
                      aria-hidden="true"
                      className="w-10 h-10 rounded-full bg-[#0C3323] text-[#E4B753] border border-[#E4B753]/50 flex items-center justify-center text-[12px] font-bold tracking-wider shrink-0"
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[14px] font-bold text-[#0C2B1E] truncate">
                        {item.author}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Transparent Placeholder Disclaimer */}
        <p className="mt-6 text-center text-[12px] text-white/55">
          Editable sample testimonial cards — replace with verified client reviews before publishing.
        </p>
      </div>
    </section>
  );
}
