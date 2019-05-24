import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class NotarySignUp extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        errors: {}
    }

    handleValidation = (e) => {
        let errors = {}
        let name = e.target.name

        if (name === 'name' && e.target.value.trim().length === 0) {
            errors.name = 'Name is required!'
        }
        if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            errors.email = 'Invalid email address'
        } else {
            delete errors.email
        }

        if (
            name === 'password' &&
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
        ) {
            errors.password = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
        } else {
            delete errors.password
        }

        this.setState({
            errors
        })
    }

    render() {
        const { errors } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign Up
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label={<span>Your Name<b>*</b></span>}
                                placeholder="Enter your name"
                                fullWidth
                                margin="normal"
                                onChange={this.handleValidation}
                                className={errors.name ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="name"
                                type="text"

                            />
                            {errors.name && <div className="validation-error text-right"> Please enter your name</div>}
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label={<span>Email Id<b>*</b></span>}
                                placeholder="Enter email id"
                                fullWidth
                                margin="normal"
                                className={errors.email ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                name="email"
                                onChange={this.handleValidation}
                            />
                            {errors.email && <div className="validation-error text-right"> Please enter a valid email id </div>}
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label={<span>Password<b>*</b></span>}
                                placeholder="Enter Password"
                                fullWidth
                                margin="normal"
                                className={errors.password ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="password"
                                onChange={this.handleValidation}
                            />
                            {errors.password && <div className="validation-error text-right"> Please enter a valid password </div>}
                        </Grid>
                    </Grid>


                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Sign Up" onClick={() => history.push('/notary/verify')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Already Registered ? <Link style={{ fontWeight: 600, color: "#0073CF", marginLeft: "5px" }} to="/notary/sign-in">Log In</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default NotarySignUp