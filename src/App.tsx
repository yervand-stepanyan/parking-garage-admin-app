import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Main from 'src/pages/Main';

import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
