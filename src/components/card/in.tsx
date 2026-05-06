'use client';

import { motion } from 'framer-motion';

const painPoints = [
  {
    text: 'Gạo lúa mới lẫn vào – bún đứt gãy, nhão bột, dính cối xay',
    color: 'text-red-400',
  },
  {
    text: 'Gạo không đủ nở, năng suất sụt giảm, xưởng mất lợi nhuận',
    color: 'text-red-400',
  },
  {
    text: 'Đại lý không đủ năng lực – xưởng ngừng máy, công nhân ngồi chơi',
    color: 'text-yellow-400',
  },
  {
    text: 'Giá gạo nhích 500đ/kg là chủ xưởng mất ngủ',
    color: 'text-yellow-400',
  },
];

const solutions = [
  {
    title: 'Chuyên gia "Gạo Lưu Kho" cho xưởng chế biến',
    desc: 'Cam kết 100% gạo 504, Hàm Châu, Sa Mơ lưu kho 1–2 năm – tuyệt đối không dùng gạo mới, không đấu trộn, chất lượng đồng nhất từng tấn',
  },
  {
    title: 'Năng lực cung ứng bền vững',
    desc: 'Đáp ứng từ 1 tấn đến hàng chục tấn/ngày, không để xưởng đứt hàng hay công nhân ngồi chờ',
  },
  {
    title: 'Hợp đồng bao giá dài hạn',
    desc: 'Giữ giá ổn định theo hợp đồng, xưởng yên tâm sản xuất mà không lo biến động thị trường',
  },
  {
    title: 'Pháp lý đầy đủ cho xưởng',
    desc: 'Giấy chứng nhận ATTP, hóa đơn VAT, hồ sơ kiểm định chất lượng – minh bạch toàn bộ',
  },
];
export default function ComLanhInCard() {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl text-secondary-700 font-bold mt-4 mb-4">
        NHÀ CUNG CẤP GẠO CHUYÊN BIỆT CHO XƯỞNG CHẾ BIẾN
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-md overflow-hidden border border-stone-200 shadow-sm">
        {/* LEFT — Problems */}
        <div className="bg-beige-50 p-8 flex flex-col gap-6 h-full">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
              Vấn đề thường gặp
            </span>
            <h2 className="text-stone-800 font-bold text-xl leading-snug mt-2">
              Kinh doanh ẩm thực, bạn có đang{' '}
              <span className="text-amber-500">đau đầu vì nguồn gạo?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/60 border border-stone-200 rounded-md px-4 flex-1"
              >
                <span className={`text-lg shrink-0 ${p.color}`}>✕</span>
                <span className="text-sm font-medium text-stone-500 leading-snug line-through decoration-gray-100 decoration-1">
                  {p.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Solutions */}
        <div className="bg-main p-8 flex flex-col gap-6 h-full">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Giải pháp của chúng tôi
            </span>
            <h2 className="text-white font-bold text-xl leading-snug mt-2">
              Cơm Lành mang đến{' '}
              <span className="text-green-400">sự ổn định & an tâm</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 border border-white/10 rounded-md px-4 py-3 bg-white/10"
              >
                <span className="text-green-400 text-lg shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                  <p className="text-[11px] text-white/60 leading-relaxed mt-0.5">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
