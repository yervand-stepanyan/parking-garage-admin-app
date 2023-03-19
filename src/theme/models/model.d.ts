import type { Theme, ThemeOptions } from 'src/components/shared';

interface Spacing {
  xSmall: string;
  small: string;
  base: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
  x4Large: string;
  x5Large: string;
}

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    custom: {
      spacing: Spacing;
    };
  }

  interface CustomThemeOptions extends ThemeOptions {
    custom: {
      spacing: Spacing;
    };
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
