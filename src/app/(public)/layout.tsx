'use client';

import { PublicLayout } from '@/components/layouts/public/layout';

export default function LayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayout>{children}</PublicLayout>;
}
