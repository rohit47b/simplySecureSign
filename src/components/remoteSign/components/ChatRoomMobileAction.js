import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

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
});


class ChatRoomMobileAction extends PureComponent {
    state = {        
    }
   
    render() {
        const { classes } = this.props;   

        return (
            <Grid container justify="space-evenly" alignItems="center">
                <Avatar className={classes.avatar}>
                    <FolderIcon />
                </Avatar>
                <Avatar className={classes.pinkAvatar}>
                    <PageviewIcon />
                </Avatar>
                <Avatar className={classes.greenAvatar}>
                    <AssignmentIcon />
                </Avatar>
                <Avatar className={classes.greenAvatar}>
                    <AssignmentIcon />
                </Avatar>
            </Grid>
        )
    }
}

ChatRoomMobileAction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatRoomMobileAction)
