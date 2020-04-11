import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core/styles';
import MainContentLogin from '../components/MainContentLogin';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function LoginPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <MainContentLogin />
        </div>
    );
}

export default LoginPage;