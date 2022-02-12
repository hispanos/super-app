import React from 'react';

const BannerInstall = () => {
  return (
      <>
        <div id="menu-install-pwa-android" className="menu menu-box-bottom rounded-m">
            <img className="mx-auto mt-4 rounded-m" src="app/icons/icon-128x128.png" alt="img" width="90" />
            <h4 className="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
            <p className="text-center boxed-text-xl">
                Install Appkit on your home screen, and access it just like a regular app. It really is that simple!
            </p>
            <div className="boxed-text-l">
                <a href="#" className="pwa-install mx-auto btn btn-m font-600 bg-highlight">Add to Home Screen</a>
                <a href="#" className="pwa-dismiss close-menu btn-full mt-3 pt-2 text-center text-uppercase font-600 color-red-light font-12 pb-4 mb-3">Maybe later</a>
            </div>
        </div>   

        <div id="menu-install-pwa-ios" className="menu menu-box-bottom rounded-m">
            <div className="boxed-text-xl top-25">
                <img className="mx-auto mt-4 rounded-m" src="app/icons/icon-128x128.png" alt="img" width="90" />
                <h4 className="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
                <p className="text-center ms-3 me-3">
                    Install Appkit on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
                </p>
                <a href="#" className="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-900 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
            </div>
        </div>  
      </>
  );
};

export default BannerInstall;
