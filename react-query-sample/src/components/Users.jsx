import { useQueryClient } from '@tanstack/react-query'
import React from 'react'


const Users = () => {
    const query = useQueryClient()
   const users =  query.getQueryData("users")
   console.log('heyy=='+users);
   
  return (
    <div>
      <h1>Updated users</h1>
      {
        users && users.map((user)=>{
            <p key={users.id}>{user?.name}</p>
        })
      }
    </div>
  )
}

export default Users
