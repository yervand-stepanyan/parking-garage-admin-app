import React from 'react';

import { Typography } from 'src/components/shared';

import { SpotItemProps } from './models';
import { Toolbar } from './components';
import { useStyles } from './SpotItem.style';

const SpotItem: React.FC<SpotItemProps> = ({ active, features, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.spotItemContainer}>
      <div>
        <Typography label={title} />
      </div>
      <div className={classes.toolbarWrapper}>
        <Toolbar
          hasCharger={features.evCharger}
          hasDisability={features.disability}
          isActive={active}
          isSmall={features.vehicleTypes.small}
          isMedium={features.vehicleTypes.medium}
          isLarge={features.vehicleTypes.large}
        />
      </div>
    </div>
  );
};

export default SpotItem;
