import React from 'react'
import { Route } from 'react-router-dom'

import SidebarLayout from './SidebarLayout'
import {requireAuth } from 'client'

const SidebarMainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={requireAuth() ? matchProps => (
      <SidebarLayout>
        <Component {...matchProps} />
      </SidebarLayout>
    ) : ''} />
  )
};

export default SidebarMainRoute;