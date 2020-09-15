import type { LayoutComponent } from '~utils/types';

import React from 'react'
import { styled } from '~theme/stitches.config';
import '~theme/globalStyles';
import Hero from '~components/Hero';

const Header = styled('header', {
  position: 'relative',
});

const Main = styled('main', {
});

const Footer = styled('footer', {
});

const LandingPageLayout: LayoutComponent = ({
  children,
}) => {
  return (
    <>
      <Header>
        <Hero/>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        This is footer
      </Footer>
    </>
  );
};

export default LandingPageLayout;
