import type { IPluginRefObject } from 'gatsby';
import type { OverrideProps } from '@cometjs/core';

import type { FileSystemOptions } from 'gatsby-source-filesystem';
import type { PluginOptions as ManifestPluginOptions } from 'gatsby-plugin-manifest';
import type { PluginOptions as ModuleResolverPluginOptions } from 'gatsby-plugin-module-resolver';
import type { PluginOptions as TypegenPluginOptions } from 'gatsby-plugin-typegen/types';

export const siteMetadata = {
  title: 'GraphQL: A query language for APIs',
  description: 'GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
} as const;

type PluginRef<Resolve extends string, Options = unknown> = OverrideProps<IPluginRefObject, {
  resolve: Resolve,
  options: Options,
}>;

type PluginConfig = (
  | string
  | PluginRef<'gatsby-source-filesystem', FileSystemOptions>
  | PluginRef<'gatsby-plugin-manifest', ManifestPluginOptions>
  | PluginRef<'gatsby-plugin-module-resolver', ModuleResolverPluginOptions>
  | PluginRef<'gatsby-plugin-typegen', TypegenPluginOptions>
);

export const plugins: PluginConfig[] = [
  'gatsby-theme-stitches',
  'gatsby-plugin-svgr',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: siteMetadata.title,
      description: siteMetadata.description,
      short_name: 'GraphQL',
      start_url: '/',
      icon: 'src/images/logo.svg',
    },
  },
  {
    resolve: 'gatsby-plugin-module-resolver',
    options: {
      root: '.',
      aliases: {
        '~components': './src/components',
        '~theme': './src/gatsby-theme-stitches',
        '~images': './src/images',
      },
    },
  },
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
    },
  },
];
