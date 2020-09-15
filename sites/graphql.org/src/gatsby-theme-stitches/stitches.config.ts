import { em } from 'polished';
import { createStyled } from '@stitches/react';

export const { css, styled } = createStyled({
  breakpoints: {
    sm: rule => `@media (min-width: ${em(640)}) { ${rule} }`,
    md: rule => `@media (min-width: ${em(1024)}) { ${rule} }`,
    lg: rule => `@media (min-width: ${em(1280)}) { ${rule} }`,
  },
  tokens: {
    colors: {
      $primary: '#e10098',

      $landingSectionBgLight: '#f5f6f8',
      $landingSectionTextLight: '#202020',

      $landingSectionBgGray: '#e6e8ec',
      $landingSectionTextGray: '#202020',

      $landingSectionBgDark: '#3d464f',
      $landingSectionTextDark: 'white',

      $bg: 'white',
      $text: '#202020',
    },
    fonts: {
      $heading: `'Rubik', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      $system: `'Rubik', 'Helvetica Neue', Helvetica, Arial, system-ui`,
    },
  },
  utils: {
    $landingSection: _config => (value: LandingSectionColor) => {
      switch (value) {
        case 'light':
          return { color: '$landingSectionTextLight', backgroundColor: '$landingSectionBgLight' };
        case 'gray':
          return { color: '$landingSectionTextGray', backgroundColor: '$landingSectionBgGray' };
        case 'dark':
          return { color: '$landingSectionTextDark', backgroundColor: '$landingSectionBgDark' };
      }
    },
  },
});

export const darkTheme = css.theme({
  colors: {
    $bg: '',
    $text: '',
  },
});

export type LandingSectionColor = (
  | 'light'
  | 'gray'
  | 'dark'
);
