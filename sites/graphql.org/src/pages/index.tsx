import type { PageProps } from 'gatsby';

import React from 'react'
import { css } from 'gatsby-theme-stitches/stitches.config';

import Hero from '../components/Hero';

type IndexPageProps = PageProps<never>;

css.global({
  '*': {
    textRendering: 'optimizeLegibility',
    // @ts-ignore
    WebkitFontSmoothing: 'antialiased',
  },
  body: {
    margin: 0,
  },
});

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <header
      className={css({
        position: 'relative',
      })}
    >
      <Hero/>
    </header>
  );
};

export default IndexPage;
