import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS
import './css/index.css';
import './libs/materialize.css';

// Components
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

serviceWorker.register();