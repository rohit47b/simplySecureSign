import React from 'react'
import Grid from '@material-ui/core/Grid'
import APPCONFIG from 'constants/Config'

const VerificationBackground = (props) => {
    return (
            <Grid item xs={12} sm={12} md={6} className="verify-bg">
                <img  alt="simplySecureSign" src={APPCONFIG.company_logo_path}/>
            </Grid>
    )
}
export default VerificationBackground;