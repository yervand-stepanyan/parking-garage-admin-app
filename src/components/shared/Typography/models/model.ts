import { OverridableStringUnion } from '@mui/types';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { Variant } from '@mui/material/styles/createTypography';

import { TYPOGRAPHY } from 'src/globals/constants';

export interface TypographyProps {
  color?: keyof typeof TYPOGRAPHY.color;
  label: string;
  variant?: OverridableStringUnion<
    Variant | 'inherit',
    TypographyPropsVariantOverrides
  >;
}
