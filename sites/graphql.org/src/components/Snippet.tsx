import type { PrismTheme } from 'prism-react-renderer';

import React from 'react';
import { rem } from 'polished';
import { Box, Text } from 'theme-ui';
import Highlight, { defaultProps } from 'prism-react-renderer';

type SnippetProps = {
  title: string,
  language: string,
  code: string,
  className?: string,
};

const snippetTheme: PrismTheme = {
  plain: {
    color: '#ca9800',
  },
  styles: [
    {
      types: ['keyword'],
      style: {
        color: '#b11a04',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#fff',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#555',
      },
    },
    {
      types: ['attr-name', 'property'],
      style: {
        color: '#1f61a0',
      },
    },
    {
      types: ['type-name'],
      style: {
        color: '#ca9800',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#d64292',
      },
    },
  ],
};

const Snippet: React.FC<SnippetProps> = ({
  title,
  language,
  code,
  className,
}) => {
  return (
    <Box
      as="figure"
      className={className}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: rem(18),
      }}
    >
      <Text
        as="figcaption"
        color="textInverse"
        sx={{
          fontSize: rem(22),
          fontFamily: 'heading',
          fontWeight: 300,
          lineHeight: 1,
          marginBottom: '1em',
        }}
      >
        {title}
      </Text>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={snippetTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            css={{
              fontWeight: 400,
              fontSize: rem(16),
              margin: 0,
              lineHeight: 1.5,
            }}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default Snippet;
