import React from 'react';

import { ContentContainer } from 'src/components/shared';
import { MainLayout } from 'src/layouts';
import { PARKING_DATA } from 'src/globals/data';

import { FloorList } from './components';

const Main: React.FC = () => {
  return (
    <MainLayout>
      <ContentContainer>
        <FloorList items={PARKING_DATA} />
      </ContentContainer>
    </MainLayout>
  );
};

export default Main;
