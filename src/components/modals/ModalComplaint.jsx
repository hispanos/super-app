import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { saveForm } from '../../redux/actions/ActionForm'
import { doToggleModal } from '../../redux/actions/ActionModal'
import ModalAction from '../ModalAction'

const ModalComplaint = ({data}) => {

    const dispatch = useDispatch()
    const {form, errorForms} = useSelector((state) => state)

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            type: data.text
        }
    });

    const toggleModal = () => {
        dispatch(doToggleModal({
            modalActive: false,
            NameModal: '',
        }))
    }

    const onSubmit = (data) => {
        console.log(data)
        dispatch(saveForm(data, 'items/complaint'))
    }

    useEffect(() => {
        if (form.form) {
            dispatch(doToggleModal({
                modalActive: true,
                NameModal: ModalAction,
                props: {
                    text: errorForms?.success ? 'Registrado con éxito' : errorForms.message,
                    icon: errorForms?.success ? 'fa-check-circle' : 'fa-times-circle',
                    color: errorForms?.success ? 'green' : 'red'
                }
            }))
        }
    }, [errorForms])

    return (
        <>
        <div className="menu menu-box-modal rounded-m bg-theme menu-active" style={{display: 'block', width: '85%', height: '80%'}}>
            <div className="menu-title">
                <p className="color-highlight">Denuncie</p>
                <h1 className="font-800">{data.text}</h1>
                <a href="#" className="close-menu" onClick={toggleModal}><i className="fa fa-times-circle"></i></a>
            </div>
            
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="divider mt-n2"></div>
                    <div className="row mb-0">
                        <div className="col-12">
                            <div className="input-style input-style-always-active has-borders mb-4">
                                <input {...register("location" )} type="text" className="form-control" id="location" placeholder="Dirección del incidente" />
                                <label htmlFor="location" className="color-highlight">Ubicación</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="file-data pb-5">
                                <input {...register("photo" )} type="file" id="photo" className="upload-file bg-blue-light shadow-s rounded-s" accept="image/*" />
                                <p className="upload-file-text color-white">Subir Foto</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-style input-style-always-active has-borders mb-4">
                                <textarea {...register("description" )} id="description" placeholder="Describe el problema encontrado..."></textarea>
                                <label htmlFor="description" className="color-highlight">Descripción</label>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <button type="submit" className="close-menu btn btn-full gradient-highlight font-13 btn-m font-600 mt-3 rounded-s button-modal" >Guardar</button>
                </form>
            </div>
        </div>
        </>
  )
}

export default ModalComplaint