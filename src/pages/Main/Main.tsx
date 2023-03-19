import React from 'react';

import { MainLayout } from 'src/layouts';
import { ContentContainer } from 'src/components/shared';

const Main: React.FC = () => {
  return (
    <MainLayout>
      <ContentContainer>Content</ContentContainer>
    </MainLayout>
  );
};

export default Main;
