'use client';

import { useEffect } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import Stats from '@/components/Stats';
import Certifications from '@/components/Certifications';

const coreValues = [
  {
    title: 'Tận Tâm',
    desc: 'Chúng tôi chăm chút từng hạt gạo từ khâu chọn giống đến khi đóng bao, mang trọn tâm huyết của người nông dân đến bàn ăn mỗi gia đình.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Chất Lượng',
    desc: 'Cam kết 100% gạo sạch, không pha trộn, không chất bảo quản, đạt chuẩn kiểm định quốc tế nghiêm ngặt nhất.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Bền Vững',
    desc: 'Phát triển nông nghiệp xanh, bảo vệ môi trường và đồng hành cùng sự thịnh vượng của cộng đồng nông dân địa phương.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1M9 5a7 7 0 0 1 12 5" />
        <path d="M2 20l5-5" />
        <path d="M7 20l-5-5" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Chọn Giống & Thổ Nhưỡng',
    desc: 'Lựa chọn những giống gạo ST25, Gạo Lứt tốt nhất, canh tác trên vùng đất phù sa màu mỡ của Sóc Trăng.',
  },
  {
    step: '02',
    title: 'Canh Tác Hữu Cơ',
    desc: 'Áp dụng quy trình VietGAP, kiểm soát nghiêm ngặt nguồn nước và phân bón hữu cơ.',
  },
  {
    step: '03',
    title: 'Thu Hoạch & Chế Biến',
    desc: 'Thu hoạch đúng độ chín, sấy lúa bằng công nghệ hiện đại để giữ trọn mùi thơm nguyên bản.',
  },
  {
    step: '04',
    title: 'Kiểm Định & Đóng Gói',
    desc: 'Mỗi lô hàng đều được kiểm nghiệm dư lượng thuốc trừ sâu và đóng gói hút chân không cao cấp.',
  },
];

export default function About() {
  const [heroRef, heroVisible] = useIntersection({
    threshold: 0.1,
    once: true,
  });
  const [historyRef, historyVisible] = useIntersection({
    threshold: 0.2,
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
    <main className="pt-20">
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
            Hành trình hạt ngọc trời
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            <span className="text-primary-bg opacity-90 italic">
              Tinh Hoa Lúa Gạo Việt
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed font-medium">
            Hơn 15 năm kiến tạo những giá trị bền vững từ tinh hoa nông nghiệp
            Việt Nam, mang hạt gạo sạch và đủ đầy dinh dưỡng đến mọi bàn ăn.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section
        className="py-32 bg-white overflow-hidden"
        ref={historyRef as unknown as React.RefObject<HTMLElement>}
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${historyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="section-tag">Câu chuyện thương hiệu</div>
              <h2 className="section-title">
                Hành Trình 15 Năm <br />
                Gắn Bó Cùng Đất Mẹ
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>
                  Cơm Lành bắt đầu từ niềm đam mê mãnh liệt với nông sản quê
                  hương Sóc Trăng. Chúng tôi nhận ra rằng, dù Việt Nam là cường
                  quốc lúa gạo, người tiêu dùng Việt vẫn luôn khao khát những
                  sản phẩm thực sự sạch, minh bạch và đẳng cấp.
                </p>
                <p>
                  Suốt hơn một thập kỷ, chúng tôi không ngừng cải tiến công
                  nghệ, mở rộng vùng nguyên liệu và xây dựng chuỗi cung ứng khép
                  kín. Từ một cơ sở sản xuất nhỏ, Ngọc Điền tự hào trở thành đối
                  tác tin cậy của hàng nghìn đại lý và xuất khẩu hạt gạo Việt
                  đến 12 quốc gia trên thế giới.
                </p>
                <div className="pt-4 border-l-4 border-primary pl-6 italic font-medium text-primary-dark">
                  "Chúng tôi không chỉ bán gạo, chúng tôi trao gửi sự an tâm và
                  sức khỏe trong từng bữa cơm gia đình."
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${historyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-warm-lg">
                <img
                  src="/images/about/factory.png"
                  alt="Nhà máy chế biến gạo hiện đại"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Reused */}
      <Stats />

      {/* Vision & Values */}
      <section
        className="py-32 bg-beige/30"
        ref={valuesRef as unknown as React.RefObject<HTMLElement>}
      >
        <div className="container-custom text-center mb-20">
          <div className="section-tag mx-auto">Tầm nhìn & Giá trị</div>
          <h2 className="section-title">Giá Trị Cốt Lõi</h2>
          <p className="section-subtitle mx-auto">
            Kim chỉ nam giúp Ngọc Điền không ngừng vươn xa và giữ vững vị thế
            trên thị trường.
          </p>
        </div>

        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className={`p-10 bg-white rounded-3xl shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 group transform ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom text-center mb-20">
          <div className="section-tag mx-auto">Quy trình sản xuất</div>
          <h2 className="section-title">Từ Cánh Đồng Đến Bàn Ăn</h2>
        </div>

        <div className="container-custom px-0 md:px-6">
          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-1 bg-divider z-0"></div>

            <div className="grid lg:grid-cols-4 gap-12 text-center">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary border-4 border-primary text-white flex items-center justify-center font-black text-2xl mb-8 shadow-warm-md hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-black mb-4">{step.title}</h4>
                  <p className="text-text-secondary text-[0.95rem] leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-custom mt-24">
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
        </div>
      </section>

      {/* Reused Certifications */}
      <Certifications />

      {/* Call to Action */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">
            Cùng Ngọc Điền Nâng Tầm <br />
            Bữa Cơm Việt
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Trải nghiệm hương vị gạo thượng hạng, an toàn và tinh tế từ vùng đất
            Sóc Trăng.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/san-pham/tat-ca"
              className="bg-white text-primary px-10 py-4 rounded-full font-black hover:bg-beige hover:-translate-y-1 transition-all shadow-lg"
            >
              XEM SẢN PHẨM
            </a>
            <a
              href="/lien-he"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-primary hover:-translate-y-1 transition-all"
            >
              LIÊN HỆ NGAY
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
