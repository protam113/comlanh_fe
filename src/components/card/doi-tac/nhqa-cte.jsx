'use client';

import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import { PublicContainer } from '@/components/wrappers/public.container';
import { SectionTag } from '@/components/design/section.design';

const cards = [
  {
    title: 'Cơm Thơm & Đồng Đều',
    desc: 'Hạt gạo ổn định giúp cơm luôn giữ được độ dẻo, thơm và chất lượng trong mỗi suất ăn.',
  },
  {
    title: 'Tối Ưu Chi Phí Vận Hành',
    desc: 'Nguồn gạo phù hợp giúp quán ăn và nhà hàng cân bằng giữa chất lượng món ăn và chi phí kinh doanh.',
  },
  {
    title: 'Nguồn Hàng Ổn Định',
    desc: 'Đảm bảo cung ứng đều đặn cho nhu cầu phục vụ mỗi ngày, kể cả số lượng lớn.',
  },
  {
    title: 'Phù Hợp Nhiều Mô Hình',
    desc: 'Từ quán cơm, bếp ăn, nhà hàng đến dịch vụ suất ăn công nghiệp đều có giải pháp phù hợp.',
  },
];

export default function RestaurantCategories() {
  const [ref, isVisible] = useIntersection({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      id="restaurant-categories-section"
      ref={ref}
      className="py-24 sm:py-32 bg-white scroll-mt-8 relative overflow-hidden"
    >
      <PublicContainer className="container-custom mx-auto relative z-10">
        <div
          className={`text-center mb-14 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTag title="NHÀ HÀNG & QUÁN ĂN" />

          <h1 className="text-3xl sm:text-4xl uppercase text-secondary-700 font-bold mt-4 mb-4">
            Tiêu Chí Chọn Gạo Kinh Doanh
          </h1>

          <p className="max-w-2xl mx-auto text-secondary-600 text-sm sm:text-base leading-relaxed">
            Cơm Lành mang đến nguồn gạo ổn định, phù hợp cho các mô hình kinh
            doanh ẩm thực với tiêu chí ngon, đều và tối ưu chi phí.
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-transparent via-secondary-700/40 to-transparent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group bg-beige-50 border border-primary/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[280px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mb-8">
                0{index + 1}
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4 group-hover:text-main transition-colors duration-300">
                  {card.title}
                </h2>

                <p className="text-secondary-600 leading-relaxed text-sm sm:text-base">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 w-12 h-1 bg-main rounded-full group-hover:w-20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </PublicContainer>
    </section>
  );
}
