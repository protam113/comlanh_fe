import React from 'react';
import { SectionTag } from '../design/section.design';
import { PublicContainer } from '../wrappers/public.container';

const standard = [
  {
    step: '01',
    title: ' An toàn pháp lý',
    desc: 'Không còn nỗi lo thiếu giấy tờ khi bị kiểm tra đột xuất. Hồ sơ nguồn gốc rõ ràng giúp nhà hàng duy trì hoạt động ổn định.',
  },
  {
    step: '02',
    title: 'Bảo vệ uy tín',
    desc: 'Thực khách ngày càng thông thái. Một bao gạo có thương hiệu, có địa chỉ rõ ràng sẽ xây dựng niềm tin lớn hơn gấp nhiều lần những bao gạo trắng không nhãn mác.',
  },
  {
    step: '03',
    title: 'Chất lượng ổn định',
    desc: 'Gạo có nguồn gốc luôn đi kèm với sự cam kết về chất lượng. Không có chuyện "lô này ngon, lô sau dở" do gom hàng trôi nổi.',
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
