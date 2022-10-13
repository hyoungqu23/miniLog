import Link from 'next/link';
import React from 'react';
import { URL } from 'constants/url';

const Footer = () => {
  return (
    <footer className="mx-auto text-base w-fit">
      Copyright 2022. <Link href={URL.GITHUB}>Hyoungmin</Link>. All rights reserved.
    </footer>
  );
};

export default Footer;
