import types from "../types";

const initialState = false;

const OnlineReducer = (state = initialState, action) => {

    switch(action.type) {

        case types.TOGGLE_ONLINE:
            return action.payload

        default:
            return state
    }

}

export default OnlineReducer;