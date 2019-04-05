/*
 * @Author: Virendra Patidar 
 * @Date: 2018-09-19 12:30:21 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2019-03-18 17:54:42
 */
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import { withRouter } from 'react-router-dom'

import history from 'customHistory'
import Tooltip from '@material-ui/core/Tooltip';

import { store } from 'client'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { cloneDeep } from "lodash"


import { setActiveMenu, setOpenSetting, setOpenAsset, setOpenGovernance, setOpenIntegration } from 'actions/commonAction'
import * as commonActions from 'actions/commonAction'

const drawerWidth = 240;

const styles = theme => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    }
});

class Sidebar extends PureComponent {
    _mounted = false
    state = { openSetting: this.props.openSetting, openAsset: this.props.openAsset, openGovernance: this.props.openGovernance, openIntegration: this.props.openIntegration, activeMenu: this.props.activeMenu, isExpired: false };

    currentValue = this.props.trailData

    componentDidMount() {
        this._mounted = true
        const trailData = this.props.trailData
        let company = this.props.company

        const loginAsDetail = this.props.loginAsDetail
        if (loginAsDetail.isLogin === true) {
            company = loginAsDetail.company
        }
        if (company !== undefined && company.is_permanent === true) {
            this.setState({ isExpired: false })
        }
        else if (trailData.trailPeriodRemainigDays === 0 && trailData.isPurchased === false) {
            this.setState({ isExpired: false })
        }
        this.unsubscribe = store.subscribe(this.receiveFilterData)
    }

    componentWillUnmount() {
        this._mounted = false
    }

    receiveFilterData = data => {

        const currentState = store.getState()
        const previousValue = this.currentValue
        this.currentValue = currentState.uiReducer.trailData

        if (
            this.currentValue && previousValue !== this.currentValue
        ) {
            const trailData = cloneDeep(currentState.uiReducer.trailData)
            let company = this.props.company
            const loginAsDetail = this.props.loginAsDetail
            if (loginAsDetail.isLogin === true) {
                company = loginAsDetail.company
            }

            if (company !== undefined && company.is_permanent === true && this._mounted) {
                this.setState({ isExpired: false })
            }
            else if (trailData.trailPeriodRemainigDays === 0 && trailData.isPurchased === false && this._mounted) {
                this.setState({ isExpired: false })
            } else if (this._mounted) {
                this.setState({ isExpired: false })
            }
        }
    }

    handleSettingSubmenu = (menu) => {
        if (menu !== 'Settings') {
            company
            this.props.setActiveMenu(menu)

        }
        this.setState(prevState => ({ openSetting: !prevState.openSetting,  }));
        this.props.setOpenSetting(!this.state.openSetting)
    };

    handleAssetsSubmenu = (menu) => {
        if (menu !== 'Assets') {
            company
            this.props.setActiveMenu(menu)
        }
        this.setState(prevState => ({ openAsset: !prevState.openAsset, activeMenu: menu }));
        this.props.setOpenAsset(!this.state.openAsset)
    };

    handleGovernanceSubmenu = (menu) => {
        if (menu !== 'Governance') {
            company
            this.props.setActiveMenu(menu)
        }
        this.setState(prevState => ({ openGovernance: !prevState.openGovernance, activeMenu: menu }));
        this.props.setOpenGovernance(!this.state.openGovernance)
    };

    handleIntegrationSubmenu = (menu) => {
        if (menu !== 'Integration') {
            company
            this.props.setActiveMenu(menu)
        }
        this.setState(prevState => ({ openIntegration: !prevState.openIntegration, activeMenu: menu }));
        this.props.setOpenIntegration(!this.state.openIntegration)
    };

    redirectToPage = (menu, url) => {
        this.props.setActiveMenu(menu)
        this.props.setOpenSetting(this.state.openSetting)
        this.props.setOpenAsset(this.state.openAsset)
        this.props.setOpenGovernance(this.state.openGovernance)
        this.props.setOpenIntegration(this.state.openIntegration)
        this.setState({ activeMenu: menu }, () => {
            history.push(url)
        });
    }

