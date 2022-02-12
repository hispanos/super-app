import types from "../types";

export const doErrorForm = (data) => {
    return {
        type: types.DO_ERROR_FORM,
        payload: data
    }
}

export const cleanErrorForm = () => {
    return {
        type: types.CLEAN_ERROR_FORM
    }
}