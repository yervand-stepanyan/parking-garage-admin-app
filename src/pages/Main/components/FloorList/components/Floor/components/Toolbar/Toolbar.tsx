import React from 'react';

import { Filters } from './components';
import { FILTERS } from './constants';

const Toolbar: React.FC = () => {
  return (
    <>
      <Filters filters={FILTERS} />
    </>
  );
};

export default Toolbar;
