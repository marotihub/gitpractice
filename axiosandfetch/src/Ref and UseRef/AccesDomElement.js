import React, { useRef, useEffect}from 'react'

function AccesDomElement() {
  
  const domElement= useRef();
  useEffect(()=>{
       const  accessDomElement= domElement.current;
       console.log(accessDomElement)
  },[])
    return (
    <div ref={domElement}>
        I am div element
    </div>
  )
}

export default AccesDomElement