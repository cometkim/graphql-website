import React from 'react';
import dedent from 'dedent';
import { Link } from 'gatsby';
import { rem } from 'polished';
import Logo from '~components/Logo';
import { styled, css } from '~theme/stitches.config';
import backgroundImageUrl from '~images/graph-wave.svg';

import Snippet from './hero/Snippet';

const fadeIn = css.keyframes({
  from: {
    opacity: 0,
    transform: 'translate(0, 30px)',
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0)',
  },
});

const Container = styled('div', {
  position: 'relative',
  minHeight: rem(450),
  maxHeight: rem(900),
  backgroundColor: '#171e26',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    background: `url(${backgroundImageUrl}) repeat center center`,
    width: '100%',
    height: '100%',
  },
  md: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65vh',
  },
});

const IntroContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const Intro = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    }
  },
});

const ButtonContainer = styled('div', {
  position: 'absolute',
  top: 'calc(70%)',
  textAlign: 'center',
  animation: `${fadeIn} 1.1s 3.2s ease-in-out both`,
  '> a': {
    marginX: rem(13),
  },
});

const ButtonLink = styled(Link, {
});

const Hero: React.FC = () => {
  return (
    <Container>
      <IntroContainer>
        <Intro direction={{ initial: 'column', lg: 'row' }}>
          <Logo
            size={90}
            color="$primary"
            showTitle
            className={css({
              animation: `${fadeIn} 1.2s ease-in-out both`,
            })}
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
            className={css({
              animation: `${fadeIn} 1s 1s ease-in-out both`,
            })}
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
            className={css({
              animation: `${fadeIn} 1s 1.5s ease-in-out both`,
            })}
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
            className={css({
              animation: `${fadeIn} 1s 2s ease-in-out both`,
            })}
          />
        </Intro>
      </IntroContainer>
      <ButtonContainer>
        <ButtonLink to="/code/">Get Started</ButtonLink>
        <ButtonLink to="/learn/">Learn More</ButtonLink>
      </ButtonContainer>
    </Container>
  );
};

export default Hero;
