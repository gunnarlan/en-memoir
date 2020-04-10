import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import LayoutTextFields from "../components/LayoutTextFields";

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
  }
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.title}>
        <Typography variant="h4">Create obituary</Typography>
      </div>
      <div className={classes.content}>
        <Grid container justify="center" alignItems="center">
          <Avatar src="/broken-image.jpg" className={classes.bigAvatar} />
        </Grid>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
        <LayoutTextFields />
      </div>
      <button>
        Submit
      </button>
    </main>
  );
}

export default MainContent;