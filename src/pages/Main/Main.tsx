import React from 'react';

import { useStyles } from './Main.style';

const Main: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.main}>Main</div>;
};

export default Main;
