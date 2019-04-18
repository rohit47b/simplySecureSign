import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import Header from 'global/Header'
// import Sidebar from 'global/Sidebar'
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
class Layout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

  render() {
    const {children,classes}=this.props
    return (
      <div className="section-app">
        <Header />
        <div className={classes.toolbar} />
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
            {children}
            {/* {isProgress && <Loader />} */}
          </div>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Layout)