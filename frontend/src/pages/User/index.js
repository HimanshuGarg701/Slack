import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
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
import Popover from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
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
 {/* <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className= "Modal-root"
                            open={showEditUsername}
                            onClose={handleEditUsernameClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}>
                            <Fade in={showEditUsername}>
                                <Grid item xs={6} >
                                <TextField
                                    //TODO error 
                                    id="filled-error-helper-text"
                                    label="Edit Username"
                                    defaultValue={username}
                                    helperText="Enter desired username."
                                    variant="filled"
                                />
                            </Grid>
                            </Fade>
                        </Modal> */}


                        {/* <Backdrop className="backdrop-root" open={showEditUsername} onClick={handleClose}
                         style={{zIndex: theme.zIndex.drawer + 1, width: thm,
                                 color: '#fff'}}>
                            <Grid item xs={6} >
                                <TextField
                                    //TODO error 
                                    id="filled-error-helper-text"
                                    label="Edit Username"
                                    defaultValue={username}
                                    helperText="Enter desired username."
                                    variant="filled"
                                />
                            </Grid>
                        </Backdrop> */}

{/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                                Open Popover
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handlePopperClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}>
                                <Typography className="{classes.typography}">The content of the Popover.</Typography>
                            </Popover> */}


{/* <AppBar position="static">
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
            <IconButton onClick={() => setShowMenu(!showMenu)} edge="start" className="icon-button" color="inherit" aria-label="menu">
                <MenuIcon />

            </IconButton>
            <Typography variant="h6" className="header-title">
                User's Profile
  </Typography>
            <Button color="inherit">Logout</Button>
        </Toolbar>
    </AppBar>
 */}


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






            // <div className="user-rooto-container">               
            // <Card color="primary" className="card-root">
            //             <CardHeader className ="cardHeader-root-myclass"

            //                 avatar={
            //                     <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />
            //                 }

            //                 title="Username"
            //                 subheader="about me"
            //             />


            //             <CardContent>
            //                 <Typography variant="body2" component="p">
            //                    Hello World
            //         </Typography>

            //             </CardContent>
            //         </Card> 

            // <Box color="text.primary" className="input-box-root">
            //     <div className="input-fields-container">
                    // <TextField
                    //     //TODO error 
                    //     id="filled-error-helper-text"
                    //     label="Edit Username"
                    //     defaultValue= {username}
                    //     helperText="Enter desired username."
                    //     variant="filled"
                    // />
            //         <TextField
            //             //TODO error 
            //             id="filled-error-helper-text"
            //             label="Edit Username"
            //             defaultValue="default Username"
            //             helperText="Enter desired username."
            //             variant="filled"
            //         />
            //         <TextField
            //             //TODO error 
            //             id="filled-error-helper-text"
            //             label="change Password"
            //             defaultValue="default Username"
            //             helperText="Enter desired username."
            //             variant="filled"
            //         />
            //     </div>
            // </Box>
            // </div>






        //     <div className="Grid-container-Root">
        //     <Grid container spacing={2}
        //         direction="row"
        //         alignItems="center"
        //         justify="center"
        //     >

        //         <Grid item xs={12}>

        //             <AppBar position="static">
        //                 <Toolbar>
        //                     <SwipeableDrawer
        //                         anchor={"left"}
        //                         open={showMenu}
        //                         onClose={() => {
        //                             setShowMenu(false);
        //                         }}>

        //                         <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
        //                         <MenuItem onClick={handleClose}> Chat Room</MenuItem>
        //                         <MenuItem onClick={handleClose}> Edit Profile</MenuItem>
        //                     </SwipeableDrawer>
        //                     <IconButton onClick={() => setShowMenu(!showMenu)} edge="start" className="icon-button" color="inherit" aria-label="menu">
        //                         <MenuIcon />

        //                     </IconButton>
        //                     <Typography variant="h6" className="header-title">
        //                         User's Profile
        //                     </Typography>
        //                     <Button color="inherit">Logout</Button>
        //                 </Toolbar>
        //             </AppBar>


        //         </Grid>
        //         {/* <div className="user-info-root"> */}
        //         <Grid item xs={6}>
        //                 {username}
        //             <Paper classname="profile-paper" elevation={3} >
        //                 <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />

        //             </Paper>

        //         </Grid>


        //         {/* //TODO implement edit profile when user info is set */}
        //         {/* <Grid item xs={6}>

        //                 <Paper elevation={3} >User Profile Stuff</Paper>

        //             </Grid> */}
        //         {/* </div> */}


        //         {/* <Grid  item xs={6}>

        //             <Paper className="editUser-profile-root">User Profile Stuff</Paper>



        //         </Grid> */}


        //     </Grid>

        // </div>


