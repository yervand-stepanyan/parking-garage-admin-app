import React from 'react';

import { ContentContainerProps } from './models';
import { useStyles } from './ContentContainer.style';

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.contentContainer}>{children}</div>;
};

export default ContentContainer;
