import { Seo } from 'components/common';
import { Fragment, PropsWithChildren } from 'react';
import { Footer } from './Footer';

import '@fontsource/open-sans/variable.css';

interface PageProps {
  description?: string;
  image?: string;
  keywords?: string[];
  title: string;
}

export const Page = ({ children, ...seoProps }: PropsWithChildren<PageProps>) => {
  return (
    <Fragment>
      <Seo {...seoProps} />
      {/* <GlobalStyles /> */}
      {/* <Navbar /> */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};
