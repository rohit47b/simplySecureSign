import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

class Notification extends PureComponent {
    state = {
        popoverEl: null,
    };

    handleClick = event => {
        this.setState({
            popoverEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            popoverEl: null,
        });
    };

    render() {

        const { popoverEl } = this.state;

        return (
            <div className="notification-dropdown">

                <div>
                    <Button
                        onClick={this.handleClick}
                        className="notification-btn"
                    >
                        <i className="fa fa-bell-o">
                            
                        </i>
                    </Button>
                    <Popover
                        open={Boolean(popoverEl)}
                        anchorEl={popoverEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className="notification-popover"
                    >
                        <List component="nav" className="notification-list">
                            <Typography component="h4" className="list-head">
                                Notification
                            </Typography>
                            <ListItem className="list-item">
                                <div className="day-title">
                                    Today
                                </div>
                                <h4>We're transitioning resource ID's to a longer formate</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </ListItem>
                            <ListItem className="list-item">
                                <div className="day-title">
                                    23,July 2018
                                </div>
                                <h4>Heading of Notification</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </ListItem>
                            <Typography component="div" className="list-footer">
                                <a href="javascript:void(0)">See all Notification</a>
                            </Typography>
                        </List>
                    </Popover>
                </div>
            </div>
        );
    }
}


export default Notification;