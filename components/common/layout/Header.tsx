import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'constants/routes';

const Header = () => {
  return (
    <header className="flex justify-center gap-5 text-2xl italic tracking-wider text-bold md:text-3xl">
      <nav>
        <Link href={ROUTES.HOME}>HOME</Link>
        <Link href={ROUTES.BLOG}>BLOG</Link>
      </nav>
    </header>
  );
};

export default Header;
