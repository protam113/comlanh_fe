'use client';

import Link from 'next/link';
import { useIntersection } from '../hooks/useIntersection';

export default function FeaturedProduct() {
  const [ref, isVisible] = useIntersection({ threshold: 0.2, once: true });

  return (
    <section
      id="featured-section"
      className="py-20 bg-white overflow-hidden scroll-mt-20"
      ref={ref}
    >
      <div className="container-custom">
        <div
          className={`promo-banner hover-elevate relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Left: Content */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <span className="inline-block bg-white text-primary px-5 py-1.5 rounded-full text-[0.8rem] font-bold border border-primary/20 mb-8 shadow-sm">
              Sản phẩm mới
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-dark leading-tight mb-6">
              GẠO ST25 HARMONY
            </h2>

            <p className="text-[1.05rem] text-primary-dark/80 leading-relaxed mb-10 max-w-[480px]">
              Vị ngon hòa quyện, khác biệt để dẫn đầu. Tự hào là sự kết hợp tinh
              tế giữa giống lúa ST25 trứ danh và các giống lúa ST cao cấp khác,
              siêu phẩm Gạo ST25 Harmony sẽ mở ra cho bạn một hành trình vị giác
              thực sự khác biệt và vô cùng độc đáo.
            </p>

            <Link
              href="/san-pham/st25-harmony"
              id="promo-explore-btn"
              className="bg-primary text-white px-10 py-4 rounded-full text-[1rem] font-bold shadow-lg hover:bg-primary-light hover:-translate-y-1 transition-all duration-300"
            >
              KHÁM PHÁ NGAY
            </Link>
          </div>

          {/* Right: Product Image */}
          <div className="relative h-full flex items-center justify-center">
            {/* Background floating rice grains decoration (Orange theme) */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-10 right-20 w-4 h-8 bg-primary/20 rounded-full rotate-45 transform"></div>
              <div className="absolute bottom-20 left-10 w-3 h-6 bg-primary/30 rounded-full -rotate-12 transform"></div>
              <div className="absolute top-1/2 right-1/4 w-5 h-10 bg-primary/15 rounded-full rotate-[110deg] transform"></div>
            </div>

            <img
              src="/banner_harmony.png"
              alt="Gạo ST25 Harmony - Siêu phẩm mới"
              loading="lazy"
              className="relative z-10 w-full max-w-[550px] object-contain drop-shadow-[0_20px_50px_rgba(218,142,65,0.25)] hover:scale-105 transition-transform duration-700"
            />

            {/* "Siêu phẩm mới" Badge in corner */}
            <div className="absolute top-5 right-5 md:top-10 md:right-10 bg-[#FF6B00] text-white p-4 rounded-lg font-bold flex flex-col items-center leading-tight shadow-lg rotate-12 z-20">
              <span className="text-[0.6rem] uppercase tracking-widest opacity-80">
                SIÊU PHẨM
              </span>
              <span className="text-xl">MỚI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
