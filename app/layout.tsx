import '../styles/global.css';

export const metadata = {
  title: 'Starcode',
  description: 'Starcode portfolio',
};

import { Quicksand } from 'next/font/google';
import { Providers } from './providers';
import NavBar from '@/layouts/partials/navbar';

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
            className={`${quicksand.variable} bg-base-100 font-quicksand text-base-content`}
          >
            <NavBar />
            <div className="mx-auto w-full max-w-6xl px-4 py-12">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
