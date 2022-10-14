import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'constants/routes';

const Header = () => {
  return (
    <header className="flex justify-center gap-5 text-2xl italic tracking-wider font-bold md:text-3xl">
      <Link href={ROUTES.HOME}>HOME</Link>
      <Link href={ROUTES.BLOG}>BLOG</Link>
    </header>
  );
};

export default Header;
