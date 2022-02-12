import React from 'react';
import useOnlineStatus from '@rehooks/online-status';
import { useForm } from 'react-hook-form';
import { db } from '../utils/dbLocal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { doUpdateProfile, doUpdateProfileOffline } from '../redux/actions/UpdateProfile';
import Swal from 'sweetalert2'


const Profile = () => {

    const onlineStatus = useOnlineStatus();
    const dispatch = useDispatch()

    const {session} = useSelector((state) => state)
    const {errorForms} = useSelector((state) => state)

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

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            first_name: session.user.first_name,
            last_name: session.user.last_name,
            email: session.user.email,
            city: session.user.city,
            description: session.user.description
        }
    });
    
    const onSubmit = async (data) => {
        if (onlineStatus) {
            dispatch(doUpdateProfile(session.user.id, data))
        }else {
            dispatch(doUpdateProfileOffline(session.user.id, data))
        }

        if (errorForms?.success) {
            Toast.fire({
                icon: 'success',
                title: 'Actualizado con éxito'
            })
        }
    }

  return (
      <>
      <div className="card card-style">
            <div className="content">
                <p className="mb-n1 color-highlight font-600 font-12">Edita tu Perfil</p>
                <h4>Información Básica</h4>
                <p>
                    Información pública que se muestra en la parte superior de su tarjeta en su página de perfil.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 mb-3">
                    
                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <input type="text" className="form-control validate-name" id="form1" placeholder="Primer Nombre" {...register("first_name", { required: 'Requerido' } )} />
                        <label htmlFor="form1" className="color-highlight">Nombres</label>
                        <i className="fa fa-times disabled invalid color-red-dark"></i>
                        <i className="fa fa-check disabled valid color-green-dark"></i>
                        <em>(required)</em>
                    </div>
                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <input type="name" className="form-control validate-name" id="form1" placeholder="Apellidos" {...register("last_name", { required: 'Requerido' } )} />
                        <label htmlFor="form1" className="color-highlight">Apellidos</label>
                        <i className="fa fa-times disabled invalid color-red-dark"></i>
                        <i className="fa fa-check disabled valid color-green-dark"></i>
                        <em>(required)</em>
                    </div>
                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <input type="email" className="form-control validate-name" id="form1" placeholder="correo@domain.com"
                        {...register("email", { 
                            required: "El email es requerido", 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Debe introducir un correo válido"
                                } 
                            } 
                        )} 
                        />
                        <label htmlFor="form1" className="color-highlight">Correo</label>
                        <i className="fa fa-times disabled invalid color-red-dark"></i>
                        <i className="fa fa-check disabled valid color-green-dark"></i>
                        <em>(required)</em>
                    </div>
                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <input type="text" className="form-control validate-name" id="form1" placeholder="Medellín" {...register("city", { required: 'Requerido' } )} />
                        <label htmlFor="form1" className="color-highlight">Ciudad</label>
                        <i className="fa fa-times disabled invalid color-red-dark"></i>
                        <i className="fa fa-check disabled valid color-green-dark"></i>
                        <em>(required)</em>
                    </div>
                    <div className="input-style has-borders no-icon input-style-always-active mb-4">
                        <textarea {...register("description" )} id="form7" placeholder="Escribe algo sobre ti"></textarea>
                        <label htmlFor="form7" className="color-highlight">Perfil</label>
                    </div>                    
                </div>
                
                <button className="btn btn-full btn-m gradient-highlight rounded-s font-13 font-600 mt-4" type='submit'>Guardar</button>
                </form>
                
            </div>
        </div>
      </>
  );
};

export default Profile;