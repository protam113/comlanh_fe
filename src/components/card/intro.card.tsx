'use client';

import { useIntersection } from '@/hooks/useIntersection';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SectionTag } from '../design/section.design';

interface Card {
  keyword: string;
  video: string;
}

const VIDEO_DURATION = 15000;

export const IntroCard = () => {
  const [historyRef, historyVisible] = useIntersection({
    threshold: 0.2,
    once: true,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keywordVisible, setKeywordVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const durationRef = useRef<number>(VIDEO_DURATION);

  const cards: Card[] = [
    {
      keyword: '3 Yếu Tố Duy Trì Gạo Ổn Định',
      video:
        'https://hcm03.vstorage.vngcloud.vn/v1/AUTH_161cb0839cf746f991ab035d9a50a0b6/vietstrix-team/video/v4.mp4',
    },
    {
      keyword: 'Gạo Chất Lượng Và Giải Pháp Chuyên Sâu',
      video:
        'https://hcm03.vstorage.vngcloud.vn/v1/AUTH_161cb0839cf746f991ab035d9a50a0b6/vietstrix-team/video/v5.mp4',
    },
    {
      keyword: 'Gạo Thiện Nguyện',
      video:
        'https://hcm03.vstorage.vngcloud.vn/v1/AUTH_161cb0839cf746f991ab035d9a50a0b6/vietstrix-team/video/v1.mp4',
    },
  ];

  // Track how much time elapsed before pause so we can resume the progress bar correctly
  const elapsedBeforePauseRef = useRef<number>(0);

  const currentVideo = () => videoRefs.current[currentIndex];

  const togglePlay = useCallback(() => {
    const vid = currentVideo();
    if (!vid) return;

    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPaused(false);

      const remaining = durationRef.current - elapsedBeforePauseRef.current;
      startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

      progressIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        setProgress(Math.min((elapsed / durationRef.current) * 100, 100));
      }, 50);

      autoAdvanceRef.current = setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % cards.length;
          setKeywordVisible(false);
          setProgress(0);
          setTimeout(() => setKeywordVisible(true), 250);
          return next;
        });
      }, remaining + 500);
    } else {
      vid.pause();
      setIsPaused(true);

      elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;

      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    }
  }, [cards.length, currentIndex]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      videoRefs.current.forEach((v) => {
        if (v) v.muted = next;
      });
      return next;
    });
  }, []);

  const goToIndex = useCallback((index: number) => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    setKeywordVisible(false);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex(index);
      setKeywordVisible(true);
    }, 250);
  }, []);

  const handleLoadedMetadata = useCallback(
    (index: number) => {
      const vid = videoRefs.current[index];
      if (
        vid &&
        vid.duration &&
        isFinite(vid.duration) &&
        index === currentIndex
      ) {
        durationRef.current = vid.duration * 1000;
      }
    },
    [currentIndex]
  );

  useEffect(() => {
    const vid = videoRefs.current[currentIndex];
    if (!vid) return;

    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== currentIndex) {
        v.pause();
        v.currentTime = 0;
      }
    });

    vid.muted = isMuted;
    elapsedBeforePauseRef.current = 0;
    setIsPaused(false);

    // If already loaded, use existing duration; else wait for metadata
    if (vid.readyState >= 1 && isFinite(vid.duration)) {
      durationRef.current = vid.duration * 1000;
    }

    vid.currentTime = 0;
    vid.play().catch(() => {});

    startTimeRef.current = Date.now();
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / durationRef.current) * 100, 100));
    }, 50);

    const handleEnded = () => {
      goToIndex((currentIndex + 1) % cards.length);
    };
    vid.addEventListener('ended', handleEnded);

    autoAdvanceRef.current = setTimeout(() => {
      goToIndex((currentIndex + 1) % cards.length);
    }, durationRef.current + 500);

    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      vid.removeEventListener('ended', handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section
      className="py-32 bg-beige-50/30 overflow-hidden"
      ref={historyRef as unknown as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              historyVisible
                ? 'sm:opacity-100 sm:translate-x-0'
                : 'sm:opacity-0 sm:-translate-x-10'
            }`}
          >
            <SectionTag title="Câu chuyện thương hiệu" />

            <h2 className="text-4xl font-bold text-secondary-600 leading-[1.15] mb-5">
              <span className="text-secondary-800 text-6xl">CƠM LÀNH</span>{' '}
              <br />
              ỔN ĐỊNH TỪ TỪNG HẠT GẠO ĐẾN TỪNG LỢI NHUẬN CỦA ĐỐI TÁC
            </h2>

            <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
              <p>
                <span className="text-secondary-800 font-bold">
                  Sứ mệnh của chúng tôi:
                </span>
                <br />
                Trở thành{' '}
                <span className="text-secondary-800 font-bold">
                  Nhà phân phối gạo sỉ số 1 tại TP. Hồ Chí Minh
                </span>
                , tự hào là cầu nối vững chắc đưa những hạt gạo tinh túy nhất từ
                cánh đồng Đồng bằng sông Cửu Long đến tận tay những người đầu
                bếp và chủ nhà hàng.
              </p>

              {/* Animated keyword badge */}
              <p className="bg-beige-50 border-l-4 border-primary pl-6 py-4 italic font-medium text-secondary-800">
                <span className="font-bold text-main">Cơm Lành</span> —{' '}
                <span
                  className="inline-block transition-all duration-300"
                  style={{
                    opacity: keywordVisible ? 1 : 0,
                    transform: keywordVisible
                      ? 'translateY(0px)'
                      : 'translateY(8px)',
                  }}
                >
                  {cards[currentIndex].keyword}
                </span>
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-3 pt-4 items-center">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  aria-label={`Chuyển sang: ${card.keyword}`}
                  className="relative flex items-center"
                >
                  {index === currentIndex ? (
                    <span className="relative h-2 w-16 rounded-full bg-slate-200 overflow-hidden block">
                      <span
                        className="absolute left-0 top-0 h-full bg-main rounded-full transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    </span>
                  ) : (
                    <span
                      className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                        index < currentIndex ? 'bg-main/50' : 'bg-slate-200'
                      } hover:bg-main/70`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — video */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              historyVisible
                ? 'sm:opacity-100 sm:translate-x-0'
                : 'sm:opacity-0 sm:translate-x-10'
            }`}
          >
            <div
              className="relative aspect-4/5 rounded-md overflow-hidden shadow-warm-lg cursor-pointer group"
              onClick={togglePlay}
            >
              {/* Pause overlay */}
              {isPaused && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-7 h-7 translate-x-0.5"
                    >
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* All videos preloaded — only active one visible */}
              {cards.map((card, index) => (
                <video
                  key={index}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.35)',
                  }}
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/video-thumb.jpg"
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
                >
                  <source src={card.video} type="video/mp4" />
                </video>
              ))}

              {/* Mute / Unmute button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                aria-label={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
                className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 active:scale-95 transition-all duration-200"
              >
                {isMuted ? (
                  /* Muted icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                  </svg>
                ) : (
                  /* Sound on icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
