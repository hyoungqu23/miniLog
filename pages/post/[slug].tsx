import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {};

const Post = (props: Props) => {
  return <div>Post</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
