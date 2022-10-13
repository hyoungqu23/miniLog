import React, { PropsWithChildren } from 'react';
import Header from 'components/common/layout/Header';
import Footer from 'components/common/layout/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-4/5 min-h-screen py-5 mx-auto md:w-3/5 md:py-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
