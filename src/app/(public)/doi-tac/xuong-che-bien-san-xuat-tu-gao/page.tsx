'use client';

import { useEffect } from 'react';
import { articles } from '@/data/articles';
import Link from 'next/link';
import { PublicContainer } from '@/components/wrappers/public.container';
import ComLanhCard from '@/components/intro.section';
import { CTAButton } from '@/components/cta.button';
import ComLanhInCard from '@/components/card/in';

export default function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort articles by date (newest first for sidebar)
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <PublicContainer className="bg-section-alt mx-auto py border-b  border-gray-200">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[0.85rem] font-bold text-text-muted uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-gray-400">Tất cả bài viết</span>
            <span>/</span>
            <span className="text-primary-dark">
              Xưởng Chế Biến - Sản Xuất Từ Gạo
            </span>
          </nav>
        </div>
      </PublicContainer>
      <PublicContainer className="mx-auto py-8 space-y-6">
        <ComLanhInCard />
        <CTAButton />
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
          {/* Sidebar - Recent Posts */}
          <aside className="space-y-10 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border  border-gray-200 overflow-hidden shadow-warm-sm">
              <div className="p-6 border-b  border-gray-200 bg-section-alt">
                <h3 className=" text-lg font-extrabold text-text-secondary uppercase tracking-wider text-center">
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
          </aside>

          {/* Main List */}
          <div className="order-1 lg:order-2">
            <h1 className=" text-3xl md:text-4xl font-black text-text-secondary mb-12 flex items-center gap-4">
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

                    <h2 className=" text-2xl md:text-3xl font-black text-text-secondary mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
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
            <div className="mt-20 pt-10 border-t  border-gray-200 flex justify-center">
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
      </PublicContainer>
    </div>
  );
}
