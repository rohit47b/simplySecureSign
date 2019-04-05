import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class ResendPIN extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        const { emailId } = this.state
        return (
            <Grid item sm={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Resend PIN
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter your Login Information that will used to validate<br/> in order to resend PIN
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <TextField
                                label="Email Id"
                                className="bootstrap-text-field"
                                placeholder="Enter Email Id"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB15">
                        <Grid item sm={9}>
                            <TextField
                                label="Property Address"
                                className="bootstrap-text-field"
                                placeholder="Enter property address"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={16} className="mrB20">
                        <Grid item sm={7}>
                            <div className="captcha-box">
                                <Checkbox
                                    value=""
                                    color="primary"
                                />
                                <span className="captcha-text">I'm not a robot</span>
                                <span><img width="50" src="/assets/images/recaptchaLogo.png"/></span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item sm={9}>
                            <Button  variant="contained" color="primary" className="btn btn-primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default ResendPIN