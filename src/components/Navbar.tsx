import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './Icons';

interface NavbarProps {
  onOpenQuote: (defaultChannel?: 'whatsapp' | 'form', preselectedService?: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [activeId, setActiveId] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPos = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#081F16] border-b border-white/10 transition-shadow duration-200 ${
        isScrolled ? 'shadow-[0_6px_24px_rgba(0,0,0,0.32)]' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] lg:h-[78px] flex items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753] rounded-md"
          aria-label="Bahar Al Najd Technical Service LLC Home"
        >
          <BrandLogo />
        </a>

        {/* Center/Right: Desktop Navigation Links with Sliding Gold Indicator */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-8 ml-auto mr-2"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative py-2 text-[14px] font-medium tracking-[0.01em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753] rounded ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-[#E4B753]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Gold WhatsApp CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.16 }}
            onClick={() => onOpenQuote('whatsapp')}
            className="inline-flex items-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-semibold text-[13.5px] px-5 py-2.5 shadow-[0_4px_16px_rgba(228,183,83,0.28)] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#081F16]"
          >
            <WhatsAppIcon className="w-[17px] h-[17px] shrink-0" />
            <span>Get a Quote on WhatsApp</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#082117] border-t border-white/10 shadow-2xl"
          >
            <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeId === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.035 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`px-3 py-3 rounded-lg text-[15px] font-medium text-center transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#E4B753]'
                        : 'text-white/85 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenQuote('whatsapp');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-semibold text-[14px] px-5 py-3 transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px]" />
                  <span>Get a Quote on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
