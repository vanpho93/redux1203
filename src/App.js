import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

function reducer(state = { value: 1 }, action) {
  // return { value: 10 };
  if (action.type === 'INCREASE') return { value: state.value + 1 };
  if (action.type === 'DESCREASE') return { value: state.value - 1 };
  if (action.type === 'RESET') return { value: 1 };
   return state;
}

const store = createStore(reducer);

console.log(store.getState());
store.dispatch({ type: 'INCREASE' });
console.log(store.getState());
store.dispatch({ type: 'INCREASE' });
console.log(store.getState());
store.dispatch({ type: 'DESCREASE' });
console.log(store.getState());

/*
  - state {}
  - store
  - reducer -> function tinh toan state moi
  - action { type: '' }


*/
