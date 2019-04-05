import * as types from 'constants/ActionTypes'

const commonReducerInitialState = {
    countryList: [],
    constants: {},
    awsList: [],
    serviceList: [],
    complianceList: [],
    priorityList: [],
    isProgress: false
}

export default function commonReducer(state = commonReducerInitialState, action) {
    switch (action.type) {
        case types.LOAD_COUNTRY_SUCCESS:
            return Object.assign([], state, action.countryList)
        case types.SET_CONSTANT:
            localStorage.setItem('account_id', action.accountId)
            mixpanel.register({ "account_id": String(action.accountId) });
            return {
                ...state,
                constants: { accountId: action.accountId }
            };
        case types.AWS_LIST:
            return {
                ...state,
                awsList: action.awsList
            };
        case types.SERVICE_LIST:
            return {
                ...state,
                serviceList: action.serviceList
            };
        case types.COMPLIANCE_LIST:
            return {
                ...state,
                complianceList: action.complianceList
            };
        case types.PRIORITY_LIST:
            return {
                ...state,
                priorityList: action.priorityList
            };
        case types.PROGRESS_BAR:
            return {
                ...state,
                isProgress: action.isProgress
            };
        default:
            return state;
    }
}
