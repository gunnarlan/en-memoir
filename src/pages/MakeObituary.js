import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function MakeObituary() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SideMenu />
            <MainContent />
        </div>
    );
}

export default MakeObituary;