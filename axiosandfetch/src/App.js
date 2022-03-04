import './App.css';
import React,{useState} from 'react';

import AxiosApiCall from './component/AxiosApiCall';
import FetchApicall from './component/FetchApicall';
import Parent from './pureComponent/Parent';
import UseCallBackHook from './useCallback/UseCallBackHook';
import CalculateFactorial from './useMemo/CalculateFactorial';
import Home from './lazy loading/Home';

function App() {
  
  const [value, setValue]=useState('')

  const handleChange=(e)=>{
    setValue(()=>e.target.value)
  }
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
     <input type='text' value={value} onChange={handleChange} />
     <h3>{value}</h3>
     <Home user={value}/>

    </div>
  );
}

export default App;
