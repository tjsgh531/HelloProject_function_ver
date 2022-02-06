import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import Firstpage from './components/Firstpage';

function App() {
  /*
  useEffect(function(){
    window.addEventListener('click',()=>{
      alert("멈춰!!");
    })
  },[]);
  */
  return (
    <div className="App">
        <Header/>
        <Firstpage/>
    </div>
  );
}

export default App;