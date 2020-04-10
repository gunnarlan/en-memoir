import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import RadioButtonsDonate from "./RadioButtonsdonate";
import { Link } from "react-router-dom";
import { fade } from "@material-ui/core";
import Color from 'color';


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
  },
  popup: {
    position: "absolute",
    width: "60%",
    height: "78%",
    left: "20%",
    top: "18%",
    backgroundColor: "lightgrey",
    border: "1px solid black",
    borderRadius: "25px"
  },
  fullWidth: {
    width: "100%",
    height: "100%",
    background: "lightblack",
  },
  box: {
  position: "absolute",
  width: "60%",
  height: "70%",
  left: "20%",
  top: "18%",
  background: "lightblue",
  border: "1px solid #C4C4C4",
  boxsizing: "border-box",
  borderRadius: "15px"
  },

back: {
position: "absolute",
width: "100%",
height: "100%",
background: "black",
opacity: "100%",
}

}));

function MainContent() {
  const classes = useStyles();

  return (

    <main className={classes.back}>
      <div className={classes.popup}> 
      <div className={classes.title}>
      <Typography variant="h4">Donation Box</Typography>
      </div>
      <div className={classes.box}>
        <Typography variant="h4">1. Welcome to the Donation Box for Alfredo Garcia's Family</Typography>
      
        <Grid container justify="left" alignItems="center">
        <Typography paragraph>
        Make a discretionary donation to support the family carrying with the funeral and memorial expenses.
        </Typography>
        <RadioButtonsDonate />
                <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="url"
              label="Enter other Amount"
              name="Enter other Amount"
              autoFocus
            />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/Write a note"
            >
              Continue
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/Payment"
            >
              2. Write a note
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/Review and Donate"
            >
              2. Payment
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/Write a note"
            >
              3. Review and Donate
            </Button>
            </Grid>
      </div>


      </div>
    </main>
  );
}

export default MainContent;