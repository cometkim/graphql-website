import type { PageProps } from 'gatsby';

import React from 'react'
import { styled } from '~theme/stitches.config';
import '~theme/globalStyles';
import Hero from '~components/Hero';

type IndexPageProps = PageProps<never>;

const Header = styled('header', {
  position: 'relative',
});

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Header>
      <Hero/>
    </Header>
  );
};

export default IndexPage;
