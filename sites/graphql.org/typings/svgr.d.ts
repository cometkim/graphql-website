declare module '*.svg' {
  import type React from 'react';

  const url: string;
  export default url;

  interface SvgrComponent extends React.FC<React.SVGAttributes<SVGElement>> {}
  export const ReactComponent: SvgrComponent;
}
