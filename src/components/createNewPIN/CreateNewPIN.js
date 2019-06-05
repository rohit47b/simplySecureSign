import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import history from 'customHistory'

class CreateNewPIN extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        showProgressBar: false,
        completed: 0
    }

    componentDidMount() {
        setInterval(this.progress, 500);
    }

    progress = () => {

        const oldCompleted = this.state.completed
        if (oldCompleted === 100) {
            this.setState({ completed: 0 })
        }
        const diff = Math.random() * 10;
        this.setState({ completed: Math.min(oldCompleted + diff, 100) })
    }

    redirectToEwizard = () => {
        this.setState({
            showProgressBar: true
        }, () => {
            setTimeout(function () { history.push('/app/eSign-wizard/review') }, 10000);
        })

    }

    render() {
        const {showProgressBar, completed } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
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
                                <Grid item  xs={12} sm={12}>
                                    <label htmlFor="pin-label" className="custom-label">PIN</label>
                                </Grid>
                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        id="pin-label"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field no-label"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="text"
                                        name="code1"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code2"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code3"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code4"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item  xs={12} sm={12}>
                                    <label  htmlFor="pin-label-2" className="custom-label">Confirm PIN</label>
                                </Grid>
                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                       id="pin-label-2"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field no-label"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="text"
                                        name="code1"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code2"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code3"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="code4"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Save"  onClick={() => this.redirectToEwizard()}  variant="contained" color="primary" className="btn btn-primary btn-block">
                                Save 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {showProgressBar === true && <div className="liner-progress-loader" ><LinearProgress variant="determinate" color="secondary" value={completed}  /></div>}
            </Grid>
        )
    }
}



export default CreateNewPIN