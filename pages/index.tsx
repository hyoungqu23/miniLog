import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>미니로그</title>
      </Head>
      <Image
        src="/main.png"
        className="rounded-full hover:opacity-75"
        width="200%"
        height="200%"
        alt="Profile Image"
      />
      <h1 className="w-full text-xl font-semibold text-center">
        안녕하세요, 프론트엔드 개발자 이형민의 기술 블로그입니다.
      </h1>
      <h2>
        저에 대해서 더 알고싶으시다면, <a href="https://hyoungmin.vercel.app/">포트폴리오</a>를
        확인해보세요!
      </h2>
    </>
  );
};

export default Home;
