import type { LandingSectionColor } from '~theme/stitches.config';

import React from 'react'
import { rem } from 'polished';
import { styled } from '~theme/stitches.config';

type FullWidthSectionProps = {
  color?: LandingSectionColor,
  children: React.ReactNode,
};

const Container = styled('section', {
  width: '100%',
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
  maxWidth: rem(760),
  margin: '0 auto',
  padding: `0 ${rem(20)}`,
  paddingTop: rem(96),
});

const FullWidthSection: React.FC<FullWidthSectionProps> = ({
  color = 'light',
  children,
}) => {
  return (
    <Container color={color}>
      <InnerContainer>
        {children}
      </InnerContainer>
    </Container>
  );
};

export default FullWidthSection;
