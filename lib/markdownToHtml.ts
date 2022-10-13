import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import prism from 'remark-prism';

export const markdownToHtml = async (markdown: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkHtml, { sanitize: false })
    .use(prism)
    .process(markdown);

  return html;
};
