import React from 'react';

import { ContentContainer } from 'src/components/shared';
import { MainLayout } from 'src/layouts';

const Main: React.FC = () => {
  return (
    <MainLayout>
      <ContentContainer>Content</ContentContainer>
    </MainLayout>
  );
};

export default Main;
