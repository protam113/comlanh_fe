export default function Hero() {
  return (
    <section id="hero-section" className="min-h-screen relative flex flex-col overflow-hidden bg-warm">
      {/* Background with higher quality polish */}
      <div className="absolute inset-0 z-0 scale-105 animate-subtle-zoom">
        <img
          src="/hero_banner.png"
          alt="Cánh đồng lúa Việt Nam"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-linear-to-b from-warm/95 via-warm/80 to-section-alt" />
      </div>

      {/* Main Content Area */}
      <div className="container-custom relative z-10 flex-1 flex items-center">
        <div className="pt-24 pb-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center w-full">

          {/* Left Content Column */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-5 py-2 rounded-full text-[0.85rem] font-bold tracking-widest uppercase mb-8 shadow-warm-sm">
              <span className="text-primary-light">🌾</span>
              <span>Thương hiệu gạo lâu đời từ năm 1995</span>
            </div>

            <h1 className="font-heading text-6xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Nâng Tầm Bữa Cơm<br />
              <span className="text-primary">Gia Đình Việt</span><br />
              Chuẩn Vị Ngon
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-[540px] font-medium">
              Cơm Lành tự hào mang đến những hạt ngọc trời chắt lọc tinh hoa từ vùng đất phù sa,
              cam kết sạch 100%, dẻo thơm và giàu giá trị dinh dưỡng cho sức khỏe.
            </p>
          </div>

          {/* Right Product Card Column */}
          <div className="hidden lg:flex justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 max-w-[420px] shadow-warm-lg animate-bounce-subtle">
                <div className="relative overflow-hidden rounded-xl mb-8 group/img shadow-2xl">
                  <img
                    src="/hero_rice_product.png"
                    alt="Gạo ST25 Ngọc Điền"
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[0.7rem] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    Bán chạy nhất
                  </div>
                </div>

                <div className="font-heading text-2xl text-white mb-3 font-bold">Gạo ST25 Đặc Sản</div>
                <p className="text-[0.95rem] text-white/70 mb-6 leading-relaxed">
                  Top 1 Gạo ngon nhất thế giới — Hạt dài, trắng trong, dẻo nhiều và thơm mùi lá dứa tự nhiên.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-primary drop-shadow-sm">
                    Khám phá ngay
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-primary-dark/80 flex items-center justify-center text-[0.6rem] text-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-warm/80 flex items-center justify-center text-[0.6rem] text-white">+5k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
