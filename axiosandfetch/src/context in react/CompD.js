import React,{useContext} from 'react'
import { context } from './UserContext';
function CompD() {
 const userName= useContext(context);
    return (
    <div>
        <h1>The username is {userName}</h1>
    </div>
  )
}

export default CompD