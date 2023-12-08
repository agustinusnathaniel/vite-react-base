import type { ReactNode } from 'react';

import Meta from '@/lib/layout/Meta';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Meta />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
