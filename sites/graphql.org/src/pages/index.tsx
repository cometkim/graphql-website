import type { PageProps } from 'gatsby';

import React from 'react'

type IndexPageProps = PageProps<never>;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>Hello World!</div>
  );
};

export default IndexPage;
