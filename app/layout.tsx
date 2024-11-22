import '@/styles/global/global.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Fullstack Developer Portfolio',
  description: 'Portfolio of Dhia Dhaifullah as a Fullstack Developer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
