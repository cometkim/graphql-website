import { css } from './stitches.config';

css.global({
  '*': {
    textRendering: 'optimizeLegibility',
    // @ts-ignore
    WebkitFontSmoothing: 'antialiased',
  },
  body: {
    margin: 0,
  },
});
