import types from "../types";

const initialState = {modalActive: false, nameModal: ''};

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_MODAL:
            return action.payload

        default:
            return state;
    }
}

export default ModalReducer;