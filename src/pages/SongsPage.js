import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import SongsContent from "../components/SongsContent";
import {Link } from "react-router-dom";
import SideMenuSongs from "../components/SideMenuSongs";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function SongsPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SideMenuSongs />
            <SongsContent />
        </div>
    );
}

export default SongsPage;
