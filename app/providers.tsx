'use client';

import RootStyleRegistry from './emotion';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RootStyleRegistry>
      <ThemeProvider
        defaultTheme="system"
        themes={['light', 'cupckae', 'dark']}
      >
        {children}
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
