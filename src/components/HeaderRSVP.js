import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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
    textAlign: "center",
    flexGrow: 1,
    marginLeft: 10,
  },
  content: {
    marginLeft:10,
    textAlign: "center",
  },
  footer: {
    marginLeft: 20,
    fontSize: 12,
  },
  topbox: {
    width: "100%",
    height: "20vh",
    background: "#C4C4C4",
  },
  sidebox: { 
    marginLeft: "5%",
    marginTop: "10px",
    width: "35%",
    backgroundColor:theme.palette.background.default
  },
  avatar: {
    width: "200px",
    height: "200px",
    border: "3px solid #FFFFFF",
    left: "50%",
    top: "50%",
  },
  flexcontainer: {
    width:"100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  }
}));

function HeaderRSVP() {
  const classes = useStyles();
  return (
    <div className={classes.flexcontainer}>
    <div className={classes.topbox}>
      <Avatar  src="https://source.unsplash.com/WGOWWFEyD5Q" className=  {classes.avatar} />
      </div>
    <Card className={classes.sidebox}>
        <CardContent>
        <Typography variant="h6" className={classes.content} color="textSecondary">
        In Celebration of the Life of
        </Typography>
        <Typography variant="h3" className={classes.title} color="textSecondary">
        Alfredo Garcia
        </Typography>
        <Typography variant="h6" className={classes.content} color="textSecondary">
        12-10-1922 to 17-04-2012
        </Typography>
        </CardContent>
      </Card>
     </div>
  );
}

export default HeaderRSVP;
