'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: 'Tinh Hoa Lúa Gạo Việt',
    bgImage: '/hero_rice_field_dawn_1776052103609.png',
  },
  {
    id: 2,
    title: 'Sạch Từ Tâm, Ngon Từ Gốc',
    bgImage:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 3,
    title: 'Cội Nguồn Phù Sa',
    bgImage: '/hero_rice_sprouts_minimalist_1776053311752.png',
  },
  {
    id: 4,
    title: 'Gắn Kết Bữa Cơm Gia Đình',
    bgImage:
      'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 5,
    title: 'Chất Lượng Được Kiểm Chứng',
    bgImage:
      'https://images.unsplash.com/photo-1536767023194-e8e390c237ab?auto=format&fit=crop&q=80&w=2000',
  },
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative h-[85vh] min-h-[600px] w-full bg-primary-dark select-none"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden">
                {/* Background Image with optimized overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.bgImage}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-[6s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
                    style={{ opacity: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
                </div>

                {/* Minimalist Content with Staggered Animations */}
                <div className="container-custom relative z-10 px-6">
                  <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {/* Premium Slide Tag & Divider */}

                    {/* Staggered Heading */}
                    <h1
                      className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8 tracking-tight transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                      {slide.title}
                    </h1>

                    {/* Staggered CTA */}
                    <div
                      className={`transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                      <button className="inline-block bg-main hover:bg-primary-700 text-white px-12 py-4 rounded-full text-[0.9rem] font-bold tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 hover:shadow-primary/20">
                        Xem Ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Pagination (Minimalist progress style) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hero-pagination flex gap-4" />

        {/* Minimalist Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse-slow" />
        </div>
      </Swiper>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hero-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 2px;
          border-radius: 0;
          background: rgba(255,255,255,0.2);
          opacity: 1;
          transition: all 0.6s ease;
          margin: 0 !important;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #fff;
          width: 70px;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.5); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
}
