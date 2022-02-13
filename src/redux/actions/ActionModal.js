import types from "../types";

export const doToggleModal = (data) => {
    return {
        type: types.TOGGLE_MODAL,
        payload: data
    }
}