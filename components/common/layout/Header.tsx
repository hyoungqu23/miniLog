import Link from 'next/link';
import React from 'react';
import { ROUTES } from 'constants/routes';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center gap-5 text-sm italic font-bold tracking-wider bg-white dark:bg-black md:text-3xl">
      <Link href={ROUTES.HOME}>HOME</Link>
      <Link href={ROUTES.BLOG}>BLOG</Link>
      <Link href={ROUTES.PORTFOLIO}>PORTFOLIO</Link>
      <Link href={ROUTES.RESUME}>RESUME</Link>
    </header>
  );
};

export default Header;
