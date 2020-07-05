import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter'
import './custom.scss';



ReactDOM.render(<AppRouter/>,document.getElementById('root'));



// PWA stuff
serviceWorker.unregister();