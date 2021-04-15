import * as actionsTypes from './Account_types'

const initialState = {
    user: null
}

const accountReducer = (state = initialState, action) => {
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