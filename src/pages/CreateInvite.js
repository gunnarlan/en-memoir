import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import MainContentTemplate from '../components/MainContentTemplate';
import LayoutTextFields from '../components/LayoutTextFields';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function CreateInvite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideMenu name="Create Invite" />
            <MainContentTemplate title="Create Invite" content={<LayoutTextFields />}/>
        </div>
    );
}

export default CreateInvite;