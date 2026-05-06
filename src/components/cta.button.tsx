import React from 'react';

export const CTAButton = () => {
  return (
    <div className="bg-beige-50 rounded-md p-4 flex items-center justify-between gap-3">
      <div>
        <p className="text-main font-bold text-sm">Nhận 5kg gạo miễn phí</p>
        <p className="text-main/70 text-xs mt-0.5 leading-snug">
          Liên hệ ngay để dùng thử chất lượng trước khi đặt hàng
        </p>
      </div>
      <a
        href="tel:05599552121"
        className="shrink-0 bg-main hover:bg-primary-400 active:scale-95 transition-all text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 whitespace-nowrap"
      >
        Gọi ngay
      </a>
    </div>
  );
};
