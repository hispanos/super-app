import types from "../types";

const initialState = null;

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DO_REGISTER:
            return action.payload

        default:
            return state;
    }
}

export default RegisterReducer
