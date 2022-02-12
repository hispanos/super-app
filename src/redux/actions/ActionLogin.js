import types from "../types";
import axios from 'axios'
import { cleanErrorForm, doErrorForm } from "./ErrorForm";
import { db } from "../../utils/dbLocal";

export const doLogin = (user) => {
    return async (dispatch) => {
        dispatch(cleanErrorForm())
        try {
            let res = await axios.post('auth/authenticate', user)
            if(res.status === 200 && res.data.hasOwnProperty('data')) {
                res.data.data.user.id = parseInt(res.data.data.user.id)
                //Set the user Online
                let usersOff = await db.users.get({email: user.email})
                if (!usersOff) {
                    await db.users.add({...res.data.data.user})
                    usersOff = await db.users.get({email: user.email})
                }

                await db.userOnline.clear()
                await db.userOnline.add({userId: usersOff.id})
                //End Offline

                localStorage.setItem('token', res.data.data.token)
                dispatch(doLoginSync({user: res.data.data.user}))
                dispatch(cleanErrorForm())
            }else {
                dispatch(doLoginSync(false))
                dispatch(doErrorForm({
                    message: res.data.error
                }))
            }
        } catch (error) {
            dispatch(doLoginSync(false))
            dispatch(doErrorForm({
                message: "Usuario o contraseña Incorrecta"
            }))
        }
    }
}

const doLoginSync = (data) => {
    return {
        type: types.DO_LOGIN,
        payload: data
    }
}



export const doLogout = () => {

    return async (dispatch) => {
        await db.userOnline.clear()
        localStorage.clear()
        dispatch(doLogoutSync())
    }
}

const doLogoutSync = () => {

    return {
        type: types.DO_LOGOUT
    }
}