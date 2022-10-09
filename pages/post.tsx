import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { GetStaticProps } from 'next';

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    summary: string;
    date: string;
    category: string[];
  };
};

type Props = {
  posts: Post[];
};

const Post = ({ posts }: Props) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.summary}</p>
          <p>{post.frontmatter.date}</p>
          {post.frontmatter.category.map((category) => (
            <p>{category}</p>
          ))}
        </>
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
