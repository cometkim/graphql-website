import React from 'react';
import { rem } from 'polished';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { styled } from 'gatsby-theme-stitches/stitches.config';

import prismTheme from './snippet/prismTheme';

type SnippetProps = {
  title: string,
  language: string,
  code: string,
  className?: string,
};

const Container = styled('figure', {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingX: rem(18),
});

const Title = styled('figcaption', {
  fontSize: rem(22),
  fontFamily: '$heading',
  fontWeight: 300,
  lineHeight: 1,
  color: 'white',
  marginBottom: '1em',
});

const Pre = styled('pre', {
  fontWeight: 400,
  fontSize: rem(16),
  margin: 0,
  lineHeight: 1.5,
});

const Snippet: React.FC<SnippetProps> = ({
  title,
  language,
  code,
  className,
}) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={prismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </Container>
  );
};

export default Snippet;
