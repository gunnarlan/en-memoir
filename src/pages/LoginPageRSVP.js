import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core/styles';
import MainComponentRSVPLogin from '../components/MainComponentRSVPLogin';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function LoginPageRSVP() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <MainComponentRSVPLogin />
        </div>
    );
}

export default LoginPageRSVP;