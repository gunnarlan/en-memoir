import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import TextField from '@material-ui/core/TextField';
import MainContentDonate from "../components/MainContentDonate";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function Donate() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <MainContentDonate />
                    </div>
    );
}

export default Donate;