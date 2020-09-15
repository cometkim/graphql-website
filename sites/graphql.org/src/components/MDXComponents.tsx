import { rem } from 'polished';
import { styled } from '~theme/stitches.config';

export const h1 = styled('h1', {
  fontFamily: '$heading',
  fontSize: rem(40),
  fontWeight: 300,
  margin: 0,
});

export const h2 = styled('h2', {
  fontFamily: '$heading',
  fontSize: rem(30),
  fontWeight: 300,
  margin: 0,
});

export const h3 = styled('h1', {
  fontFamily: '$heading',
  margin: 0,
});

export const h4 = styled('h1', {
  fontFamily: '$heading',
  margin: 0,
});

export const h5 = styled('h1', {
  fontFamily: '$heading',
  margin: 0,
});

export const h6 = styled('h1', {
  fontFamily: '$heading',
  margin: 0,
});

export const p = styled('p', {
  fontFamily: '$body',
  fontWeight: 300,
  fontSize: rem(22),
  lineHeight: 1.5,
  margin: `${rem(16)} 0`,
});
