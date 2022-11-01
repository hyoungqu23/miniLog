import React from 'react';
import { useRouter } from 'next/router';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import useSWR from 'swr';

import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { Pdf } from 'react-notion-x/build/third-party/pdf';

const PostDetail = () => {
  const { slug } = useRouter().query;

  const { data } = useSWR<ExtendedRecordMap>(['posts', slug]);

  if (!data) return <>Loading</>;

  return (
    <NotionRenderer
      recordMap={data}
      fullPage={false}
      darkMode={true}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
};

export default PostDetail;
