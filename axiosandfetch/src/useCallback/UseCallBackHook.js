import React, { useState, useCallback } from "react";
import List from "./List";

const userlist = [
  {
    id: 1,
    name: "maroti",
  },
  {
    id: 2,
    name: "shikhar",
  },
  {
    id: 3,
    name: "vivek",
  },
  {
    id: 4,
    name: "vijaykumar",
  }
];
function UseCallBackHook() {
  const [users, setUsers] = useState(userlist);
  const [text, setText]= useState('')

const removeUser =useCallback( (id) => {
    console.log('removeUser', id)
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  },[users]);

  const handleTextChange=(e)=>{
  setText(e.target.value)
  }
  return ( 
    <div>
        <input type='text' value={text} onChange={handleTextChange}/>
      <List users={users} removeUser={removeUser} />
    </div>
  )
}

export default UseCallBackHook;
