'use client';

import { Arrows, Icons } from '@/assets';
import { useEffect, useState } from 'react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-center gap-3 z-40">
        <a
          href="https://zalo.me/0559952121"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center transition duration-300"
          aria-label="Zalo"
        >
          <Icons.Zalo className="md:w-10 md:h-10" />
        </a>
        <a
          href="tel:05599552121."
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center transition duration-300"
          aria-label="Phone"
        >
          <Icons.PhoneCall size={18} className="md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.tiktok.com/@gao_comlanh?_r=1&_t=ZS-95hGUGJIgYE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 md:w-10 md:h-10 bg-gray-100 rounded-full shadow-lg
             flex items-center justify-center
             transition duration-300 overflow-hidden"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 md:w-8 md:h-8" // 👈 thêm size + bỏ bg-gray-50
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575155317566"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-white text-white rounded-full shadow-lg flex items-center justify-center transition duration-300"
          aria-label="Linkedin"
        >
          <Icons.Facebook className="md:w-10 md:h-10" />
        </a>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 md:w-12 md:h-12 bg-main text-white rounded-full shadow-lg hover:bg-main-700 flex items-center justify-center transition duration-300"
            aria-label="Scroll to top"
          >
            <Arrows.ArrowUp size={18} className="md:w-5 md:h-5" />
          </button>
        )}
      </div>
    </>
  );
};
