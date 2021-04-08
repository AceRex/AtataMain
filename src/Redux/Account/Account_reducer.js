import * as actionsTypes from './Shopping_types'

const INITIAL_STATE = {
    user: null
}

const accountReducer = (state = INITIAL_STATE, action) => {
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