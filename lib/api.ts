import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MARKDOWN_DIRECTORY, MARKDOWN_FILENAME_EXTENSION } from 'lib/constants';

export const getMarkdownFiles = () => {
  return fs.readdirSync(path.join(MARKDOWN_DIRECTORY));
};

export const getMetaDataFromMarkdown = (markdownFile: string) => {
  const metaDataFromMarkdown = fs.readFileSync(
    path.join(MARKDOWN_DIRECTORY, markdownFile),
    'utf-8'
  );

  const { data: metadata } = matter(metaDataFromMarkdown);

  return metadata;
};

export const getSlugFromMarkdown = (markdownFile: string) => {
  return markdownFile.replace(MARKDOWN_FILENAME_EXTENSION, '');
};

export const getAllMetadata = () => {
  const allMetadata = getMarkdownFiles().map((file) => {
    const slug = getSlugFromMarkdown(file);
    const metadata = getMetaDataFromMarkdown(file);

    return {
      slug,
      metadata,
    };
  });

  return allMetadata;
};
