import types from "../types";

const initialState = {form: null, file: null};

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_FORM:
            return {
                ...state,
                ...action.payload
            }

        case types.UPLOAD_FILE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default FormReducer
