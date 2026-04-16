'use client';

import { Icons } from '@/assets';
import { SectionTag } from '@/components/design/section.design';
import { PublicContainer } from '@/components/wrappers/public.container';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-beige-50 py-12 md:py-16 lg:py-20 border-b border-divider">
        <div className="container-custom text-center px-4">
          <SectionTag title="Kết nối với chúng tôi" />

          <h1
            className="font-heading
      text-2xl sm:text-3xl md:text-5xl lg:text-6xl
      font-black text-secondary-800
      mt-4 md:mt-6
      uppercase tracking-wide md:tracking-wider leading-tight"
          >
            Liên hệ Cơm Lành
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl
      text-secondary-700
      mt-4 md:mt-6
      max-w-lg md:max-w-2xl mx-auto
      font-medium leading-relaxed"
          >
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành
            trình mang những hạt gạo sạch đến mâm cơm gia đình Việt.
          </p>
        </div>
      </section>

      <section className="py-24">
        <PublicContainer className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            {/* Contact Info */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-main mb-6 md:mb-8">
                  Thông tin liên hệ
                </h2>

                <div className="space-y-5 md:space-y-6">
                  {/* Item */}
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-main flex items-center justify-center text-white shrink-0">
                      <Icons.PhoneCall />
                    </div>

                    <div>
                      <h4 className="font-bold text-main uppercase text-[10px] md:text-xs mb-1">
                        Hotline tư vấn
                      </h4>
                      <p className="text-lg md:text-xl font-black text-main">
                        055.9955.2121
                      </p>
                      <p className="text-xs md:text-sm text-secondary-700 mt-1 leading-relaxed">
                        (Phục vụ 24/7 từ Thứ 2 đến Chủ Nhật)
                      </p>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-main flex items-center justify-center text-white shrink-0">
                      <Icons.Mail />
                    </div>

                    <div>
                      <h4 className="font-bold text-main uppercase text-[10px] md:text-xs mb-1">
                        Email
                      </h4>
                      <p className="text-base md:text-lg font-bold text-main break-all">
                        contact@ngocdien.vn
                      </p>
                      <p className="text-xs md:text-sm text-secondary-700 mt-1 leading-relaxed">
                        Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                      </p>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-main flex items-center justify-center text-white shrink-0">
                      <Icons.MapPin />
                    </div>

                    <div>
                      <h4 className="font-bold text-main uppercase text-[10px] md:text-xs mb-1">
                        Địa chỉ văn phòng
                      </h4>
                      <p className="text-base md:text-lg font-bold text-main leading-relaxed">
                        B5/124 Quốc lộ 50, Tổ 5, Ấp 2, Xã Bình Hung, Thành phố
                        Hồ Chí Minh, Việt Nam.
                      </p>
                      <p className="text-xs md:text-sm text-secondary-700 mt-1">
                        Mở cửa từ 08:00 - 18:00 (Thứ 2 - Thứ 7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box */}
              <div className="p-6 md:p-10 bg-secondary-50 rounded-3xl md:rounded-[2.5rem] border border-divider">
                <h3 className="text-lg md:text-xl font-heading font-black text-main mb-4 md:mb-6 italic leading-snug">
                  Cơm Lành - "ỔN ĐỊNH TỪ TỪNG HẠT GẠO ĐẾN TỪNG LỢI NHUẬN CỦA ĐỐI
                  TÁC"
                </h3>

                <p className="text-sm md:text-base text-secondary-800 leading-relaxed">
                  <span className="font-bold">Sứ mệnh của chúng tôi:</span> Trở
                  thành{' '}
                  <span className="font-bold">
                    Nhà phân phối gạo sỉ số 1 tại TP. Hồ Chí Minh
                  </span>
                  , tự hào là cầu nối vững chắc đưa những hạt gạo tinh túy nhất
                  từ cánh đồng Đồng bằng sông Cửu Long đến tận tay những người
                  đầu bếp và chủ nhà hàng.
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
