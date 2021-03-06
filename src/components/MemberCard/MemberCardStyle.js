import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    maxHeight: 350,
    borderLeft: `10px solid ${theme.palette.primary.dark}`
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 14
  },
  mb: {
    marginBottom: '8px'
  },
  cardmargin: {
    marginBottom: '25px'
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    alignSelf: 'center',
    backgroundColor: theme.palette.primary.dark
  },
  icon: {
    // marginTop: '7px',
    marginLeft: '140px'
  }
}));

export default useStyles;
