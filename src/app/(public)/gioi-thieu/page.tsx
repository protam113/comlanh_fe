'use client';

import { useEffect } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import Stats from '@/components/Stats';
import Certifications from '@/components/Certifications';
import FaqCard from '@/components/card/faq.card';
import { SectionTag } from '@/components/design/section.design';
import { OurStrengthCard } from '@/components/card/our-strength.card';
import { IntroCard } from '@/components/card/intro.card';
import { PublicContainer } from '@/components/wrappers/public.container';
import { CtaCard } from '@/components/card/cta.card';
import { GallerySection } from '@/components/card/gallery.card';

const processSteps = [
  {
    step: '01',
    title: ' Gửi mẫu thử đa dạng (Mẫu nhỏ)',
    desc: 'Sau khi nhận thông tin về mô hình quán, chúng tôi sẽ gửi bộ mẫu thử gồm 3-5 loại gạo khác nhau phù hợp với phân khúc giá anh chị mong muốn. Anh chị có thể xem mặt gạo, ngửi mùi thơm và nấu thử bát nhỏ để kiểm tra độ dẻo/nở.',
  },
  {
    step: '02',
    title: ' Chọn "Ứng cử viên" số 1',
    desc: 'Sau khi anh chị đã ưng ý với một loại mẫu thử cụ thể, hãy phản hồi cho Cơm Lành.',
  },
  {
    step: '03',
    title: 'Tặng 5kg gạo để "Chạy thử" nồi lớn',
    desc: 'Đây là bước quan trọng nhất. Cơm Lành sẽ gửi tặng 5kg gạo chính loại đó để anh chị nấu trực tiếp bằng nồi cơm công nghiệp tại quán.',
  },
];

export default function About() {
  const [heroRef, heroVisible] = useIntersection({
    threshold: 0.1,
    once: true,
  });
  const [valuesRef, valuesVisible] = useIntersection({
    threshold: 0.2,
    once: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        ref={heroRef as unknown as React.RefObject<HTMLElement>}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/hero.png"
            alt="Cánh đồng lúa Ngọc Điền"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div
          className={`container-custom relative z-10 text-center text-white transition-all duration-1000 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">
            Gao Lanh
          </div>
          <h1 className="text-2xl md:text-5xl font-heading font-black mb-8 leading-tight">
            <span className="text-primary-bg opacity-90 italic">
              KHÔNG CẦN GẠO ĐẮT NHẤT – CHỈ CẦN GẠO PHÙ HỢP NHẤT
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed font-medium">
            Cơm Lành đồng hành cùng chủ quán tìm ra "chân ái" cho nồi cơm kinh
            doanh thông qua chương trình: Thử mẫu nhỏ - Nấu mẫu lớn (5kg).
          </p>
        </div>
      </section>

      {/* History Section */}
      <IntroCard />

      {/* Stats Section Reused */}
      <Stats />

      {/* Vision & Values */}
      <section
        className="py-32 bg-beige-50/80"
        ref={valuesRef as unknown as React.RefObject<HTMLElement>}
      >
        <FaqCard />
      </section>
      <div className="bg-white p-8">
        <OurStrengthCard />
      </div>
      {/* Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom text-center mb-20">
          <SectionTag title="Quy trình 3 bước" />
          <h2 className="font-heading text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-secondary-800 leading-[1.15] mb-5">
            "Thử Thật – Nấu Thật"
          </h2>
          <p className="text-secondary-600">
            Để tránh lãng phí thời gian của chủ quán, Cơm Lành áp dụng quy trình
            thử nghiệm bài bản
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto w-full px-0 md:px-6">
          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-1 bg-divider z-0"></div>

            <div className="grid lg:grid-cols-3 gap-12 text-center">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center"
                >
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
          <p className="text-secondary-600 mt-6">
            <span className="font-bold">Mục tiêu:</span> Kiểm tra độ ngậm nước,
            thời gian chín và chất lượng cơm khi nấu số lượng lớn để phục vụ
            khách hàng thực tế.{' '}
            <span className="font-bold text-red-500">*</span>
          </p>
        </div>

        <PublicContainer className="mx-auto mt-24">
          <div className="rounded-3xl overflow-hidden aspect-21/9 shadow-warm-xl relative group">
            <img
              src="/images/about/process.png"
              alt="Quy trình phơi lúa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-2000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">
                Công nghệ sấy hiện đại
              </div>
              <div className="text-2xl font-bold">
                Giữ trọn hương vị lúa mới trong từng hạt gạo
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      {/* Reused Certifications */}
      <Certifications />
      <GallerySection />
      {/* Call to Action */}
      <CtaCard />
    </main>
  );
}
