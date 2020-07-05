import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import './custom.scss'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(<App />,document.getElementById('root'));


// PWA stuff
serviceWorker.unregister();