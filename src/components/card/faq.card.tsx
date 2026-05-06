'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionTag } from '../design/section.design';

const painPoints = [
  { text: `Chất lượng "lúc này lúc kia"` },
  { text: 'Giá thay đổi không báo trước' },
  { text: 'Chọn nhầm gạo, lãng phí chi phí' },
  { text: 'Thiếu giấy tờ pháp lý nguồn gốc' },
];

const solutions = [
  {
    title: 'Chất lượng đồng nhất',
    desc: 'Quản lý kho hiện đại, quy trình kiểm định nghiêm ngặt 30 năm kinh nghiệm',
  },
  {
    title: 'Giá bình ổn cam kết',
    desc: 'Dự trữ lớn, không lo biến động thị trường bất ngờ',
  },
  {
    title: 'Xuất VAT đầy đủ',
    desc: 'Hóa đơn điện tử minh bạch, thuận tiện hạch toán',
  },
  {
    title: 'Hồ sơ ATTP',
    desc: 'Bộ hồ sơ Vệ sinh An toàn Thực phẩm đầy đủ pháp lý',
  },
];

const faqItems = [
  {
    question: 'Chọn Gạo Phù Hợp – Không Chọn Gạo Đắt',
    answer: (
      <>
        <p className="mb-3">
          Chúng tôi thấu hiểu nỗi lo của người làm kinh doanh: Gạo đắt quá thì
          mất lời, gạo rẻ quá thì mất khách. Vì vậy, triết lý của Cơm Lành là
          "Chỉ bán loại gạo phù hợp nhất".
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-secondary-800">
              Tư vấn dựa trên mô hình:
            </strong>{' '}
            Dù anh chị là quán cơm bình dân, nhà hàng cao cấp hay bếp ăn công
            nghiệp, chúng tôi đều có loại gạo tương ứng.
          </li>
          <li>
            <strong className="text-secondary-800">Trải nghiệm thực tế:</strong>{' '}
            Chúng tôi luôn sẵn sàng gửi nhiều mẫu thử với các mức giá khác nhau.
            Đặc biệt, chương trình tặng 5kg gạo nấu thử nồi lớn giúp anh chị tự
            do đánh giá chất lượng và chi phí trước khi quyết định hợp tác.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Giá Ưu Đãi Hơn Thị Trường – Không Thay Đổi Đột Ngột',
    answer: (
      <>
        <p className="mb-3">
          Trong bối cảnh vật giá leo thang, Cơm Lành cam kết trở thành người
          đồng hành chia sẻ áp lực tài chính cùng chủ quán:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-secondary-800">Giá rẻ hơn 10-15%:</strong>{' '}
            Nhờ lợi thế từ đại lý gốc với hơn 30 năm kinh nghiệm, chúng tôi tối
            ưu hóa quy trình phân phối để đảm bảo mức giá sỉ luôn rẻ hơn thị
            trường từ 10-15%.
          </li>
          <li>
            <strong className="text-secondary-800">
              Chính sách báo trước 01 tháng:
            </strong>{' '}
            Chúng tôi hiểu sự ổn định là chìa khóa của vận hành. Cơm Lành cam
            kết không tăng giá bất ngờ. Mọi thay đổi về giá đều được thông báo
            trước ít nhất 30 ngày, giúp anh chị chủ động trong việc tính toán
            chi phí và giá bán.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Pháp Lý Minh Bạch – Kinh Doanh An Tâm',
    answer: (
      <>
        <p className="mb-3">
          Chúng tôi xóa tan nỗi lo về nguồn gốc hàng hóa và các đợt kiểm tra
          liên ngành. Sự chuyên nghiệp của Cơm Lành thể hiện qua:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-secondary-800">Hồ sơ chuẩn chỉnh:</strong>{' '}
            Cung cấp đầy đủ hóa đơn chứng từ, nguồn gốc xuất xứ rõ ràng. Mọi sản
            phẩm đều đạt chứng nhận vệ sinh an toàn thực phẩm và có bản tự công
            bố chất lượng đầy đủ.
          </li>
          <li>
            <strong>Bao bì định danh:</strong> Gạo được đóng gói trong bao bì
            thương hiệu chuẩn mực, ghi rõ thông tin Công ty TNHH Trọn Vẹn Toàn.
            Điều này không chỉ giúp anh chị tự tin trước các cơ quan quản lý mà
            còn nâng tầm uy tín của nhà hàng trong mắt thực khách.
          </li>
        </ul>
      </>
    ),
  },
];

export default function FaqCard() {
  return (
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
      >
        {/* LEFT — Pain points + Solutions */}
        <div className="flex flex-col gap-6">
          <div>
            <SectionTag title="Triết lý & Giá trị" />
            <h2 className="text-[26px] text-secondary-700 font-bold mt-4 mb-4">
              3 TRIẾT LÝ "VÀNG" TẠI CƠM LÀNH – ĐIỂM TỰA CHO MỌI GIAN BẾP CHUYÊN
              NGHIỆP
            </h2>
          </div>

          {/* Pain points */}
          <div className="bg-beige-50 rounded-2xl p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
              Bạn có đang đau đầu vì...
            </p>
            <div className="grid grid-cols-2 gap-2">
              {painPoints.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-white/60 border border-white/40 rounded-xl p-3"
                >
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span className="text-sm font-medium text-main leading-snug">
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
              Giải pháp của chúng tôi
            </p>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-stone-200 p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-500 text-sm">✓</span>
                    <span className="text-sm font-semibold text-stone-800 leading-tight">
                      {s.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div className="flex flex-col gap-8 mt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-xl font-bold text-main hover:text-secondary-800">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary-800 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
}
