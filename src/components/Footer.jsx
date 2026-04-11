'use client';

import Link from 'next/link';
import { useState } from 'react';

const quickLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Sản phẩm', href: '/san-pham/tat-ca' },
  { label: 'Phân phối', href: '#partners' },
  { label: 'Blog', href: '/blogs/all' },
  { label: 'Liên hệ', href: '/lien-he' },
];

const policyLinks = [
  { label: 'Chính sách giao hàng', href: '#' },
  { label: 'Chính sách đổi trả', href: '#' },
  { label: 'Bảo mật thông tin', href: '#' },
  { label: 'Điều khoản sử dụng', href: '#' },
];

const contactItems = [
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    text: '123 Đường Nông Sản, TP. Sóc Trăng',
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.79-6.79 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    text: 'Hotline: 1800 6868',
  },
  {
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
      </>
    ),
    text: 'info@ngocdien.vn',
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer id="main-footer" className="bg-text text-white/90 pt-24">
      <div className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo_2.svg"
                alt="Ngọc Điền"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-[0.9rem] text-white/70 leading-relaxed">
              Công ty TNHH Thương Mại Nông Sản Cơm Lành — hơn 15 năm gắn bó với
              nông nghiệp Việt Nam, mang sứ mệnh đưa hạt gạo sạch, chất lượng
              cao đến từng bàn ăn gia đình.
            </p>
            <div className="flex flex-col gap-3">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[0.85rem] text-white/60 group cursor-pointer hover:text-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Điều hướng
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[0.9rem] text-white/60 hover:text-white hover:translate-x-1 transition-all"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policy & Shops */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Chính sách
            </h3>
            <ul className="flex flex-col gap-3 mb-10">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[0.9rem] text-white/60 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Mua hàng online
            </h3>
            <div className="flex flex-wrap gap-2">
              {['🛒 Shopee', '🛍 Lazada', '🎁 Tiki', '🎵 TikTok'].map(
                (shop) => (
                  <a
                    key={shop}
                    href="#"
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[0.75rem] text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {shop}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Nhận tin tức
              </h3>
              <p className="text-[0.85rem] text-white/60 leading-relaxed mb-4">
                Đăng ký bản tin để nhận ưu đãi và mẹo nấu ăn hữu ích.
              </p>
              {subscribed ? (
                <div className="bg-primary/20 border border-primary/30 rounded-sm p-4 text-primary text-xs font-bold animate-fade-in-up">
                  ✨ Cảm ơn bạn! Chúng tôi sẽ gửi tin tức sớm nhất đến bạn.
                </div>
              ) : (
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Email của bạn"
                    className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-light text-white font-bold text-xs uppercase px-4 rounded-sm transition-colors cursor-pointer"
                  >
                    Gửi
                  </button>
                </form>
              )}
            </div>

            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                Kết nối
              </h3>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', icon: 'f' },
                  { label: 'YouTube', icon: '▶' },
                  { label: 'TikTok', icon: '♩' },
                  { label: 'Zalo', icon: 'Z' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-[0.8rem] text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-8 bg-black/10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.8rem] text-white/40 font-medium">
          <span>© 2025 Gạo Ngọc Điền. Bảo lưu mọi quyền.</span>
          <div className="flex gap-6 uppercase tracking-widest text-[0.7rem]">
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie
            </a>
          </div>
          <span className="flex items-center gap-1">
            Made with <span className="text-primary">❤️</span> in Mekong Delta
          </span>
        </div>
      </div>
    </footer>
  );
}
