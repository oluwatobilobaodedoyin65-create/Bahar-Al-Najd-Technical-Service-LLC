import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Maximize2,
  Pause,
  Play,
  Search,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { HERO_MEDIA, SERVICES, ServiceItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onWatchWork: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export function HeroSection({
  onRequestQuote,
  onWatchWork,
  onSelectService,
}: HeroSectionProps) {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Mobile quick service finder state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('all');

  useEffect(() => {
    if (!HERO_MEDIA.videoSrc) return;
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (!video) return;
      video.muted = true;
      video.play().catch(() => {
        // Autoplay fallback handled smoothly by poster image
      });
    });
  }, []);

  const togglePlayback = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (HERO_MEDIA.videoSrc && !videoFailed) {
      [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
        if (!video) return;
        if (nextState) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (video) {
        video.muted = nextMuted;
      }
    });
  };

  const handleMobileSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedServiceId !== 'all') {
      const exactMatch = SERVICES.find((s) => s.id === selectedServiceId);
      if (exactMatch) {
        onSelectService(exactMatch);
        return;
      }
    }

    const normalized = searchQuery.trim().toLowerCase();
    if (normalized) {
      const keywordMatch = SERVICES.find(
        (s) =>
          s.title.toLowerCase().includes(normalized) ||
          s.description.toLowerCase().includes(normalized)
      );
      if (keywordMatch) {
        onSelectService(keywordMatch);
        return;
      }
    }

    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#0A1813]">
      {/* ================= MOBILE HERO STRUCTURE (< md) ================= */}
      <div className="md:hidden pt-[72px] bg-[#092419]">
        {/* Centered Header Copy, Stacked Full-Width CTAs & Service Finder */}
        <div className="px-5 pt-7 pb-7 text-center flex flex-col items-center">
          {/* Centered Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-[1.5px] bg-[#E4B753]" aria-hidden="true" />
            <span className="text-[10.5px] font-semibold tracking-[0.18em] text-white/90 uppercase">
              INTERIOR &amp; TECHNICAL SOLUTIONS
            </span>
            <span className="w-6 h-[1.5px] bg-[#E4B753]" aria-hidden="true" />
          </div>

          {/* Centered Bold 2-Line Headline */}
          <h1 className="text-[32px] sm:text-[38px] font-extrabold leading-[1.12] tracking-[-0.02em] text-center text-balance max-w-[360px]">
            <span className="block text-white">Custom Interiors.</span>
            <span className="block text-[#E4B753] mt-0.5">Professional Installation.</span>
          </h1>

          {/* Centered Subtext */}
          <p className="mt-3.5 text-[14.5px] leading-[1.6] text-white/85 max-w-[330px] text-center">
            Kitchens, cabinets, TV units, and complete interior finishing for homes and businesses.
          </p>

          {/* Stacked Full-Width Primary & Secondary Buttons */}
          <div className="mt-6 w-full max-w-[380px] flex flex-col gap-3">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#E4B753] hover:bg-[#D4A43C] active:scale-[0.99] text-[#092117] font-bold text-[15px] py-3.5 px-5 shadow-[0_6px_18px_rgba(228,183,83,0.28)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              onClick={onWatchWork}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/65 bg-white/5 hover:bg-white/12 active:scale-[0.99] text-white font-semibold text-[15px] py-3.5 px-5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              <span>Watch Our Work</span>
            </button>
          </div>

          {/* Stacked Quick Service Finder matching Mobile Reference Structure */}
          <form
            onSubmit={handleMobileSearchSubmit}
            className="mt-5 w-full max-w-[380px] flex flex-col gap-2.5"
            aria-label="Quick interior service finder"
          >
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#55665E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={2}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (kitchens, TV units...)"
                aria-label="Search interior services"
                className="w-full rounded-xl bg-[#FAF6F0] border border-[#E5DBCB] pl-10 pr-4 py-3 text-[14px] text-[#0C2B1E] placeholder:text-[#6B7A73] focus:outline-none focus:ring-2 focus:ring-[#E4B753]"
              />
            </div>

            <div className="relative">
              <Layers
                className="w-4 h-4 text-[#55665E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={2}
              />
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                aria-label="Select service category"
                className="w-full appearance-none rounded-xl bg-[#FAF6F0] border border-[#E5DBCB] pl-10 pr-10 py-3 text-[14px] text-[#0C2B1E] focus:outline-none focus:ring-2 focus:ring-[#E4B753]"
              >
                <option value="all">All interior services</option>
                {SERVICES.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.title}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="w-4 h-4 text-[#55665E] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={2}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0F422D] hover:bg-[#145239] border border-[#E4B753]/45 text-white font-semibold text-[14.5px] py-3 px-5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              Explore Services
            </button>
          </form>
        </div>

        {/* Full-Width Video Showcase Block Below Mobile Hero Stack */}
        <div className="relative isolate w-full aspect-[16/10] bg-[#081A13] overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                videoLoaded && !videoFailed ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <ResilientImage
                src={HERO_MEDIA.posterImage}
                alt="Luxury modern custom walnut kitchen installation with warm architectural LED lighting"
                loading="eager"
                className={`w-full h-full object-cover object-center animate-hero-pan ${
                  !isPlaying ? 'animate-hero-pan-paused' : ''
                }`}
              />
            </div>

            {HERO_MEDIA.videoSrc && !videoFailed && (
              <video
                ref={mobileVideoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                poster={HERO_MEDIA.posterImage}
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
                onError={() => setVideoFailed(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
              </video>
            )}

            {/* Very subtle bottom vignette for mobile video controls */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#06120D]/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Mobile Video Controls */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? 'Pause showcase video' : 'Play showcase video'}
              className="w-9 h-9 rounded-full border border-white/55 bg-black/35 text-white flex items-center justify-center backdrop-blur-sm cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" strokeWidth={2.2} />
              ) : (
                <Play className="w-3.5 h-3.5 ml-0.5 fill-white" strokeWidth={2} />
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="w-9 h-9 rounded-full bg-black/35 text-white flex items-center justify-center backdrop-blur-sm cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" strokeWidth={1.9} />
                ) : (
                  <Volume2 className="w-4 h-4" strokeWidth={1.9} />
                )}
              </button>
              <button
                type="button"
                onClick={onWatchWork}
                aria-label="Open full showcase"
                className="w-9 h-9 rounded-full bg-black/35 text-white flex items-center justify-center backdrop-blur-sm cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" strokeWidth={1.9} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET HERO STRUCTURE (md+) ================= */}
      <div className="hidden md:flex relative isolate w-full min-h-[580px] lg:h-[630px] pt-[72px] lg:pt-[78px] overflow-hidden bg-[#0A1813] items-center">
        {/* Background Video & Scrim Layer (z-0: strictly behind hero text and controls) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              videoLoaded && !videoFailed ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <ResilientImage
              src={HERO_MEDIA.posterImage}
              alt="Luxury modern custom walnut kitchen installation with warm architectural LED lighting and marble island"
              loading="eager"
              className={`w-full h-full object-cover object-center animate-hero-pan ${
                !isPlaying ? 'animate-hero-pan-paused' : ''
              }`}
            />
          </div>

          {HERO_MEDIA.videoSrc && !videoFailed && (
            <video
              ref={desktopVideoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              poster={HERO_MEDIA.posterImage}
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoFailed(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
            </video>
          )}

          {/* Light Video Overlay (layered above video only, never over text) */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#06120D]/60 via-[#081913]/25 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Main Hero Content (z-20: completely unaffected by background video overlay) */}
        <div className="relative z-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-[600px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#E4B753] shrink-0" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.18em] text-white/90 uppercase">
                INTERIOR &amp; TECHNICAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[46px] lg:text-[54px] font-extrabold leading-[1.09] tracking-[-0.02em] text-balance">
              <span className="block text-white">Custom Interiors.</span>
              <span className="block text-[#E4B753] mt-0.5">Professional Installation.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-[16.5px] leading-[1.6] text-white/88 max-w-[440px] font-normal">
              Kitchens, cabinets, TV units, and complete interior finishing for homes and businesses.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] active:scale-[0.98] text-[#0A2218] font-bold text-[14.5px] px-7 py-3.5 shadow-[0_8px_24px_rgba(228,183,83,0.3)] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1813]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={onWatchWork}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-[#0A1813]/35 hover:bg-white/12 active:scale-[0.98] text-white font-semibold text-[14.5px] px-7 py-3.5 backdrop-blur-sm transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                <span>Watch Our Work</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Video Controls */}
        <div className="absolute bottom-4 left-6 lg:left-8 z-20">
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause background showcase' : 'Play background showcase'}
            title={isPlaying ? 'Pause background motion' : 'Play background motion'}
            className="w-9 h-9 rounded-full border border-white/55 bg-black/30 hover:bg-white/15 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" strokeWidth={2.2} />
            ) : (
              <Play className="w-3.5 h-3.5 ml-0.5 fill-white" strokeWidth={2} />
            )}
          </button>
        </div>

        <div className="absolute bottom-4 right-6 lg:right-8 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute showcase audio' : 'Mute showcase audio'}
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
            className="w-9 h-9 rounded-full bg-black/25 hover:bg-white/15 backdrop-blur-sm flex items-center justify-center text-white/85 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" strokeWidth={1.9} />
            ) : (
              <Volume2 className="w-4 h-4" strokeWidth={1.9} />
            )}
          </button>

          <button
            type="button"
            onClick={onWatchWork}
            aria-label="Open full-screen interior showcase"
            title="Watch full showcase"
            className="w-9 h-9 rounded-full bg-black/25 hover:bg-white/15 backdrop-blur-sm flex items-center justify-center text-white/85 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
          >
            <Maximize2 className="w-4 h-4" strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </section>
  );
}
