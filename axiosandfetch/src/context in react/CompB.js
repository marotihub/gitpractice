import React from 'react'
import CompC from './CompC'
import { UserConsumer1 } from './UserContext'

function CompB() {
  return (
    <div>
        <UserConsumer1>
            {
                value=>{
                    return <h2>City: {value}</h2>
                }
            }
        </UserConsumer1>
        <CompC/>
    </div>
  )
}

export default CompB