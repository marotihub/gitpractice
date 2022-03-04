import React,{useRef} from 'react'

function CountButtonClick() {
  const countRef= useRef(0)
  const handleClick =()=>{
    countRef.current++
     console.log(`button clicked ${countRef.current} times`)
     
  }
  console.log("component rendered")
  return (
    <div>
   <button onClick={handleClick}>CountButtonClick</button>
    </div>
  )
}

export default CountButtonClick