import React, {useRef, useEffect} from 'react'

function InputFocus() {
 const inputRef= useRef();
 useEffect(()=>{
    inputRef.current.focus()
 },[])
    return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default InputFocus