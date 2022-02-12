import types from "../types";
import axios from 'axios';
import { db } from "../../utils/dbLocal";

export const checkConection = () => {

    return async (dispatch) => {
        if(isToken()) {
            try {
                let res = await axios.get('users/me')
                if(res.status === 200) {
                    res.data.data.id = parseInt(res.data.data.id)
                    dispatch(doCheckSync({user: res.data.data}))
                } else {
                    dispatch(doCheckSync(false))
                }
            } catch (error) {
                dispatch(doCheckSync(false))
            }
        }else {
            dispatch(doCheckSync(false))
        }
    }
}

export const checkConectionOffline = () => {
    return async (dispatch) => {
        try {
            let res = await db.userOnline.orderBy('id').with({user: 'userId'})
            if(res.length) {
                dispatch(doCheckSync({user: res[0].user}))
            }else {
                dispatch(doCheckSync(false))
            }
        } catch (error) {
            dispatch(doCheckSync(false))
        }
    }
}

const doCheckSync = (data) => {
    return {
        type: types.DO_CHECK_CONNECTION,
        payload: data
    }
}


const isToken = () => {

    const token = localStorage.getItem('token')

    let myResponse = false;

    if (token) {
        myResponse = true
        
    }else {
        myResponse = false
    }

    return myResponse;
}