import { useRef, useState } from 'react';
import { ArrowRight, Maximize2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { HERO_MEDIA } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onWatchWork: () => void;
}

export function HeroSection({ onRequestQuote, onWatchWork }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const togglePlayback = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (videoRef.current && HERO_MEDIA.videoSrc) {
      if (nextState) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[540px] sm:min-h-[580px] lg:h-[630px] pt-[72px] lg:pt-[78px] overflow-hidden bg-[#0A1813] flex items-center"
    >
      {/* Background Video + High-Resolution Architectural Fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cinematic fallback poster with gentle Ken Burns motion (plays/pauses with control) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
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

        {/* Video-ready native HTML5 background video element */}
        {HERO_MEDIA.videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster={HERO_MEDIA.posterImage}
            onCanPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Measured Left-to-Right Readability Gradient Overlay matching reference lighting */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07120E]/92 via-[#091712]/62 to-[#091712]/18"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#07120E]/55 via-transparent to-[#07120E]/45"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#E4B753] shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-white/90 uppercase">
              INTERIOR &amp; TECHNICAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.09] tracking-[-0.02em] text-balance">
            <span className="block text-white">Custom Interiors.</span>
            <span className="block text-[#E4B753] mt-0.5">Professional Installation.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16.5px] leading-[1.6] text-white/88 max-w-[440px] font-normal">
            Kitchens, cabinets, TV units, and complete interior finishing for homes and businesses.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E4B753] hover:bg-[#D4A43C] active:scale-[0.98] text-[#0A2218] font-bold text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 shadow-[0_8px_24px_rgba(228,183,83,0.3)] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1813]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              onClick={onWatchWork}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-[#0A1813]/35 hover:bg-white/12 active:scale-[0.98] text-white font-semibold text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 backdrop-blur-sm transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B753]"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              <span>Watch Our Work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Video Playback Controls (Bottom Left & Bottom Right matching reference) */}
      <div className="absolute bottom-4 left-4 sm:left-6 lg:left-8 z-10">
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

      <div className="absolute bottom-4 right-4 sm:right-6 lg:right-8 z-10 flex items-center gap-2">
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
    </section>
  );
}
