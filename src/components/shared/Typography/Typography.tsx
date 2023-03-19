import React from 'react';

import { Typography as MuiTypography } from '@mui/material';

import { TYPOGRAPHY } from 'src/globals/constants';

import { TypographyProps } from './models';

const Typography: React.FC<TypographyProps> = ({
  label,
  variant = TYPOGRAPHY.variant.body1,
}) => {
  return <MuiTypography variant={variant}>{label}</MuiTypography>;
};

export default Typography;
