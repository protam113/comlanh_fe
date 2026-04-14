import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  return <main className={`px-4 lg:px-8 w-full ${className}`}>{children}</main>;
}
