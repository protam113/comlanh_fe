'use client';

import { SectionTag } from '@/components/design/section.design';
import { useIntersection } from '@/hooks/useIntersection';
import React from 'react';

export const ProcessingFactoryCard = () => {
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
                Xưởng Chế Biến & Sản Xuất Từ Gạo
              </span>
              Nguồn Gạo Ổn Định Cho Sản Xuất Quy Mô Lớn
            </h2>

            <div className="space-y-4 sm:space-y-5 text-secondary-700 leading-relaxed text-sm sm:text-base">
              <p>
                Với các cơ sở chế biến thực phẩm, sản xuất bún, bánh, cháo, cơm
                cháy hay các sản phẩm từ gạo, nguồn nguyên liệu ổn định là yếu
                tố quan trọng giúp duy trì chất lượng sản phẩm đầu ra.
                <span className="font-semibold text-main"> Cơm Lành </span>
                cung cấp giải pháp gạo phù hợp cho nhiều mô hình sản xuất với
                tiêu chí ổn định, sạch và tối ưu chi phí.
              </p>

              <p>
                Chúng tôi luôn chú trọng chất lượng hạt gạo, độ đồng đều và khả
                năng cung ứng lâu dài nhằm hỗ trợ quá trình sản xuất vận hành
                hiệu quả hơn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Nguồn nguyên liệu ổn định
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Phù hợp sản xuất số lượng lớn
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Chất lượng đồng đều
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Tối ưu chi phí vận hành
                </div>
              </div>

              <p className="bg-beige-50 border-l-4 border-primary pl-5 py-4 pr-4 italic font-medium text-secondary-800 text-sm sm:text-base rounded-r-xl">
                <span className="font-bold text-main">Cơm Lành</span> mong muốn
                đồng hành cùng các xưởng chế biến và sản xuất trong việc xây
                dựng nguồn nguyên liệu ổn định, chất lượng và bền vững.
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
                src="/images/galleries/7.jpg"
                alt="Xưởng chế biến và sản xuất từ gạo"
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
