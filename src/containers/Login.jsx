import React from 'react';
import { useState } from 'react';
import BannerInstall from '../components/BannerInstall';

import backgroundImage from '../assets/images/pictures/1l.jpg'
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../redux/actions/ActionLogin';
import FormLogin from '../components/FormLogin';


const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    const dispatch = useDispatch();
    //const newLogin = (data) => {dispatch(doLogin(data))}

    let from = location.state?.from?.pathname || "/";

    const {session} = useSelector((state) => state)
    const {errorForms} = useSelector((state) => state)

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
          email: '',
          password: ''
        }
    });


    const [theme, setTheme] = useState(false);

    const onSubmit = (data) => {
        dispatch(doLogin(data))
        if(session) {
            navigate(from, { replace: true });
        }
    }

    if(session != null) {
        if(session !== false) {
            return <Navigate to={from} />
        }else {
            return (
                <>
                    <div className={theme ? 'theme-light' : 'theme-dark'}>
                      <div id="page">
            
                            <div className="page-content pb-0">
            
                                <div data-card-height="cover-full" className="card mb-0" style={{backgroundImage: `url(${backgroundImage})`, height: '100vh'}}>
                                    <div className="card-center">

                                        <FormLogin errorForms={errorForms} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} watch={watch} register={register} />
                                        
                                    </div>
                                    <div className="card-overlay bg-black opacity-85"></div>
                                </div>
            
                            </div>
                            {/* Cualquier modal o menu */}
                            <BannerInstall />
                      </div>
                    </div>
                </>
            );
        }
    }else {
        return <></>
    }
};

export default Login;
