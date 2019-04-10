import { Grid } from '@material-ui/core';
import ErrorBoundary from 'global/ErrorBoundary';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Button} from '@material-ui/core'
import file from '../../simply-secure-esign.zip';


class Download extends PureComponent {

    render() {
        return (
            <div className="page-err">
            <div className="err-container text-center">
                <div className="err-body">
                    <h1>Simply Secure eSign</h1>
                    <p>Please click on below button for download source code</p>
                    <Button type="button" variant="contained" className="btn btn-success"><a href={file} download="SimplySecureSign" >Download</a> </Button>
                </div>
            </div>
            </div>

        )
    }
};

export default withRouter(Download);
