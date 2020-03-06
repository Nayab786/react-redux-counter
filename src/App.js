import React from 'react';

import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';

import increment from './actions/increment';
import decrement from './actions/decrement';
import changeStep from './actions/change-step';




function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  return (
    <div className="App">
      <h1>Counter: {counter.count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input type="number" onChange = {(e)=>dispatch(changeStep(e))}/>
    </div>
  );
}

export default App;
