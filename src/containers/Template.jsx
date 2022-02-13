import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import BannerInstall from '../components/BannerInstall';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import { doToggleModal } from '../redux/actions/ActionModal';


const Template = () => {

    const [headerActive, setHeaderActive] = useState(false);
    const [theme, setTheme] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    const dispatch = useDispatch()

    const {modal, modal: {NameModal}} = useSelector((state) => state)


    const toggleTheme = () => {
        setTheme(!theme)
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const toggleBackground = () => {
        if (openMenu) {
            setOpenMenu(false)
        }

        if (modal.modalActive) {
            dispatch(doToggleModal({
                modalActive: false,
                nameModal: ''
            }))
        }
    }

    const handlers = useSwipeable({ onSwipedRight: () => toggleMenu() })
    const myRef = useRef();

    const refSwipper = (el) => {
        handlers.ref(el);
        myRef.current = el;
    }


    return (
        <div className={theme ? 'theme-light' : 'theme-dark'} ref={refSwipper}>
          <div id="page">
            
            <Header 
                toggleMenu={toggleMenu} 
                toggleTheme={toggleTheme} 
                headerActive={headerActive} 
                setHeaderActive={setHeaderActive} 
            />

            <FooterMenu toggleMenu={toggleMenu} />

            <div className="page-title-clear"></div>

                <div id="menu-main" className={`menu menu-box-left rounded-0 ${openMenu ? 'menu-active' : ''}`} data-menu-width="280" data-menu-active="nav-welcome" data-menu-load="menu-main.html">
                    <MainMenu toggleMenu={toggleMenu} />
                </div>    
                
                <div className="page-content">
                    {/* Slider */}
                    <Outlet />             
                </div>

                {/* Cualquier modal o menu */}

                {
                    modal.modalActive && 
                    <NameModal data={modal.props} />
                }

                <BannerInstall />
                
          </div>
          <div className={`menu-hider ${openMenu || modal.modalActive ? 'menu-active' : ''}`} onClick={toggleBackground}></div>
        </div>
    );
};

export default Template;
