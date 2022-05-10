import { ReactElement, ReactNode } from 'react'

import { AppProps } from 'next/app'
import type { NextPage } from 'next'

import { Global } from "@emotion/react"

import GlobalStyles from './../styles/GlobalStyles'
import { MantineProvider } from '@mantine/styles'

import { ThemeProvider } from "../components/ThemeContext"
import ThemeToggle from '../components/ThemeToggle'

import stylesBase from '../styles/stylesBase'
import Social from '../components/Socials'





type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <GlobalStyles />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
        <Global styles={stylesBase} />
        <ThemeProvider>
          <div tw="w-full flex flex-col max-w-7xl mx-auto items-center ">
            <Component {...pageProps} />
          </div>
          <Social />
          <ThemeToggle />
        </ThemeProvider>
      </MantineProvider>
    </>
  )
}

