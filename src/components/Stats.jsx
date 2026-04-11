'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '15+', suffix: '', label: 'Năm kinh nghiệm\ntrong ngành lúa gạo' },
  { number: '200', suffix: '+', label: 'Đại lý phân phối\ntrên toàn quốc' },
  { number: '50', suffix: 'K+', label: 'Hộ gia đình tin dùng\nmỗi tháng' },
  { number: '12', suffix: '', label: 'Quốc gia nhập khẩu\ngạo Ngọc Điền' },
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
      className="py-24 bg-linear-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
      ref={ref}
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 transform transition-all duration-700 delay-[i*100ms] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 opacity-0 translate-y-4"
              data-visible={counted}
            >
              <div className="text-4xl md:text-5xl font-extrabold font-heading mb-1">
                <span>{stat.number}</span>
                <span className="text-white/60">{stat.suffix}</span>
              </div>
              <div className="text-[0.9rem] text-white/90 font-medium leading-normal whitespace-pre-line uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
