'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const word = 'EVASION';

const sideImages = [
  {
    src: '/images/galleries/1.webp',
    alt: 'Mountain hiking adventure',
    position: 'left',
    span: 1,
  },
  {
    src: '/images/galleries/2.webp',
    alt: 'Camping under stars',
    position: 'left',
    span: 1,
  },
  {
    src: '/images/galleries/3.webp',
    alt: 'Forest exploration',
    position: 'right',
    span: 1,
  },
  {
    src: '/images/galleries/4.webp',
    alt: 'Lake camping view',
    position: 'right',
    span: 1,
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 1.5; // Giảm từ 2 xuống 1.5
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.15)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.15);

  // Image transforms start earlier (0.15 to 1)
  const imageProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - 0.15) / 0.85)
  );

  // Smooth interpolations - hiển thị hình ảnh sớm hơn
  const centerWidth = 100 - imageProgress * 50; // 100% to 50%
  const centerHeight = 100 - imageProgress * 20; // 100% to 80%
  const sideWidth = imageProgress * 25; // 0% to 25%
  const sideOpacity = Math.min(1, imageProgress * 1.5); // Fade in nhanh hơn
  const sideTranslateLeft = -50 + imageProgress * 50; // -50% to 0% (bắt đầu gần hơn)
  const sideTranslateRight = 50 - imageProgress * 50; // 50% to 0% (bắt đầu gần hơn)
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  // Vertical offset for side columns
  const sideTranslateY = -(imageProgress * 10); // Move up by 10%

  return (
    <section ref={sectionRef} className="relative bg-white mt-8">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0  h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${imageProgress * 16}px`,
              paddingBottom: `${60 + imageProgress * 40}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === 'left')
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || '/placeholder.svg'}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden mt-16 will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: '0 0 auto',
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/dark_logo.webp"
                alt="Mountain landscape with camping tent at sunset"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Text - Fades out first */}
              <div
                className="absolute inset-0 flex items-end overflow-hidden"
                style={{ opacity: textOpacity }}
              >
                <h1 className="w-full text-[22vw] font-medium leading-[0.8] tracking-tighter text-white">
                  {word.split('').map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction:
                          'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === 'right')
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || '/placeholder.svg'}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[150vh]" />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-main md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          <span className="font-bold font-heading">Cơm Lành</span>
          <br />
          <span className="text-secondary-800 text-lg">
            ỔN ĐỊNH TỪ TỪNG HẠT GẠO ĐẾN TỪNG LỢI NHUẬN CỦA ĐỐI TÁC
          </span>
        </p>
      </div>
    </section>
  );
}
