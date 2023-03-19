import type {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from 'src/components/shared';

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
  interface Theme extends MUITheme {
    custom: {
      spacing: Spacing;
    };
  }

  interface ThemeOptions extends MUIThemeOptions {
    custom: {
      spacing: Spacing;
    };
  }

  export function createTheme(options?: ThemeOptions): Theme;
}
