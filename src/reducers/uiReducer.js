
import * as types from 'constants/ActionTypes'

export const uiReducerInitialState = {
    showAssetModal: false,
    filterData: { selectAccount: { account_name: 'All Account', id: 'all' }, selectCloud: { name: 'All Clouds', id: 'all', cloudIcon: '/assets/images/aws.png' },selectedRegion: { region_code: 'All Regions', id: 'all' } },
    reloadSearchBar: { flag: false },
    activeMenu: 'Dashboard',
    openSetting: true,
    openAsset: true,
    openGovernance: true,
    openIntegration: true,
    open: false,
    trailData: { isPurchased: false, trailPeriodRemainigDays: 0 },
    securityIssueFilter: {},
    dashboardLayout: [
        { i: 'SecurityAlertStatus', x: 0, y: 0, w: 1, h: 1.8, visible: true, permissionToAccess: true, moved: false, static: false }, //
        { i: 'Types', x: 0, y: 1.8, w: 1, h: 4.5, visible: true, permissionToAccess: true, moved: false, static: false },
        { i: 'Services', x: 0, y: 3, w: 1, h: 4.5, visible: true, permissionToAccess: true, moved: false, static: false },
        { i: 'ComplianceStatusAssets', x: 1, y: 0, w: 1, h: 4.15, visible: true, permissionToAccess: true, moved: false, static: false },
        { i: 'AssetInventory', x: 1, y: 3, w: 1, h: 5.7, visible: true, permissionToAccess: true, moved: false, static: false },
        { i: 'SecurityAlertByRegion', x: 2, y: 0, w: 1, h: 8, visible: true, permissionToAccess: true, moved: false, static: false }
    ]
}

export default function uiReducer(state = uiReducerInitialState, action) {
    switch (action.type) {
        case types.SHOW_ASSET_MODAL:
            return {
                ...state,
                showAssetModal: true
            }

        case types.CLOSE_ASSET_MODAL:
            return Object.assign({}, state, {
                showAssetModal: false
            });

        case types.FILTER_SEARCH_BAR:
            return {
                ...state,
                filterData: action.filterData
            }
        case types.RESET_FILTER_SEARCH_BAR:
            return {
                ...state,
                filterData: { selectAccount: { account_name: 'All Account', id: 'all' }, selectCloud: { name: 'All Clouds', id: 'all', cloudIcon: '/assets/images/aws.png' } ,selectedRegion: { region_code: 'All Regions', id: 'all' }},
            }

        case types.RELOAD_SEARCH_BAR:
            return {
                ...state,
                reloadSearchBar: action.reloadSearchBar
            }

        case types.ACTIVE_MENU:
            return {
                ...state,
                activeMenu: action.activeMenu
            }
        case types.OPEN_SETTING:
            return {
                ...state,
                openSetting: action.openSetting
            }
        case types.OPEN_ASSET:
            return {
                ...state,
                openAsset: action.openAsset
            }
        case types.OPEN_GOVERNANCE:
            return {
                ...state,
                openGovernance: action.openGovernance
            }
        case types.OPEN_INTEGRATION:
            return {
                ...state,
                openIntegration: action.openIntegration
            }
        case types.SET_TRAIL_PERIOD_DATA:
            return {
                ...state,
                trailData: action.trailData,
            }

        case types.SECURITY_ISSUE_FILTER:
            return {
                ...state,
                securityIssueFilter: action.securityIssueFilter,
            }

        case types.DASHBOARD_LAYOUT:
            return {
                ...state,
                dashboardLayout: action.dashboardLayout,
            }
        
        case types.OPEN:
            return {
                ...state,
                open: action.open
            };
        default:
            return state;
    }
}
