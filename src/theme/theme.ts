import { createTheme } from '@mui/material/styles';

const BASE_SPACING_VALUE = 16;

const ROOT_PALETTE = {
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  primary: {
    contrastText: '#FFFFFF',
    light: '#D2F0E9',
    main: '#007272',
  },
  secondary: {
    main: '#009BD7',
  },
};

const SPACING = {
  xSmall: `${BASE_SPACING_VALUE / 4}px`, // 4px
  small: `${BASE_SPACING_VALUE / 2}px`, // 8px
  base: `${BASE_SPACING_VALUE}px`, // 16px
  medium: `${BASE_SPACING_VALUE}px`, // 16px
  large: `${BASE_SPACING_VALUE * 2}px`, // 32px
  xLarge: `${BASE_SPACING_VALUE * 3}px`, // 48px
  xxLarge: `${BASE_SPACING_VALUE * 4}px`, // 64px
  xxxLarge: `${BASE_SPACING_VALUE * 5}px`, // 80px
  x4Large: `${BASE_SPACING_VALUE * 6}px`, // 96px
  x5Large: `${BASE_SPACING_VALUE * 10}px`, // 160px
};

export const theme = createTheme({
  custom: {
    spacing: SPACING,
  },
  palette: {
    ...ROOT_PALETTE,
  },
});
