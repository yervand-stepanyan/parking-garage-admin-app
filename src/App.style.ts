import { makeStyles } from 'src/components/shared';

export const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    cursor: 'default',
    minHeight: '100vh',
    width: '100%',
  },
}));
