import '../styles/global.css';
import '../public/antd.min.css';

import CustomLink from '@/components/CustomLink';

export const metadata = {
  title: 'Starcode',
  description: 'Starcode portfolio',
};

import { Quicksand } from 'next/font/google';
import { Providers } from './providers';
import { Suspense } from 'react';
import NavBar from '@/layouts/partials/navbar';
import Loading from './loading';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicskand',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head />
      <body className="m-0">
        <Providers>
          <div
            className={`${quicksand.variable} font-quicksand bg-base-100 text-base-content`}
          >
            <NavBar />
            <div className="w-full max-w-6xl mx-auto px-4 py-12">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
