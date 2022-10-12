import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MARKDOWN_DIRECTORY, MARKDOWN_FILENAME_EXTENSION } from 'lib/constants';
import { markdownToHtml } from 'lib/markdownToHtml';

export const getAllMarkdown = (): string[] => {
  return fs.readdirSync(path.join(MARKDOWN_DIRECTORY));
};

export const getMarkdown = (filename: string = '') => {
  return fs
    .readFileSync(path.join(MARKDOWN_DIRECTORY, filename + MARKDOWN_FILENAME_EXTENSION), 'utf-8')
    .toString();
};

export const getDataFromMarkdown = (
  markdownFile: string
): { metadata: { [key: string]: string }; content: string } => {
  const dataFromMarkdown = fs.readFileSync(path.join(MARKDOWN_DIRECTORY, markdownFile), 'utf-8');

  const { data: metadata, content } = matter(dataFromMarkdown);

  return { metadata, content };
};

export const getSlugFromMarkdown = (markdownFile: string) => {
  return markdownFile.replace(MARKDOWN_FILENAME_EXTENSION, '');
};

export const getAllMetadata = () => {
  const allMetadata = getAllMarkdown().map((file) => {
    const slug = getSlugFromMarkdown(file);
    const { metadata } = getDataFromMarkdown(file);

    return {
      slug,
      metadata,
    };
  });

  return allMetadata;
};

export const getAllData = async (slug: string) => {
  const markdown = getDataFromMarkdown(slug + MARKDOWN_FILENAME_EXTENSION);
  const html = await markdownToHtml(markdown.content);

  return { metadata: markdown.metadata, html: html.value };
};
