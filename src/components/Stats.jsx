'use client';

import { useEffect, useRef, useState } from 'react';
import { PublicContainer } from './wrappers/public.container';

const stats = [
  {
    title: 'Gía Tăng Đột Ngột',
    label:
      'Nhiều nhà cung cấp gạo tăng giá bất ngờ, đặt biệt khi thị trường có biến động. Chủ quản không có phương án kịp thời khiến lợi nhuận bị bào mòn',
  },
  {
    title: 'Chất Lượng Không Ổn Định',
    label:
      'Chào hàng loại tốt, giao hàng loại rẻ hoặc biến động mùa vụ không được kiểm soát chặt chẽ do hệ thống gạo kém khiến uy tiến bạn giảm đi',
  },
  {
    title: 'Rủi ro pháp lý cao',
    label:
      'Không có giấy kiểm nghiệm, không công bố chất lượng sản phẩm – đồng nghĩa với việc bạn đang đặt sự an toàn của thực khách và vận mệnh kinh doanh vào thế nguy hiểm.',
  },
];

export default function Stats() {
  const [counted, setCounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [counted]);

  return (
    <section
      id="stats-section"
      className="py-24 bg-linear-to-br from-primary-dark via-primary-800 to-primary-400 mx-auto relative overflow-hidden"
      ref={ref}
    >
      <div className="px-6 w-full relative z-10">
        <PublicContainer className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-4 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 transform transition-all duration-700 delay-[i*100ms] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-4"
              data-visible={counted}
            >
              <div className="text-2xl md:text-3xl font-extrabold text-white  mb-1">
                <span>{stat.title}</span>
              </div>
              <div className="text-[12px] text-white/90 font-medium leading-normal whitespace-pre-line uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </PublicContainer>
      </div>
    </section>
  );
}
