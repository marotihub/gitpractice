import './App.css';
import React,{useState} from 'react';

import AxiosApiCall from './component/AxiosApiCall';
import FetchApicall from './component/FetchApicall';
import Parent from './pureComponent/Parent';
import UseCallBackHook from './useCallback/UseCallBackHook';
import CalculateFactorial from './useMemo/CalculateFactorial';
import Home from './lazy loading/Home';
import { UserProvider } from './context in react/UserContext';
import {UserProvider1} from './context in react/UserContext'
import CompA from './context in react/CompA';
import CountButtonClick from './Ref and UseRef/CountButtonClick';
import Stopwatch from './Ref and UseRef/Stopwatch';
import AccesDomElement from './Ref and UseRef/AccesDomElement';
import InputFocus from './Ref and UseRef/InputFocus';
import UseRefVscreateRef from './Ref and UseRef/UseRefVscreateRef';


function App() {
  // *****lazy loading example values**
  // const [value, setValue]=useState('')

  // const handleChange=(e)=>{
  //   setValue(()=>e.target.value)
  // }
  // ********Context values*******
  


  return (
    <div className="App">
     <h1>First Github heading</h1>
     {/* <FetchApicall/> */}
     {/* <AxiosApiCall/> */}
     {/* ********Pure component example*** */}
     {/* <Parent/> */}

     {/* ****useCallback Hook*** */}
     {/* <UseCallBackHook/> */}

     {/* ****useMemo** */}
     {/* <CalculateFactorial/> */}

     {/* *****lazy loading example** */}
     {/* <input type='text' value={value} onChange={handleChange} />
     <h3>{value}</h3>
     <Home user={value}/> */}

     {/* *****Context ******* */}
{/* 
      <UserProvider value='Maroti Mutyepawar'>
        <UserProvider1 value='Nanded'>
              <CompA/>
        </UserProvider1>
 </UserProvider> */}

{ /* ************useRef*********** */}
           {/* <CountButtonClick/> */}
           {/* <Stopwatch/> */}
           {/* <AccesDomElement/> */}
           {/* <InputFocus/> */}
           <UseRefVscreateRef/>
    </div>
  );
}

export default App;
