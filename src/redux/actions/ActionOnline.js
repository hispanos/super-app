import types from "../types";

export const doToggleOnline = (data) => {
    return {
        type: types.TOGGLE_ONLINE,
        payload: data
    }
}