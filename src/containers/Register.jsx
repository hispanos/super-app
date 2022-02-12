import React from 'react';
import { useState } from 'react';
import BannerInstall from '../components/BannerInstall';

import backgroundImage from '../assets/images/pictures/1l.jpg'
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { doRegister } from '../redux/actions/ActionRegister';
import Swal from 'sweetalert2'


const Register = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    let navigate = useNavigate();
    let location = useLocation();
    const dispatch = useDispatch();
    //const newLogin = (data) => {dispatch(doLogin(data))}

    let from = location.state?.from?.pathname || "/";

    const {session} = useSelector((state) => state)
    const myState = useSelector((state) => state)
    const {errorForms} = useSelector((state) => state)
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    });


    const [theme, setTheme] = useState(false);

    const onSubmit = (data) => {
        const newData = {
            ...data,
            role: 3,
            status: "active"
        }
        dispatch(doRegister(newData))
        if(myState.register?.user) {
            Toast.fire({
                icon: 'success',
                title: 'Registrado con éxito'
            })
            setIsRegisterSuccess(true)
            setTimeout(() => {
                navigate('/login', { replace: true });
            }, 3000)
        }

        if (errorForms?.message && !myState.register) {
            Toast.fire({
                icon: 'error',
                title: errorForms?.message
            })
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

                                        <FormRegister errorForms={errorForms} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} watch={watch} register={register} isRegisterSuccess={isRegisterSuccess} />
                                        
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

export default Register;
