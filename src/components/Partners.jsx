import { SectionTag } from './design/section.design';

const partners = [
  'VnExpress',
  'Tuổi Trẻ',
  'Thanh Niên',
  'Zing News',
  'Dân Trí',
  'Nhịp Cầu Đầu Tư',
  'Forbes VN',
  'CafeF',
  'VTV',
  'SGGP',
  'Lao Động',
  'Nông Thôn Mới',
  'VnExpress',
  'Tuổi Trẻ',
  'Thanh Niên',
  'Zing News',
  'Dân Trí',
  'Nhịp Cầu Đầu Tư',
  'Forbes VN',
  'CafeF',
  'VTV',
  'SGGP',
  'Lao Động',
  'Nông Thôn Mới',
];

export default function Partners() {
  return (
    <section id="partners-section" className="py-24 overflow-hidden bg-white">
      <div className="container-custom mb-16">
        <div className="text-center">
          <SectionTag title="Truyền thông nói về chúng tôi" />
          <h2 className="text-4xl text-secondary-700 font-bold mt-4 mb-4">
            Được Báo Chí & Đối Tác Tin Tưởng
          </h2>
          <p className="text-secondary-800 text-base md:text-base font-body leading-relaxed">
            Ngọc Điền xuất hiện trên hàng trăm trang báo và kênh truyền thông uy
            tín, được vinh danh là thương hiệu gạo sạch tiêu biểu Việt Nam.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-infinite-scroll group-hover:[animation-play-state:paused] py-4">
          {partners.map((name, i) => (
            <div
              key={i}
              className="mx-4 md:mx-8 px-8 py-4 bg-beige-50 rounded-sm font-bold text-secondary-800 hover:text-primary-800 hover:bg-beige- transition-all duration-300 border border-transparent hover:border-primary/20 cursor-default"
              id={`partner-logo-${i}`}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless loop handled by animation if needed or just double the content */}
        <div
          className="flex whitespace-nowrap animate-infinite-scroll group-hover:[animation-play-state:paused] py-4"
          aria-hidden="true"
        >
          {partners.map((name, i) => (
            <div
              key={`dup-${i}`}
              className="mx-4 md:mx-8 px-8 py-4 bg-section-alt rounded-sm font-bold text-text-muted hover:text-primary hover:bg-beige transition-all duration-300 border border-transparent hover:border-primary/20 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
