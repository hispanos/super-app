import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({headerActive, toggleTheme, toggleMenu, setHeaderActive}) => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset)
            if (window.pageYOffset >= 32) {
                setHeaderActive(true)
            }else {
                setHeaderActive(false)
            }
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
      <>
        <div className={`header header-auto-show header-fixed header-logo-center ${headerActive ? 'header-active' : ''}`}>
            <Link to='/' className="header-title">{process.env.REACT_APP_NAME}</Link>
            <span onClick={toggleMenu} data-menu="menu-main" className="header-icon header-icon-1"><i className="fas fa-bars"></i></span>
            <span onClick={toggleTheme} data-toggle-theme className="header-icon header-icon-4 show-on-theme-dark"><i className="fas fa-sun"></i></span>
            <span onClick={toggleTheme} data-toggle-theme className="header-icon header-icon-4 show-on-theme-light"><i className="fas fa-moon"></i></span>
        </div>

        <div className="page-title page-title-fixed" style={headerActive ? {opacity: 0} : {opacity: 1}}>
            <h1>{process.env.REACT_APP_NAME}</h1>
            <span onClick={toggleTheme} className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i className="fa fa-moon"></i></span>
            <span onClick={toggleTheme}className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i className="fa fa-lightbulb color-yellow-dark"></i></span>
            <span onClick={toggleMenu} href="#" className="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i className="fa fa-bars"></i></span>
        </div>
      </>
  );
};

export default Header;
