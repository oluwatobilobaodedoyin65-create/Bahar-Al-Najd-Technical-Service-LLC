interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3 shrink-0 select-none">
      {/* Custom Architectural Roof & Wave Emblem matching reference brand mark */}
      <svg
        width={compact ? 42 : 52}
        height={compact ? 30 : 36}
        viewBox="0 0 64 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer Roof Chevron */}
        <path
          d="M6 25.5L29.5 6.5L53 23.5"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Subtle Gold Roof Highlight */}
        <path
          d="M15.5 22.5L29.5 11.2L44 21.5"
          stroke="#E4B753"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Four Architectural Window Panes */}
        <rect x="26.2" y="16.5" width="2.6" height="2.6" rx="0.3" fill="#E4B753" />
        <rect x="30.2" y="16.5" width="2.6" height="2.6" rx="0.3" fill="#E4B753" />
        <rect x="26.2" y="20.4" width="2.6" height="2.6" rx="0.3" fill="#FFFFFF" />
        <rect x="30.2" y="20.4" width="2.6" height="2.6" rx="0.3" fill="#FFFFFF" />

        {/* Upper Sweeping Gold Ribbon Wave */}
        <path
          d="M5 33.5C15.5 24.5 26 27 36.5 31.5C45 35.1 53.5 30.8 59.5 22.5C53 33.8 43.5 39.2 33 35.5C23.5 32.1 14 29.8 5 33.5Z"
          fill="#E4B753"
        />
        {/* Lower White Architectural Accent Wave */}
        <path
          d="M12 36.8C22 32.2 31.5 36.5 41 37.2C48.5 37.8 54.5 33.5 58 27.5C53.2 36.8 45.8 41.2 36.5 40.2C27.5 39.2 20.5 35.4 12 36.8Z"
          fill="#FFFFFF"
          fillOpacity="0.92"
        />
      </svg>

      {/* Wordmark Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-brand font-bold tracking-[0.06em] text-white whitespace-nowrap ${
            compact ? 'text-[14px]' : 'text-[16px] sm:text-[18px]'
          }`}
        >
          BAHAR AL NAJD
        </span>
        <span
          className={`font-medium tracking-[0.22em] text-white/80 uppercase whitespace-nowrap mt-1 ${
            compact ? 'text-[7.5px]' : 'text-[8.5px] sm:text-[9px]'
          }`}
        >
          TECHNICAL SERVICE LLC
        </span>
      </div>
    </div>
  );
}
