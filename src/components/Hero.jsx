'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const slides = [
  { id: 1, bgImage: '/images/banner/b1.png' },
  { id: 2, bgImage: '/images/banner/b2.png' },
  { id: 3, bgImage: '/images/banner/b3.png' },
];

export default function Hero() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;

    const update = () => {
      document.documentElement.style.setProperty(
        '--header-h',
        `${header.offsetHeight}px`
      );
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full select-none mt-[var(--header-h)] md:h-[calc(100svh-var(--header-h))] md:min-h-[500px]"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #hero-section .swiper,
          #hero-section .swiper-wrapper,
          #hero-section .swiper-slide {
            height: auto !important;
          }

          @media (min-width: 768px) {
            #hero-section .swiper,
            #hero-section .swiper-wrapper,
            #hero-section .swiper-slide {
              height: 100% !important;
            }
          }

          .hero-pagination .swiper-pagination-bullet {
            width: 28px;
            height: 2px;
            border-radius: 0;
            background: rgba(255,255,255,0.25);
            opacity: 1;
            transition: all 0.6s ease;
            margin: 0 !important;
          }
          .hero-pagination .swiper-pagination-bullet-active {
            background: #fff;
            width: 48px;
          }
          @media (min-width: 768px) {
            .hero-pagination .swiper-pagination-bullet { width: 40px; }
            .hero-pagination .swiper-pagination-bullet-active { width: 70px; }
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scaleY(1); opacity: 0.3; }
            50%       { transform: scaleY(1.5); opacity: 1; }
          }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        `,
        }}
      />

      <Swiper
        modules={[Autoplay, Pagination, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: { translate: ['-100%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }}
        loop={true}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.bgImage}
              alt=""
              className="block w-full h-auto md:h-full md:object-cover md:object-center"
            />
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 z-20 hero-pagination flex gap-3" />

        {/* Scroll indicator — chỉ desktop */}
        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-px h-8 bg-linear-to-b from-transparent via-white to-transparent animate-pulse-slow" />
        </div>
      </Swiper>

      {/* Prev / Next — chỉ desktop */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30
          w-11 h-11 items-center justify-center
          rounded-full bg-black/30 hover:bg-black/50
          text-white transition-colors duration-200"
        aria-label="Trước"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30
          w-11 h-11 items-center justify-center
          rounded-full bg-black/30 hover:bg-black/50
          text-white transition-colors duration-200"
        aria-label="Tiếp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
