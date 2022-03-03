import React from 'react'

function List({users, removeUser}) {
    console.log('***list component rendered***')
  return (
    <div>
         {
        users.map((user) => <li key= {user.id}>{user.name}<span onClick={()=>removeUser(user.id)}> X</span></li>)
       }
    </div>
  )
}

export default React.memo(List)