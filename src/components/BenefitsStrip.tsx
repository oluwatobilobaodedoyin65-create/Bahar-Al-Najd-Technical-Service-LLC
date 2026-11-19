import { Award, CalendarClock, Headset, Layers } from 'lucide-react';

const BENEFITS = [
  {
    id: 'workmanship',
    line1: 'Quality',
    line2: 'Workmanship',
    Icon: Award,
  },
  {
    id: 'custom',
    line1: 'Custom',
    line2: 'Solutions',
    Icon: Layers,
  },
  {
    id: 'delivery',
    line1: 'On-Time',
    line2: 'Delivery',
    Icon: CalendarClock,
  },
  {
    id: 'support',
    line1: 'Reliable',
    line2: 'Support',
    Icon: Headset,
  },
];

export function BenefitsStrip() {
  return (
    <section
      aria-label="Core service guarantees"
      className="w-full bg-[#0B3222] border-y border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 lg:divide-x lg:divide-white/20">
          {BENEFITS.map(({ id, line1, line2, Icon }) => (
            <div
              key={id}
              className="flex items-center justify-start sm:justify-center gap-3.5 px-3 sm:px-6"
            >
              <Icon
                className="w-9 h-9 sm:w-10 sm:h-10 text-[#E4B753] shrink-0"
                strokeWidth={1.4}
              />
              <div className="leading-[1.2] text-left">
                <span className="block text-[14px] sm:text-[15px] font-semibold text-white">
                  {line1}
                </span>
                <span className="block text-[14px] sm:text-[15px] font-semibold text-white">
                  {line2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
