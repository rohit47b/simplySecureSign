import React from 'react'
import { Route } from 'react-router-dom'

import RemoteSignInLayout from './RemoteSignInLayout'
import {requireAuth } from 'client'

const RemoteSignInMainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={requireAuth() ? matchProps => (
      <RemoteSignInLayout>
        <Component {...matchProps} />
      </RemoteSignInLayout>
    ) : ''} />
  )
};

export default RemoteSignInMainRoute;