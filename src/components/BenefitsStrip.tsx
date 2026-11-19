import { Award, CalendarClock, Headset, Layers } from 'lucide-react';
import { motion } from 'motion/react';

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
      className="w-full bg-[#0B3222] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        {/* Horizontal Staggered Glide Cascade */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 lg:divide-x lg:divide-white/20">
          {BENEFITS.map(({ id, line1, line2, Icon }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3.5 px-3 sm:px-6 text-center sm:text-left"
            >
              <motion.div
                initial={{ scale: 0.78, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 22,
                  delay: idx * 0.09 + 0.08,
                }}
              >
                <Icon
                  className="w-9 h-9 sm:w-10 sm:h-10 text-[#E4B753] shrink-0"
                  strokeWidth={1.4}
                />
              </motion.div>
              <div className="leading-[1.2] text-center sm:text-left">
                <span className="block text-[14px] sm:text-[15px] font-semibold text-white">
                  {line1}
                </span>
                <span className="block text-[14px] sm:text-[15px] font-semibold text-white">
                  {line2}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
