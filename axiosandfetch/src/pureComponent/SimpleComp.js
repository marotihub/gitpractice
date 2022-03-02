import React from 'react'

function SimpleComp(props) {
    console.log('simple Component rendered')
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}

export default SimpleComp