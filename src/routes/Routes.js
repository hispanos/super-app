import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes, Route, Navigate, useLocation
} from "react-router-dom";

import '../utils/axiosConfig'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store/Store';

import Login from '../containers/Login';
import Home from '../pages/Home';
import { checkConection, checkConectionOffline } from '../redux/actions/CheckConnection';
import Template from '../containers/Template';
import Tramites from '../pages/Tramites';
import Service from '../pages/Service';
import Balance from '../pages/Balance';
import Profile from '../pages/Profile';
import Register from '../containers/Register';
import useOnlineStatus from '@rehooks/online-status';


const Router = () => {

    return (
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/register" element={ <Register /> } />
                        <Route path="/" element={ <ProtectedRoute> <Template /> </ProtectedRoute> }>
                            <Route index element={ <Home /> } />
                            <Route path="/tramites" element={ <Tramites /> } />
                            <Route path="/balance" element={ <Balance /> } />
                            <Route path="/profile" element={ <Profile /> } />
                            <Route path="/service/:type" element={ <Service /> } />
                            {/* <Route path="products" element={ <GeneralRoute /> }>
                                <Route index element={ <ListItems permission={{path: '/products'}} title="Productos" /> } />
                                <Route path="new" element={ <NewItem title="Nuevo Producto" /> } />
                                <Route path="edit/:id" element={ <EditItem /> } />
                            </Route>
                            <Route path="customers" element={ <GeneralRoute /> }>
                                <Route index element={ <ListItems permission={{path: '/customers'}} title="Clientes" /> } />
                                <Route path="new" element={ <NewItem title="Nuevo Cliente" /> } />
                                <Route path="edit/:id" element={ <EditItem /> } />
                            </Route> */}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    )
}

const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        if(onlineStatus) {
            dispatch(checkConection())
        }else {
            dispatch(checkConectionOffline())
        }
    }, [onlineStatus])
    
    return children
}

const ProtectedRoute = ({children}) => {
    let location = useLocation();
    const {session} = useSelector((state) => state)

    if(session != null) {
        if(session) {
            //Chequeo los permisos de las rutas
            return children
        }else {
            return <Navigate to="/login" state={{ from: location }} />
        }
    }else {
        return <></>
    }

}

export default Router