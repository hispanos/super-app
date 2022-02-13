import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ModalSuccess from '../components/ModalAction'
import { doToggleModal } from '../redux/actions/ActionModal'

const Complaint = () => {

    const dispatch = useDispatch()

    const toggleModal = (name) => {
        dispatch(doToggleModal({
            modalActive: true,
            NameModal: ModalSuccess,
            props: {
                text: name,
                icon: 'fa-check-circle'
            }
        }))
    }


    return (
        <>
        <div data-card-height="150" className="card card-style bg-services" style={{height: 150}}>
            <div className="card-center text-end pe-3">
                <h1 className="color-dark font-800 mb-0 font-24">Denuncias</h1>
                <h1 className="color-dark font-800 mt-n1 font-28">Ciudadanas</h1>
                <p className="opacity-70 font-12 mb-0">Denuncie en un Click</p>
            </div>
            <div className="card-overlay bg-gradient"></div>
        </div>

        <div className="row mb-0">
            <div className="col pe-2" onClick={() => {toggleModal('Fraude')}}>
                <div data-back-button className="card card-style rounded-m me-0 p-3 mb-3">
                    <i className="fa fa-mask color-red-light font-40 icon-50"></i>
                    <h4 className="pt-3">Fraude Servicios Públicos</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Social</p>
                </div>
            </div>
            <div className="col ps-2" onClick={() => {toggleModal('Huecos')}}>
                <div data-back-button className="card card-style rounded-m ms-0  p-3 mb-3">
                    <i className="fa fa-road color-blue-light font-40 icon-50"></i>
                    <h4 className="pt-3">Huecos en la Calle</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Público</p>
                </div>
            </div>
            <div className="w-100"></div>

            <div className="w-100"></div>
        </div>
        </>
    )
}

export default Complaint