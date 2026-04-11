'use client';
import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import Link from 'next/link';

export default function ProductList() {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  // Group and Sort logic would go here

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Dynamic Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/hero_banner.png"
          alt="Sản phẩm Ngọc Điền"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-10 font-heading text-6xl md:text-7xl font-black text-white uppercase tracking-[0.2em] drop-shadow-lg">
          SẢN PHẨM
        </h1>
      </section>

      {/* Main Content */}
      <main className="container-custom py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="font-heading text-3xl font-black text-text-secondary">
            Tất cả sản phẩm
          </h2>

          <div className="flex items-center gap-4">
            <select
              className="bg-section-alt border border-divider rounded-full px-6 py-2.5 text-sm font-bold text-text-secondary outline-none focus:border-primary transition-colors cursor-pointer"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Nhóm sản phẩm</option>
              <option value="Gạo cao cấp">Gạo cao cấp</option>
              <option value="Gạo đặc sản">Gạo đặc sản</option>
              <option value="Gạo HORECA">Gạo HORECA</option>
            </select>

            <select
              className="bg-section-alt border border-divider rounded-full px-6 py-2.5 text-sm font-bold text-text-secondary outline-none focus:border-primary transition-colors cursor-pointer"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sắp xếp</option>
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredProducts.map((product, idx) => (
            <Link
              key={product.id}
              href={`/san-pham/${product.id}`}
              className="group flex flex-col items-center bg-section-alt/40 rounded-3xl p-8 border border-divider/50 hover:border-primary/30 hover:shadow-warm-xl transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-square w-full mb-8 flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="text-center flex flex-col items-center flex-1">
                <h3 className="font-heading text-lg font-black text-text-secondary mb-4 leading-tight group-hover:text-primary transition-colors h-14 flex items-center">
                  {product.name}
                </h3>

                <div className="mt-auto flex flex-col items-center gap-3 w-full">
                  <div className="text-lg font-black text-primary">
                    {product.status}
                  </div>

                  {product.stockStatus === 'Hết hàng' && (
                    <span className="text-[0.65rem] font-black uppercase tracking-widest px-4 py-1.5 bg-text-muted/10 text-text-muted rounded-full">
                      Hết hàng
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
