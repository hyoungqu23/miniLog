import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import {
  getBlockMapByPageId,
  getNotionPostPageId,
  getNotionPostSlugs,
} from 'services/notionApiServices';
import { ExtendedRecordMap } from 'notion-types';
import PostDetail from 'components/post/PostDetail';

type PostProps = {
  blockMap: ExtendedRecordMap;
};

const Post = ({ blockMap }: PostProps) => {
  return (
    <>
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
