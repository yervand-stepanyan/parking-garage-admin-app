import { makeStyles, Theme } from 'src/components/shared';

export const useStyles = makeStyles((theme: Theme) => ({
  success: {
    color: theme.palette.success.main,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
}));
