import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { doLogout } from '../redux/actions/ActionLogin';

const MainMenu = ({toggleMenu}) => {

    const logout = () => {
        dispatch(doLogout())
        Navigate("/login", { replace: true })
    }

    const {session} = useSelector((state) => state)
    const dispatch = useDispatch();

    const handlers = useSwipeable({ onTap: () => toggleMenu() })
    const myRef = useRef();

    const refClick = (el) => {
        handlers.ref(el);
        myRef.current = el;
    }

  return (
      <>
        <div className="card rounded-0 bg-6" style={{height: 150}}>
            <div className="card-top">
                <span onClick={toggleMenu} className="close-menu float-end me-2 text-center mt-3 icon-40 notch-clear"><i className="fa fa-times color-white"></i></span>
            </div>
            <div className="card-bottom">
                <h1 className="color-white ps-3 mb-n1 font-28">{process.env.REACT_APP_NAME}</h1>
                <p className="mb-2 ps-3 font-12 color-white opacity-50">{`${session.user.first_name} ${session.user.last_name}`}</p>
            </div>
            <div className="card-overlay bg-gradient"></div>
        </div>
        <div className="mt-4"></div>
        <div ref={refClick}>
            <h6 className="menu-divider">Servicios</h6>
            <div className="list-group list-custom-small list-menu">
                <Link id="nav-welcome" to="/tramites">
                    <i className="fa fa-scroll gradient-red color-white"></i>
                    <span>Trámites</span>
                    <i className="fa fa-angle-right"></i>
                </Link>
                <Link id="nav-welcome" to="/balance">
                    <i className="fa fa-dollar-sign gradient-green color-white"></i>
                    <span>Mi Saldo</span>
                    <i className="fa fa-angle-right"></i>
                </Link>
                <Link id="nav-welcome" to="/">
                    <i className="fa fa-gavel gradient-blue color-white"></i>
                    <span>Denuncias</span>
                    <i className="fa fa-angle-right"></i>
                </Link>

            </div>
            <h6 className="menu-divider mt-4">Configuraciones</h6>
            <div className="list-group list-custom-small list-menu">
                <Link to="/profile" data-menu="menu-colors">
                    <i className="fa fa-user gradient-highlight color-white"></i>
                    <span>Mi Perfil</span>
                    <i className="fa fa-angle-right"></i>
                </Link>
                <Link to="#" data-menu="menu-colors" onClick={logout}>
                    <i className="fa fa-sign-out-alt gradient-dark color-white"></i>
                    <span>Salir</span>
                    <i className="fa fa-angle-right"></i>
                </Link>
            </div>
        </div>

        <h6 className="menu-divider font-10 mt-4">Hecho con <i className="fa fa-heart color-red-dark pl-1 pr-1"></i> por URAWEB - <span className="copyright-year">2022</span></h6>

      </>
  );
};

export default MainMenu;