    render() {
        const { classes, open, activeMenu, loginAsDetail } = this.props;
        let { company } = this.props;
        const isLoginAs = loginAsDetail.isLogin

        if (isLoginAs === true) {
            company = loginAsDetail.company
        }

        const { openSetting, openAsset, openGovernance, openIntegration, isExpired } = this.state;
        localStorage.setItem("isExpired", isExpired)
        const role = this.props.token.role ? this.props.token.role : 'user'
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose, 'app-sidebar'),
                }}
                open={open}
                PaperProps={{
                    style: {
                        top: '50px'
                    }
                }}
                style={{ paddingBottom: '50px' }}
            >
                <List component="nav" className="side-nav">
                    {(role === 'user' || isLoginAs === true) && <Fragment>
                        {!isExpired && <div>
                            <ListItem button className={activeMenu === 'Dashboard' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Dashboard', '/app/dashboard/home')}>
                                <Tooltip title="Dashboard" placement="right-end">
                                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Dashboard" />
                            </ListItem>

                            <ListItem button className={activeMenu === 'Alerts' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Alerts', '/app/investigate-alert')}>
                                <Tooltip title="Alerts (Investigate)" placement="right-end">
                                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Alerts" />
                            </ListItem>

                            <ListItem button className={activeMenu === 'Remediation' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Remediation', '/app/remediation')}>
                                <Tooltip title="Remediation" placement="right-end">
                                    <i className="fa fa-wrench" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Remediation" />
                            </ListItem>

                            <ListItem button className={activeMenu === 'Assets' ? 'nav-link active bg-black' : 'nav-link'} onClick={() => this.handleAssetsSubmenu('Assets')}>
                                <Tooltip title="Assets" placement="right-end">
                                    <i className="fa fa-cloud" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Assets" />
                            </ListItem>

                            <Collapse in={!openAsset} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding className="submenu">
                                    <ListItem button className={activeMenu === 'Data Storage' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Data Storage', '/app/assets')}>
                                        <Tooltip title="Data Storage" placement="right-end">
                                        <i className="fa fa-database" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Data Storage" />
                                    </ListItem>
                                    <ListItem button className={activeMenu === 'User Mgmt' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('User Mgmt', '/app/users')}>
                                        <Tooltip title="User Mgmt" placement="right-end">
                                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="User Mgmt" />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button className={activeMenu === 'Governance' ? 'nav-link active bg-black' : 'nav-link'} onClick={() => this.handleGovernanceSubmenu('Governance')}>
                                <Tooltip title="Governance" placement="right-end">
                                    <i className="fa fa-shield" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Governance" />
                            </ListItem>

                            <Collapse in={!openGovernance} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding className="submenu">
                                    <ListItem button className={activeMenu === 'Policies' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Policies', '/app/policies')}>
                                        <Tooltip title="Policies" placement="right-end">
                                            <i className="fa fa-clipboard" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Policies" />
                                    </ListItem>
                                    <ListItem button className={activeMenu === 'Security Rules' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Security Rules', '/app/rules')}>
                                        <Tooltip title="Security Rules" placement="right-end">
                                            <i className="fa fa-lock fnt-24" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Security Rules" />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button className={activeMenu === 'Integration' ? 'nav-link active bg-black' : 'nav-link'} onClick={() => this.handleIntegrationSubmenu('Integration')}>
                                <Tooltip title="Integration" placement="right-end">
                                    <i className="fa fa-exchange" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Integration" />
                            </ListItem>

                            <Collapse in={!openIntegration} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding className="submenu">
                                    <ListItem button className={activeMenu === 'Clouds' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Clouds', '/app/integrations')}>
                                        <Tooltip title="Clouds" placement="right-end">
                                            <i className="fa fa-cloud" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Clouds" />
                                    </ListItem>
                                    <ListItem button className={activeMenu === 'Communication' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Communication', '/app/comunication')}>
                                        <Tooltip title="Communication" placement="right-end">
                                            <i className="fa fa-bell" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Communication" />
                                    </ListItem>
                                    {/* <ListItem button className={activeMenu === 'Security Tools' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Security Tools', '/app/integrations')}>
                                        <Tooltip title="Security Tools" placement="right-end">
                                            <i className="fa fa-shield" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Security Tools" />
                                    </ListItem> */}
                                </List>
                            </Collapse>

                            <ListItem button className={activeMenu === 'Settings' ? 'nav-link active bg-black' : 'nav-link'} onClick={() => this.handleSettingSubmenu('Settings')}>
                                <Tooltip title="Settings" placement="right-end">
                                    <i className="fa fa-cog" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Settings" />
                            </ListItem>
 
                            <Collapse in={!openSetting} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding className="submenu">
                                    <ListItem button className={activeMenu === 'Detection' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Detection', '/app/setting/pull-interval')}>
                                        <Tooltip title="Detection" placement="right-end">
                                            <i className="fa fa-clock-o " aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Detection" />
                                    </ListItem>
                                    <ListItem button className={activeMenu === 'Reporting' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Reporting', '/app/setting/reporting')}>
                                        <Tooltip title="Reporting" placement="right-end">
                                            <i className="fa fa-bell" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Reporting" />
                                    </ListItem>
                                    <ListItem button className={activeMenu === 'Users' ? 'submenu-item active' : 'submenu-item'} onClick={() => this.redirectToPage('Users', '/app/setting/profile')}>
                                        <Tooltip title="Users" placement="right-end">
                                            <i className="fa fa-user-o" aria-hidden="true"></i>
                                        </Tooltip>
                                        <ListItemText inset primary="Users" />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button className={activeMenu === 'Activity_Log' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Activity Log', '/app/setting/activity-log')}>
                                <Tooltip title="Activity Log" placement="right-end">
                                    <i className="fa fa-history" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Activity Log" />
                            </ListItem>
                            <ListItem button className={activeMenu === 'Reports' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Reports', '/app/reports')}>
                                <Tooltip title="Reports" placement="right-end">
                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                </Tooltip>
                                <ListItemText className="nav-text" primary="Reports" />
                            </ListItem>
                        </div>
                        }

                        
                        {company.is_permanent === false && <ListItem button className={activeMenu === 'Billing' ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Billing', '/app/billing')}>
                            <Tooltip title="Billing" placement="right-end">
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                            </Tooltip>
                            <ListItemText className="nav-text" primary="Billing" />
                        </ListItem>
                        }
                    </Fragment>
                    }

                    {/* Super Admin can be access company page as well as admin users page*/}
                    {(role === 'super_admin' && isLoginAs !== true) && <Fragment>
                        <ListItem button className={activeMenu === "Companies" ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Companies', '/app/companies')}>
                            <Tooltip title="Companies" placement="right-end">
                                <i className="fa fa fa-building-o" aria-hidden="true"></i>
                            </Tooltip>
                            <ListItemText className="nav-text" primary="Company" />
                        </ListItem>
                        <ListItem button className={activeMenu === "Admin User" ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Admin User', '/app/admin-user')}>
                            <Tooltip title="Admin User" placement="right-end">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                            </Tooltip>
                            <ListItemText className="nav-text" primary="Admin User" />
                        </ListItem>
                    </Fragment>}



                    {/* Admin only have permission to access company page */}
                    {(role === 'admin' && isLoginAs !== true) && <Fragment>
                        <ListItem button className={activeMenu === "Companies" ? 'nav-link active' : 'nav-link'} onClick={() => this.redirectToPage('Companies', '/app/companies')}>
                            <Tooltip title="Companies" placement="right-end">
                                <i className="fa fa fa-building-o" aria-hidden="true"></i>
                            </Tooltip>
                            <ListItemText className="nav-text" primary="Company" />
                        </ListItem>
                    </Fragment>}

                </List>
            </Drawer>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, commonActions), dispatch),
        setActiveMenu: activeMenu => {
            dispatch(setActiveMenu(activeMenu))
        },
        setOpenSetting: openSetting => {
            dispatch(setOpenSetting(openSetting))
        },
        setOpenAsset: openAsset => {
            dispatch(setOpenAsset(openAsset))
        },
        setOpenGovernance: openGovernance => {
            dispatch(setOpenGovernance(openGovernance))
        },
        setOpenIntegration: openIntegration => {
            dispatch(setOpenIntegration(openIntegration))
        }
    };
}

const mapStateToProps = (state, ownProps) => ({
    activeMenu: state.uiReducer.activeMenu,
    openSetting: state.uiReducer.openSetting,
    openAsset: state.uiReducer.openAsset,
    openGovernance: state.uiReducer.openGovernance,
    openIntegration: state.uiReducer.openIntegration,
    trailData: state.uiReducer.trailData,
    token: state.userReducer.token,
    company: state.userReducer.company,
    loginAsDetail: state.userReducer.loginAsDetail
})


export default withRouter(withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Sidebar)));