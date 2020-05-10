import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './styles.css'
const User = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [username, setUsername] = useState('Mjcanson');
    const [password, SetPassword] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [showEditUsername, setShowEditUsername] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const theme = useTheme();

    const handleEditUsernameClick = e => {
        setShowEditUsername(true);
    };

    const handleshowChangePassword = e => {
        setShowChangePassword(true);
    };

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    };
    const handlePopperClose = () => {
        setAnchorEl(null);
    };


    const handleClose = () => {
        setShowMenu(null);
    };
    const handleEditUsernameClose = () => {
        setShowEditUsername(false);
    };

    const handleshowChangePasswordClose = () => {
        setShowChangePassword(false);
    };



    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="Home-root">
            <div className="header-root">
                <AppBar position="static">
                    <Toolbar>
                        {/* <SwipeableDrawer
                            anchor={"left"}
                            // open={showMenu}
                            onClose={() => {
                                setShowMenu(false);
                            }}
                        >
                            <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
                            <MenuItem onClick={handleClose}> Chat Room</MenuItem>
                            <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
                        </SwipeableDrawer> */}
                        <IconButton onClick={() => setShowMenu(!showMenu)}
                            edge="start" className="icon-button" color="inherit" aria-label="menu">
                            <MenuIcon />

                        </IconButton>
                        <Typography variant="h6" className="header-title">
                            User's Profile
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>

            <div className="paper-root">
                <Paper color="blue" classname="profile-paper" elevation={5} >
                    <Grid container spacing={2}
                        direction="column"
                        alignItems="center"
                        justify="center">

                        <Grid item xs={4}>

                            <Typography variant="h6" className="header-title">
                                @{username}
                            </Typography>

                        </Grid>

                        <Grid item xs={2}>
                            <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />
                        </Grid>

                        <Grid item xs={4}>
                            <Button aria-describedby={id} variant="contained" color="primary" aria-haspopup="true" onClick={handleClick}>
                                Edit Profile
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handlePopperClose}

                            >
                                <MenuItem onClick={() => {
                                    handleClose();
                                    handleEditUsernameClick();
                                }}>Edit Username</MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    handleshowChangePassword();
                                }}>Change Password</MenuItem>

                            </Menu>

                        </Grid>

                        <Dialog open={showEditUsername} onClose={handleEditUsernameClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Edit Username</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Enter your Desired username
                                    </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="username"
                                    type="text"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleEditUsernameClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleEditUsernameClose} color="primary">
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog open={showChangePassword} onClose={handleshowChangePasswordClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please verify your old password before entering new password.
                                    </DialogContentText>
                                    <TextField
                                    // error= " "
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Enter old Password"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="new Password"
                                    type="text"
                                    fullWidth
                                />
                                     <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="verify new Password"
                                    type="text"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleshowChangePasswordClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleshowChangePasswordClose} color="primary">
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                       
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}

export default User



