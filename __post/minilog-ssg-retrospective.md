---
title: 테크 블로그 미니로그 프로젝트 - SSG로 정적 블로그 만들기
summary: 정적 블로그 구성하기
date: 2022/10/09
category: 회고, 개인 프로젝트, Next.js, SSG
---

## 시작

[https://github.com/hyoungqu23/minilog_dev](https://github.com/hyoungqu23/minilog_dev)

늦게라도 개발자가 되겠다는 다짐을 하며 여러 블로그와 GitHub의 `README.md` 혹은 이름 모르는 선배 개발자들이 작성한 기록들을 읽고 학습했다. 이렇게 내가 시작할 수 있게 받은 도움들을 작게나마 개발을 시작하거나 필요한 부분이 있어 검색하는 누군가에게 선순환처럼 도움을 주고 싶어서 블로그를 작성해야 겠다고 마음 먹었다.

- 내가 직접 개발 공부를 하며 기록한 글들을 누군가는 보면서 좋은 인사이트나 아이디어를 받을 수도 있고, 누군가는 도움이 될 수 있다고 생각한다.
- 또, 내가 읽으며 영감을 받고 도움을 받은 글들을 공유하고 아카이브 형태로 남겨 놓으면 나중에 다시 찾아 볼 수 있는 좋은 나만의 레퍼런스 저장소가 될 것이라고 생각한다.

이러한 이유로 두 가지를 나누어 독립적으로 기록하고자 하는 마음이 있었는데, 벨로그, 티스토리, 네이버 등의 기존 블로그 포맷은 카테고리를 나누는 것이 최대이거나 내 마음대로 커스터마이징하기 어려웠기 때문에 만족스럽지 못했다.

프론트엔드 개발자를 지망하면서, 여러 프로젝트를 할 때 사소한 이슈라도 기록해두면 나를 포함한 누군가가 확인하고 해당 이슈를 쉽게 극복해나갈 수 있을 것이라고 생각했다. 추가적으로 여러 프로젝트의 디자인을 직접 만들면서 사소한 디자인에도 UX가 향상되는 것을 직접 느꼈더니 그렇게 세세한 부분까지 직접 제어하고 싶은 마음도 컸다.

그렇게 이번 미니로그 프로젝트를 시작하게 됐다! 🙋🏻‍♂️

---

## 기술 스택과 선택 이유

### Why Next.js?

-

### Why TypeScript?

- TypeScript를 실제로 사용해보면서 배우기 위해 선택했다. 단순 JavaScript 기반으로 해도 되지만, 공부는 반드시 실전과 함께해야 하기 때문에 선택했다. 그리고 추후 블로그가 커지게 된다면 에러가 나지 않도록 보수적이고 안정적으로 코드를 작성하고 싶은 점도 한몫 했다.
- 이전 포트폴리오 프로젝트([프론트엔드 개발자 이형민입니다.](https://github.com/hyoungqu23/Hyoungmin_Portfolio))를 TypeScript로 진행하면서 데이터나 Props의 Type으로 인해 자동완성이 정확하고 빠르고 쉽게 되는 것 때문에 개발 경험이 크게 상승했기 때문에 다시 선택했다.
- 마지막으로 솔직하게 말하면, TypeScript를 선택한 현실적인 이유는 채용 시장에서 수많은 기업들이 원하는 기술 스택 중 하나인 점도 크게 작용했다.

### Why TailWind CSS?

- 우선, 사용이 편리하다. 클래스 명으로 스타일을 지정할 수 있기 때문에 쉽게 작성할 수 있고 인지할 수 있다.
- 성능적으로 우수하다. 즉, 빌드 타임이 빠르며, Figma에서 설정한 프로토타입의 스타일을 쉽게 적용할 수 있다.
- 누군가는 검색을 모바일로도 하기 때문에 당연히 반응형 디자인을 적용해야 하는데, 쉽게 반응형 디자인을 구축할 수 있다.
- 물론 러닝커브가 높지만, 한 번 배워놓으면 충분히 이후 개인 프로젝트에서 활용할 수 있을 것 같아서 선택했다.

### Why not Redux, Redux Tookit, Recoil, React-Query?

- 적절한 기술이나 라이브러리를 선택하여 적용하는 것도 개발자의 역량 중 하나라고 생각한다.
- 이번 미니로그 프로젝트에서는 다음과 같은 이유를 기반으로 Redux, RTK, Recoil, React-Query 등의 상태 관리 라이브러리를 활용하지 않기로 결정했다.
  - 상태 관리 라이브러리를 적용할 정도의 대규모 프로젝트가 아니기 때문에, 즉, 수많은 상태 데이터가 존재해 이를 효율적으로 관리해야하는 정도가 아니므로 충분히 지역적으로 데이터를 관리할 수 있다고 생각했다.

---

## 개발 기록

우선 개인 프로젝트를 진행할 때 쉽게 사용하고자 만들어 둔 [보일러 플레이트](http://github.com/hyoungqu23?tab=repositories)를 바탕으로 프로젝트를 설정했다.(사실 포트폴리오 사이트 배포 시 수많은 문제가 존재해 보일러 플레이트를 수정하느라 동일한 문제를 수정하면서 수많은 시간을 보내기도 했다.)

### 블로그의 구조는 어떻게 설정할 것인가?

첫 코드를 작성하기 전에, 블로그와 같은 웹 사이트는 정보의 변화가 많이 필요하지 않아 개발을 완료하고 빌드하는 순간에 렌더링이 되는 Static Site Generation(이하 **`SSG`**라 한다) 방식이 적합하다고 생각했다.

특히 블로그는 웹 사이트에서 내용을 수정하는 등의 기능은 기본적인 기능이 아니고, 필요한 데이터의 경로가 한정적이고 고정적이기 때문에 빌드하는 시점에 HTML로 렌더링하여 서버가 보유하고 있다가 블로그에 접속, 즉 클라이언트(브라우저)가 요청하는 경우에 해당 HTML을 응답하기만 하면 된다.

추가적으로 **`SSG`** 블로그(이하 **정적 블로그**라 한다)를 구현하면 SEO(Search Engine Optimization)에 유리하다는 장점도 존재한다.

물론 다음과 같은 문제들이 있지만, 우선 블로그에 가장 대중적이고 쉬운 **`SSG`** 방식으로 구조를 구성했다.

- 추후에 블로그 글이 너어어어어무 많아진다면 그 모든 글을 빌드할 때 HTML로 만들어 서버가 보유하고 있어야 하므로 문제가 될 수도 있다.
- 데이터를 웹 사이트에서 수정할 수 없어 데이터가 신선하지 않을 수 있다.
- 빌드할 때 시간이 오래 걸린다.

### 정적 블로그 구조 잡기

Next.js에는 빌드 시점에 데이터를 생성하여 Props로 전달하는 `[getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)` 함수가 존재하는데, `getStaticProps` 함수는 다음과 같은 경우에 사용해야 한다.

- 페이지를 렌더링하는 데 필요한 데이터가 빌드 시점에 사용되기 때문에 유효해야 하는 경우
- Headless CMS에서 오는 데이터인 경우
- 페이지가 SEO를 위해 pre-render 되어야 하고, 매우 빠르게 응답해야 하는 경우

따라서, `**SSG**`로 전체 Markdown 파일을 가져와 HTML로 변환하고, 모든 HTML 데이터를 가지고 페이지를 구현해야 하므로 `[getStaticProps](https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-with-typescript)` 함수를 활용해야 한다.

```tsx
// pages/post.tsx

import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
```

Post의 상세 페이지의 경우에는 [Next.js의 Dynamic Routes 기능](https://nextjs.org/docs/routing/dynamic-routes)을 활용해 구현할 수 있다. 대괄호를 활용해 Dynamic Routes를 추가할 수 있다(`[id]`).

이때 상세 페이지의 경우 Dynamic Routes가 있고, `getStaticProps`를 사용하는 경우 정적으로 생성할 경로 목록을 생성해야 하는데, `[getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)` 함수를 활용하면 지정한 모든 경로를 정적으로 사전에 렌더링하게 된다.

```tsx
// pages/post/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
  // ...

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { posts }, // will be passed to the page component as props
  };
};

export default function Post({ post }) {
  // Render post...
}
```

### 그렇다면 Markdown 파일을 어떻게 읽을거야?

먼저 Post 목록을 렌더링하기 위해서는 Markdown 파일들이 있는 `__post` 디렉토리에서 파일들을 불러온 후에 gray-matter 라이브러리를 활용해 Markdown 파일의 메타 데이터를 가져와야 한다.

```tsx
import fs from 'fs';
import path from 'path';
import React from 'react';
import { GetStaticProps } from 'next';

type Props = {};

const Post = (props: Props) => {
  return <div>Post</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join('__post'));

  console.log(files);

  return {
    props: {},
  };
};

export default Post;
```

Node의 `fs`와 `path`를 활용하면 쉽게 해당 디렉토리 내부의 파일들을 가져올 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f100f174-581b-4afc-bf60-4400eb3f5a48/Untitled.png)

콘솔에 찍어본 결과 slug로 이름을 지어둔 파일명을 그대로 잘 가져오는 것을 확인할 수 있다.

이때 예시 파일로 넣어둔 Markdown에 메타 데이터를 넣어줄 수 있다.

```markdown
---
title: 온라인 스토어 신규 페이지 리뉴얼 프로젝트 회고
summary: 로컬앤라이프의 온라인 스토어를 리뉴얼하는 기업 과제 프로젝트
date: 2022/09/05
category: 회고, 팀 프로젝트, 프리온보딩 프론트엔드 코스
---
```

각 파일마다 이러한 메타 데이터를 `[gray-matter](https://www.npmjs.com/package/gray-matter)` 라이브러리를 통해 가져와서 제목과 설명, 날짜, 카테고리로 렌더링해줄 수 있다.

```tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { GetStaticProps } from 'next';

type Props = {};

const Post = (props: Props) => {
  return <div>Post</div>;
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

  console.log(posts);

  return {
    props: {},
  };
};

export default Post;
```

콘솔에 잘 나오는 것을 확인할 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c058542-c125-4d0c-b928-618f27a41225/Untitled.png)

이제 전달받은 Props 데이터로 목록 UI를 구현하면 된다.

```tsx
const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(({ slug, frontmatter }: Post) => (
        <Link href={slug} key={slug}>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.summary}</p>
          <p>{frontmatter.date}</p>
          <p>{frontmatter.category}</p>
        </Link>
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
```

### Error: `Link` 컴포넌트는 하나의 자식만을 가진다?!

UI를 간단히 구현하던 중 `[Link](https://nextjs.org/docs/api-reference/next/link)` 컴포넌트를 활용했는데 [에러](https://nextjs.org/docs/messages/link-multiple-children)가 발생했다. 해당 에러는 `Link` 컴포넌트 하위에 여러 자식 컴포넌트를 두면 발생하는 에러로, `Link` 컴포넌트는 단 하나의 자식만을 가질 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5b2cc7b-c2e5-404d-bd15-64528c7afff2/Untitled.png)

따라서, Post의 제목만 `Link` 컴포넌트로 설정해주면 된다.

```tsx
const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(({ slug, frontmatter }: Post) => (
        <div key={slug}>
          <Link href={slug}>{frontmatter.title}</Link>
          <p>{frontmatter.summary}</p>
          <p>{frontmatter.date}</p>
          <p>{frontmatter.category}</p>
        </div>
      ))}
    </div>
  );
};
```

### Post의 상세 페이지를 구현해보자!

이제 사용자가 `/post/[slug]`에 진입했을 때 해당 Post의 상세페이지에 Markdown 파일의 내용이 렌더링되어야 한다.

### 그렇다면 Markdown을 HTML로 어떻게 변환할 거야?

정적 블로그는 Markdown 형태의 텍스트를 정적 블로그의 데이터로 보유하고, 이를 빌드하는 시점에 HTML 형태로 변환해주어야 한다.

이를 위해서 우리는 두 가지 작업이 필요하다.

- 텍스트 데이터를 Markdown Parser로 Markdown 형태의 텍스트로 변환한다.
- Markdown 형태의 텍스트를 HTML 형태의 텍스트로 변환한다.

첫 번째 작업은 `[remark](https://www.npmjs.com/package/remark)` 라이브러리가, 두 번째 변환 작업은 `[remark-html](https://www.npmjs.com/package/remark-html)` 라이브러리가 수행하게 된다. 두 라이브러리 모두 구문 트리를 사용하여 텍스트를 처리하기 위한 인터페이스인`[unified](https://www.npmjs.com/package/unified)` 프로젝트에 속해 있는 라이브러리로, 이를 활용해 Markdown을 HTML로 변환할 수 있다. `react-markdown` 라이브러리 또한 유사한 기능을 해주는 라이브러리이다.

동일한 방식으로 `fs` 모듈의 `readFileSync`를 활용해 해당 Markdown 파일을 가져오고, 이를 기반으로 HTML을 만들어주면 된다.

```tsx
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const markdownFile = fs.readFileSync(path.join('__post', params?.slug + '.md'), 'utf-8');

  return {
    props: {},
  };
};
```

이미 `gray-matter`의 `matter` 메서드로 첫 번째 작업은 완료했기 때문에 우리는 `remark-html`로 Markdown 형태의 텍스트를 HTML 형태의 텍스트로 변환해주기만 하면 된다.

```tsx
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
```

이렇게 되면, Props로 전달되는 데이터는 다음과 같다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8146a0d-ca33-4012-8da3-9fd86323cc2b/Untitled.png)

즉, 이렇게 HTML로 변환된 데이터가 Props로 전달되고, 이를 우리는 UI로 렌더링 작업만 해주면 마무리가 된다.

```tsx
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
```

여기서 우리는 `[dangerouslySetInnerHTML](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)` 를 활용하는데, 이는 브라우저 DOM에서 innerHTML을 사용하기 위한 React의 대체 방법이다. 일반적으로 코드에서 HTML을 설정하는 것은 보안상 문제([XSS](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85), 웹 애플리케이션에서 많이 나타나는 취약점의 하나로 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점)가 될 수 있기 때문에 이를 활용해 HTML을 컴포넌트에 주입해야 한다.

```tsx
function createMarkup() {
  return { __html: 'First &middot; Second' };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

## `next.js/examples/blog-starter`를 보며 리펙토링을 하자!

우선, `__post` 디렉토리에서 Markdown 파일들을 가져오는 `getMarkdownFiles` 함수, Post 목록 페이지에서 Markdown 파일의 메타 데이터를 가져오는 함수 `getMetaDataFromMarkdown`와 slug를 만드는 함수 `getSlugFromMarkdown`를 분리했다.

```tsx
// lib/api.ts

export const getMarkdownFiles = () => {
  return fs.readdirSync(path.join(MARKDOWN_DIRECTORY));
};

export const getMetaDataFromMarkdown = (markdownFile: string) => {
  const metaDataFromMarkdown = fs.readFileSync(
    path.join(MARKDOWN_DIRECTORY, markdownFile),
    'utf-8'
  );

  const { data: metaData } = matter(metaDataFromMarkdown);

  return metaData;
};

export const getSlugFromMarkdown = (markdownFile: string) => {
  return markdownFile.replace(MARKDOWN_FILENAME_EXTENSION, '');
};
```

이왕 리팩토링하는 김에 변수명도 신경써서 변경하고, 자주 사용하는 상수값도 `lib/contants.ts`로 분리하기로 했다.

```tsx
// lib/constants.ts

export const MARKDOWN_DIRECTORY = '__post';
export const MARKDOWN_FILENAME_EXTENSION = '.md';
```

분리한 함수를 활용해 모든 메타 데이터를 반환하는 함수 `getAllMetadata`를 추가했다.

```tsx
// lib/api.ts

export const getAllMetadata = () => {
  const allMetadata = getMarkdownFiles().map((file) => {
    const slug = getSlugFromMarkdown(file);
    const metaData = getMetaDataFromMarkdown(file);

    return {
      slug,
      metaData,
    };
  });

  return allMetadata;
};
```

추가적으로 Type도 `interfaces/post.ts`에 분리하고, Post 목록 페이지의 `PostListItem`을 새로운 컴포넌트로 분리했더니 아주 깔끔해졌다.

```tsx
import { GetStaticProps } from 'next';
import { getAllMetadata } from 'lib/api';
import { MetadataType } from 'interfaces/post';
import PostListItem from 'components/post/PostListItem';

type Props = {
  allMetadata: MetadataType[];
};

const Post = ({ allMetadata }: Props) => {
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {allMetadata.map(({ slug, metadata }: MetadataType) => (
        <PostListItem slug={slug} metadata={metadata} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allMetadata = getAllMetadata();

  return {
    props: {
      allMetadata,
    },
  };
};

export default Post;
```

Post 목록 페이지의 경우 리펙토링 후에도 제대로 렌더링되는 것을 확인할 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea251fb4-24f6-434f-a1fb-c9d14961e113/Untitled.png)

동일한 방식으로 Post 상세 페이지도 리펙토링 할 수 있다. 먼저 기존에 Post 목록 페이지에서 분리한 함수들을 재사용할 수 있게 수정하여 사용한다.

```tsx
export const getMarkdown = (filename: string = '') => {
  return filename
    ? fs.readFileSync(path.join(MARKDOWN_DIRECTORY, filename, MARKDOWN_FILENAME_EXTENSION))
    : fs.readdirSync(path.join(MARKDOWN_DIRECTORY));
};

export const getDataFromMarkdown = (markdownFile: string) => {
  const dataFromMarkdown = fs.readFileSync(path.join(MARKDOWN_DIRECTORY, markdownFile), 'utf-8');

  const { data: metadata, content } = matter(dataFromMarkdown);

  return { metadata, content };
};
```

다만 이렇게 수정하니까 `getAllMetadata` 함수에서 `file`의 Type이 `number | string`으로 추론되어 Type 에러가 발생했다. 따라서 분기가 아니라 함수를 분리했다.

```tsx
export const getAllMarkdown = () => {
  return fs.readdirSync(path.join(MARKDOWN_DIRECTORY));
};

export const getMarkdown = (filename: string = '') => {
  return fs.readFileSync(
    path.join(MARKDOWN_DIRECTORY, filename + MARKDOWN_FILENAME_EXTENSION),
    'uft-8'
  );
};
```

이제 분리한 함수를 활용해 `getStaticPaths`와 `getStaticProps`를 리펙토링할 수 있다.

```tsx
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
```

`ERROR!` 하지만 이때 또 다시 Type 에러가 발생했다. 그래서 `GetStaticPropsContext` Type을 열어봤다.

```tsx
export type GetStaticPropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = {
  params?: Q;
  preview?: boolean;
  previewData?: D;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
};
```

`params`가 Optional이기 때문에 `params`의 Type은 아마 `ParsedUrlQuery | undefined`가 될 것이다. 그러나 위에서 작성한 `getMarkdown` 함수가 Buffer Type을 반환하고 있다.

```tsx
const getMarkdown: (filename?: string) => Buffer;
```

이는 내부적으로 사용한 fs 모듈의 `readFileSync`가 `Buffer`를 반환하기 때문인데, 따라서 `ToString` 메서드를 활용해 문자열로 변환해주었다.

```tsx
export const getMarkdown = (filename: string = '') => {
  return fs
    .readFileSync(path.join(MARKDOWN_DIRECTORY, filename, MARKDOWN_FILENAME_EXTENSION))
    .toString();
};
```

결국 이렇게 한 뒤에 `getAllData` 함수를 생성했다.

```tsx
export const getAllData = (slug: string) => {
  const file = getMarkdown(slug);

  const markdown = getDataFromMarkdown(file);

  const html = markdownToHtml(markdown.content);

  return { metadata: markdown.metadata, html };
};
```

이때 사용한 `markdownToHtml` 함수는 기존의 Markdown을 HTML로 변환하는 함수를 분리해 만들었다.

```tsx
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (markdown: string) => {
  const html = await unified().use(remarkParse).use(remarkHtml).process(markdown);

  return html;
};
```

`ERROR!` 다 마무리된 것 같았지만 역시나 Type 에러가 발생했다.

```tsx
'string | string[] | undefined' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
  'undefined' 형식은 'string' 형식에 할당할 수 없습니다.
```

즉, 인수인 `params`의 Type이 위에서 살펴본 것처럼 `ParsedUrlQuery | undefined`이기 때문인 듯 했다.

심지어 `ParsedUrlQuery`의 Type은 다음과 같이 `string | string[]`이라는 것을 확인할 수 있었다.

```tsx
interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {}
```

결국 타입 가드로 처리하기로 마음먹고 `params.slug`가 `string`인 경우에만 `getAllData` 함수를 호출하도록 설정했다.

```tsx
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
```

`**ERROR!`\*\* 마무리됐다고 생각하고 이후 로직을 고민하던 찰나에 아래와 같은 서버 에러를 확인했다. 이는 가져오는 파일 명이 `/__post/slug.md`여야 하는데 전체 파일 내용이 파일 명에 들어가고 있기 때문에 발생한 에러로 파악됐다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dabd52ac-cc07-4529-8cc7-adfff5c78ac5/Untitled.png)

즉, 사실은 `getMarkdown` 함수가 불필요했던 것이다. 괜히 로직 하나를 추가하여 문제가 되었기에 제거했다.

`**ERROR!**` 제거하고 난 뒤에 발생한 에러는 다음과 같다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e80ad37-a845-4aba-94cb-5b050023b6ea/Untitled.png)

이는 `markdownToHtml` 함수가 비동기적으로 동작하는데, `await`를 빼먹어서 Promise가 `resolve`된 결과가 아닌 Promise 그 자체가 반환되었기에 생긴 문제라서 `await`를 추가해주었다. 수정 후 정상적으로 데이터를 반환하는 것을 확인했다.

## 개선해야할 점

현재 HTML로 변환된 Markdown이 보일러 플레이트에서 설정한 Tailwind CSS의 Reset CSS로 인해 거의 스타일링이 되지 않게 나오는 이슈가 있기 때문에 UI를 개선해야 한다.

→ 코드 하이라이터를 추가하기 위해 `remark-prism` 패키지를 추가적으로 설치하고, 이를 HTML 변환 과정에 적용해 `code` 태그에 정확히 `className`이 추가되는 것을 확인했으나, 스타일링이 입혀지지 않는 걸로 봤을 때 `**SSG**`로 렌더링되는 데이터에 대해 Tailwind CSS가 적용되지 않는 듯하다.

결국 완벽한 해결책은 찾지 못했다. 다만, `@apply` 기능을 활용해 전역 CSS에서 특정 `Class`를 가진 요소 하위 요소를 다시 스타일링하는 식으로 [처리](https://www.swyx.io/tailwind-unreset)해뒀다. UnReset CSS는 다음 링크에서 참조했다.

- \***\*[How and Why to Un-Reset Tailwind's CSS Reset](https://www.swyx.io/tailwind-unreset)\*\***

```css
.unreset h1 {
  @apply text-3xl font-bold my-5;
}

.unreset h2 {
  @apply text-2xl font-bold my-4;
}

.unreset h3 {
  @apply text-xl font-bold my-4;
}

.unreset p {
  @apply my-4;
}

.unreset a {
  @apply bg-red-500/50 cursor-pointer;
}

.unreset hr {
  @apply border-2 m-2 bg-gray-800 border-gray-800;
}

.unreset p > code,
.unreset h1 > code,
.unreset h2 > code,
.unreset h3 > code {
  @apply font-mono font-bold px-1 bg-gray-300 rounded-sm text-red-500;
}

.unreset ul,
.unreset menu {
  @apply list-disc my-3 pl-5;
}

.unreset ol {
  @apply list-decimal my-3 pl-5;
}

.unreset b,
.unreset strong {
  @apply font-bold;
}

.unreset .remark-highlight {
  @apply bg-gray-400 rounded-md p-5 font-mono leading-4;
}
```

## 추가적으로 블로그에 구현할 기능들

지속적으로 블로그를 직접 구현하면서 추가할 기능들을 생각하고 있습니다.

- [ ] 코드 하이라이터
- [ ] 댓글
- [ ] 글 검색 기능
- [ ] 카테고리 기능
- [ ] 구글 애널리틱스 추가
- [ ] 오픈 그래프(메타 태그) 설정
- [ ] 다크모드
- [ ] 카카오톡 채팅
- [ ] 추가할 페이지: Home(블로그), About…
