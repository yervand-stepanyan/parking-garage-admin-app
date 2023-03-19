import React from 'react';

import { Floor } from './components';
import { FloorListProps } from './models';

const FloorList: React.FC<FloorListProps> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Floor key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default FloorList;
