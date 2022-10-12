import Link from 'next/link';
import { MetadataType } from 'interfaces/post';

const PostListItem = ({ slug, metadata }: MetadataType) => {
  return (
    <div className="flex flex-col mb-10" key={slug}>
      <Link
        href={{
          pathname: '/post/[slug]',
          query: { slug },
        }}
      >
        <p className="text-xl text-bold">{metadata.title}</p>
      </Link>
      <p>{metadata.summary}</p>
      <p>{metadata.date}</p>
      <p>{metadata.category}</p>
    </div>
  );
};

export default PostListItem;
