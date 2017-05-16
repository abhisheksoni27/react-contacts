import React, { Component } from 'react';
import logo from './logo.svg';
import Contacts from './components/Contacts';

import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);  
const store = createStore(reducer); 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
