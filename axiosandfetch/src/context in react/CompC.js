import React from 'react'
import { UserConsumer } from './UserContext'

function CompC() {
  return (
    <UserConsumer>
        {
            value=>{
                return <h1>Hello {value}</h1>
            }
        }
    </UserConsumer>
    )
}

export default CompC