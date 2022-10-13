import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/common/layout/Layout';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>미니로그</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
