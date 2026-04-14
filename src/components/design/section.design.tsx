import React from 'react';

export const SectionTag = ({ title }: { title: string }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-beige-100 text-secondary-700 px-4 py-1.5 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-4">
      {title}
    </div>
  );
};
