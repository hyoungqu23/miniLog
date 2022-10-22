import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import {
  getBlockMapByPageId,
  getNotionPostPageId,
  getNotionPostSlugs,
} from 'services/notionApiServices';
import { ExtendedRecordMap } from 'notion-types';
import Head from 'next/head';
import { getPageTitle } from 'notion-utils';
import dynamic from 'next/dynamic';
import useSWR, { SWRConfig, unstable_serialize } from 'swr';
import { useRouter } from 'next/router';

const PostDetail = dynamic(() => import('components/post/PostDetail'));

type PostProps = {
  fallback: {
    [key: string]: ExtendedRecordMap;
  };
};

const Post = ({ fallback }: PostProps) => {
  const { slug } = useRouter().query;

  const title = getPageTitle(fallback[unstable_serialize(['posts', slug])]);

  return (
    <>
      <Head>
        <title>{`미니로그 - ${title}`}</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <PostDetail />
      </SWRConfig>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getNotionPostSlugs({
    filter: {
      property: 'status',
      status: {
        equals: 'Upload',
      },
    },
  });

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;

  const pageId = await getNotionPostPageId({
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  const blockMap = await getBlockMapByPageId(pageId);

  return {
    props: {
      fallback: {
        [unstable_serialize(['posts', slug])]: blockMap,
      },
    },
  };
};
