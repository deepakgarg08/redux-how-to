import React from 'react';
// import logo from './logo.svg';
import MainPage from './components/MainPage'
import './App.css';

import store from './components/store'
import * as actions from './components/actions'

// console.log('store', store)
// console.log('store', store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log("store changed", store.getState())
})

store.dispatch(actions.bugAdded("bug1"))
console.log('store', store.getState())

store.dispatch(actions.bugRemoved (1))
console.log('store', store.getState())


store.dispatch(actions.bugAdded("bug1"))
console.log('store', store.getState())

unsubscribe()
store.dispatch(actions.bugResolved (1))
console.log('store', store.getState())

// store.dispatch({})


function App() {
  return (

    <div className="App">
      <MainPage />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload....
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hellllo
        </a>
      </header> */}
    </div>
  );


}





export default App;
