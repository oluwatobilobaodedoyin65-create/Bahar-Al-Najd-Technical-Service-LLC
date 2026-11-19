import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export function ShowcaseModal({
  isOpen,
  onClose,
  onRequestQuote,
}: ShowcaseModalProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
    setPlaying(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !playing) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isOpen, playing]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % PROJECTS.length);
      if (e.key === 'ArrowLeft')
        setIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = PROJECTS[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05120D]/88 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="showcase-reel-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[920px] rounded-[18px] bg-[#092419] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-6 py-4 flex items-center justify-between gap-4 border-b border-white/10">
          <div>
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#E4B753] uppercase">
              INSTALLATION SHOWCASE REEL
            </span>
            <h2
              id="showcase-reel-title"
              className="text-[18px] font-bold text-white leading-snug"
            >
              Bahar Al Najd Craftsmanship Walkthrough
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close showcase"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <ResilientImage
            src={current.image}
            alt={current.title}
            loading="eager"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#061810]/90 via-transparent to-transparent"
            aria-hidden="true"
          />

          {/* Caption Overlay */}
          <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#E4B753] uppercase">
                {current.category} · {current.location}
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white mt-0.5">
                {current.title}
              </h3>
              <p className="text-[13.5px] text-white/80 max-w-[540px] mt-1">
                {current.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause reel' : 'Play reel'}
                className="w-10 h-10 rounded-full border border-white/40 bg-black/35 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)}
                aria-label="Previous installation"
                className="w-10 h-10 rounded-full border border-white/40 bg-black/35 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % PROJECTS.length)}
                aria-label="Next installation"
                className="w-10 h-10 rounded-full border border-white/40 bg-black/35 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Reel Progress Bar & Quote Footer */}
        <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#082117]">
          <div className="flex items-center gap-1.5">
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => setIndex(idx)}
                aria-label={`View slide ${idx + 1}: ${proj.title}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === index
                    ? 'w-8 bg-[#E4B753]'
                    : 'w-2.5 bg-white/25 hover:bg-white/45'
                }`}
              />
            ))}
            <span className="ml-2 text-[12px] text-white/60 tabular-nums">
              {index + 1} / {PROJECTS.length}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] text-[#092117] font-bold text-[13.5px] px-5 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
