import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/common/layout/Layout';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import Head from 'next/head';
import { SWRConfig } from 'swr';

const MyApp = ({ Component, pageProps }: AppProps<{ fallback: any }>) => {
  const { fallback } = pageProps;

  return (
    <>
      <Head>
        <title>miniLog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
