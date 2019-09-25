import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import App from './App';
import './assets/styles/main.scss';
import configureStore from './redux/store';

import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: false,
  draggable: false,
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
