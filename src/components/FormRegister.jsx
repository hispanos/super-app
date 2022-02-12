import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Link } from 'react-router-dom';

const FormRegister = ({errorForms, errors, handleSubmit, onSubmit, watch, register, isRegisterSuccess}) => {
    
    return (
      <>
        <div className="text-center">
            <p className="font-600 color-highlight mb-1 font-16">Super App</p>
            <h1 className="font-40 color-white">Registro</h1>
        </div>
        
        <div className="content px-4">
        <form onSubmit={handleSubmit(onSubmit)} className='loginForm' noValidate>
            <div className={`input-style input-transparent no-borders has-icon validate-field mb-4 ${watch('first_name').length ? 'input-style-active' : ''}`}>
                <i className="fa fa-file-signature"></i>
                <input type="text" className="form-control" id="first_name" placeholder="Nombres Completos" {...register("first_name", { required: 'Este Campo es necesario' } )} />
                <label htmlFor="first_name" className="color-highlight">Nombres: {<ErrorMessage errors={errors} name={'first_name'} />}</label>
                <i className={`fa fa-times ${errors.first_name ? '' : 'disabled'} invalid color-red-dark`}></i>
                <i className={`fa fa-check ${(!errors.first_name && watch('first_name').length) ? '' : 'disabled'} valid color-green-dark`}></i>
                {watch('first_name').length ? '' : <em>(requerido)</em>}
            </div>
            <div className={`input-style input-transparent no-borders has-icon validate-field mb-4 ${watch('last_name').length ? 'input-style-active' : ''}`}>
                <i className="fa fa-id-card-alt"></i>
                <input type="text" className="form-control" id="last_name" placeholder="Apellidos Completos" {...register("last_name", { required: 'Este Campo es necesario' } )} />
                <label htmlFor="last_name" className="color-highlight">Apellidos: {<ErrorMessage errors={errors} name={'last_name'} />}</label>
                <i className={`fa fa-times ${errors.last_name ? '' : 'disabled'} invalid color-red-dark`}></i>
                <i className={`fa fa-check ${(!errors.last_name && watch('last_name').length) ? '' : 'disabled'} valid color-green-dark`}></i>
                {watch('last_name').length ? '' : <em>(requerido)</em>}
            </div>
            <div className={`input-style input-transparent no-borders has-icon validate-field mb-4 ${watch('email').length ? 'input-style-active' : ''}`}>
                <i className="far fa-envelope"></i>
                <input type="email" className="form-control validate-name" id="email" placeholder="Email" 
                {...register("email", { 
                    required: "El email es requerido", 
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Debe introducir un correo válido"
                        } 
                    } 
                )} 
                />
                <label htmlFor="email" className="color-highlight">Correo: {
                    <ErrorMessage errors={errors} name={'email'} />
                }</label>
                <i className={`fa fa-times ${errors.email ? '' : 'disabled'} invalid color-red-dark`}></i>
                <i className={`fa fa-check ${(!errors.email && watch('email').length) ? '' : 'disabled'} valid color-green-dark`}></i>
                {watch('email').length ? '' : <em>(requerido)</em>}
            </div>
            <div className={`input-style input-transparent no-borders has-icon validate-field mb-4 ${watch('password').length ? 'input-style-active' : ''}`}>
                <i className="fa fa-lock"></i>
                <input type="password" className="form-control validate-password" id="password" placeholder="Contraseña" {...register("password", { required: 'La contraseña es necesaria' } )} />
                <label htmlFor="password" className="color-highlight">Contraseña: {<ErrorMessage errors={errors} name={'password'} />}</label>
                <i className={`fa fa-times ${errors.password ? '' : 'disabled'} invalid color-red-dark`}></i>
                <i className={`fa fa-check ${(!errors.password && watch('password').length) ? '' : 'disabled'} valid color-green-dark`}></i>
                {watch('password').length ? '' : <em>(requerido)</em>}
            </div>

            {
                errorForms?.message &&
                <div className="text-center font-400 color-highlight mb-1 font-14">
                    <span>{errorForms.message}</span>
                </div>
            }

            {
                isRegisterSuccess &&
                <div className="ms-3 me-3 alert alert-small rounded-s shadow-xl bg-green-dark" role="alert">
                    <span><i className="fa fa-check color-white"></i></span>
                    <strong className="color-white">Usuario Registrado con éxito</strong>
                    <button type="button" className="close color-white opacity-60 font-16" data-bs-dismiss="alert" aria-label="Close">&times;</button>
                </div>    
            }
            
            <button type='submit' data-back-button className="btn btn-full btn-l font-600 font-13 gradient-highlight mt-4 rounded-s">Registrar</button>
        </form>
            <div className="row pt-3 mb-3">
                <div className="col-6 text-start font-11">
                    <Link className="color-white opacity-50" to="/">Olvidó su Contraseña?</Link>
                </div>
                <div className="col-6 text-end font-11">
                    <Link className="color-white opacity-50" to="/login">Iniciar Sesión</Link>
                </div>
            </div>

        </div>
      </>
  );
};

export default FormRegister;
