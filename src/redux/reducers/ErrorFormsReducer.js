import types from "../types";

const initialState = {};

const ErrorFormsReducer = (state = initialState, action) => {

    switch(action.type) {

        case types.DO_ERROR_FORM:
            return action.payload

        case types.CLEAN_ERROR_FORM:
            return initialState

        default:
            return state
    }

}

export default ErrorFormsReducer;