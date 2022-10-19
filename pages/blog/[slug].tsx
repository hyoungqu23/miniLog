import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import {
  getBlockMapByPageId,
  getNotionPostPageId,
  getNotionPostSlugs,
} from 'services/notionApiServices';
import { ExtendedRecordMap } from 'notion-types';
import PostDetail from 'components/post/PostDetail';
import Head from 'next/head';
import { getPageTitle } from 'notion-utils';

type PostProps = {
  blockMap: ExtendedRecordMap;
};

const Post = ({ blockMap }: PostProps) => {
  const title = getPageTitle(blockMap);

  return (
    <>
      <Head>
        <title>{`미니로그 - ${title}`}</title>
      </Head>
      <PostDetail data={blockMap} />
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
      blockMap,
    },
  };
};
