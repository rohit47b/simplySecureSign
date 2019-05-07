import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import HelpIcon from '@material-ui/icons/Help'
import ChatBox from '../ChatBox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import RightSideBar from '../../../../../remoteSign/components/RightSideBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ChatRoomSideBar from '../../../../../../hoc/ChatRoomSideBar';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
        width: "90%"
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

class Chat extends PureComponent {
    state = {
        open: false,
        dense: false,
        secondary: false,
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }


    render() {
        const { open, dense, secondary } = this.state;
        const { classes } = this.props;
        return (
            <Card className="card">
                <Typography className="card-header" component="div">
                    <span className="card-title pdT6 pdB6">
                        Chat Room
                        {/* <HelpIcon /> */}
                    </span>
                </Typography>
                {/* <Calendar/> */}
                <Grid container className="chat-room">
                    <Grid item xs={12} sm={4} md={4} lg={3} xl={2} className="left-chat-bar">
                        <div className="search-box">
                            <div>
                                <i className="fa fa-search search-ic" aria-hidden="true"></i>
                                <InputBase className={classes.input} placeholder="Search" />
                            </div>
                        </div>
                        <ChatRoomSideBar />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={9} xl={10} className="right-chat-container pdB0">
                        <div className="right-inner-chat-container">
                            <List>
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        KS
                                </Avatar>
                                    <ListItemText className="chat-item-header-text" primary={
                                        <React.Fragment>
                                            <Typography>
                                                Kendall Sample
                                        </Typography>
                                            <Typography className="fnt-12">
                                                Today, 4.30
                                        </Typography>
                                        </React.Fragment>
                                    } secondary={
                                        <React.Fragment>
                                            <Typography className="sub-header-text" color="textPrimary">
                                                <strong>Test message on chat</strong>
                                            </Typography>
                                        </React.Fragment>
                                    } />
                                </ListItem>
                                <Divider className="chat-divider" />
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar lt-red-circle">
                                        JH
                                </Avatar>
                                    <ListItemText className="chat-item-header-text" primary={
                                        <React.Fragment>
                                            <Typography>
                                                John Hancock
                                        </Typography>
                                            <Typography className="fnt-12">
                                                Today, 4.29
                                        </Typography>
                                        </React.Fragment>
                                    } secondary={
                                        <React.Fragment>
                                            <Typography className="sub-header-text" color="textPrimary">
                                                <strong>Mr Kendall,</strong><br></br>
                                                <strong>Welcome to Closing Document</strong>
                                            </Typography>
                                        </React.Fragment>
                                    } />
                                </ListItem>
                            </List>
                            <Divider className="input-border" />
                            <div className="chat-input d-flex align-items-center" elevation={1}>
                                <i className="fa fa-smile-o smile-ic" aria-hidden="true"></i>
                                <InputBase className="flex-grow-1 fnt-14" placeholder="Type your message" />
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* <NewClosingPackageDialog isOpen={open} handleCloseDialog={this.handleCloseDialog}/> */}
            </Card>
        )
    }
}

export default withStyles(styles)(Chat)
