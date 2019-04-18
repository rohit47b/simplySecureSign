/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import React from 'react'

import { Route, Switch } from 'react-router-dom'

import SidebarMainRoute from 'components/app/SidebarMainRoute'
import NotFound from 'components/404'
import ClosingRoom from './components/ClosingRoom'
import Welcome from './components/Welcome'
import Options from 'components/app/components/options'
import ProfileSettings from 'components/app/components/profileSettings'

 export function ClosingRoomWizardRoute(url){
    return (
        <Switch>
            <SidebarMainRoute exact path={`${url}/closing-room`} component={ClosingRoom} />
            <SidebarMainRoute exact path={`${url}/closing-room/welcome`} component={Welcome} />
            
         {/* <SidebarMainRoute exact path={`${url}/options`} component={Options} />
         <SidebarMainRoute exact path={`${url}/profile-settings`}  component={ProfileSettings} /> */}
            <Route component={NotFound} />
        </Switch>
    )
};