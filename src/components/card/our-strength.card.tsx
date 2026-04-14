import React from 'react';
import { SectionTag } from '../design/section.design';
import { Arrows } from '@/assets';
import { PublicContainer } from '../wrappers/public.container';

const solution = [
  {
    id: '1',
    title: ' Sản phẩm đã kiểm nghiệm & công bố',
    desc: 'Mọi loại gạo từ Cơm Lành đều trải qua quy trình kiểm nghiệm nghiêm ngặt về các chỉ tiêu an toàn thực phẩm, dư lượng thuốc bảo vệ thực vật và có bản tự công bố chất lượng đầy đủ.',
  },
  {
    id: '2',
    title: ' Bao bì định danh thương hiệu',
    desc: 'Gạo được đóng gói trong bao bì có đầy đủ thông tin: Tên loại gạo, khối lượng tịnh, ngày đóng gói, hạn sử dụng và thông tin pháp lý của nhà sản xuất. Đây là minh chứng rõ nhất cho chất lượng và uy tín đối với thực khách.',
  },
  {
    id: '3',
    title: 'Hồ sơ hóa đơn minh bạch',
    desc: 'Cung cấp đầy đủ giấy ATTP, hóa đơn đỏ (VAT), hợp đồng mua bán và các chứng từ liên quan để anh chị chủ quán hoàn toàn tự tin khi làm việc với các cơ quan chức năng.',
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
              Chúng tôi hiểu rằng, một hạt cơm ngon là nền tảng, nhưng một hồ sơ
              pháp lý sạch là lá chắn cho nhà kinh doanh.{' '}
              <span className="font-bold">
                Cơm Lành (thuộc Công ty TNHH Trọn Vẹn Toàn)
              </span>{' '}
              cam kết cung cấp giải pháp gạo sỉ chuyên nghiệp:
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
            <img
              className="relative w-full h-[500px] object-cover rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500"
              data-alt="Professional technician in uniform performing precision maintenance on a modern outdoor air conditioning unit with focus on technical skill and detail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdAULiWkjRm_gQhFW_DPCoeyfyu-BAdKvtraav626DKpvz4AuT13Wxpa32x6X27MCVKsI2MDKGLdbHFHuVZMgEb9jrpL12gMnpAJg1KEdfLZymeNf2ImLABvWg_jqaAfjqq-WVyMmBaxjRAdOmZygetyv_ZdxYsgK2d3oB7TJBOg4_v3Yab7bKh8FxsrunlV0l-qVJw18VtBPT5VYMIgPEtD5gMker_Ot11cUgnoYiZLqoxZD3m44704PeY1GCDb0oZ-aq2E0QAUE"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8  mt-6">
          {solution.map((item, i) => (
            <div
              key={i}
              className="bg-beige-50 p-10 rounded-xl transition-all duration-500 hover:translate-x-2"
            >
              <div className="flex flex-col gap-6">
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
