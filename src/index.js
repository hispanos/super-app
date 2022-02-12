import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './assets/styles/bootstrap.css'
import './assets/styles/style.css'
import './assets/fonts/css/fontawesome-all.min.css'
import './assets/styles/highlights/highlight_orange.css'

ReactDOM.render(
    <Routes />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register();