import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
//<<<<<<< Updated upstream
import {Link } from "react-router-dom";
import { Button,List, ListItemText } from '@material-ui/core';
///=======
import MainContentDonate from "../components/MainContentDonate";
//>>>>>>> Stashed changes

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  filled_dark: {
    backgroundColor: theme.palette.background.default,
    height: "600px",
    maxWidth: "100%",
  },
  title_group: {
    width: "439px",
  },
  title: {
    width: "439px",
    padding: theme.spacing(0),
  },
  content: {
    width: "439px",
    padding: theme.spacing(0),
  },
  divb: {
    width: "439px",
    padding: theme.spacing(0),
    position: "absolute",
    right: "40px",
    height: "10px",
  },
  fullWidth: {
    width: "100%",
    height: "100%",
  },
  fullWidthInnerDark: {
    height: "40vh",
    backgroundColor: theme.palette.background.default,
    paddingLeft: "10vw",
    paddingTop: "15vh",
  },
  fullWidthInnerLight: {
    height: "40vh",
    backgroundColor: theme.palette.background.paper,
    paddingLeft: "10vw",
    paddingTop: "5vh",
  },
  fullWidthInnerMid: {
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    alignSelf: "center",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.divb} style={{position: 'fixed'}}>
          <Link to="/LoginPage">
          <Button color="primary" >
          Host A Memorial
        </Button>
        </Link>
      <Button color="primary" href="./LoginPageRSVP">
          Join A Memorial
        </Button>
      </div>
      <div className={classes.fullWidthInnerDark}>
        <div className={classes.title}>
          <Typography variant="h4">
            Host A Digital Memorial For Your Loved Ones
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph color="textSecondary">
          Celebrate the life of those who have passed with your family and friends.
          </Typography>
        </div>
      </div>
      <div className={classes.fullWidthInnerLight}>
        <div className={classes.title}>
          <Typography variant="h4">Digital Celebration of Life</Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph color="textSecondary">
          Celebrate life, alleviate grief, and bring closure to your family through
           our virtual memorial services.
           </Typography>
           <Typography paragraph color="textSecondary">           En Memoir utilizes high speed video conferencing software
            and personalized curated content to help you and the loved ones
            of the deceased hold a meaningful service, wherever you are.
          </Typography>
        </div>
      </div>
      <div className={classes.fullWidthInnerLight}>
        <div className={classes.divb}>
          <Typography paragraph color="textSecondary">
          The Virtual Memorial Room lets you set up a virtual obituary
           of your loved one and it includes interactive features like:
          </Typography>

        </div>
      </div>
      <div className={classes.fullWidthInnerMid}>
        <div className={classes.title}>
          <Typography variant="h4" align="center">
            Tell Their Story
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph color="textSecondary" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat
          </Typography>
        </div>
      </div>
      <div className={classes.fullWidthInnerLight}>
        <div className={classes.title}>
          <Typography variant="h4">Playlists</Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat
          </Typography>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
