import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import SongsContent from "../components/SongsContent";
import {Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function SongsPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SideMenu />
            <SongsContent />
        </div>
    );
}

export default SongsPage;
