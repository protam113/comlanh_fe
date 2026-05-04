import React from 'react';
import { SectionTag } from '../design/section.design';
import { Arrows } from '@/assets';
import { PublicContainer } from '../wrappers/public.container';
import Image from 'next/image';

const solution = [
  {
    id: '1',
    title: ' Gạo Chất Lượng & Ổn Định',
    desc: 'Cung cấp đa dạng các loại gạo cùng với mức giá ưu đãi hơn so với thị trường 10-15% với cam kết lô gạo đồng đều theo thời gian.',
  },
  {
    id: '2',
    title: ' Hồ Sơ Hoá Đơn Minh Bạch',
    desc: 'Cung cấp đầy đủ giấy ATTP, giấy công bố sản phẩm, hợp đồng mua bán, hoá đơn VAT và các chứng từ liên quan đến ATTP',
  },
  {
    id: '3',
    title: 'Bao Bì Định Danh',
    desc: 'Gạo được đóng trong bao bì đầy đủ thông tin (Tên Gạo, Tên Công ty, Hạn Sử Dụng…) theo yêu cầu của sở an toàn thực phẩm',
  },
];

export const OurStrengthCard = () => {
  return (
    <PublicContainer className="mx-auto py-8">
      <SectionTag title="Giải pháp từ Gạo Cơm Lành" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl text-secondary-700 font-bold mt-4 mb-4">
              Tại Cơm Lành, chúng tôi bán sự "Thật" và sự "An tâm"
            </h1>
            <p className="text-secondary-800 text-base md:text-base font-body leading-relaxed">
              Chúng tôi hiểu rằng,{' '}
              <span className="font-bold">hạt gạo chất lượng và phù hơp</span>{' '}
              với đối tác là nền tảng, nhưng
              <span className="font-bold">
                {' '}
                hồ sơ pháp lý đầy đủ, minh bạch
              </span>{' '}
              là lá chắn tốt cho đối tác. Cơm Lành cam kết cung cấp giải pháp
              gạo sỉ chuyên nghiệp cho đối tác:
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-4 text-secondary-800 font-bold font-headline group cursor-pointer">
              <span className="text-[14px] hover:underline">
                Liên Hệ Ngay Với Chúng Tôi
              </span>
              <Arrows.ArrowRight />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container opacity-10 rounded-xl blur-2xl group-hover:opacity-15 transition-opacity"></div>
            {/* <img
              className="relative w-full h-[500px] object-cover rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500"
              data-alt="Professional technician in uniform performing precision maintenance on a modern outdoor air conditioning unit with focus on technical skill and detail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdAULiWkjRm_gQhFW_DPCoeyfyu-BAdKvtraav626DKpvz4AuT13Wxpa32x6X27MCVKsI2MDKGLdbHFHuVZMgEb9jrpL12gMnpAJg1KEdfLZymeNf2ImLABvWg_jqaAfjqq-WVyMmBaxjRAdOmZygetyv_ZdxYsgK2d3oB7TJBOg4_v3Yab7bKh8FxsrunlV0l-qVJw18VtBPT5VYMIgPEtD5gMker_Ot11cUgnoYiZLqoxZD3m44704PeY1GCDb0oZ-aq2E0QAUE"
            /> */}
            <Image
              src="/images/light_logo.webp"
              alt="Logo"
              height={500}
              width={550}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8  mt-6">
          {solution.map((item, i) => (
            <div
              key={i}
              className="bg-beige-50 p-5 rounded-xl transition-all duration-500 hover:translate-x-2"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-headline text-secondary-800 text-2xl font-bold text-on-surface mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PublicContainer>
  );
};
