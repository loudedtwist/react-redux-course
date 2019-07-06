import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux' 

import store from './redux/store'

import Postform from './components/Postform'
import Posts from './components/Posts'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>React App</h1>
        <Postform/>
        <Posts/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
