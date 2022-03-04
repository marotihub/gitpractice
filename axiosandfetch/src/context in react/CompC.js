import React from 'react'
import { UserConsumer } from './UserContext'
import CompD from './CompD'

function CompC() {
  return (
      <>    <UserConsumer>
        {
            value=>{
                return <h1>Hello {value}</h1>
            }
        }
    </UserConsumer>
    <CompD/>
    </>

    )
}

export default CompC