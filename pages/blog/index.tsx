import PostCard from 'components/post/PostCard';
import type { GetStaticProps, NextPage } from 'next';
import { getNotionPostList } from 'services/notionApiServices';
import { NotionPostDataType } from 'types';
import Head from 'next/head';
import useSWR, { unstable_serialize } from 'swr';

type BlogProps = {
  data: NotionPostDataType;
};

const Blog: NextPage<BlogProps> = () => {
  const { data } = useSWR<NotionPostDataType>(['posts']);

  return (
    <>
      <Head>
        <title>미니로그</title>
      </Head>
      {data &&
        data?.results.map(({ properties }) => (
          <PostCard
            key={properties.slug.rich_text[0].plain_text}
            title={properties.title.title[0].plain_text}
            slug={properties.slug.rich_text[0].plain_text}
            date={properties.date.date.start}
            summary={properties.summary.rich_text[0].plain_text}
            category={properties.category.multi_select}
          />
        ))}
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const response = await getNotionPostList({
    filter: {
      property: 'status',
      status: {
        equals: 'Upload',
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });

  const data = response.data;

  console.log(data);

  return {
    props: {
      fallback: {
        [unstable_serialize(['posts'])]: data,
      },
    },
  };
};
