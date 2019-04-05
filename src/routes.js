import React from 'react';
import { Redirect, Route, Switch } from 'react-router'

import MainRoute from 'components/app/MainRoute'
import NotFound from 'components/404'
import InternalServerError from 'components/500'
import EmailVerify from 'components/emailVerify'
import SignIn from 'components/signIn'
import CreateNewPIN from 'components/createNewPIN'
import { ESignWizardRoute } from 'components/app/components/eSignWizard/ESignWizardRoute'
import ForgotPassword from 'components/forgotPassword'

import ClosingPackageInvoice from 'components/app/components/closingPackageInvoice'
import ResendPIN from 'components/resendPIN'


import 'style/app.scss'

const Main = ({ }) => {
    return <Switch>
        <Redirect from="/" exact to="/email-verification" />
        <Route path='/email-verification'
            render={() => (<EmailVerify />
            )}
        />
          
        <Route path='/sign-in' component={SignIn} />
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

        <Route component={NotFound} />
        <Route component={InternalServerError} />

    </Switch>


}
export default Main;