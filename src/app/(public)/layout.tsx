'use client';

import { PublicLayout } from '@/components/layouts/public/layout';
import { ScrollToTopButton } from '@/components/scroll.button';

export default function LayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PublicLayout>
      {children}
      <ScrollToTopButton />
    </PublicLayout>
  );
}
