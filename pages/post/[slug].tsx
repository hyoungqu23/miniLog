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
  const categoryList: string[] = category.split(',');

  return (
    <section>
      <div className="flex flex-col">
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className="flex gap-5">
          {categoryList.map((category: string) => (
            <span className="text-sm w-fit rounded px-2 even:bg-pink-500/50 odd:bg-sky-500/50">
              {category}
            </span>
          ))}
        </div>
        <p>{date}</p>
      </div>
      <div className="unreset" dangerouslySetInnerHTML={{ __html: html }} />
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
