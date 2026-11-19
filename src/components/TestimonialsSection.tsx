import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/siteData';

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const total = PLACEHOLDER_TESTIMONIALS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
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
      className="w-full bg-[#0B3222] py-14 sm:py-16 lg:py-[68px]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9 lg:mb-10">
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-3.5 mb-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
                TESTIMONIALS
              </span>
              <span className="w-12 h-[1px] bg-[#E4B753]/70" aria-hidden="true" />
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white tracking-[-0.02em] leading-[1.15]">
              What Our Clients Say
            </h2>

            <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-white/78 leading-relaxed">
              Real feedback from clients who trusted Bahar Al Najd with their spaces.
            </p>
          </div>

          {/* Subtle Circular Navigation Arrows */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#E4B753]/60 text-white hover:bg-[#E4B753] hover:text-[#092419] hover:border-[#E4B753] flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#E4B753]/60 text-white hover:bg-[#E4B753] hover:text-[#092419] hover:border-[#E4B753] flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* 3 Cream/Ivory Testimonial Cards against Forest-Green Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="rounded-[14px] bg-[#FAF6F0] border border-[#E5DBCB]/80 p-6 flex flex-col justify-between shadow-[0_10px_28px_rgba(4,18,12,0.22)]"
            >
              <div>
                {/* Star Rating */}
                <div
                  className="flex items-center gap-1 mb-4"
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

              {/* Client Avatar & Attribution */}
              <div className="mt-6 pt-4 border-t border-[#E5DBCB] flex items-center gap-3.5">
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
                  <div className="text-[12px] text-[#55665E] truncate">
                    {item.role} · {item.projectType}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Placeholder Disclaimer */}
        <p className="mt-6 text-center text-[12px] text-white/55">
          Editable sample testimonial cards — replace with verified client reviews before publishing.
        </p>
      </div>
    </section>
  );
}
