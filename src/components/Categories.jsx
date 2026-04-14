'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { PublicContainer } from './wrappers/public.container';
import { SectionTag } from './design/section.design';

const categories = [
  {
    id: 'gao-ban-chay',
    name: 'Gạo bán chạy',
    ribbon: 'Ăn nhiều Nhất',
    img: '/cat_rice_white.png',
  },
  {
    id: 'gao-nep',
    name: 'Gạo Nếp',
    ribbon: 'Ăn Đổi Gió',
    img: '/cat_rice_white.png',
  },
  {
    id: 'gao-lut',
    name: 'Gạo Lứt',
    ribbon: 'Ăn Kiêng',
    img: '/cat_rice_brown.png',
  },
  {
    id: 'gao-trang',
    name: 'Gạo Trắng',
    ribbon: 'Ăn Đủ chất',
    img: '/cat_rice_white.png',
  },
  {
    id: 'gao-nhat',
    name: 'Gạo Nhật',
    ribbon: 'Ăn nhanh Ăn vui',
    img: '/cat_rice_white.png',
  },
];

export default function Categories() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, once: true });

  return (
    <section
      id="categories-section"
      className="py-32 bg-white scroll-mt-20 relative overflow-hidden"
      ref={ref}
    >
      <PublicContainer className="container-custom mx-auto relative z-10">
        <div
          className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="section-tag bg-primary/10! text-primary! transform hover:scale-105 transition-transform duration-300"></div>
          <SectionTag title="Tinh hoa lúa gạo" />
          <h1 className="text-4xl text-secondary-700 font-bold mt-4 mb-4">
            Danh mục Cơm Lành
          </h1>
          <div className="w-16 h-1 bg-linear-to-r from-transparent via-primary-800/40 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
          {categories.map((cat, idx) => (
            <article
              key={cat.id}
              className={`group relative flex flex-col items-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image & Spotlight Area */}
              <div className="relative w-full max-w-[200px] mx-auto mb-10">
                {/* Floating Image Container */}
                <div
                  className="relative z-10 animate-float-slow"
                  style={{ animationDelay: `${idx * 0.5}s` }}
                >
                  <div className="w-full aspect-square rounded-md bg-white shadow-2xl overflow-hidden p-1 border border-white transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-[0.65rem] font-bold text-primary/60 uppercase tracking-[0.2em] mb-2 scale-90 group-hover:scale-100 transition-transform">
                  Chất Lượng Cao
                </span>
                <h3 className="font-heading text-xl font-extrabold text-secondary-700 group-hover:text-primary-800 transition-colors duration-300">
                  {cat.name}
                </h3>

                {/* Elegant Underline Indicator */}
                <div
                  className={`mt-3 h-0.5 bg-primary transition-all duration-500 ${cat.isActive ? 'w-12 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-60'}`}
                ></div>
              </div>

              {/* Active Corner Accent */}
              {cat.isActive && (
                <div className="absolute top-[-10px] left-[-10px] w-6 h-6 border-t-2 border-l-2 border-primary/20 rounded-tl-xl pointer-events-none"></div>
              )}
            </article>
          ))}
        </div>
      </PublicContainer>
    </section>
  );
}
