'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    id: 1,
    step: ' Bước 1',
    title: 'Gửi mẫu thử đa dạng (Mẫu nhỏ)',
    description:
      'Sau khi nhận thông tin về mô hình quán, chúng tôi sẽ gửi bộ mẫu thử gồm 3-5 loại gạo khác nhau phù hợp với phân khúc giá anh chị mong muốn. Anh chị có thể xem mặt gạo, ngửi mùi thơm và nấu thử bát nhỏ để kiểm tra độ dẻo/nở.',
  },
  {
    id: 2,
    step: ' Bước 2',
    title: 'Chọn "Ứng cử viên" số 1',
    description:
      'Sau khi anh chị đã ưng ý với một loại mẫu thử cụ thể, hãy phản hồi cho Cơm Lành.',
  },

  {
    id: 3,
    step: ' Bước 3',
    title: 'Tặng 5kg gạo để "Chạy thử" nồi lớn',
    description:
      'Đây là bước quan trọng nhất. Cơm Lành sẽ gửi tặng 5kg gạo chính loại đó để anh chị nấu trực tiếp bằng nồi cơm công nghiệp tại quán.',
  },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= timelineEvents.length - 1) {
          return -1; // Reset về -1 để tắt hết
        }
        return prev + 1;
      });
    }, 1500); // Mỗi bước 1.5 giây

    return () => clearInterval(interval);
  }, []);

  // Tính toán chiều cao line dựa trên vị trí dot
  useEffect(() => {
    if (activeStep < 0) {
      setLineHeight(0);
    } else if (dotsRef.current[activeStep] && containerRef.current) {
      const dotElement = dotsRef.current[activeStep];
      const containerRect = containerRef.current.getBoundingClientRect();
      const dotRect = dotElement.getBoundingClientRect();
      const relativeTop = dotRect.top - containerRect.top + dotRect.height / 2;
      setLineHeight(relativeTop);
    }
  }, [activeStep]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="relative">
          {/* Vertical line background */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary-200" />

          {/* Vertical line progress */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-secondary-700 top-0"
            animate={{ height: lineHeight }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              index={index}
              isActive={activeStep === index}
              dotRef={(el) => (dotsRef.current[index] = el)}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({
  event,
  index,
  isActive,
  dotRef,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isActive: boolean;
  dotRef: (el: HTMLDivElement | null) => void;
  onToggle: () => void;
}) {
  return (
    <div
      className={`mb-8 flex  justify-between items-center w-full ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="w-5/12" />
      <motion.div
        ref={dotRef}
        className="z-20"
        animate={{
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
            isActive ? 'bg-secondary-700' : 'bg-secondary-300'
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              isActive ? 'bg-secondary-400' : 'bg-secondary-500'
            }`}
          />
        </div>
      </motion.div>
      <motion.div
        className="w-5/12 cursor-pointer"
        animate={{
          boxShadow: isActive
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
          scale: isActive ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        onClick={onToggle}
      >
        <div
          className={`p-4 rounded-lg border transition-all duration-300 ${
            isActive
              ? 'bg-secondary-100 border-main shadow-lg'
              : 'bg-secondary-50 border-main/70'
          }`}
        >
          <span className="font-bold text-main">{event.step}</span>
          <h3 className="text-xl text-secondary-800 font-semibold mb-1">
            {event.title}
          </h3>
          <p className="text-secondary-600">{event.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
