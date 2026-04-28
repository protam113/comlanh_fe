'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { PublicContainer } from './wrappers/public.container';
import { SectionTag } from './design/section.design';

const certs = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L3 7v5c0 5.25 3.75 10.16 9 12 5.25-1.84 9-6.75 9-12V7l-9-5z" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
    name: 'VietGAP',
    desc: 'Thực hành nông nghiệp tốt (Vietnam)',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
    name: 'HACCP',
    desc: 'An toàn thực phẩm quốc tế',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v10" />
        <path d="M7 12h10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    name: 'HALAL',
    desc: 'Thị trường Hồi giáo toàn cầu',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    name: 'OCOP 4 Sao',
    desc: 'Đặc sản vùng miền tiêu chuẩn',
    color: 'text-primary bg-primary/5',
  },
];

export default function Certifications() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, once: true });

  return (
    <section
      id="certifications-section"
      className="py-32 bg-linear-to-br from-beige via-white to-section-alt scroll-mt-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-primary/2 blur-3xl pointer-events-none"></div>

      <PublicContainer className="mx-auto relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-20 lg:gap-32 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Left text */}
          <div className="max-w-xl">
            <SectionTag title="Chứng nhận & Tiêu chuẩn" />

            <h2 className=" text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-secondary-800 leading-[1.15] mb-5">
              Chất Lượng Được
              <br />
              Kiểm Chứng Độc Lập
            </h2>
            <p className="text-lg text-secondary-800 leading-relaxed mb-12">
              Chúng tôi xóa tan nỗi lo về nguồn gốc hàng hóa và các đợt kiểm tra
              liên ngành. Sự chuyên nghiệp của Cơm Lành thể hiện qua:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Hồ sơ chuẩn chỉnh',
                  desc: 'Cung cấp đầy đủ hóa đơn chứng từ, nguồn gốc xuất xứ rõ ràng. Mọi sản phẩm đều đạt chứng nhận vệ sinh an toàn thực phẩm và có bản tự công bố chất lượng đầy đủ.',
                },
                {
                  title: 'Bao bì định danh',
                  desc: 'Gạo được đóng gói trong bao bì thương hiệu chuẩn mực, ghi rõ thông tin Công ty TNHH Trọn Vẹn Toàn. Điều này không chỉ giúp anh chị tự tin trước các cơ quan quản lý mà còn nâng tầm uy tín của nhà hàng trong mắt thực khách.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-main flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-main mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[0.9rem] text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right cert badges grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {certs.map((cert, idx) => (
              <div
                key={cert.name}
                id={`cert-badge-${cert.name.toLowerCase().replace(/\s/g, '-')}`}
                className={`p-10 bg-white/60 backdrop-blur-sm rounded-3xl border border-white shadow-warm-md hover:shadow-warm-xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center gap-6 group transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${cert.color} flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm`}
                >
                  {cert.icon}
                </div>
                <div>
                  <div className=" text-xl font-black text-text-secondary mb-2">
                    {cert.name}
                  </div>
                  <div className="text-[0.75rem] text-text-muted leading-relaxed font-bold uppercase tracking-widest px-2">
                    {cert.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PublicContainer>
    </section>
  );
}
