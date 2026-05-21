'use client';

import { SectionTag } from '@/components/design/section.design';
import { useIntersection } from '@/hooks/useIntersection';
import React from 'react';

export const RestaurantCard = () => {
  const [historyRef, historyVisible] = useIntersection({
    threshold: 0.2,
    once: true,
  });

  return (
    <section
      className="py-8 bg-white overflow-hidden"
      ref={historyRef as unknown as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              historyVisible
                ? 'sm:opacity-100 sm:translate-x-0'
                : 'sm:opacity-0 sm:-translate-x-10'
            }`}
          >
            <SectionTag title="CƠM LÀNH" />

            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-600 leading-[1.2] mb-5">
              <span className="text-secondary-800 text-4xl sm:text-6xl block mb-2">
                Nhà Hàng & Quán Ăn
              </span>
              Giải Pháp Gạo Ổn Định Cho Kinh Doanh Ẩm Thực
            </h2>

            <div className="space-y-4 sm:space-y-5 text-secondary-700 leading-relaxed text-sm sm:text-base">
              <p>
                Với nhà hàng, quán ăn và bếp phục vụ số lượng lớn, chất lượng
                gạo ảnh hưởng trực tiếp đến hương vị món ăn và trải nghiệm của
                khách hàng.
                <span className="font-semibold text-main"> Cơm Lành </span>
                cung cấp nguồn gạo ổn định, phù hợp nhiều mô hình kinh doanh ẩm
                thực từ bình dân đến chuyên nghiệp.
              </p>

              <p>
                Chúng tôi luôn ưu tiên sự đồng đều trong từng hạt gạo, đảm bảo
                cơm thơm ngon, dễ bảo quản và tối ưu chi phí vận hành cho quán.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Gạo ổn định mỗi ngày
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Phù hợp nhiều món ăn
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Tối ưu chi phí vận hành
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Hỗ trợ số lượng lớn
                </div>
              </div>

              <p className="bg-beige-50 border-l-4 border-primary pl-5 py-4 pr-4 italic font-medium text-secondary-800 text-sm sm:text-base rounded-r-xl">
                <span className="font-bold text-main">Cơm Lành</span> mong muốn
                đồng hành cùng các quán ăn và nhà hàng trong việc mang đến những
                bữa cơm ngon, chất lượng và ổn định mỗi ngày.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${
              historyVisible
                ? 'sm:opacity-100 sm:translate-x-0'
                : 'sm:opacity-0 sm:translate-x-10'
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-lg">
              <img
                src="/images/galleries/6.jpg"
                alt="Nhà hàng sử dụng gạo chất lượng"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
