import Link from 'next/link';
import React from 'react';
import { Select } from 'types';

type Props = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  category: Select[];
};

const PostCard = ({ title, slug, date, summary, category }: Props) => {
  return (
    <Link href={`blog/${slug}`}>
      <div className="flex flex-col w-full p-5 shadow-xl cursor-pointer dark:hover:bg-white/10 hover:bg-red-500/10">
        <h2 className="my-3 text-sm font-bold md:text-2xl">{title}</h2>
        <div className="flex flex-col justify-between text-xs text-gray-500 md:flex-row md:text-sm">
          <p>{summary}</p>
          <p>{date}</p>
        </div>
        <div>
          {category.map((tag) => (
            <span
              key={tag.id}
              className={`text-xs md:mr-3 px-1 bg-${tag.color}-500 text-${tag.color}-500`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
