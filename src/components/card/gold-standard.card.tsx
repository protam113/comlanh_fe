'use client';

import React from 'react';
import { SectionTag } from '../design/section.design';
import { PublicContainer } from '../wrappers/public.container';

const standard = [
  {
    step: '01',
    title: 'An toàn pháp lý',
    desc: (
      <>
        Với bộ hồ sơ{' '}
        <span className="font-bold">
          nguồn gốc gạo rõ ràng và hóa đơn minh bạch
        </span>
        , Cơm Lành giúp đối tác luôn yên tâm vận hành.
      </>
    ),
  },
  {
    step: '02',
    title: 'Giá Ổn Định',
    desc: (
      <>
        Nói không với việc tăng giá đột ngột. Với chính sách báo trước{' '}
        <span className="font-bold">14 ngày</span>, Cơm Lành giúp đối tác nắm
        thế chủ động trong tài chính.
      </>
    ),
  },
  {
    step: '03',
    title: 'Tối ưu lợi nhuận',
    desc: (
      <>
        Nhờ mô hình vận hành tinh gọn và quy trình phân phối trực tiếp không qua
        trung gian, Cơm Lành mang đến mức giá sỉ{' '}
        <span className="font-bold">ưu đãi hơn 10-15% so với thị trường</span>.
      </>
    ),
  },
];

export const GoldStandardCard = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container-custom text-center mb-20">
        <SectionTag title="Tiêu Chí Vàng" />
        <h2 className="font-heading text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-secondary-800 leading-[1.15] mb-5">
          Ba trụ cột "Vàng" cho kinh doanh bền vững
        </h2>
      </div>

      <PublicContainer className="mx-auto w-full px-0 md:px-6">
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-1 bg-divider z-0"></div>

          <div className="grid lg:grid-cols-3 gap-12 text-center">
            {standard.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary-800 border-4 border-secondary-500 text-white flex items-center justify-center font-black text-2xl mb-8 shadow-warm-md hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-xl text-secondary-800 font-black mb-4">
                  {step.title}
                </h4>
                <p className="text-secondary-700 text-[0.95rem] leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PublicContainer>
    </section>
  );
};
