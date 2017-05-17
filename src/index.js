import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import AddContact from './components/AddContact';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}> 
    <Route path="/" component={App}/>
    <Route path="/add-contact" component={AddContact}/>
    
  </Router>
</Provider>, document.getElementById('root'));