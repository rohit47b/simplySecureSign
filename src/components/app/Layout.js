import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Header from 'global/Header'
// import Sidebar from 'global/Sidebar'
import Loader from 'global/Loader'
import history from 'customHistory'

class Layout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

  render() {
    const {children}=this.props
    return (
      <div>
        <Header />
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

export default Layout