import React from 'react';

import { Typography as MuiTypography } from '@mui/material';

import { TYPOGRAPHY } from 'src/globals/constants';

import { TypographyProps } from './models';
import { useStyles } from './Typography.style';

const Typography: React.FC<TypographyProps> = ({
  color,
  label,
  variant = TYPOGRAPHY.variant.body1,
}) => {
  const classes = useStyles();
  const typographyColor = color ? classes[color] : undefined;

  return (
    <MuiTypography className={typographyColor} variant={variant}>
      {label}
    </MuiTypography>
  );
};

export default Typography;
