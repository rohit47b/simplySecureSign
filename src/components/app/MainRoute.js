import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './Layout'
import {requireAuth } from 'client'

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={requireAuth() ? matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    ) : ''} />
  )
};

export default MainRoute;