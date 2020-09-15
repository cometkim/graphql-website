import type { PrismTheme } from 'prism-react-renderer';

const prismTheme: PrismTheme = {
  plain: {
    color: '#ca9800',
  },
  styles: [
    {
      types: ['keyword'],
      style: {
        color: '#b11a04',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#fff',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#555',
      },
    },
    {
      types: ['attr-name', 'property'],
      style: {
        color: '#1f61a0',
      },
    },
    {
      types: ['type-name'],
      style: {
        color: '#ca9800',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#d64292',
      },
    },
  ],
};

export default prismTheme;
