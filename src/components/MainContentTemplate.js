import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
    },
    buttons: {
        margin: theme.spacing(10),
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function MainContentTemplate(props) {
    const classes = useStyles();

    return (
        <main className={classes.fullWidth}>
            <div className={classes.title}>
                <Typography variant="h4">{props.title}</Typography>
            </div>
            <div className={classes.content}>
                {props.content}
            </div>
        </main>
    );
}

export default MainContentTemplate;