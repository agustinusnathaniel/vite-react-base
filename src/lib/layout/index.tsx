import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};
