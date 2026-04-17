'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useIntersection } from '@/hooks/useIntersection';
import { PublicContainer } from './wrappers/public.container';
import { SectionTag } from './design/section.design';

const cards = [
  {
    title: 'NHÀ HÀNG, QUÁN ĂN',
    image: '/images/galleries/2.webp',
  },
  {
    title: 'TRƯỜNG HỌC, BỆNH VIỆN, XÍ NGHIỆP',
    image: '/images/thien-nguyen.png',
  },
  {
    title: 'XƯỞNG CHẾ BIẾN & SẢN XUẤT TỪ GẠO',
    image: '/images/galleries/2.webp',
  },
  {
    title: 'GẠO THIỆN NGUYỆN',
    image: '/images/thien-nguyen.png',
  },
];

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
          <SectionTag title="Đối Tác" />
          <h1 className="text-4xl uppercase text-secondary-700 font-bold mt-4 mb-4">
            tệp khách hàng
          </h1>
          <div className="w-16 h-1 bg-linear-to-r from-transparent via-secondary-700/40 to-transparent mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="relative group"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Image
                  src={card.image || '/placeholder.svg'}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#33553d]/90 via-[#33553d]/40 to-transparent" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundColor:
                      hoveredIndex === index
                        ? 'rgba(51, 85, 61, 0.2)'
                        : 'rgba(51, 85, 61, 0)',
                    backdropFilter:
                      hoveredIndex === index ? 'blur(2px)' : 'blur(0px)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span></span>
                  <div>
                    <motion.h2
                      className="text-xl font-bold text-secondary-50 mb-2"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        y: hoveredIndex === index ? -5 : 0,
                      }}
                    >
                      {card.title}
                    </motion.h2>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </PublicContainer>
    </section>
  );
}
