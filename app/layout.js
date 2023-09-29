import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Studio shodwe',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  );
}
