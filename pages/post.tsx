import React from 'react';
import { GetStaticProps } from 'next';

type Props = {};

const Post = (props: Props) => {
  return <div>Post</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  // TODO: Markdown을 HTML로 변환하기

  return {
    props: {},
  };
};

export default Post;
