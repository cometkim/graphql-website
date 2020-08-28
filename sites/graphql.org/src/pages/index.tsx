import type { PageProps } from 'gatsby';

import React from 'react'
import dedent from 'dedent';
import { Box, Button } from 'theme-ui';
import { Global, css } from '@emotion/core';

import Hero from '../components/Hero';
import Logo from '../components/Logo';
import Snippet from '../components/Snippet';

type IndexPageProps = PageProps<never>;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <header
      css={{
        position: 'relative',
      }}
    >
      <Global
        styles={css({
          '*': {
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
          },
        })}
      />
      <Hero/>
    </header>
  );
};

export default IndexPage;
