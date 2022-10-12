import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (markdown: string) => {
  const html = await unified().use(remarkParse).use(remarkHtml).process(markdown);

  return html;
};
