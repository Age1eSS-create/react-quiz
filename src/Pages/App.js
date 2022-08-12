import React , { useEffect } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Main from './Main/Main';

function App() {

  // useEffect(() => {
  //   dispatch(getQuestion())
  // },[])

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
