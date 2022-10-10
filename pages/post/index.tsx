import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    summary: string;
    date: string;
    category: string;
  };
};

const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {posts.map(({ slug, frontmatter }: Post) => (
        <div className="flex flex-col mb-10" key={slug}>
          <Link
            href={{
              pathname: '/post/[slug]',
              query: { slug },
            }}
          >
            <p className="text-xl text-bold ">{frontmatter.title}</p>
          </Link>
          <p>{frontmatter.summary}</p>
          <p>{frontmatter.date}</p>
          <p>{frontmatter.category}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join('__post'));

  const posts = files.map((file) => {
    const slug = file.replace('.md', '');

    const metadata = fs.readFileSync(path.join('__post', file), 'utf-8');

    const { data: frontmatter } = matter(metadata);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Post;
