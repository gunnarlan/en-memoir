import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Lens from '@material-ui/icons/Lens';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp, AccountCircle } from '@material-ui/icons';
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(5)
  },
  bullet: {
    display: "inline-block",
    transform: "scale(2)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: theme.spacing(3)
  },
}));

function SideMenuSongs(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Drawer
        open={true}
        variant='permanent'
        anchor='left'
        className={classes.drawer}
        classes={{
        paper: classes.drawerPaper,
        }}
        >

        <List>
        {['Profile', 'Songs', 'Sign Out'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                    {index % 3 === 2 ? <ExitToApp /> : <AccountCircle />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        </Drawer>
            );
        }
        
export default SideMenuSongs;