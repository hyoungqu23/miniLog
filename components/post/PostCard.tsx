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
    <Link key={slug} href={slug}>
      <div className="flex flex-col w-full border-2 border-blue-300 shadow-lg">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">{summary}</p>
        <p className="text-xs">{date}</p>
        <div>
          {category.map((tag) => (
            <span className="mr-3 text-sm">{tag.name}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
