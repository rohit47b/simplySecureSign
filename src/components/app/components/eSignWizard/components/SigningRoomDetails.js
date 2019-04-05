import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';


class SigningRoomDetails extends PureComponent {
    state = {
        checked: true,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }
    render() {
        const { checked } = this.state
        return (
            <div>
                <Grid container justify="center" className="top-gray-bg">
                    <Grid item xs={12} sm={12} lg={8}>
                        <Grid container>
                            <Grid item xs={6} sm={6} className="d-flex align-item-end">
                                <Typography className="heading-large" gutterBottom variant="h5" component="h3">
                                    eSign wizard / <span className="font-normal">Signing Room</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} className="text-right">
                                <Button variant="contained" color="primary" className="btn btn-common btn-gray mrR10">
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" className="btn btn-common btn-gray">
                                    Save & Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" className="card-container">
                    <Grid item xs={12} sm={12} lg={8}>
                        <Card className="card-white mrB20">
                            <CardContent className="card-content">
                                <Stepper className="stepper mrB20" alternativeLabel>
                                    <Step className="step-item completed">
                                        <StepLabel className="step-label">Welcome</StepLabel>
                                    </Step>
                                    <Step className="step-item un-complete">
                                        <StepLabel className="step-label">Signing Room</StepLabel>
                                    </Step>
                                    <Step className="step-item step-next">
                                        <StepLabel className="step-label">Review & Submit</StepLabel>
                                    </Step>
                                </Stepper>
                                <Grid container className="mrB10 bg-gray align-items-center">
                                    <Grid item sm={3}>
                                        <Typography className="mr0 heading-small" variant="h5" component="h4">
                                            Kendall Sample
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={9} className="text-right">
                                        <span className="fnt-12 mrR5">Documents to submits with :</span>
                                        <Button className="btn btn-chip mrR5" variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left ">Sign</span>  <Avatar className="avatar-count mrL5">00</Avatar>
                                        </Button>
                                        <Button className="btn btn-chip" variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left">Interaction</span>  <Avatar className="avatar-count mrL5">01</Avatar>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <img style={{width:"100%"}} src="/assets/images/pdf.png"/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SigningRoomDetails