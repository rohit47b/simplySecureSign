import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'

class CreateNewPIN extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        const { emailId } = this.state
        return (
            <Grid item sm={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Enter Your new PIN
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter the verification PIN that has been sent to your <br />
                    email account.
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label="PIN"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label="Confirm PIN"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button  onClick={() => history.push('/app/eSign-wizard/review')} variant="contained" color="primary" className="btn btn-primary">
                                Save 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default CreateNewPIN