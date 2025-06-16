import type { ReactNode } from 'react';

import { Footer } from './components/footer';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
