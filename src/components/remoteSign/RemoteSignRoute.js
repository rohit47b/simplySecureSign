/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import NotFound from 'components/404';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SigningRoom from './components/signingRoom'
import Welcome from './components/welcome';
import RemoteSignInMainRoute from './RemoteSignInMainRoute'

 export function RemoteSignRoute(url){
    return (
        <Switch>
            <RemoteSignInMainRoute exact path={`${url}/signing-room`} component={SigningRoom} />
            <RemoteSignInMainRoute path={`${url}/welcome`} component={Welcome} />
          <Route component={NotFound} />
        </Switch>
    )
};