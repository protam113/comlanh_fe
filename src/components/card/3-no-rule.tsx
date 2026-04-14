'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionTag } from '../design/section.design';

export default function RuleCard() {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
      >
        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <SectionTag title={`Quy Tắc "3 Không"`} />
            <h2 className="text-[26px] text-secondary-700 font-bold mt-4 mb-4">
              Bạn có đang mạo hiểm uy tín nhà hàng vì những bao gạo "3 không"?
            </h2>
            <p className="text-[18px] text-secondary-600">
              Hiện nay, rất nhiều đơn vị cung cấp gạo sỉ vẫn đang sử dụng:
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8  mt-6">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: 'Bao bì chung chung',
                answer: (
                  <>
                    <p className="mb-3">
                      Không tên thương hiệu, không địa chỉ sản xuất, dễ bị nhầm
                      lẫn với hàng kém chất lượng.
                    </p>
                  </>
                ),
              },
              {
                question: 'Không hóa đơn, chứng từ',
                answer: (
                  <>
                    <p className="mb-3">
                      Khi cơ quan quản lý thị trường hoặc kiểm tra liên ngành
                      ghé thăm, chủ quán hoàn toàn "trắng tay" trong việc chứng
                      minh nguồn gốc xuất xứ.
                    </p>
                  </>
                ),
              },
              {
                question: 'Rủi ro pháp lý cao',
                answer: (
                  <>
                    <p className="mb-3">
                      Không có giấy kiểm nghiệm, không công bố chất lượng sản
                      phẩm – đồng nghĩa với việc bạn đang đặt sự an toàn của
                      thực khách và vận mệnh kinh doanh vào thế nguy hiểm.
                    </p>
                  </>
                ),
              },
            ].map((item, index) => (
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
