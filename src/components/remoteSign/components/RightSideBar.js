import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import history from 'customHistory';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AddIcon from '@material-ui/icons/AddCircle';

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    [theme.breakpoints.down('sm')]: {
        signClosingWizard: {
            padding: '20px',
        },
        rightSidebarContainer: {
            paddingTop: '0px',
        },
        heading: {
            marginBottom: '20%',
        }
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
    chip: {
        borderColor: "#0073cf !important",
    },
    addGroup : {
        minHeight: "320px",
        position: "relative",
    },
    cancelIcon: {
        display: "block",
        marginLeft: "auto",
        marginRight: "14px",
        marginTop: "10px",
        color: "#9e9d9d",
        fontSize: "20px",
    }
});


class RightSideBar extends PureComponent {
    state = {
        anchorEl: null,
        open: false,
        openDialog: false,
        openReDialog: false
    }
    handleStartClick = () => {
        history.push('/app/remote-sign/signing-room')
    }

    handleEndClick = () => {
        history.push('/app/remote-sign/welcome')
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            open: true
        });
        console.log('open popup');
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            open: false,
            openDialog: false,
            openReDialog: false
        });
        console.log('close popup');
    };

    // open add viewer dialog
    openAddViewerDialog = () => {
        this.setState({
            anchorEl: null,
            open: false,
            openDialog: true,
            openReDialog: false
        });
        console.log('Dialog open');
    };

    // open add viewer dialog
    openReInviteDialog = () => {
        this.setState({
            openDialog: false,
            openReDialog: true
        });
        console.log('Re Dialog open');
    };

    render() {
        const { classes, isStart } = this.props;
        const { open, anchorEl, openDialog, openReDialog } = this.state
        let button;

        console.log("is start ", isStart)
        if (isStart) {
            button = <Button onClick={this.handleStartClick} variant="contained" color="primary" className="width-100 square-btn btn-blue fnt-16">
                Start Closing
            </Button>
        } else {
            button = <Button onClick={this.handleEndClick} variant="raised" color="primary" className="width-100 square-btn btn-red fnt-16">
                End Closing
            </Button>
        }

        return (

            <div className={classes.rightSidebarContainer + " right-sidebar-container"}>
                {button}
                <Card className={classes.card + " custom-card box-left-shadow"}>
                    <CardHeader
                        action={
                            <span className="horiz-more-btn">
                                <i className="fa fa-ellipsis-h" onClick={this.handleClick} aria-owns={this.open ? 'simple-popper' : undefined}
                                    aria-haspopup="true" aria-hidden="true"></i>
                            </span>
                        }
                        title="Document Name"
                        className="card-header card-padding"
                    />
                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}                        
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className="add-viewer-popup popover_class"
                    >
                        <Typography onClick={this.openAddViewerDialog} className={classes.typography + " fnt-12"}><i className="fa fa-user-plus mrR7 fnt-13" aria-hidden="true"></i>Add Viewer</Typography>
                    </Popover>
                    <Dialog
                        open={openDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        fullWidth={true}
                        className="viewer-dialog-container"
                    >
                        <DialogTitle id="simple-dialog-title" className="viewer-dialog-header pdT12 pdB12">
                            <span className="flex-grow-1 fnt-14"><strong>Add Viewer</strong></span>
                            <i onClick={this.handleClose} className="fa fa-times-circle-o fnt-18" aria-hidden="true"></i>
                        </DialogTitle>
                        <DialogContent className="pd20">
                            <DialogContentText className="viewer-dialog-content">
                                <Typography component="p">Add Viewer Email address</Typography>
                            </DialogContentText>
                            <InputBase className={classes.input + " viewer-dialog-input fnt-12"} placeholder="Enter email address" />
                        </DialogContent>
                        <DialogActions className="viewer-dialog-action">
                            <Button onClick={this.openReInviteDialog} title="invite" variant="contained" color="primary" className="btn btn-common btn-blue mrL0">
                                Invite
                               </Button>
                            <Button onClick={this.handleClose} title="cancel" variant="contained" color="primary" className="btn btn-common btn-gray2">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={openReDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        fullWidth={true}
                        className="viewer-dialog-container"
                    >
                        <DialogTitle id="re-simple-dialog-title" className="viewer-dialog-header pdT12 pdB12">
                            <span className="flex-grow-1 fnt-14"><strong>Add Viewer</strong></span>
                            <i onClick={this.handleClose} className="fa fa-times-circle-o fnt-18" aria-hidden="true"></i>
                        </DialogTitle>
                        <DialogContent className="pd20">
                            <DialogContentText className="viewer-dialog-content">
                                <Typography component="p" className="fnt-14"><strong>Invitation Sent!</strong></Typography>
                                <Typography component="p" className="fnt-12 mrT15">Invitation has been sent to the viewer's email id.</Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions className="viewer-reinvite-dialog-action">
                            <Button onClick={this.openAddViewerDialog} title="invite" variant="contained" color="primary" className="btn btn-common btn-blue mrL0">
                                Re-Invite
                               </Button>
                            <Button onClick={this.handleClose} title="cancel" variant="contained" color="primary" className="btn btn-common btn-gray2">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div className="client-img-container">
                        <div className="action-btn mrT20 mrR15">
                            <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                            <span className="microphone mrT8"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                        </div>
                        <div className="client-row d-flex">
                            <div className="client-box1">
                                <img src="/assets/images/Image 19.png" alt="text" />
                                <Chip label="John Smith" className={classes.chip + " chip1"} />
                                <div className="client-action-btn">
                                    <span className="microphone"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                                    <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="client-box2">
                                <img src="/assets/images/Image 21.png" alt="text" />
                                <Chip label="Kendall Sample" className={classes.chip + " chip2"} />
                                <div className="client-action-btn">
                                    <span className="microphone"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                                    <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className={classes.card + " custom-card box-left-shadow"}>
                    <CardHeader
                        action={
                            <span className="horiz-more-btn">
                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </span>
                        }
                        title="Document Name"
                        className="card-header card-padding "
                    />
                    <Typography className="card-padding client-chat" style={{ display: "flex", alignItems: "center"}}>
                        <Chip
                            label="Group"
                            className={classes.chip}
                            color="primary"
                            variant="outlined"
                        />
                        <AddIcon style={{color: "#0073cf", marginLeft: "5px", cursor: "pointer"}} fontSize="large"/>
                    </Typography>
                    <List className="chat-container">
                        <ListItem>
                            <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                NA
                                </Avatar>
                            <ListItemText className="chat-item-header-text" primary={
                                <React.Fragment>
                                    <Typography>
                                        Notary
                                        </Typography>
                                    <Typography>
                                        3.40pm
                                        </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography className="sub-header-text" color="textPrimary">
                                        Welcome to the remote eSign wizard, this is chat screen
                                        </Typography>
                                </React.Fragment>
                            } />
                        </ListItem>
                        <Divider className="chat-list-divider" />
                        <ListItem>
                            <Avatar aria-label="Recipe" className="list-avatar brown-circle">
                                NA
                                </Avatar>
                            <ListItemText className="chat-item-header-text" primary={
                                <React.Fragment>
                                    <Typography>
                                        John Smith
                                        </Typography>
                                    <Typography>
                                        3.40pm
                                        </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography className="sub-header-text" color="textPrimary">
                                        I am connected here on chat.
                                        </Typography>
                                </React.Fragment>
                            } />
                        </ListItem>
                        <Divider className="chat-list-divider" />
                        <ListItem>
                            <Avatar aria-label="Recipe" className="list-avatar purple-circle">
                                NA
                                </Avatar>
                            <ListItemText className="chat-item-header-text" primary={
                                <React.Fragment>
                                    <Typography>
                                        Kendall Sample
                                        </Typography>
                                    <Typography>
                                        3.40pm
                                        </Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography className="sub-header-text" color="textPrimary">
                                        Hi Notary, Thank you for this awesome application to connect.
                                        </Typography>
                                </React.Fragment>
                            } />
                        </ListItem>
                        <Divider className="chat-container-bottom-divider" />
                    </List>
                    {/* <div className={classes.addGroup}>
                        <CancelIcon className={classes.cancelIcon}/>
                        <div className="bottom-text">
                        <Typography component="p">
                           Start one to one chat by entering person's name with @ sign below.
                        </Typography>
                        <Typography component="h5">
                           Example: @john type your message
                        </Typography>
                        </div>
                    </div> */}
                    <Paper className="msg-container d-flex align-items-center" elevation={1}>
                        <InputBase className={classes.input + " flex-grow-1 fnt-14"} placeholder="Type your message" />
                        <i className="fa fa-arrow-right" color="disabled" aria-hidden="true"></i>
                    </Paper>
                </Card>
            </div>
        )
    }
}

RightSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightSideBar)
