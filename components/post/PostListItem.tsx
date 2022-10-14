import Link from 'next/link';
import { AllMetadataType } from 'interfaces/post';

const PostListItem = ({ slug, metadata }: AllMetadataType) => {
  const categoryList: string[] = metadata.category.split(',');

  return (
    <div
      className="flex flex-col mb-10 w-full border-2 rounded-lg p-10 gap-2 hover:shadow-lg"
      key={slug}
    >
      <Link
        href={{
          pathname: '/post/[slug]',
          query: { slug },
        }}
      >
        <p className="text-xl text-bold cursor-pointer hover:underline">{metadata.title}</p>
      </Link>
      <p className="text-sm">{metadata.summary}</p>
      <p className="text-xs">{metadata.date}</p>
      <div className="flex gap-5">
        {categoryList.map((category: string) => (
          <span className="text-sm w-fit rounded px-2 even:bg-pink-500/50 odd:bg-sky-500/50">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostListItem;
