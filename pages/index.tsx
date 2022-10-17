import PostCard from 'components/post/PostCard';
import type { GetServerSideProps, NextPage } from 'next';
import { getNotionPostList } from 'services/notionApiServices';
import { NotionPostDataType } from 'types';

type HomeProps = {
  data: NotionPostDataType;
};

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      {data.results.map(({ properties }) => (
        <PostCard
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

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getNotionPostList({
    filter: {
      property: 'status',
      status: {
        equals: 'Upload',
      },
    },
  });

  const data = response.data;

  return {
    props: { data },
  };
};
