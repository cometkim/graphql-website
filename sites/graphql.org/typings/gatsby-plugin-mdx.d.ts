declare module 'gatsby-plugin-mdx/types' {
  import type { Node } from 'gatsby';

  export type PluginOptions = {
    extensions?: string[],
    defaultLayouts?: { [key: string]: string },
    gatsbyRemarkPlugins?: (string | object)[],
    remarkPlugins?: unknown[],
    rehypePlugins?: unknown[],
    mediaTypes?: string[],
    shouldBlockNodeFromTransformation?: (node: Node) => boolean,
  };
}
