import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

class SignerTab extends PureComponent {
    state = {
        city: '',
        state: '',
        country:'',
        name: '',
        labelWidth: 0,
        value: 0,
        errors:{}
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    handleValidation = (e) => {

        let  errors = {}
 
        let name = e.target.name
        if (name === 'firstname' && e.target.value.trim().length===0) {
            errors.firstname = 'First Name is required!'
        }

        if (name === 'lastname' && e.target.value.trim().length===0) {
            errors.lastname = 'Last Name is required!'
        }

        if (name === 'companyname' && e.target.value.trim().length===0) {
            errors.companyname = 'Company Name is required!'
        }

        if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            errors.email = 'Invalid email address'
        }

        if(name === 'country' ){
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'country' && e.target.value==="") {
            errors.country = 'Country is required!'
        }
        if(name === 'idType' ){
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'idType' && e.target.value==="") {
            errors.idType = 'Id Type is required!'
        }

        this.setState({
            errors
        })
    }

    render() {
        const { city,state,country,errors} = this.state
        return (
            <Typography component="div" className="tab-content pd0">
                <form>
                    <div className="content-box">
                        <Grid container className="height-100">
                            <Grid item xs={12} sm={2} className="left-side-nav">
                                <div className="search-box">
                                    <TextField
                                        id="standard-full-width"
                                        style={{ margin: 8 }}
                                        placeholder="Search"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><SearchIcon className="search-icon"/></InputAdornment>,
                                          }}
                                        className="search-text-field"
                                        type="text"
                                        name="search"
                                    />
                                </div>
                                <List className="left-side-menu">
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="John Smith" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Ajay" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Mark knolls" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Tom Lewis" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Jackson" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={10} className="right-side-content">
                                <div className="top-header">
                                    <span className="top-title">Add Signer</span>
                                    <Button variant="outlined" className="btn btn-outline btn-sm mrR10">
                                        Save
                                    </Button>
                                    <Button variant="contained" className="btn btn-gray btn-sm">
                                        Cancel
                                    </Button>
                                </div>
                                <div className="sec-form">
                                    <form>
                                        <Grid container spacing={16} className="mrB15">
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                name="firstname"
                                                label={<span>First Name <b>*</b></span>}
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className={errors.firstname ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="text"
                                            />
                                             { errors.firstname && <div className="validation-error text-right"> Please enter a valid first name </div>}
                                        </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Middle Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="mname"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                            <TextField
                                                name="lastname"
                                                label={<span>Last Name <b>*</b></span>}
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className={errors.lastname ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="text"
                                            />
                                            { errors.lastname && <div className="validation-error text-right"> Please enter a valid last name </div>}
                                        </Grid>
                                        </Grid>

                                        <Grid container spacing={16} className="mrB15">
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Company Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="cname"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                 name="email"
                                                 label={<span>Email id <b>*</b></span>}
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className={errors.email ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="email"
                                            />
                                             { errors.email && <div className="validation-error text-right"> Please enter a valid email id </div>}
                                        </Grid>
                                        </Grid>
                                        <Grid container spacing={16} className="mrB15">
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Address"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="address"
                                                    type="text"
                                                />
                                                 
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                            <FormControl variant="filled" className="select-control">
                                                <InputLabel htmlFor="filled-city-simple">City</InputLabel>
                                                <Select
                                                    value={city}
                                                    onChange={this.handleChange}
                                                    input={<FilledInput name="city" id="filled-city-simple" />}
                                                    className="select-box"
                                                    name="city"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Indore</MenuItem>
                                                    <MenuItem value={20}>Lucknow</MenuItem>
                                                </Select>
                                            </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Work Phone"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="workPhone"
                                                    type="text"
                                                />
                                                
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={16}>
                                            <Grid item xs={12} sm={3}>
                                            <FormControl variant="filled" className="select-control">
                                                <InputLabel htmlFor="filled-state-simple">State</InputLabel>
                                                <Select
                                                    value={state}
                                                    onChange={this.handleChange}
                                                    input={<FilledInput name="state" id="filled-state-simple" />}
                                                    className="select-box"
                                                    name="state"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>MP</MenuItem>
                                                    <MenuItem value={20}>UP</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Zipcode"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    type="text"
                                                    name="zipcode"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                            <FormControl variant="filled" className={errors.country  ? "select-control select-error-border" :"select-control"}>
                                                <InputLabel htmlFor="filled-country-simple">Country <b>*</b></InputLabel>
                                                <Select
                                                    value={country}
                                                    onChange={this.handleValidation}
                                                    input={<FilledInput name="country" id="filled-country-simple" />}
                                                    className="select-box"
                                                    name="country"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>India</MenuItem>
                                                    <MenuItem value={20}>US</MenuItem>
                                                </Select>
                                            </FormControl>
                                            { errors.country && <div className="validation-error text-right"> Please select a country </div>}
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Home Phone"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="homePhone"
                                                    type="text"
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container>
                        <Grid item xs={12} sm={12} className="text-right footer-btn ">
                            <Button variant="contained" className="btn btn-dark-gray btn-sm mrR10">
                                Cancel
                            </Button>
                            <Button variant="contained" className="btn btn-primary btn-sm">
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Typography>
        )
    }
}

export default SignerTab
