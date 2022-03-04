import React, {useState,useRef} from 'react'

function Stopwatch() {
   const [count, setCount]=useState(0)
    const timerIdRef= useRef(0)
  
    const startTimer=()=>{
       if(timerIdRef.current){return;}
    timerIdRef.current= setInterval(()=>{setCount((c)=> c+1)},1000)
    console.log('StartHandler clicked ')
   }

   const stopTimer=()=>{
    clearInterval(timerIdRef.current)
    timerIdRef.current=0;
    console.log('StopHandler clicked')
   }
    return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch