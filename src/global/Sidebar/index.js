import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import HelpOutline from '@material-ui/icons/HelpOutline';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Icon from '@material-ui/core/Icon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import history from 'customHistory'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F5F5F5",
    borderRight: "none"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    minHeight: "55px"
  }
});

class Sidebar extends PureComponent {
  render() {
    const { classes, isOpen, onCloseToggleDrawer } = this.props;
    return (
      <div className={isOpen === true ? classes.root + " sidebar open" : classes.root + " sidebar"}>
        <CssBaseline />
        <Drawer
          className={classes.drawer + " sidebar-drawer"}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={isOpen} onClose={onCloseToggleDrawer}
        >
          <div className={classes.toolbar} />
          <List className="sidebar-menu">
            <ListItem onClick={() => history.push('/app/notary/closing-room')} button className="menu-item active">
              <ListItemIcon className="menu-icon"><InsertDriveFile /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Closing Room"} />
            </ListItem>
            <ListItem onClick={() => history.push('/app/notary/options')} button className="menu-item">
              <ListItemIcon className="menu-icon"> <Icon>settings</Icon></ListItemIcon>
              <ListItemText className="menu-title" primary={"Options"} />
            </ListItem>
            <hr className="mr0" />
            <ListItem onClick={() => history.push('/app/notary/profile-settings')} button className="menu-item">
              <ListItemIcon className="menu-icon"><PermIdentity /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Profile Settings"} />
            </ListItem>
            <ListItem onClick={() => history.push('/app/notary/closing-room/chat')} button className="menu-item">
              <ListItemIcon className="menu-icon"><i class="fa fa-comment-o" aria-hidden="true"></i></ListItemIcon>
              <ListItemText className="menu-title" primary={"Chat"} />
              <ListItemSecondaryAction className="chat-count">
                <div className="circle">2</div>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button className="menu-item">
              <ListItemIcon className="menu-icon"><HelpOutline /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Help"} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}


Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);