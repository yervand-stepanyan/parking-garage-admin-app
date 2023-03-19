import React from 'react';

import { AppBar, Toolbar, Typography } from 'src/components/shared';
import { TYPOGRAPHY } from 'src/globals/constants';

import { APPBAR, HEADER } from './constants';

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position={APPBAR.position}>
        <Toolbar>
          <Typography variant={TYPOGRAPHY.variant.h6} label={HEADER.title} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
