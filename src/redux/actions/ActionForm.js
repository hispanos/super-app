import types from "../types";
import axios from 'axios'
import { cleanErrorForm, doErrorForm } from "./ErrorForm";
import { db } from "../../utils/dbLocal";

export const saveForm = (data, url) => {
    return async (dispatch) => {
        dispatch(cleanErrorForm())
        const object = {...data}
        delete object.photo
        try {
            let res = await axios.post(`${url}`, object)
            if(res.status === 200) {
                dispatch(saveFormSync({form: true}))
                dispatch(doErrorForm({success: true}))
            }
        } catch (error) {
            dispatch(doErrorForm({
                message: "Hubo un error al procesar la solicitud"
            }))
        }
    }
}

export const saveFormSync = (data) => {
    return {
        type: types.SAVE_FORM,
        payload: data
    }
}