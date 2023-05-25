'use client';

import { Quicksand } from 'next/font/google';

import { darkModeAtom } from '@/stores';
import { ConfigProvider, App } from 'antd';
import { useAtom } from 'jotai';

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import NavBar from '@/layouts/partials/navbar';
import { useEffect } from 'react';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicskand',
});

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode] = useAtom(darkModeAtom);

  const {
    token: { colorBgBase, colorBgContainer },
  } = theme.useToken();
  /*   useEffect(() => {
    console.log(darkMode, colorBgBase, colorBgContainer);
  }, [darkMode, colorBgBase]); */

  /*   theme={{
    token: !darkMode
      ? {
          colorPrimary: '#722ed1',
          colorTextBase: '#722ED1',
        }
      : {
          colorPrimary: '#722ed1',
          colorTextBase: '#722ED1',
          colorBgBase: '#07020d',
        },
  }} */

  return (
    <div
      className={`${quicksand.variable} font-quicksand bg-base-100 text-base-content`}
    >
      <NavBar />
      <div className="w-full max-w-6xl mx-auto px-4">
        {children}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </div>
    </div>
  );
}
