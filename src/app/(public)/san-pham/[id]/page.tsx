'use client';
import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(product?.img);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) setActiveImg(product.img);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-secondary mb-4">
            Sản phẩm không tồn tại
          </h2>
          <Link href="/" className="text-primary font-bold hover:underline">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) =>
    product.relatedIds?.includes(p.id)
  );

  return (
    <div className="pt-24 bg-white">
      {/* Breadcrumbs */}
      <div className="bg-section-alt py-3 border-b border-divider">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-text-muted uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href="/san-pham"
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-16 container-custom">
        <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-10 lg:gap-20">
          {/* Gallery Thumbnails (Vertical) */}
          <div className="hidden lg:flex flex-col gap-4">
            {[product.img, '/cat_rice_white.png'].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(img)}
                className={`w-full aspect-square p-2 border rounded-xl transition-all ${activeImg === img ? 'border-primary shadow-sm' : 'border-divider hover:border-primary/40'}`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="relative aspect-square bg-section-alt/30 rounded-[3rem] p-12 flex items-center justify-center border border-divider/40">
            <img
              src={activeImg}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700"
            />
            <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-muted hover:text-primary transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 3h6v6m-11 11H4v-6m7-11L4 4m11 11l5 5"></path>
              </svg>
            </button>
          </div>

          {/* Product Right Content */}
          <div className="flex flex-col">
            <h1 className="font-heading text-3xl md:text-4xl font-black text-text-secondary leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-text-muted">
                {product.stockStatus}
              </span>
              <div className="w-1.5 h-1.5 bg-divider rounded-full"></div>
              <span className="text-sm font-bold text-primary italic">
                SKU: PD-001
              </span>
            </div>

            <div className="text-4xl font-black text-primary mb-10">
              {product.status}
            </div>

            <div className="space-y-8 pb-10 border-b border-divider">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-text-secondary mb-4 underline decoration-primary decoration-2 underline-offset-8">
                  Mô tả
                </h4>
                <div
                  className="text-[0.95rem] text-text-secondary/80 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: product.detailedDescription || '',
                  }}
                />
              </div>

              <div>
                <h4 className="text-lg font-black text-text-secondary mb-4 flex items-center gap-2">
                  <span className="text-primary italic">1.</span> TÍNH CHẤT NỔI
                  BẬT
                </h4>
                <ul className="space-y-3">
                  {product.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[0.95rem] text-text-secondary/80"
                    >
                      <span className="text-primary mt-1">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="py-10 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[0.65rem] font-black text-text-muted uppercase tracking-widest">
                  Tư vấn ngay
                </span>
                <a
                  href="tel:028XXXX"
                  className="text-xl font-black text-text-secondary hover:text-primary transition-colors"
                >
                  028.665.999.27
                </a>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-primary text-white font-black py-4 rounded-xl shadow-warm-lg hover:shadow-warm-xl hover:-translate-y-1 transition-all">
                  LIÊN HỆ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Info Sections */}
      <section className="bg-section-alt/30 py-24 border-t border-divider">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-20">
            <div>
              <h3 className="text-xl font-black text-text-secondary mb-8 flex items-center gap-3">
                <span className="text-primary italic">4.</span> BẢO QUẢN
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed pl-8 border-l-2 border-primary/20">
                {product.storage}
                <br />- Đậy kín nắp/miệng túi sau khi lấy hạt.
                <br />- Tránh tiếp xúc trực tiếp với ánh nắng mặt trời.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 sm:items-center p-8 bg-white rounded-3xl border border-divider shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-black text-text-muted uppercase tracking-widest">
                  Hạn sử dụng
                </span>
                <p className="text-xl font-bold text-text-secondary">
                  {product.shelfLife}
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-divider"></div>
              <div className="space-y-2">
                <span className="text-xs font-black text-text-muted uppercase tracking-widest">
                  Cảnh báo
                </span>
                <p className="text-[0.95rem] font-bold text-warm">
                  Không sử dụng sản phẩm khi có dấu hiệu hư hỏng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 container-custom">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-heading text-3xl font-black text-text-secondary">
            Sản phẩm liên quan
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-divider flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-divider flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts?.map((rel) => (
            <Link
              key={rel.id}
              href={`/san-pham/${rel.id}`}
              className="group flex flex-col items-center"
            >
              <div className="aspect-square w-full bg-section-alt/40 rounded-3xl p-6 mb-6 flex items-center justify-center border border-divider/50 group-hover:shadow-warm-md transition-all">
                <img
                  src={rel.img}
                  alt={rel.name}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-center font-heading font-black text-text-secondary mb-3 px-2 leading-tight group-hover:text-primary transition-colors text-sm md:text-base">
                {rel.name}
              </h3>
              <div className="flex flex-col items-center gap-1">
                <span className="text-primary font-bold">{rel.status}</span>
                {rel.stockStatus === 'Hết hàng' && (
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-text-muted opacity-60">
                    Hết hàng
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
