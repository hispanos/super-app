import types from "../types";
import axios from 'axios'
import { cleanErrorForm, doErrorForm } from "./ErrorForm";

export const doRegister = (user) => {
    return async (dispatch) => {
        dispatch(cleanErrorForm())
        dispatch(doRegisterSync(false))
        try {
            let res = await axios.post('users', user)
            console.log(res)
            if(res.status === 200) {
                dispatch(cleanErrorForm())
                dispatch(doRegisterSync({user: true}))
            }else {
                dispatch(doRegisterSync(false))
                dispatch(doErrorForm({
                    message: res.data.error
                }))
            }
        } catch (error) {
            dispatch(doRegisterSync(false))
            dispatch(doErrorForm({
                message: "Hubo un error al guardar"
            }))
        }
    }
}

const doRegisterSync = (data) => {
    return {
        type: types.DO_REGISTER,
        payload: data
    }
}