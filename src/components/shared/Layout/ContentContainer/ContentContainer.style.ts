import { makeStyles, Theme } from 'src/components/shared';

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    boxSizing: 'border-box',
    padding: `${theme.custom.spacing.large} ${theme.custom.spacing.x4Large}`,
  },
}));

export default useStyles;
export { useStyles };
