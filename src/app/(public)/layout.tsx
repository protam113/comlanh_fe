'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
