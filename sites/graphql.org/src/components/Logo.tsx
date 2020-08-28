import type { ColorVariant } from '../gatsby-plugin-theme-ui';

import React from 'react';
import { em, rem } from 'polished';
import { Box, Text } from 'theme-ui';

import { useColor } from '../gatsby-plugin-theme-ui';
import { ReactComponent as LogoSvg } from '../images/logo.svg';

type LogoProps = {
  size: number,
  color?: ColorVariant | 'currentColor',
  titleAs?: React.ComponentProps<typeof Text>['as'],
  showTitle?: boolean,
  className?: string,
};

const Logo: React.FC<LogoProps> = ({
  size,
  color = 'currentColor',
  titleAs = 'span',
  showTitle = true,
  className,
}) => {
  const rawColor = useColor(color);

  return (
    <Box
      className={className}
      sx={{
        color,
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: rem(size * 16 / 90),
      }}
    >
      <LogoSvg
        fill={rawColor}
        width={em(90)}
        height={em(90)}
        css={{ margin: '0 auto' }}
      />
      {showTitle && (
        <Text
          as={titleAs}
          color={color}
          sx={{
            fontFamily: 'heading',
            fontSize: em(30),
            fontWeight: 300,
            marginTop: em(4),
          }}
        >
          GraphQL
        </Text>
      )}
    </Box>
  );
};

export default Logo;
