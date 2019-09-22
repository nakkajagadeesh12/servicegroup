import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store';

render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));

serviceWorker.unregister();
