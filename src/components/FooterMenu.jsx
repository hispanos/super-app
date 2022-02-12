import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = ({toggleMenu}) => {
  return (
      <>

        <div id="footer-bar" className="footer-bar-6" style={{transform: 'translateX(0)'}} >
            <Link to="/tramites"><i className="fa fa-scroll"></i><span>Trámites</span></Link>
            <Link to="/balance"><i className="fa fa-dollar-sign"></i><span>Mi Saldo</span></Link>
            <Link to="/" className="circle-nav active-nav"><i className="fa fa-home"></i><span>Inicio</span><em></em><strong><u></u></strong></Link>
            <Link to="/profile"><i className="fa fa-user"></i><span>Mi Perfil</span></Link>
            <Link to="/" onClick={toggleMenu} data-menu="menu-main"><i className="fa fa-bars"></i><span>Menu</span></Link>
        </div>


      </>
  );
};

export default FooterMenu;
