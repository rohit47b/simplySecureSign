import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Avatar from '@material-ui/core/Avatar';

const styles = {
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

class ChatRoomSideBar extends PureComponent {

    state = {
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
        const { classes, isOpen, onCloseToggleDrawer } = this.props;
        const { dense, secondary } = this.state;
        return (
            <List dense={dense}>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar blue-circle">
                        <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="AB Document"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                            KS
                </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="Kendall Sample"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <div className="count">2</div>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                            AJ
                </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="Ajay Soni"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="Document Name"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                            JS
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="John Smith"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                            RT
                </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="Rebecca Thomas"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="list-item">
                    <ListItemAvatar className="list-avatar">
                        <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="title"
                        primary="Document Name"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                        <span>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        )
    }
}


ChatRoomSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatRoomSideBar);