import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SITE_CONTACT } from '../data/siteData';

interface LegalModalProps {
  doc: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!doc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [doc, onClose]);

  if (!doc) return null;

  const isPrivacy = doc === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071610]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[560px] rounded-[18px] bg-[#FAF6F0] border border-[#E5DBCB] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0B3222] px-6 py-4 flex items-center justify-between gap-4">
          <h2 id="legal-modal-title" className="text-[18px] font-bold text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal notice"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-3.5 text-[14px] leading-[1.65] text-[#35463E]">
          {isPrivacy ? (
            <>
              <p>
                <strong>{SITE_CONTACT.companyName}</strong> respects your privacy. Contact details shared via our consultation form, phone line, or WhatsApp are used solely to schedule site measurements, prepare project quotes, and coordinate interior installation services.
              </p>
              <p>
                We do not sell or distribute customer contact information to third parties. To update or request deletion of your inquiry details, contact us at{' '}
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="text-[#0C3323] font-semibold underline"
                >
                  {SITE_CONTACT.email}
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <p>
                All quotes provided by <strong>{SITE_CONTACT.companyName}</strong> are customized following on-site verification of dimensions, material selections, and installation access requirements.
              </p>
              <p>
                Project schedules, payment milestones, and workmanship warranties are detailed in your written project proposal prior to commencement of work.
              </p>
            </>
          )}

          <div className="pt-3 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#0C3323] hover:bg-[#134732] text-white font-semibold text-[13.5px] px-5 py-2 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
