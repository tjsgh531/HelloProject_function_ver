import React, {useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';

import store from './store';

function App() {  
  /*---------------------스크롤 값 stage에 저장---------------------*/
  useEffect(function(){
    window.addEventListener('wheel',(e)=>{
      store.dispatch({type:"WHEELEVENT", scrollPos: window.scrollY});
    });
  },[]);

  /*--------------------------리턴 HTML 부분-------------------------*/
  return (
    <div className="App">
      <Header/>
      <Firstpage/>
      <Secondpage/>
    </div>
  );
}

export default App;