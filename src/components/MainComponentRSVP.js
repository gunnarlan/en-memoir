import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import LayoutTextFields from "../components/LayoutTextFields";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
    height: "100%",
  },
  bigAvatar: {
    margin: 30,
    width: 160,
    height: 160,
  },
  buttons: {
    margin: theme.spacing(10),
    display: "flex",
    justifyContent:"flex-end"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function MainContentRSVP() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
    <div>
        Hello
    </div>
    </main>
  );
}

export default MainContentRSVP;