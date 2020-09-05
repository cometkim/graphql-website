declare module 'gatsby-plugin-module-resolver' {
  export type PluginOptions = {
    root: string,
    aliases: {
      [key: string]: string,
    },
  };
}
