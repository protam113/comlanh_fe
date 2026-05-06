'use client';

import { ContactButton } from '@/components/contact.button';
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
      <ContactButton href="/lien-he" />
    </PublicLayout>
  );
}
