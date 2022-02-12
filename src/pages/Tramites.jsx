import React from 'react';
import { Link } from 'react-router-dom';

const Tramites = () => {
  return (
      <>
        <div data-card-height="150" className="card card-style bg-services" style={{height: 150}}>
            <div className="card-center text-end pe-3">
                <h1 className="color-dark font-800 mb-0 font-24">Servicios</h1>
                <h1 className="color-dark font-800 mt-n1 font-28">A un Click</h1>
                <p className="opacity-70 font-12 mb-0">Toda la web en una App</p>
            </div>
            <div className="card-overlay bg-gradient"></div>
        </div>

        <div className="row mb-0">
            <div className="col pe-2">
                <Link to="/service/judicial" data-back-button className="card card-style rounded-m me-0 p-3 mb-3">
                    <i className="fa fa-balance-scale color-red-light font-40 icon-50"></i>
                    <h4 className="pt-3">Certificado Pasado Judicial</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Policia</p>
                </Link>
            </div>
            <div className="col ps-2">
                <Link to="/service/procuraduria" data-back-button className="card card-style rounded-m ms-0  p-3 mb-3">
                    <i className="fa fa-file-powerpoint color-blue-light font-40 icon-50"></i>
                    <h4 className="pt-3">Certificado Procuraduría</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Antecedentes</p>
                </Link>
            </div>
            <div className="w-100"></div>
            <div className="col pe-2">
                <Link to="/service/contraloria" data-back-button className="card card-style rounded-m me-0 p-3 mb-3">
                    <i className="fa fa-file-alt color-magenta-light font-40 icon-50"></i>
                    <h4 className="pt-3">Certificado Contraloría</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Antecedentes Fiscales</p>
                </Link>
            </div>
            <div className="col ps-2">
                <Link to="/service/documentos" data-back-button className="card card-style rounded-m ms-0  p-3 mb-3">
                    <i className="fa fa-id-card color-yellow-light font-40 icon-50"></i>
                    <h4 className="pt-3">Documentos Perdidos</h4>
                    <p className="font-11 mt-n2 mb-0 color-highlight">Policia</p>
                </Link>
            </div>
            <div className="w-100"></div>
      </div>
      </>
  );
};

export default Tramites;
