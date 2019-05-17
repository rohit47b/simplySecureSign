import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';


import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/weak-map';
import 'core-js/es/set';

import 'core-js/es/object/assign';
import 'core-js/es/promise';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router'

import MainRoute from 'components/app/MainRoute'
import SidebarMainRoute from 'components/app/SidebarMainRoute'
import NotFound from 'components/404'
import InternalServerError from 'components/500'
import EmailVerify from 'components/emailVerify'
import SignIn from 'components/signIn'
import NotarySignIn from 'components/notary/signIn'
import SignUpProductCode from 'components/notary/signUpProductCode'
import NotarySignUp from 'components/notary/signUp'
import ResetPassword from 'components/notary/resetPassword'
import CreateNewPassword from 'components/notary/createNewPassword'
import CreateNewPasswordMessage from 'components/notary/createNewPasswordMessage'
import Verify from 'components/notary/verify'


import Download from 'components/download'

import CreateNewPIN from 'components/createNewPIN'

import ForgotPassword from 'components/forgotPassword'

import ClosingPackageInvoice from 'components/app/components/closingPackageInvoice'
import Options from 'components/app/components/options'
import ProfileSettings from 'components/app/components/profileSettings'
import { ESignWizardRoute } from 'components/app/components/eSignWizard/ESignWizardRoute'
import ResendPIN from 'components/resendPIN'
import { RemoteSignRoute } from 'components/remoteSign/RemoteSignRoute';

import { ClosingRoomWizardRoute } from 'components/app/components/closingRoom/ClosingRoomWizardRoute'

import ViewerSignIn from 'components/viewer/signIn'
import Welcome from 'components/viewer/welcome'
import { ViewerSignRoute } from 'components/viewer/ViewerSignRoute';

import './style/app.scss'


const Main = () => {
    return <Switch>
        <Redirect from="/" exact to="/email-verification" />
        <Route path='/email-verification'
            render={() => (<EmailVerify />
            )}
        />
          
        <Route path='/sign-in' component={SignIn} />
        <Route path='/download' component={Download} />
        <Route path='/create-new-pin' component={CreateNewPIN} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/resend-pin' exact component={ResendPIN} />
        <Redirect from="/app/dashboard/"  exact to="/app/dashboard/home" />
        <Route
            path="/app/eSign-wizard/"
            render={({ match: { url } }) => (ESignWizardRoute(url)
            )}
        />
         <MainRoute exact path='/app/closing-package-invoice' component={ClosingPackageInvoice} />
       

         <Route path='/notary/sign-in' component={NotarySignIn} />
         <Route path='/notary/sign-up' component={NotarySignUp} />
         <Route path='/notary/registration' component={SignUpProductCode} />
         <Route path='/notary/reset-password' component={ResetPassword} />
         <Route path='/notary/new-password' component={CreateNewPassword} />
         <Route path='/notary/new-password-message' component={CreateNewPasswordMessage} />
         <Route path='/notary/verify' component={Verify} />
        
         <SidebarMainRoute exact path='/app/notary/options' component={Options} />
         <SidebarMainRoute exact path='/app/notary/profile-settings' component={ProfileSettings} />

         <Route path='/viewer/sign-in' component={ViewerSignIn} />
         <Route path='/viewer/welcome' component={Welcome} />
         
         <Route
            path="/app/notary/"
            render={({ match: { url } }) => (ClosingRoomWizardRoute(url)
            )}
        />
          <Route
            path="/app/remote-sign/"
            render={({ match: { url } }) => (RemoteSignRoute(url)
            )}
        />

            <Route
            path="/app/viewer/"
            render={({ match: { url } }) => (ViewerSignRoute(url)
            )}
        />
         
        <Route component={NotFound} /> 
        <Route component={InternalServerError} />

    </Switch>


}
export default Main;