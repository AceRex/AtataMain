import * as actionsTypes from './Account_types'

const LOGIN_STATE = {
    user: null
}

const accountReducer = (state = LOGIN_STATE, action) => {
    switch (action.type) {
        case actionsTypes.LOGIN:
            return {
                ...state,
                user: []
            }
        case actionsTypes.LOGOUT:
            return {
                ...state,
                user: null
            }
        case actionsTypes.REGISTER:
            return {
                ...state,
                user: []
            }
        default:
            return state;
    }
};

export default accountReducer;