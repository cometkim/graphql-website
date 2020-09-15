declare module 'dedent' {
  function dedent(liternals: TemplateStringsArray, ...placeholders: string[]): string;
  export default dedent;
}
