'use client';

import { PublicContainer } from '@/components/wrappers/public.container';
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
  { label: 'Gạo Nếp', href: '#' },
  { label: 'Gạo Lứt', href: '#' },
  { label: 'Gạo Trắng', href: '#' },
  { label: 'Gạo Nhật', href: '#' },
];

const contactItems = [
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    text: 'CÔNG TY TNHH TRỌN VẸN TOÀN.',
  },
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    text: 'B5/124 Quốc lộ 50, Tổ 5, Ấp 2, Xã Bình Hung, Thành phố Hồ Chí Minh, Việt Nam.',
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.79-6.79 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    text: 'Hotline: 055.9955.2121',
  },
  {
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
      </>
    ),
    text: 'info@gaolanh.vn',
  },
];

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-main text-white/90 pt-24">
      <PublicContainer className="container-custom pb-16 mx-auto">
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
                  className="flex items-start gap-3 text-[0.85rem] text-white/60 group cursor-pointer hover:text-white transition-colors"
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
              Danh mục
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
              {[' Shopee', ' Lazada', ' Tiki', ' TikTok'].map((shop) => (
                <a
                  key={shop}
                  href="#"
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[0.75rem] text-white/60 hover:bg-white/10 hover:text-white transition-all"
                >
                  {shop}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
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
      </PublicContainer>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-8 bg-black/10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.8rem] text-white/40 font-medium">
          <span>© 2025 Gạo Lành. Bảo lưu mọi quyền.</span>
          <div className="flex gap-6 uppercase tracking-widest text-[0.7rem]"></div>
          <span className="flex items-center gap-1">Made by Vietstrix</span>
        </div>
      </div>
    </footer>
  );
}
