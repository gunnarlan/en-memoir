import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.default
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 12,
  },
}));

function HeaderRSVP() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      Hello
    </AppBar>
  );
}

export default HeaderRSVP;
