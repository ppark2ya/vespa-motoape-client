import styledImport, { css as cssImport } from 'styled-components';

/**
 * twin.macro bug fix
 * @see https://github.com/ben-rogerson/twin.macro/issues/606
 */
declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
