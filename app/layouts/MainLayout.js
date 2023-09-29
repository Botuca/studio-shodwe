import React from 'react';
import { usePathname } from 'next/navigation';
import TopNav from './includes/TopNav';

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <div className="min-h-full bg-irelia bg-fixed inset-0 bg-center-top bg-cover bg-no-repeat flex items-center justify-center">
        {children}
      </div>
    </>
  );
}
