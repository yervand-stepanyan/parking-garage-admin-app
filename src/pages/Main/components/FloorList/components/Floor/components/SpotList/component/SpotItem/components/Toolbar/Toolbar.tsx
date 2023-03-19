import React from 'react';

import {
  AccessibleIcon,
  Button,
  DirectionsCarIcon,
  EvStationIcon,
  Typography,
} from 'src/components/shared';

import { BUTTON, ICON, STATUS } from './constants';
import { useStyles } from './Toolbar.style';
import { ToolbarProps } from './models';

const Toolbar: React.FC<ToolbarProps> = ({
  hasCharger,
  hasDisability,
  isActive,
  isSmall,
  isMedium,
  isLarge,
}) => {
  const classes = useStyles();
  const chargerIconColor = hasCharger
    ? ICON.color.success
    : ICON.color.disabled;
  const disabilityIconColor = hasDisability
    ? ICON.color.secondary
    : ICON.color.disabled;
  const smallCarIconColor = isSmall ? ICON.color.success : ICON.color.disabled;
  const mediumCarIconColor = isMedium
    ? ICON.color.success
    : ICON.color.disabled;
  const largeCarIconColor = isLarge ? ICON.color.success : ICON.color.disabled;
  const status = {
    color: isActive ? STATUS.color.success : STATUS.color.disabled,
    label: isActive ? STATUS.label.active : STATUS.label.inActive,
  };

  return (
    <div className={classes.toolbarContainer}>
      <div className={classes.statusAndButtonContainer}>
        <div className={classes.statusWrapper}>
          <Typography color={status.color} label={status.label} />
        </div>
        <div className={classes.toolbarItem}>
          {isActive ? (
            <Button
              color={BUTTON.deActivate.color}
              size={BUTTON.deActivate.size}
              variant={BUTTON.deActivate.variant}
            >
              {BUTTON.deActivate.label}
            </Button>
          ) : (
            <Button
              size={BUTTON.activate.size}
              variant={BUTTON.activate.variant}
            >
              {BUTTON.activate.label}
            </Button>
          )}
        </div>
      </div>
      <div className={classes.featureContainer}>
        <div className={classes.toolbarItem}>
          <DirectionsCarIcon color={smallCarIconColor} fontSize="small" />
          <DirectionsCarIcon color={mediumCarIconColor} />
          <DirectionsCarIcon color={largeCarIconColor} fontSize="large" />
        </div>
        <div className={classes.toolbarItem}>
          <AccessibleIcon color={disabilityIconColor} />
        </div>
        <div className={classes.toolbarItem}>
          <EvStationIcon color={chargerIconColor} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
