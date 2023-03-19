import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Main from 'src/pages/Main';

import { theme } from './theme';
import { useStyles } from './App.style';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
