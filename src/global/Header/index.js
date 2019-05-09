import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';


import APPCONFIG from 'constants/Config'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  minHeight:{
    minHeight:"55px"
  }
})

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left:false
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes,toggleDrawerOpen} = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar + " header"}>
          <Toolbar className={classes.minHeight}>
          <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawerOpen}
              className="navbar-collapse"
              style={{cursor:"pointer"}}
            >
              <MenuIcon />
            </IconButton>
         
            <Typography component="div" className={classes.grow + " logo"}>
                <img alt="logo" src={APPCONFIG.company_logo_path}/>
            </Typography>
            {auth && (
              <div>
                <Icon  aria-haspopup="true"  aria-owns={open ? 'menu-appbar' : undefined} className="icon-account" onClick={this.handleMenu}>person_outline</Icon>
                {/* <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton> */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);