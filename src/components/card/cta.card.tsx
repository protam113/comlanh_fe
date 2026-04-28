import React from 'react';

export const CtaCard = () => {
  return (
    <section className="py-24 bg-secondary-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl  font-black text-white mb-8">
          Cùng Cơm Lành Nâng Tầm <br />
          Bữa Cơm Việt
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Đừng để <span className="font-bold">"gạo không tên"</span> làm lung
          lay uy tín cả một thương hiệu.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/san-pham"
            className="bg-white text-main px-10 py-4 rounded-full font-black hover:bg-beige hover:-translate-y-1 transition-all shadow-lg"
          >
            XEM SẢN PHẨM
          </a>
          <a
            href="/lien-he"
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-primary hover:-translate-y-1 transition-all"
          >
            LIÊN HỆ NGAY
          </a>
        </div>
      </div>
    </section>
  );
};
