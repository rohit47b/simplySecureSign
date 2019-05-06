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

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
});

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
                    <span className="card-title">
                        Chat Room
                        {/* <HelpIcon /> */}
                    </span>
                </Typography>
                {/* <Calendar/> */}
                <Grid container className="chat-room">
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} className="left-chat-bar">
                        <List dense={dense}>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className=""
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        KS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        JS
                                            </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} className="right-chat-container pdB0">
                        {/* <RightSideBar isStart={false} /> */}
                    </Grid>
                </Grid>
                {/* <NewClosingPackageDialog isOpen={open} handleCloseDialog={this.handleCloseDialog}/> */}
            </Card>
        )
    }
}

export default Chat
