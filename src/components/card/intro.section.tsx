'use client';

import { motion } from 'framer-motion';

const painPoints = [
  {
    text: `Ám ảnh kiểm tra ATTP – đại lý không chứng minh được nguồn gốc`,
    color: 'text-red-400',
  },
  {
    text: 'Bao bì chung chung, thiếu tên, NSX, đơn vị sản xuất',
    color: 'text-red-400',
  },
  {
    text: 'Gạo "kém nở", chi phí đội lên, bếp ăn thâm hụt lợi nhuận',
    color: 'text-yellow-400',
  },
  {
    text: 'Giao hàng chậm trễ, tài xế thả ngoài cửa, VAT xuất trễ cuối tháng',
    color: 'text-yellow-400',
  },
];

const solutions = [
  {
    title: 'Bộ hồ sơ năng lực vượt mọi đợt kiểm tra',
    desc: 'Đầy đủ hợp đồng nguyên tắc, VSATTP, công bố chất lượng, xét nghiệm định kỳ – an tâm 100% trước Sở Y Tế & Ban đại diện phụ huynh',
  },
  {
    title: 'Tối ưu lợi nhuận – siêu lợi cơm',
    desc: 'Gạo chuyên dụng suất ăn tập thể, tỷ lệ nở xốp tối đa, tiết kiệm chi phí bếp ăn đáng kể',
  },
  {
    title: 'Hậu cần chuyên nghiệp, đúng giờ',
    desc: 'Giao theo ca nấu (kể cả 4h sáng), tài xế hỗ trợ bê vác và xếp gọn lên pallet trong kho',
  },
  {
    title: 'Xuất VAT điện tử tức thì',
    desc: 'Hóa đơn xuất ngay lập tức, đối chiếu công nợ rõ ràng, kế toán quyết toán dễ dàng',
  },
];

export default function ComLanhSchoolCard() {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl text-secondary-700 font-bold mt-4 mb-4">
        NGUỒN GẠO ĐẠT CHUẨN, BẾP ĂN AN TÂM – BẮT ĐẦU TỪ ĐÂY{' '}
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
