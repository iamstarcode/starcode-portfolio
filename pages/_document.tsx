import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'
import { ServerStyles, createStylesServer } from '@mantine/next';

const stylesServer = createStylesServer();


export default class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <ServerStyles html={initialProps.html} server={stylesServer} />
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    )
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
         <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
