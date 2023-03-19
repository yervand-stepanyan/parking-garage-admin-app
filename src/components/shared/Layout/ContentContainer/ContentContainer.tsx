import React from 'react';

import { useStyles } from './ContentContainer.style';
import { ContentContainerProps } from './models';

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.contentContainer}>{children}</div>;
};

export default ContentContainer;
