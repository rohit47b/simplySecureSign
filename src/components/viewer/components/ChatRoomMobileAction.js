import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ChatIcon from '@material-ui/icons/Chat';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import VideoIcon from '@material-ui/icons/Videocam';
import history from 'customHistory';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class ChatRoomMobileAction extends PureComponent {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    }

    render() {
        const { open } = this.state;
        return (
            <div className="navbar">
                <ul>
                    <li><NavLink to='/app/viewer/signing-room' activeClassName="active"> <FileIcon /></NavLink></li>
                    <li><NavLink to='/app/viewer/online-call' activeClassName="active"> <VideoIcon /></NavLink></li>
                    <li><NavLink to='/app/viewer/online-chat' activeClassName="active"><ChatIcon /></NavLink></li>
                </ul>
            </div>

        )
    }
}


export default ChatRoomMobileAction