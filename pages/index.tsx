import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>미니로그</title>
      </Head>
      <h1 className="w-full text-lg font-semibold text-center">
        안녕하세요🖐️, 프론트엔드 개발자 이형민의 기술 블로그입니다.
      </h1>
      <Image
        src="/main.png"
        className="rounded-full hover:opacity-75"
        width="300%"
        height="300%"
        alt="Profile Image"
      />
    </>
  );
};

export default Home;
