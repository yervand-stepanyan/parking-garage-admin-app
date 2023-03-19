import React from 'react';

import { SpotItem } from './component';
import { SpotListProps } from './models';

const SpotList: React.FC<SpotListProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <SpotItem
          active={item.active}
          features={item.features}
          id={item.id}
          key={item.id}
          title={item.title}
        />
      ))}
    </>
  );
};

export default SpotList;
