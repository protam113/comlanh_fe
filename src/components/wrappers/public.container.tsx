import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function PublicContainer({ children, className }: ContainerProps) {
  return (
    <main className={`px-4 lg:px-8 max-w-7xl w-full ${className}`}>
      {children}
    </main>
  );
}
