import React from 'react';

import Header from 'src/components/Header';

import { MainLayoutProps } from './models';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
