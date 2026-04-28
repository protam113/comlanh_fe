'use client';

import { useIntersection } from '@/hooks/useIntersection';
import React from 'react';
import { SectionTag } from '../design/section.design';

export const IntroCard = () => {
  const [historyRef, historyVisible] = useIntersection({
    threshold: 0.2,
    once: true,
  });

  return (
    <section
      className="py-32 bg-beige-50/30 overflow-hidden"
      ref={historyRef as unknown as React.RefObject<HTMLElement>}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${historyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <SectionTag title="Câu chuyện thương hiệu" />

            <h2 className=" text-4xl font-bold text-secondary-600 leading-[1.15] mb-5">
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
                Trở thành {``}
                <span className="text-secondary-800 font-bold">
                  Nhà phân phối gạo sỉ số 1 tại TP. Hồ Chí Minh
                </span>
                , tự hào là cầu nối vững chắc đưa những hạt gạo tinh túy nhất từ
                cánh đồng Đồng bằng sông Cửu Long đến tận tay những người đầu
                bếp và chủ nhà hàng.
              </p>
              <p className="bg-beige-50 border-l-4 border-primary pl-6 py-4 italic font-medium text-secondary-800">
                <span className="font-bold text-main">Cơm Lành</span> Không bán
                gạo đắt, chỉ bán gạo phù hợp
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${historyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-warm-lg">
              <img
                src="/images/rice_warehouse.webp"
                alt="Nhà máy chế biến gạo hiện đại"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
