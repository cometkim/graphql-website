import React from 'react';
import { em, rem } from 'polished';
import { styled } from '~theme/stitches.config';
import { ReactComponent as _LogoSvg } from '~images/logo.svg';

type LogoProps = {
  size: number,
  color?: '$primary' | 'currentColor',
  showTitle?: boolean,
  className?: string,
};

const Container = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const LogoSvg = styled(_LogoSvg, {
  width: em(90),
  height: em(90),
  margin: '0 auto',
});

const Title = styled('span', {
  color: 'currentcolor',
  fontFamily: '$heading',
  fontSize: em(30),
  fontWeight: 300,
  marginTop: em(4),
});

const Logo: React.FC<LogoProps> = ({
  size,
  color = 'currentColor',
  showTitle = true,
  className,
}) => {
  return (
    <Container
      className={className}
      css={{
        color,
        fontSize: rem(size * 16 / 90),
      }}
    >
      <LogoSvg fill="currentColor" />
      {showTitle && <Title>GraphQL</Title>}
    </Container>
  );
};

export default React.memo(Logo);
