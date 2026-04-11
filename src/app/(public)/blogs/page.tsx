'use client';

import { useEffect } from 'react';
import { articles } from '@/data/articles';
import Link from 'next/link';

export default function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort articles by date (newest first for sidebar)
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-section-alt py-4 border-b border-divider">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[0.85rem] font-bold text-text-muted uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-primary-dark">Tất cả bài viết</span>
          </nav>
        </div>
      </div>

      <main className="container-custom py-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
          {/* Sidebar - Recent Posts */}
          <aside className="space-y-10 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-divider overflow-hidden shadow-warm-sm">
              <div className="p-6 border-b border-divider bg-section-alt">
                <h3 className="font-heading text-lg font-extrabold text-text-secondary uppercase tracking-wider text-center">
                  Bài viết mới nhất
                </h3>
              </div>
              <div className="p-4 space-y-6">
                {recentArticles.map((post) => (
                  <Link
                    key={post.id}
                    href={`/tin-tuc/${post.id}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[0.85rem] font-bold text-text-secondary leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5 opacity-60">
                        <span className="text-[0.7rem] font-bold uppercase tracking-tighter">
                          Content
                        </span>
                        <span className="text-[0.7rem] font-medium">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter or Promo Banner placeholder */}
            <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h3 className="font-heading text-xl font-black mb-4 leading-tight relative z-10">
                Đăng ký nhận
                <br />
                Kiến thức lúa gạo
              </h3>
              <p className="text-sm opacity-80 mb-6 font-medium relative z-10">
                Cập nhật những mẹo nấu ăn và kiến thức dinh dưỡng mới nhất từ
                chuyên gia Ngọc Điền.
              </p>
              <input
                type="email"
                placeholder="Email của bạn..."
                className="w-full bg-white/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 mb-3 outline-none focus:bg-white/30 transition-all"
              />
              <button className="w-full bg-white text-primary font-black py-2.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </aside>

          {/* Main List */}
          <div className="order-1 lg:order-2">
            <h1 className="font-heading text-3xl md:text-4xl font-black text-text-secondary mb-12 flex items-center gap-4">
              Tất cả bài viết
              <div className="h-1 flex-1 bg-divider/40 rounded-full hidden sm:block"></div>
            </h1>

            <div className="space-y-12">
              {articles.map((article, idx) => (
                <article
                  key={article.id}
                  className="grid sm:grid-cols-[380px_1fr] gap-8 md:gap-12 group"
                >
                  <Link
                    href={`/tin-tuc/${article.id}`}
                    className="relative h-[240px] rounded-3xl overflow-hidden shadow-warm-lg inline-block"
                  >
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </Link>

                  <div className="flex flex-col justify-center py-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] ${article.tagColor} bg-beige/40 px-3 py-1 rounded-full`}
                      >
                        {article.category}
                      </span>
                      <time className="text-xs font-bold text-text-muted/60">
                        {article.date}
                      </time>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-black text-text-secondary mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      <Link href={`/tin-tuc/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-text-muted/60 lowercase italic">
                      Người viết:{' '}
                      <span className="text-text-secondary/80 not-italic">
                        Marketing Content
                      </span>
                    </div>

                    <p className="text-text-muted leading-relaxed line-clamp-3 mb-8 text-[0.95rem]">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/tin-tuc/${article.id}`}
                      className="flex items-center gap-2 text-sm font-black text-primary group/btn"
                    >
                      ĐỌC TIẾP
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/btn:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 pt-10 border-t border-divider flex justify-center">
              <nav className="flex gap-2">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-primary text-white shadow-lg">
                  1
                </button>
                {[2, 3].map((n) => (
                  <button
                    key={n}
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-text-secondary hover:bg-beige transition-colors"
                  >
                    {n}
                  </button>
                ))}
                <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-text-secondary hover:bg-beige transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
