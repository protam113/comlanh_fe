'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PublicContainer } from '@/components/wrappers/public.container';

const navItems = [
  {
    label: 'Trang chủ',
    href: '/',
    active: true,
  },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  {
    label: 'Đối Tác',
    href: '/doi-tac',
    dropdown: [
      { label: 'Tất cả', href: '/doi-tac' },
      { label: 'NHÀ HÀNG, QUÁN ĂN', href: '/doi-tac/nha-hang-quan-an' },
      {
        label: 'TRƯỜNG HỌC, BỆNH VIỆN, XÍ NGHIỆP',
        href: '/doi-tac/truong-hoc-benh-vien-xi-nghiep',
      },
      {
        label: 'XƯỞNG CHẾ BIẾN & SẢN XUẤT TỪ GẠO',
        href: '/doi-tac/xuong-che-bien-san-xuat-tu-gao',
      },
      { label: 'GẠO THIỆN NGUYỆN', href: '/doi-tac/gao-thien-nghien' },
    ],
  },

  {
    label: 'Sản phẩm',
    href: '/san-pham',
    dropdown: [
      { label: 'Tất cả sản phẩm', href: '/san-pham' },
      { label: 'Gạo ST25 Harmony', href: '/san-pham/st25-harmony' },
      { label: 'Gạo Lứt Đỏ', href: '/san-pham/gao-lut-do' },
      { label: 'Gạo Nếp Cái Hoa Vàng', href: '/san-pham/gao-nep-cai-hoa-vang' },
    ],
  },
  {
    label: 'Tin tức',
    href: '/blogs',
    dropdown: [
      { label: 'Tất cả bài viết', href: '/blogs' },
      { label: 'Lợi ích Gạo Lứt', href: '/tin-tuc/gao-lut-suc-khoe' },
      { label: 'Hành trình ST25', href: '/tin-tuc/hanh-trinh-st25' },
      { label: 'Bí quyết nấu cơm', href: '/tin-tuc/bi-quyet-nau-com-ngon' },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
        scrolled
          ? 'bg-white backdrop-blur-md shadow-warm-md'
          : 'bg-white backdrop-blur-sm'
      }`}
    >
      <PublicContainer className="mx-auto">
        <div className="flex items-center justify-between py-2 gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            id="logo-link"
          >
            <img
              src="/logo_2.svg"
              alt="Ngọc Điền - Tinh hoa lúa gạo Việt"
              className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Điều hướng chính"
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative group/item">
                <Link
                  href={item.href}
                  className={`relative group/link py-3 text-14 transition-all flex items-center gap-1 px-3.5 text-[16px] rounded-sm ${
                    item.active
                      ? 'text-secondary-700 font-bold'
                      : 'text-primary-700 hover:text-primary-800'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary-700 transition-all duration-300 group-hover/link:w-full" />
                  </span>

                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 group-hover/item:rotate-180 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-[calc(100%+8px)] left-0 min-w-[220px] bg-white rounded-md shadow-warm-lg border  border-gray-200 p-2 opacity-0 invisible -translate-y-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 transition-all z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-3 px-3.5 py-2.5 text-[0.875rem] text-main rounded-sm hover:text-secondary-700 hover:bg-beige-50 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/lien-he"
              className="bg-primary-700 text-white px-6 py-2 rounded-full text-[0.85rem] font-black shadow-warm-sm hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
            >
              LIÊN HỆ
            </Link>

            <button
              id="mobile-menu-btn"
              className="lg:hidden w-[38px] h-[38px] rounded-sm border  border-gray-200 flex items-center justify-center text-text cursor-pointer"
              aria-label="Mở menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </PublicContainer>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t  border-gray-200 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white p-4 pb-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-3 rounded-sm text-[0.95rem] font-medium transition-all ${
                item.active
                  ? 'text-primary bg-primary-bg'
                  : 'text-main active:bg-beige'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
