'use client';

import { SectionTag } from '@/components/design/section.design';
import { useIntersection } from '@/hooks/useIntersection';
import React from 'react';

export const GtnCard = () => {
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
                Gạo Thiện Nguyện
              </span>
              Trao Yêu Thương Qua Những Bữa Cơm Đủ Đầy
            </h2>

            <div className="space-y-4 sm:space-y-5 text-secondary-700 leading-relaxed text-sm sm:text-base">
              <p>
                Gạo luôn là món quà thiết thực trong các hoạt động hỗ trợ cộng
                đồng, thiện nguyện và sẻ chia với những hoàn cảnh khó khăn. Hiểu
                được điều đó,
                <span className="font-semibold text-main"> Cơm Lành </span>
                mang đến giải pháp <strong>Gạo Thiện Nguyện</strong> với tiêu
                chí: giá phù hợp, nguồn gốc minh bạch và chất lượng đảm bảo.
              </p>

              <p>
                Chúng tôi đồng hành cùng mạnh thường quân, doanh nghiệp và các
                nhóm thiện nguyện trong việc cung cấp nguồn gạo ổn định, an toàn
                và phù hợp cho nhu cầu hỗ trợ số lượng lớn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Nguồn gốc rõ ràng
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Giá phù hợp cho thiện nguyện
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Đảm bảo chất lượng gạo
                </div>

                <div className="bg-beige-50 rounded-xl p-4">
                  ✓ Hỗ trợ số lượng lớn ổn định
                </div>
              </div>

              <p className="bg-beige-50 border-l-4 border-primary pl-5 py-4 pr-4 italic font-medium text-secondary-800 text-sm sm:text-base rounded-r-xl">
                <span className="font-bold text-main">Cơm Lành</span> mong muốn
                cùng bạn lan tỏa thêm nhiều bữa cơm ấm áp đến những người cần
                được giúp đỡ.
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
                src="/images/galleries/5.png"
                alt="Nhà máy chế biến gạo hiện đại"
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
