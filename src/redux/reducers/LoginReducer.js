import types from "../types";

const initialState = null;

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DO_LOGIN:
            return action.payload
        
        case types.DO_LOGOUT:
            return false

        case types.DO_CHECK_CONNECTION:
            return action.payload

        case types.UPDATE_PROFILE:
            return action.payload

        default:
            return state;
    }
}

export default LoginReducer
