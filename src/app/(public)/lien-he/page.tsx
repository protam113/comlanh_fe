'use client';

import { PublicContainer } from '@/components/wrappers/public.container';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-section-alt py-20 border-b border-divider">
        <div className="container-custom text-center">
          <div className="section-tag mx-auto">Kết nối với chúng tôi</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-secondary mt-6 uppercase tracking-wider">
            Liên hệ Cơm Lành
          </h1>
          <p className="text-xl text-text-muted mt-6 max-w-2xl mx-auto font-medium">
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành
            trình mang những hạt gạo sạch đến mâm cơm gia đình Việt.
          </p>
        </div>
      </section>

      <section className="py-24">
        <PublicContainer className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-black text-text-secondary mb-8">
                  Thông tin liên hệ
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-secondary uppercase text-xs tracking-widest mb-1">
                        Hotline tư vấn
                      </h4>
                      <p className="text-xl font-black text-primary">
                        0123.456.789
                      </p>
                      <p className="text-sm text-text-muted mt-1">
                        (Phục vụ 24/7 từ Thứ 2 đến Chủ Nhật)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-secondary uppercase text-xs tracking-widest mb-1">
                        Email
                      </h4>
                      <p className="text-lg font-bold text-text-secondary">
                        contact@ngocdien.vn
                      </p>
                      <p className="text-sm text-text-muted mt-1">
                        Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-secondary uppercase text-xs tracking-widest mb-1">
                        Địa chỉ văn phòng
                      </h4>
                      <p className="text-lg font-bold text-text-secondary">
                        Số 123, Đường Lúa Vàng, Phường 10, TP. Sóc Trăng
                      </p>
                      <p className="text-sm text-text-muted mt-1">
                        Mở cửa từ 08:00 - 18:00 (Thứ 2 - Thứ 7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-section-alt rounded-[2.5rem] border border-divider">
                <h3 className="text-xl font-heading font-black text-text-secondary mb-6 italic">
                  Cơm Lành - "Hạt ngọc từ tâm"
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Chúng tôi không chỉ bán gạo, chúng tôi mang tới những giá trị
                  dinh dưỡng thuần khiết nhất từ đất mẹ Việt Nam đến tận tay gia
                  đình bạn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 rounded-[3.5rem] shadow-warm-2xl border border-divider/50">
              <h3 className="text-2xl font-heading font-black text-text-secondary mb-10">
                Gửi lời nhắn cho chúng tôi
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-section-alt border border-divider rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      placeholder="0xxx-xxx-xxx"
                      className="w-full bg-section-alt border border-divider rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-section-alt border border-divider rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">
                    Lời nhắn của bạn
                  </label>
                  <textarea
                    placeholder="Bạn cần tư vấn về sản phẩm nào?..."
                    rows={4}
                    className="w-full bg-section-alt border border-divider rounded-3xl px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white font-black py-5 rounded-3xl shadow-warm-lg hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300">
                  GỬI YÊU CẦU NGAY
                </button>
              </form>
            </div>
          </div>
        </PublicContainer>
      </section>
    </div>
  );
}
