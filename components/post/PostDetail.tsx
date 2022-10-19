import React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { Pdf } from 'react-notion-x/build/third-party/pdf';

type PostDetailProps = {
  data: ExtendedRecordMap;
};

const PostDetail = ({ data }: PostDetailProps) => {
  return (
    <NotionRenderer
      recordMap={data}
      fullPage={true}
      darkMode={false}
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
