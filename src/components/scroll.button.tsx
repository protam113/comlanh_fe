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
          href="https://www.linkedin.com/in/hoangpham-strix/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center transition duration-300"
          aria-label="Linkedin"
        >
          <Icons.Zalo className="md:w-10 md:h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/hoangpham-strix/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center transition duration-300"
          aria-label="Linkedin"
        >
          <Icons.PhoneCall size={18} className="md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/hoangpham-strix/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center transition duration-300"
          aria-label="Linkedin"
        >
          <Icons.Mail size={18} className="md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/hoangpham-strix/"
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
