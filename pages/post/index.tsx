import { GetStaticProps } from 'next';
import { getAllMetadata } from 'lib/api';
import PostListItem from 'components/post/PostListItem';
import { MetadataType } from 'interfaces/post';

type Props = {
  allMetadata: MetadataType[];
};

const Post = ({ allMetadata }: Props) => {
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {allMetadata.map(({ slug, metadata }: MetadataType) => (
        <PostListItem slug={slug} metadata={metadata} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allMetadata = getAllMetadata();

  return {
    props: {
      allMetadata,
    },
  };
};

export default Post;
