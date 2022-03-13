import styledImport, { css as cssImport } from 'styled-components';

/**
 * twin.macro bug fix
 * @see https://github.com/ben-rogerson/twin.macro/issues/606
 */
declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
  // The inline svg css prop
  interface SVGProps<T>
    extends SVGProps<T extends SVGSVGElement ? T : unknown> {
    css?: CSSProp;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string;
    }
  }
}
