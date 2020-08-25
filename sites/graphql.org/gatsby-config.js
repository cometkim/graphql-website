// Since this project prefers to use TypeScript, use [gatsby-config.ts](./gatsby-config.ts) instead of this file.
// Only environments setup here.

require('@babel/register')({
  presets: [
    ['babel-preset-gatsby-package', {
      nodeVersion: 'current',
    }],
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const config = require('./gatsby-config.ts');
delete config['__esModule'];

module.exports = config;
