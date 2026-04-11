'use client';

import { useEffect } from 'react';
import { articles } from '@/data/articles';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-secondary mb-4">
            Bài viết không tồn tại
          </h2>
          <Link href="/" className="text-primary font-bold hover:underline">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-32 bg-white">
      {/* Article Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
          <div className="max-w-3xl">
            <span
              className={`inline-block text-[0.7rem] font-bold uppercase tracking-widest mb-4 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm ${article.tagColor}`}
            >
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-secondary leading-[1.1] mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-[0.9rem] text-text-muted">
              <div className="flex items-center gap-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full bg-beige"
                />
                <span className="font-bold text-text-secondary">
                  {article.author.name}
                </span>
              </div>
              <span>•</span>
              <time>{article.date}</time>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container-custom mt-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-20">
          <div className="max-w-none prose prose-lg prose-primary">
            <div
              className="article-body text-lg leading-relaxed text-text-secondary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-10 border-t border-divider flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Chia sẻ:
                </span>
                <div className="flex gap-2">
                  {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                    <button
                      key={social}
                      className="w-10 h-10 rounded-full border border-divider flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Simple placeholder square icon */}
                      <div className="w-3 h-3 bg-current" />
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="/"
                className="text-sm font-bold text-primary flex items-center gap-2 group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:-translate-x-1"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Quay lại
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <div className="bg-section-alt p-8 rounded-3xl border border-divider">
                <h3 className="font-heading text-xl font-bold text-text-secondary mb-6">
                  Liên quan
                </h3>
                <div className="space-y-8">
                  {articles
                    .filter((a) => a.id !== id)
                    .map((a) => (
                      <Link
                        key={a.id}
                        href={`/blogs/${a.id}`}
                        className="group block"
                      >
                        <div className="aspect-video rounded-xl overflow-hidden mb-3">
                          <img
                            src={a.img}
                            alt={a.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <h4 className="font-bold text-sm text-text-secondary group-hover:text-primary transition-colors leading-snug">
                          {a.title}
                        </h4>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
