import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ProductCodeTable from './ProductCodeTable'

class Products extends PureComponent {
    render() {
        return (
            <Typography className="tab-container" component="div">
                <div style={{ minHeight: "60vh" }}>
                    <Grid container spacing={32} className="mrB15">
                        <Grid item xs={12} sm={6}>
                            <Typography className="heading-small mrB15" component="div">
                                Add Product Code
                            </Typography>
                            <div className="add-pro-code">
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                />
                                <AddCircleIcon className="add-icon" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12}>
                            <ProductCodeTable/>
                        </Grid>
                    </Grid>
                </div>
                <hr className="divider mrB30" />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={12}>
                        <Button variant="contained" className="btn btn-primary btn-sm mrR10">
                            Save
                        </Button>
                        <Button variant="contained" className="btn btn-dark-gray btn-sm ">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}

export default Products
