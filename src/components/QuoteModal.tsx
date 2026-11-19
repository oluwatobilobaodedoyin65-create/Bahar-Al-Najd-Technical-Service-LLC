import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, X } from 'lucide-react';
import { SERVICES, SITE_CONTACT } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

interface QuoteModalProps {
  isOpen: boolean;
  initialChannel?: 'whatsapp' | 'form';
  initialService?: string;
  onClose: () => void;
}

export function QuoteModal({
  isOpen,
  initialChannel = 'form',
  initialService = '',
  onClose,
}: QuoteModalProps) {
  const [channel, setChannel] = useState<'whatsapp' | 'form'>(initialChannel);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setChannel(initialChannel);
      setService(initialService || SERVICES[0].title);
      setError('');
      setSubmitted(false);
    }
  }, [isOpen, initialChannel, initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ${SITE_CONTACT.companyName}, I would like to request a quote for ${service}.${
      name ? ` Name: ${name}.` : ''
    }${notes ? ` Project details: ${notes}` : ''}`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONTACT.whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[+\d\s()-]{7,20}$/.test(trimmedPhone)) {
      setError('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071610]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[540px] rounded-[18px] bg-[#FAF6F0] border border-[#E5DBCB] shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Forest Green Header */}
        <div className="bg-[#0B3222] px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
              FREE CONSULTATION
            </span>
            <h2
              id="quote-modal-title"
              className="mt-1 text-[22px] font-extrabold text-white leading-tight"
            >
              Request a Customized Quote
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#0C3323]/10 text-[#0C3323] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <h3 className="text-[20px] font-bold text-[#0C2B1E]">
                Consultation Request Received
              </h3>
              <p className="mt-2 text-[14px] text-[#3E4E46] leading-relaxed max-w-[400px] mx-auto">
                Thank you, <span className="font-semibold text-[#0C2B1E]">{name}</span>. Our technical coordinator will contact you shortly regarding{' '}
                <span className="font-semibold text-[#0C2B1E]">{service}</span>.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-semibold text-[13.5px] px-5 py-2.5 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-[#8E7F69]/60 hover:bg-[#0C2B1E] hover:text-white text-[#0C2B1E] font-semibold text-[13.5px] px-5 py-2.5 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Interactive Channel Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#EFE8DC] border border-[#E5DBCB]">
                <button
                  type="button"
                  onClick={() => setChannel('whatsapp')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                    channel === 'whatsapp'
                      ? 'bg-[#0C3323] text-white shadow-sm'
                      : 'text-[#3E4E46] hover:text-[#0C2B1E]'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('form')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                    channel === 'form'
                      ? 'bg-[#0C3323] text-white shadow-sm'
                      : 'text-[#3E4E46] hover:text-[#0C2B1E]'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Callback Request</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="quote-name"
                    className="block text-[12.5px] font-semibold text-[#0C2B1E] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-[#D8CCBA] bg-white px-3.5 py-2.5 text-[14px] text-[#0C2B1E] placeholder:text-[#8A948F] focus:outline-none focus:border-[#0C3323] focus:ring-2 focus:ring-[#0C3323]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-[12.5px] font-semibold text-[#0C2B1E] mb-1.5"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full rounded-lg border border-[#D8CCBA] bg-white px-3.5 py-2.5 text-[14px] text-[#0C2B1E] placeholder:text-[#8A948F] focus:outline-none focus:border-[#0C3323] focus:ring-2 focus:ring-[#0C3323]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="quote-email"
                    className="block text-[12.5px] font-semibold text-[#0C2B1E] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-[#D8CCBA] bg-white px-3.5 py-2.5 text-[14px] text-[#0C2B1E] placeholder:text-[#8A948F] focus:outline-none focus:border-[#0C3323] focus:ring-2 focus:ring-[#0C3323]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-service"
                    className="block text-[12.5px] font-semibold text-[#0C2B1E] mb-1.5"
                  >
                    Service Needed
                  </label>
                  <select
                    id="quote-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-[#D8CCBA] bg-white px-3.5 py-2.5 text-[14px] text-[#0C2B1E] focus:outline-none focus:border-[#0C3323] focus:ring-2 focus:ring-[#0C3323]/15"
                  >
                    {SERVICES.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="Full Interior Installation Package">
                      Full Interior Installation Package
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-notes"
                  className="block text-[12.5px] font-semibold text-[#0C2B1E] mb-1.5"
                >
                  Project Scope or Dimensions
                </label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share room type, approximate measurements, or desired timeline..."
                  className="w-full rounded-lg border border-[#D8CCBA] bg-white px-3.5 py-2.5 text-[14px] text-[#0C2B1E] placeholder:text-[#8A948F] focus:outline-none focus:border-[#0C3323] focus:ring-2 focus:ring-[#0C3323]/15 resize-none"
                />
              </div>

              {error && (
                <p className="text-[13px] font-medium text-[#9B2C2C]" role="alert">
                  {error}
                </p>
              )}

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-bold text-[14px] px-6 py-3 transition-colors cursor-pointer"
                >
                  {channel === 'whatsapp' ? (
                    <>
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Submit &amp; Prepare WhatsApp Quote</span>
                    </>
                  ) : (
                    <>
                      <span>Request Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
