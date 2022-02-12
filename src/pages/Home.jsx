import React from 'react';

const Home = () => {
  return (
    <>
      {/* <div className="card card-style shadow-xl">        
          <div className="content">
              <p className="color-highlight font-600 mb-n1">Una solución Completa</p>
              <h1 className="font-24 font-700 mb-2">Meet Appkit <i className="fa fa-star mt-n2 font-30 color-yellow-dark float-end me-2 scale-box"></i></h1>
              <p className="mb-1">
                  The ultimate Mobile Solution for your next mobile project. Appkit is packed with hundreds of reusable components, PWA, RTL and it's Dark Mode ready.
              </p>
          </div>
      </div>    */}
      <div className="card card-style bg-banner" style={{height: 200}}>
        <div className="card-center text-end me-3">
            <h1 className="color-white font-900 font-34 mb-n2">SUPER APP</h1>
            <h1 className="color-white font-900 font-18 mb-n1">Servicios Online</h1>
        </div>
        <div className="card-overlay bg-black opacity-60"></div>
    </div>

    <div data-card-height="300" className="card card-style bg-mujer" style={{height: 300}}>
        <div className="card-top">
            <i className="fa fa-quote-left fa-4x color-white opacity-10 ps-3 pt-3"></i>
        </div>
        <div className="card-center">
            <h6 className="color-white text-center font-21 font-300 line-height-xl pe-3 ps-3 mb-0">
                Con SuperApp ya no salgo de mi casa para hacer mis trámites. Encantado de usar SuperApp
            </h6>
        </div>
        <div className="card-bottom">
            <i className="fa fa-quote-right float-end fa-4x color-white opacity-10 pe-3 pb-3"></i>
        </div>
        <div className="card-overlay bg-black opacity-80"></div>
    </div>

      <div className="row mb-0">
        <a href="#" className="col-6 pe-0">
            <div className="card mr-0 card-style">
                <div className="d-flex pt-3 pb-3">
                    <div className="align-self-center">
                        <i className="fa fa-clipboard-check color-green-light ms-3 font-34 mt-1"></i>
                    </div>
                    <div className="align-self-center">
                        <h5 className="ps-2 ms-1 mb-0">Servicios <br></br> a un click</h5>
                    </div>
                </div>
                <p className="px-3">
                    EDisfruta pagar tus servicios en tu casa.
                </p>
            </div>
        </a>
        <a href="#" className="col-6 ps-0">
            <div className="card ml-0 card-style">
                <div className="d-flex pt-3 pb-3">
                    <div className="align-self-center">
                        <i className="fa fa-wallet color-blue-dark ms-3 font-34 mt-1"></i>
                    </div>
                    <div className="align-self-center">
                        <h5 className="ps-2 ms-1 mb-0">Saldo <br></br>Cívico</h5>
                    </div>
                </div>
                <p className="px-3">
                    Tu celular es tu billetera! 😉
                </p>
            </div>
        </a>
      </div>
    </>
  );
};

export default Home;
