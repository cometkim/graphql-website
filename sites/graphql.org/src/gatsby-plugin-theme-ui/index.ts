import type { Theme as BaseThemeSchema } from 'theme-ui';
import type { OverrideProps } from '@cometjs/core';

import { useThemeUI } from 'theme-ui';
import { rem, em } from 'polished';

export interface ColorThemeSchema {
  primary: string;
  text: string;
  textInverse: string;
  background: string;
  backgroundInvert: string;
  border: string;
  borderInvert: string;
}

export interface FontThemeSchema {
  heading: string;
  ui: string;
}

export interface TextThemeSchema {
  default: {};
}

export interface LayoutThemeSchema {
  container: {},
}

export interface ButtonThemeSchema {
  primary: {};
  invert: {};
}

export interface BorderThemeSchema {
  button: string;
}

export type ThemeSchema = OverrideProps<BaseThemeSchema, {
  colors: ColorThemeSchema,
  fonts: FontThemeSchema,
  buttons: ButtonThemeSchema,
}>;

const theme: ThemeSchema = {
  useLocalStorage: false,
  useColorSchemeMediaQuery: false,
  colors: {
    primary: '#e10098',
    text: '#202020',
    textInverse: '#fff',
    background: '#f5f6f8',
    backgroundInvert: '#171e26',
    border: 'rgba(0, 0, 0, 0.4)',
    borderInvert: 'rgba(255, 255, 255, 0.4)',
  },
  fonts: {
    heading: `'Rubik', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    ui: `'Rubik', 'Helvetica Neue', Helvetica, Arial, system-ui`,
  },
  borders: {
    button: '1px solid',
  },
  buttons: {
    primary: {
      color: 'text',
      backgroundColor: 'transparent',
      border: 'button',
      borderColor: 'border',
      borderRadius: '6px',
      fontFamily: 'ui',
      fontSize: rem(17),
      fontWeight: 300,
      paddingX: rem(25.6),
      paddingY: rem(9.6),
      transition: 'background-color .1s ease-out, color .1s ease-out',
      ':hover, :active, :focus': {
        color: 'white',
        backgroundColor: 'primary',
      },
    },
    invert: {
      color: 'white',
      backgroundColor: 'transparent',
      border: 'button',
      borderColor: 'borderInvert',
      borderRadius: '6px',
      fontFamily: 'ui',
      fontSize: rem(17),
      fontWeight: 300,
      paddingX: rem(25.6),
      paddingY: rem(9.6),
      transition: 'background-color .1s ease-out, color .1s ease-out',
      ':hover, :active, :focus': {
        color: 'text',
        backgroundColor: 'white',
      },
    },
  },
};

export default theme;

export function useTheme() {
  const theme = useThemeUI().theme as unknown as ThemeSchema;
  return theme;
}

export type ColorVariant = keyof ColorThemeSchema | 'currentColor';

export function useColor(color: ColorVariant): string {
  const theme = useTheme();
  if (color === 'currentColor') {
    return 'currentColor';
  }
  return theme.colors[color];
}
