import React from 'react'
import { useForm } from 'react-hook-form';

const Pay = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {

        }
    });

    const onSubmit = async (data) => {
        //dispatch(doUpdateProfile(session.user.id, data))
    }

  return (
        <>
        <div className="card card-style">
            <div className="content">
                <p className="mb-n1 color-highlight font-600 font-12">Pagar</p>
                <h4>Servicios Públicos</h4>
                <p>
                    A través de esta opción puede pagar cualquier factura de servicio público.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 mb-3">
                    
                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <select className="form-control validate-name" id="form1" {...register("type", { required: 'Requerido' } )}>
                            <option value="">Seleccione</option>
                            <option value="">EPM</option>
                            <option value="">AGUAS DE URABA</option>
                        </select>
                        <label htmlFor="form1" className="color-highlight">Proveedor</label>
                    </div>

                    <div className="input-style has-borders no-icon input-style-always-active validate-field mb-4">
                        <input type="number" className="form-control validate-name" id="form1" {...register("number", { required: 'Requerido' } )} placeholder="Escriba el número de la factura" />
                        <label htmlFor="form1" className="color-highlight">Número de Factura</label>
                    </div>
                              
                </div>
                
                <button className="btn btn-full btn-m gradient-highlight rounded-s font-13 font-600 mt-4" type='submit'>Pagar</button>
                </form>
                
            </div>
        </div>
        </>
  )
}

export default Pay