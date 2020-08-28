declare module 'dedent' {
  function dedent(liternals: TemplateStringsArray, ...placeholders: string[]): string;
  export default dedent;
}

declare module 'dedent.macro' {
  import dedent from 'dedent';
  export default dedent;
}
