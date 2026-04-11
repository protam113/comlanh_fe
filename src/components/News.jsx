'use client';

import Link from 'next/link';
import { useIntersection } from '../hooks/useIntersection';
import { articles } from '@/data/articles';

export default function News() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1, once: true });

  return (
    <section
      id="news-section"
      className="py-32 bg-section-alt scroll-mt-20 overflow-hidden"
      ref={ref}
    >
      <div className="container-custom relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div
          className={`flex flex-col md:flex-row justify-between items-end gap-10 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-2xl">
            <div className="section-tag !mb-6">📖 Blog & Tin tức</div>
            <h2 className="section-title !mb-0 leading-tight">
              Kiến Thức Lúa Gạo
              <br />
              Từ Chuyên Gia
            </h2>
          </div>
          <Link
            href="/blogs/all"
            id="view-all-news-btn"
            className="group flex items-center gap-3 font-bold text-primary hover:text-primary-dark transition-colors py-2"
          >
            <span>Xem tất cả bài viết</span>
            <div className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <Link
              key={article.id}
              href={`/tin-tuc/${article.id}`}
              id={`news-card-${article.id}`}
              className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-warm-lg hover:shadow-warm-xl transition-all duration-700 group cursor-pointer border border-white/50 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1.5 rounded-full border border-white/40 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <span
                    className={`text-[0.65rem] font-black uppercase tracking-[0.15em] ${article.tagColor}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-extrabold text-text-secondary leading-snug mb-4 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[0.925rem] text-text-muted leading-relaxed line-clamp-3 mb-8">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-divider/60">
                  <div className="flex items-center gap-2 text-[0.8rem] font-medium text-text-muted/80">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.85rem] font-bold text-primary group-hover:animate-pulse-slow">
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
