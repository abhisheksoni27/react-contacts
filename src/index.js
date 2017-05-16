import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addContacts from './redux/reducers/index.js';

let store = createStore(addContacts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);