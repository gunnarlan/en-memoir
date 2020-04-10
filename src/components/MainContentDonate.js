import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    position: "absolute",
    width: "216px",
    height: "42px",
    left: "5.7%",
    top: "19.2px",    
    fontfamily: "Roboto",
    fontstyle: "normal",
    fontweight: "bold",
    fontsize: "36px",
    lineheight: "42px",
    color: "#6D6D6D",  
    background: "yellow",
  },
  popup: {
    position: "absolute",
    width: "57%",
    height: "78%",
    left: "23%",
    top: "18%",
    background: "white",
    border: "1px solid #E5E5E5",
    boxsizing: "border-box",
    borderradius: "10px",
  },
  fullWidth: {
    width: "100%",
    height: "100%",
    background: "black",
  },
  box: {
  position: "absolute",
  width: "100%",
  height: "40%",
  left: "0px",
  top: "0px",
  background: "blue",
  border: "1px solid #C4C4C4",
  boxsizing: "border-box",
  borderradius: "10px",
  }

}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.fullWidth}> 
      <div className={classes.popup}> 
      <div className={classes.title}>
      <Typography variant="h4">Donation Box</Typography>
      </div>
      <div className={classes.popup}>
        <Typography variant="h4">1. Welcome to the Donation Box for Alfredo Garcia's Family</Typography>
      
              <Grid container justify="center" alignItems="center">
        </Grid>
        <Typography paragraph>
        Make a discretionary donation to support the family carrying with the funeral and memorial expenses.
        </Typography>

        </div>
      </div>

      </div>
    </main>
  );
}

export default MainContent;