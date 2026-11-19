import { Mail, MapPin, Phone } from 'lucide-react';
import { SERVICES, SITE_CONTACT, ServiceItem } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenLegal: (doc: 'privacy' | 'terms') => void;
}

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Footer({ onSelectService, onOpenLegal }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full bg-[#082419] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-14 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.15fr_1.1fr_0.85fr] gap-8 lg:gap-7">
          {/* Column 1: Company Info */}
          <div className="lg:pr-7 lg:border-r lg:border-white/15">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              aria-label="Back to top"
              className="inline-block"
            >
              <BrandLogo compact />
            </a>
            <p className="mt-4 text-[13.5px] leading-[1.65] text-white/75 max-w-[270px]">
              Professional technical services for interior installations and finishing solutions for homes and businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-[0.01em] mb-3.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/75">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="hover:text-[#E4B753] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-[0.01em] mb-3.5">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/75">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-left hover:text-[#E4B753] transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (Editable Placeholders) */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-[0.01em] mb-3.5">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-[#E4B753] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E4B753] shrink-0" strokeWidth={1.8} />
                  <span className="tabular-nums">{SITE_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-[#E4B753] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#E4B753] shrink-0" strokeWidth={1.8} />
                  <span>{SITE_CONTACT.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-white/75">
                <MapPin className="w-4 h-4 text-[#E4B753] shrink-0 mt-0.5" strokeWidth={1.8} />
                <span>{SITE_CONTACT.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-[0.01em] mb-3.5">
              Follow Us
            </h3>
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Follow Bahar Al Najd on Facebook"
                className="w-9 h-9 rounded-full border border-white/25 hover:border-[#E4B753] hover:bg-[#E4B753] hover:text-[#082419] text-white/85 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Follow Bahar Al Najd on Instagram"
                className="w-9 h-9 rounded-full border border-white/25 hover:border-[#E4B753] hover:bg-[#E4B753] hover:text-[#082419] text-white/85 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Follow Bahar Al Najd on YouTube"
                className="w-9 h-9 rounded-full border border-white/25 hover:border-[#E4B753] hover:bg-[#E4B753] hover:text-[#082419] text-white/85 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.51 2.51 0 0 0-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Follow Bahar Al Najd on LinkedIn"
                className="w-9 h-9 rounded-full border border-white/25 hover:border-[#E4B753] hover:bg-[#E4B753] hover:text-[#082419] text-white/85 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/60">
          <p>© {new Date().getFullYear()} {SITE_CONTACT.companyName}. All Rights Reserved.</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#E4B753] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#E4B753] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
