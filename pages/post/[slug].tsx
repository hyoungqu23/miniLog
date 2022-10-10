import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';

const Post = ({
  frontmatter: { title, date, category, summary },
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p>{category}</p>
        <p>{date}</p>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('__post'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const markdownFile = fs.readFileSync(path.join('__post', params?.slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownFile);

  const parsedContent = await unified().use(remarkParse).use(remarkHtml).process(content);

  return {
    props: {
      frontmatter,
      params: params?.slug,
      content: parsedContent.value,
    },
  };
};
