import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderRSVP from '../components/HeaderRSVP';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import MainContentRSVP from '../components/MainComponentRSVP';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function RSVPPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <HeaderRSVP />
            <MainContentRSVP />
        </div>
    );
}

export default RSVPPage;