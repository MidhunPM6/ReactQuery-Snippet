import { useQueryClient } from '@tanstack/react-query'
import React from 'react'


const Users = () => {
    const query = useQueryClient()
   const users =  query.getQueryData(["users"])
    
   
  return (
    <div>
      <h1>Updated users</h1>
      
       {users?.length > 0 ? (
    users.map((user) => <p key={user.id}>{user.name}</p>)
  ) : (
    <p>No users found</p>
)}
   </div>
  )
}

export default Users
