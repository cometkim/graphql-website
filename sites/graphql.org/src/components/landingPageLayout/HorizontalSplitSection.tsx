import type { LandingSectionColor } from '~theme/stitches.config';

import React from 'react';
import { styled } from '~theme/stitches.config';

type HorizontalSplitSectionProps = {
  reverse?: boolean,
  color?: LandingSectionColor,
  children: [React.ReactNode, React.ReactNode],
};

const Container = styled('section', {
  variants: {
    color: {
      light: {
        $landingSection: 'light',
      },
      gray: {
        $landingSection: 'gray',
      },
      dark: {
        $landingSection: 'dark',
      },
    },
  },
});

const InnerContainer = styled('div', {
  flexDirection: 'column',
  variants: {
    direction: {
      column: {
        display: 'flex',
      },
      row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      },
    },
    reverse: {
      false: {
      },
      true: {
        flexDirection: 'column-reverse',
      },
    },
  },
});

const LeftSide = styled('div', {
});

const RightSide = styled('div', {
});

const HorizontalSplitSection: React.FC<HorizontalSplitSectionProps> = ({
  color = 'light',
  reverse = false,
  children,
}) => {
  if (!(Array.isArray(children) && children.length === 2)) {
    throw new Error('The <HorizontalSplitSection> component must has only two child nodes');
  }

  return (
    <Container color={color}>
      <InnerContainer reverse={reverse} direction={{ initial: 'column', md: 'row' }}>
        <LeftSide>{React.Children.only(children[0])}</LeftSide>
        <RightSide>{React.Children.only(children[1])}</RightSide>
      </InnerContainer>
    </Container>
  );
};

export default HorizontalSplitSection;
