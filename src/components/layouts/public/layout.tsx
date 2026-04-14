'use client';

import React, { ReactNode } from 'react';
import Header from './hd/header';
import Footer from './hd/footer';

export interface LayoutProps {
  children: ReactNode;
}

export const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
