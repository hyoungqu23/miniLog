import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';

import { getAllMarkdown, getAllData } from 'lib/api';

const Post = ({
  metadata: { title, date, category, summary },
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p>{category}</p>
        <p>{date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMarkdown().map((filename) => ({
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
  let data;
  let content;

  if (typeof params?.slug === 'string') {
    const { metadata, html } = await getAllData(params.slug);
    data = metadata;
    content = html;
  }

  return {
    props: {
      metadata: data,
      params: params?.slug,
      html: content,
    },
  };
};
