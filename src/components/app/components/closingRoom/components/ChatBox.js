import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import RemoveIcon from '@material-ui/icons/Remove'
import HighlightOff from '@material-ui/icons/HighlightOff'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import PersonIcon from '@material-ui/icons/Person'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import ArrowForward from '@material-ui/icons/ArrowForward'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';





class ChatBox extends PureComponent {

    render() {
        return (
            <Card className="chat-box">
                <Typography className="chat-box-header" component="div">
                    <span className="chat-box-title">Signer :Tom</span>
                    <span className="icon-action">
                        <RemoveIcon className="mrR10" />
                        <HighlightOff />
                    </span>
                </Typography>
                <Typography className="group-chat" component="div">
                    <span className="group-chat-dropdown">Group Chat <KeyboardArrowDownIcon className="mrL10" /></span>
                    <span className="group-chat-user">03 <PersonIcon className="mrL5" /></span>
                </Typography>
                <CardContent className="chat-body">
                    <Typography className="chat-comment" component="div">
                        <div className="chat-info">
                            <div className="chat-media">
                                <PersonIcon className="user-icon" />
                                <div className="chat-content">
                                    <div className="chat-user">Kendall Sample</div>
                                    <div className="chat-desc">Test message on chat</div>
                                </div>
                            </div>
                            <div className="chat-time">Today, 4.30</div>
                        </div>
                    </Typography>
                    <Typography className="chat-comment" component="div">
                        <div className="chat-info">
                            <div className="chat-media">
                                <PersonIcon className="user-icon" />
                                <div className="chat-content">
                                    <div className="chat-user">John Hancock</div>
                                    <div className="chat-desc">Mr, Kendall <br /> Welcome to closing document</div>
                                </div>
                            </div>
                            <div className="chat-time">Today, 4.29</div>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions className="chat-footer">
                    <TextField
                        id="simple-start-adornment"
                        InputProps={{
                            startAdornment: <InputAdornment className="icon-emoji" position="start"><InsertEmoticon/></InputAdornment>,
                        }}
                        className="chat-field"
                        placeholder="Type your message"
                    />
                    <a title="Forward Message" className="forward-icon" href="javascript:void(0)">
                        <ArrowForward/>
                    </a>
                </CardActions>
            </Card>
        )
    }
}

export default ChatBox
