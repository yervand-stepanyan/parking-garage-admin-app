import { makeStyles, Theme } from 'src/components/shared';

export const useStyles = makeStyles((theme: Theme) => ({
  toolbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusAndButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusWrapper: {
    minWidth: '60px',
  },
  featureContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbarItem: {
    marginLeft: theme.custom.spacing.base,
  },
}));
