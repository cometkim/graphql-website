import type { LayoutComponent } from '~utils/types';

import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import { styled } from '~theme/stitches.config';
import '~theme/globalStyles';
import Hero from '~components/Hero';
import * as baseMDXComponents from '~components/MDXComponents';

import FullWidthSection from './landingPageLayout/FullWidthSection';
import HorizontalSplitSection from './landingPageLayout/HorizontalSplitSection';

const Header = styled('header', {
  position: 'relative',
});

const Main = styled('main', {
  textAlign: 'center',
});

const Footer = styled('footer', {
});

const MDXComponents = {
  ...baseMDXComponents,
  FullWidthSection,
  HorizontalSplitSection,
};

const LandingPageLayout: LayoutComponent = ({
  children,
}) => {
  return (
    <>
      <Header>
        <Hero/>
      </Header>
      <Main>
        <MDXProvider components={MDXComponents}>
          {children}
        </MDXProvider>
      </Main>
      <Footer>
        This is footer
      </Footer>
    </>
  );
};

export default LandingPageLayout;
