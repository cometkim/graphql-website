import React from 'react';
import dedent from 'dedent';
import { Link } from 'gatsby';
import { rem, em } from 'polished';
import { keyframes } from '@emotion/core';
import { Box, Container, Button } from 'theme-ui';

import Logo from '../components/Logo';
import Snippet from '../components/Snippet';

import backgroundImageUrl from '../images/graph-wave.svg';

const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(0, 30px)',
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0)',
  },
});

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: [undefined, 'flex'],
        alignItems: [undefined, 'center'],
        justifyContent: [undefined, 'center'],
        minHeight: rem(450),
        maxHeight: rem(900),
        height: [undefined, '65vh'],
        backgroundColor: 'backgroundInvert',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          background: `url(${backgroundImageUrl}) repeat center center`,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
          }}
        >
          <Logo
            size={90}
            color="primary"
            showTitle
            as="h1"
            css={{
              animation: `${fadeIn} 1.2s ease-in-out both`,
            }}
          />
          <Snippet
            title="Describe your data"
            language="graphql"
            code={dedent`
              type Project {
                name: String
                tagline: String
                contributors: [User]
              }
            `}
            css={{
              animation: `${fadeIn} 1s 1s ease-in-out both`,
            }}
          />
          <Snippet
            title="Ask for what you want"
            language="graphql"
            code={dedent`
              {
                project(name: "GraphQL") {
                  tagline
                }
              }
            `}
            css={{
              animation: `${fadeIn} 1s 1.5s ease-in-out both`,
            }}
          />
          <Snippet
            title="Get predictable results"
            language="json"
            code={dedent`
              {
                "project": {
                  "tagline": "A query language for APIs"
                }
              }
            `}
            css={{
              animation: `${fadeIn} 1s 2s ease-in-out both`,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(70%)',
          textAlign: 'center',
          animation: `${fadeIn} 1.1s 3.2s ease-in-out both`,
          '> a': {
            marginX: rem(13),
          },
        }}
      >
        <Button as={Link} to="/code/" variant="invert">Get Started</Button>
        <Button as={Link} to="/learn/" variant="invert">Learn More</Button>
      </Box>
    </Box>
  );
};

export default Hero;
