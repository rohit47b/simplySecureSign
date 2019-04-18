import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class CreateNewPasswordMessage extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        const { emailId } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Congratulations!
                </Typography>
                <Typography component="p" className="mrB15">
                   Your new password has been reset successfully,<br/>
                   please Sign In to continue.
                </Typography>
                <form>
                    <Grid container spacing={16} className="mrT20">
                        <Grid item xs={12} sm={9}>
                            <Button onClick={() => history.push('/notary/sign-in')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                SIGN IN
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default CreateNewPasswordMessage