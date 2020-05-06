import React, { useState } from 'react'

import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuItem from '@material-ui/core/MenuItem';

import './styles.css'
const User = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = e => {
        setShowMenu(e.currentTarget);
        console.log(showMenu)
    };

    const handleClose = () => {
        setShowMenu(null);
    };



    const classes = useStyles();
    return (
        <div id="Home-root">

            <AppBar position="static">
                <Toolbar>
                    <SwipeableDrawer
                        anchor={"left"}
                        open={showMenu}
                        onClose={() => {
                            setShowMenu(false);
                        }}
                    >
                        <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
                        <MenuItem onClick={handleClose}> Chat Room</MenuItem>
                        <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
      </SwipeableDrawer>
                    <IconButton onClick={() => setShowMenu(!showMenu)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        User's Profile
          </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>



            <Grid container spacing={2}
                direction="row"
                alignItems="center"
                justify="center">

                <Grid
                    item xs={12}
                    id="Home-Profile-Card">
                    <Card color="primary" >
                        <CardHeader

                            avatar={
                                <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />
                            }

                            title="Username"
                            subheader="about me"
                        />


                        <CardContent>
                            <Typography variant="body2" component="p">
                                I took a pill in Ibiza LOLz chat me
                    </Typography>

                        </CardContent>
                    </Card>

                </Grid>


            </Grid>


        </div>
    )
}

export default User
{/* <Card color="primary" id="Home-Profile-Card">
                <CardHeader
              
                    avatar={
                        <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />
                    }

                    title="Username"
                    subheader="about me"
                />  
              

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        I took a pill in Ibiza LOLz chat me
                    </Typography>
                </CardContent>
            </Card> */}
