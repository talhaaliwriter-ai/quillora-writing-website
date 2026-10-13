import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';
  
  const iconSizeClass = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const textSizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Refined Quill / TA Monogram Symbol */}
      <div className={`relative ${iconSizeClass} flex-shrink-0 flex items-center justify-center rounded-xl ${isLight ? 'bg-[#FFD400] text-[#17136B]' : 'bg-[#17136B] text-[#FFD400]'} shadow-sm transition-transform hover:scale-105`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Stylized Arch & Quill Nib */}
          <path
            d="M36 8C33 8 26 12 18 22C12 30 10 37 9 42C12 40 18 38 23 33C29 27 34 18 35 11C35.5 9 36 8 36 8Z"
            fill="currentColor"
          />
          {/* Quill Pen Slit & Breathing Eye */}
          <path
            d="M19 28L34 10"
            stroke={isLight ? '#17136B' : '#FFFFFF'}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle
            cx="10"
            cy="41"
            r="1.8"
            fill={isLight ? '#17136B' : '#FFD400'}
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif-heading font-bold tracking-tight leading-none ${textSizeClass} ${
            isLight ? 'text-white' : 'text-[#17136B]'
          }`}
        >
          Quillora
        </span>
        <span
          className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase mt-1 ${
            isLight ? 'text-blue-100' : 'text-[#66677A]'
          }`}
        >
          Writing & Content Solutions
        </span>
      </div>
    </div>
  );
};
