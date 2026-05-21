'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { PublicContainer } from './wrappers/public.container';
import { SectionTag } from './design/section.design';

const certs = [
  {
    name: 'VietGAP',
    fullName: 'Thực hành nông nghiệp tốt',
    code: 'VG-2019-HCM-0847',
    issuedBy: 'Sở Nông nghiệp & PTNT',
    issuedDate: '12/03/2019',
    renewedDate: '12/03/2025',
    color: 'text-green-700 bg-green-50 border-green-200',
    stampColor: 'text-green-600',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'HACCP',
    fullName: 'An toàn thực phẩm quốc tế',
    code: 'HC-2021-VN-3312',
    issuedBy: 'Cục An toàn thực phẩm',
    issuedDate: '08/06/2021',
    renewedDate: '08/06/2024',
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    stampColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'OCOP 4★',
    fullName: 'Đặc sản vùng miền tiêu chuẩn',
    code: 'OCOP-2022-AG-0124',
    issuedBy: 'Bộ Nông nghiệp & PTNT',
    issuedDate: '20/11/2022',
    renewedDate: '20/11/2025',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    stampColor: 'text-amber-600',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'HALAL',
    fullName: 'Thị trường Hồi giáo toàn cầu',
    code: 'HL-2024-MY-7891',
    issuedBy: 'HALAL Certification Body',
    issuedDate: '15/01/2024',
    renewedDate: '15/01/2026',
    color: 'text-primary bg-primary/5 border-primary/20',
    stampColor: 'text-primary',
    badgeColor: 'bg-primary/10 text-primary',
  },
];

function StampIcon({ className }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="22"
        r="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M22 10 L24.4 17.6 L32.4 17.6 L26 22.4 L28.4 30 L22 25.2 L15.6 30 L18 22.4 L11.6 17.6 L19.6 17.6 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M22 13 L23.8 18.8 L29.8 18.8 L25 22.2 L26.8 28 L22 24.6 L17.2 28 L19 22.2 L14.2 18.8 L20.2 18.8 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function CertDocumentCard({ cert, idx, isVisible }) {
  return (
    <div
      id={`cert-doc-${cert.name.toLowerCase().replace(/\s|\*/g, '-')}`}
      className={`relative bg-white rounded-2xl border overflow-hidden group transition-all duration-700 hover:-translate-y-1 hover:shadow-warm-xl ${cert.color} ${
        isVisible
          ? 'sm:opacity-100 sm:translate-y-0'
          : 'sm:opacity-0 sm:translate-y-6'
      }`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      <div className="h-1 w-full bg-current opacity-20" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div
              className={`inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 ${cert.badgeColor}`}
            >
              Đã chứng nhận
            </div>
            <h3 className="text-xl font-black text-secondary-800 leading-tight">
              {cert.name}
            </h3>
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-text-muted mt-0.5">
              {cert.fullName}
            </p>
          </div>
          <StampIcon
            className={`shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ${cert.stampColor}`}
          />
        </div>
        <div className="border-t border-dashed border-current opacity-20 mb-4" />
        <dl className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted shrink-0">
              Số hiệu
            </dt>
            <dd className="text-[0.75rem] font-mono font-semibold text-secondary-700 text-right">
              {cert.code}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted shrink-0">
              Cơ quan cấp
            </dt>
            <dd className="text-[0.75rem] font-semibold text-secondary-700 text-right leading-tight">
              {cert.issuedBy}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted shrink-0">
              Ngày cấp
            </dt>
            <dd className="text-[0.75rem] font-semibold text-secondary-700">
              {cert.issuedDate}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted shrink-0">
              Hiệu lực đến
            </dt>
            <dd className="text-[0.75rem] font-semibold text-secondary-700">
              {cert.renewedDate}
            </dd>
          </div>
        </dl>
        <div
          className="mt-4 pt-3 border-t border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderOpacity: 0.15 }}
        >
          <p className="text-[0.65rem] text-text-muted italic text-center">
            Cung cấp bản sao khi có yêu cầu
          </p>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    title: 'Hồ sơ chuẩn chỉnh',
    desc: 'Giấy chứng nhận ATTP, công bố sản phẩm và hóa đơn VAT — sẵn sàng xuất trình bất kỳ lúc nào.',
    highlight: false,
  },
  {
    title: 'Bao bì định danh đầy đủ',
    desc: 'Ghi rõ tên công ty, HSD, bảo quản — đã kiểm nghiệm và công bố đúng quy chuẩn Sở ATTP.',
    highlight: false,
  },
  {
    title: 'Chấm dứt rủi ro bao bì thiếu chuyên nghiệp',
    desc: 'Nhiều bếp ăn dùng gạo không nhãn hiệu, dễ mất uy tín khi bị kiểm tra. Cơm Lành giải quyết điều này.',
    highlight: true,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-primary/2 blur-3xl pointer-events-none" />

      <PublicContainer className="mx-auto relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-20 lg:gap-32 items-center transition-all duration-1000 ${
            isVisible
              ? 'sm:opacity-100 sm:translate-y-0'
              : 'sm:opacity-0 sm:translate-y-10'
          }`}
        >
          {/* Left — text content */}
          <div className="max-w-xl">
            <SectionTag title="Chứng nhận & Tiêu chuẩn" />

            <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold text-secondary-800 leading-[1.15] mb-5">
              Chất Lượng Được
              <br />
              Kiểm Chứng Độc Lập
            </h2>
            <p className="text-lg text-secondary-800 leading-relaxed mb-8">
              Đầy đủ chứng nhận ATTP & hồ sơ công bố sản phẩm — xóa tan nỗi lo
              kiểm tra liên ngành, để anh chị yên tâm tập trung vào bếp.
            </p>

            <div className="space-y-3">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 group rounded-xl p-4 transition-all duration-300 ${
                    item.highlight
                      ? 'bg-beige-50 border border-primary/10'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                      item.highlight
                        ? 'bg-main text-white'
                        : 'bg-beige-50 border border-main text-main'
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {item.highlight ? (
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      ) : (
                        <polyline points="20 6 9 17 4 12" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-sm mb-0.5 transition-colors group-hover:text-primary ${item.highlight ? 'text-primary' : 'text-main'}`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[0.825rem] text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — document cards grid */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {certs.map((cert, idx) => (
              <CertDocumentCard
                key={cert.name}
                cert={cert}
                idx={idx}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </PublicContainer>
    </section>
  );
}
