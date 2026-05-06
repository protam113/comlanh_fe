'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export interface PushButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  label?: string;
  className?: string;
}

export const ContactButton: React.FC<PushButtonProps> = ({
  href,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <button
        className={
          'group flex items-center gap-2 rounded-full bg-[#DA8E41] px-6 py-3 shadow-lg transition-all hover:bg-main-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-200 focus-visible:ring-offset-2'
        }
        onClick={handleClick}
        {...props}
      >
        <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-[#e6f4f1]">
          Dùng thử ngay
        </span>
      </button>
    </div>
  );
};
