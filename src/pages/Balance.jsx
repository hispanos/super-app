import React from 'react';

const Balance = () => {
  return (
    <>

        <div className="card notch-clear rounded-0 gradient-dark mb-n5">
            <div className="card-body pt-4 mt-2 mb-2">
                <h1 className="color-white font-30 float-start">Mi Cartera</h1>
                <a href="#" data-menu="menu-cards" className="float-end color-white btn btn-xxs font-600 rounded-s border-white"><i className="fa fa-plus me-2"></i>Agregar Saldo</a>
                <div clas="clearfix"></div>
            </div>

            {/* CaRD */}
            <div className="card card-style mt-n3">
                <div className="content mb-2 mt-3">
                    <div className="row text-center mb-0">
                        <a href="#" data-menu="menu-withdraw" className="col-3">
                            <span className="icon icon-l gradient-green shadow-l rounded-sm">
                                <i className="fa fa-university font-18 color-white"></i>
                            </span>
                            <p className="mb-0 pt-1 font-11">Retirar</p>
                        </a>
                        <a href="#" data-menu="menu-transfer" className="col-3">
                            <span className="icon icon-l gradient-blue shadow-l rounded-sm">
                                <i className="fa fa-arrow-up font-18 color-white"></i>
                            </span>
                            <p className="mb-0 pt-1 font-11">Transferir</p>
                        </a>
                        <a href="#" data-menu="menu-request" className="col-3">
                            <span className="icon icon-l gradient-brown shadow-l rounded-sm">
                                <i className="fa fa-arrow-down font-18 color-white"></i>
                            </span>
                            <p className="mb-0 pt-1 font-11">Solicitar</p>
                        </a>
                        <a href="#" data-menu="menu-receipts" className="col-3">
                            <span className="icon icon-l gradient-magenta shadow-l rounded-sm">
                                <i className="fa fa-receipt font-18 color-white"></i>
                            </span>
                            <p className="mb-0 pt-1 font-11">Facturas</p>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="card card-style mt-n3">
                <div className="content mb-2 mt-3">
                    <div className="d-flex">
                        <div className="pe-4">
                            <p className="font-600 color-highlight mb-0">Mi Saldo</p>
                            <h1>$96,500</h1>
                        </div>
                        <div className="w-100 pt-1">
                            <h6 className="font-14 font-500">Ingresos<span className="float-end color-green-dark">+$200,000</span></h6>
                            <div className="divider mb-2 mt-1"></div>
                            <h6 className="font-14 font-500">Egresos<span className="float-end color-red-dark">-$23,400</span></h6>
                        </div>
                    </div>
                    <div className="divider mb-3"></div>
                    <div className="row mb-0">
                        <div className="col-6 pe-1">
                            <h6 className="font-12 font-500">Por Pagar</h6>
                            <h2 className="color-brown-dark mb-0">$0</h2>
                        </div>
                        <div className="col-6 ps-1">
                            <h6 className="font-12 font-500">Ahorrado</h6>
                            <h2 className="color-blue-dark mb-0">$40,500</h2>
                        </div>
                        <div className="col-12 pb-3"></div>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
};

export default Balance;
