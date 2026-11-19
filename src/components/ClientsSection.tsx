import { CLIENT_LOGO_SLOTS } from '../data/siteData';

export function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="w-full bg-[#F6F1E9] py-12 sm:py-14 border-b border-[#E5DBCB]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-[620px] mx-auto mb-8 lg:mb-9">
          <div className="inline-flex items-center justify-center gap-3.5 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#A87D2A] uppercase">
              OUR RECENT CLIENTS
            </span>
            <span className="w-10 sm:w-14 h-[1px] bg-[#C69B3E]/70" aria-hidden="true" />
          </div>

          <h2
            id="clients-heading"
            className="text-[24px] sm:text-[30px] font-extrabold text-[#0C2B1E] tracking-[-0.02em] leading-[1.2]"
          >
            Trusted by Homes &amp; Businesses
          </h2>
        </div>

        {/* Evenly Spaced Client Logo Strip with Subtle Hairline Separators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center border-y border-[#E5DBCB] lg:divide-x lg:divide-[#E5DBCB]">
          {CLIENT_LOGO_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="py-5 px-4 flex flex-col items-center justify-center text-center group"
            >
              <div className="flex items-center gap-2.5 text-[#2E463B]/80 group-hover:text-[#0C2B1E] transition-colors">
                <span className="w-8 h-8 rounded-md border border-[#C69B3E]/55 bg-[#FAF6F0] flex items-center justify-center text-[11px] font-brand font-bold text-[#0C3323] tracking-wider shrink-0">
                  {slot.monogram}
                </span>
                <span className="text-[13.5px] font-bold tracking-tight whitespace-nowrap">
                  {slot.name}
                </span>
              </div>
              <span className="mt-1 text-[10.5px] text-[#6B7A73] tracking-wide">
                {slot.sector}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[11.5px] text-[#6B7A73]">
          Placeholder client logo slots structured for easy replacement with confirmed partner logos.
        </p>
      </div>
    </section>
  );
}
