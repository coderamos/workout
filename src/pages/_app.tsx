import { AppProps } from 'next/app';
import Head from 'next/head';

import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color={theme.colors.cyan}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
