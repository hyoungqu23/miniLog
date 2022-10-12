import { GetStaticProps } from 'next';
import { getAllMetadata } from 'lib/api';
import PostListItem from 'components/post/PostListItem';
import { AllMetadataType } from 'interfaces/post';

type Props = {
  allMetadata: AllMetadataType[];
};

const Post = ({ allMetadata }: Props) => {
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {allMetadata.map(({ slug, metadata }: AllMetadataType) => (
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
