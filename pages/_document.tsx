import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="ko">
    <Head>
      <title>miniLog</title>
      <link rel="icon" href="favicon.svg" />
      <meta charSet="UTF-8" />
      <meta name="author" content="Hyoungmin Lee" />
      <meta
        name="keywords"
        content="프론트엔드, 개발자, 개발 블로그, 프론트엔드 개발자, React, Next.js, Tailwind CSS, JavaScript, Redux, Notion, 미니로그"
      />
      <meta
        name="subject"
        content="프론트엔드, 개발자, 개발 블로그, 프론트엔드 개발자, React, Next.js, Tailwind CSS, JavaScript, Redux, Notion, 미니로그"
      />
      <meta
        name="description"
        content="프론트엔드 개발자 이형민의 개발 블로그, 미니로그⭐입니다."
      />
      <meta httpEquiv="Content-Script-Type" content="Text/javascript" />
      <meta name="location" content="Seoul, Republic of Korea" />
      <meta name="robots" content="ALL" />
      <meta name="date" content="2022-10-19T18:00:00+09:00" />
      <meta httpEquiv="reply-to" content="hyoungqu23@gmail.com" />
      <meta httpEquiv="email" content="hyoungqu23@gmail.com" />
      <meta httpEquiv="copyright" content="Copyright (c) 2022 Hyoungmin Lee" />
      <meta httpEquiv="publisher" content="Hyoungmin Lee" />
      <meta httpEquiv="Other Agent" content="Hyoungmin Lee" />
      <meta httpEquiv="Generator" content="Visual Studio Code" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://minilog-dev.vercel.app/" />
      <meta property="og:title" content="미니로그 miniLog" />
      <meta property="og:image" content="main.svg" />
      <meta
        property="og:description"
        content="프론트엔드 개발자 이형민의 개발 블로그, 미니로그⭐입니다."
      />
      <meta property="og:site_name" content="미니로그" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
