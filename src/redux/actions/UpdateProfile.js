import types from "../types";
import axios from 'axios'
import { cleanErrorForm, doErrorForm } from "./ErrorForm";
import { db } from "../../utils/dbLocal";

export const doUpdateProfile = (id, data) => {
    return async (dispatch) => {
        try {
            let res = await axios.patch(`users/${id}`, data)
            if(res.status === 200) {
                dispatch(doUpdateProfileSync({user: res.data.data}))
                dispatch(doErrorForm({success: true}))
            }
        } catch (error) {
            dispatch(doErrorForm({
                message: "Hubo un error al procesar la solicitud"
            }))
        }
    }
}

export const doUpdateProfileOffline = (id, data) => {
    return async (dispatch) => {
        try {
            const res = await db.users.update(id, {
                ...data
            });
            let usersOff = await db.users.get({id: id})
            dispatch(doUpdateProfileSync({user: usersOff}))
            dispatch(doErrorForm({success: true}))
        } catch (error) {
            dispatch(doErrorForm({
                message: "Hubo un error al procesar la solicitud"
            }))
        }
    }
}

const doUpdateProfileSync = (data) => {
    return {
        type: types.UPDATE_PROFILE,
        payload: data
    }
}