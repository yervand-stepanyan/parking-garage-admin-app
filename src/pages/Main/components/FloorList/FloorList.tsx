import React from 'react';

import { Floor } from './components';
import { FloorListProps } from './models';

const FloorList: React.FC<FloorListProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <Floor key={item.id} spotList={item.spots} title={item.title} />
      ))}
    </>
  );
};

export default FloorList;
