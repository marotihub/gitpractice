import React, {useRef, createRef, useState} from 'react'

function UseRefVscreateRef() {
  const [count, setCount]= useState(0)
  const useRefInput= useRef();
  const createRefInput= createRef();
// useRef value update at initial render only
  if(!useRefInput.current){
      console.log('_________useRef called at initial render only')
      useRefInput.current= count;
  }
  //createRef value updated with every render
  if(!createRefInput.current){
    console.log('createRefInput called on every render')
    createRefInput.current= count;
}
    return (
    <div>
        <h2>count: {count}</h2>
        <h2>useRefInput value: {useRefInput.current}</h2>
        <h2>createRefInput value: {createRefInput.current}</h2>

        <button onClick={()=> setCount(count=> count +1)}>Increment</button>
    </div>
  )
}

export default UseRefVscreateRef