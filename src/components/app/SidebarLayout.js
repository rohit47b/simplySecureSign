import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import Header from 'global/Header'
import Sidebar from "global/Sidebar"
import Loader from 'global/Loader'
import history from 'customHistory'
const styles = theme => ({
  root: {
      display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
  },
  content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
  },
  toolbar: {
    minHeight:"55px"
  }
});
class SidebarLayout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

   state = {
    left: false
  };

   toggleDrawer = () => () => {
    this.setState(prevState => ({
      left: !prevState.left
    }));

  }

  render() {
    const {children,classes}=this.props
    const{left} =this.state
    console.log(' left 00000000000000000000000 ',left)
    return (
      <div className="section-app">
        <Header toggleDrawerOpen={this.toggleDrawer()} />
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
          <div className={classes.root + " page-content"}>
                <Sidebar isOpen={left} onCloseToggleDrawer={this.toggleDrawer()} />
                <main className={classes.content + " main-content"}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

SidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(SidebarLayout)