import { useState } from 'react'
import './App.css'
import { useQuery,useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Users from './components/Users'

function App() {
  const { data,isLoading,isError } =  useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
      
      const response = await axios('http://localhost:3008/users')
      console.log(data);   
      return response.data
    },
    refetchOnWindowFocus : false,
    

  })



  if (isError){
   alert("Somethingwen wrong ")
   return <h1>Someything wen wrong </h1>
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="table-container">
       <h1 className='title'>List of user details</h1>
         
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
           
            <th><button className="edit-btn" >Add user</button></th>
          </tr>
        </thead>
        <tbody>
         
       {data && data.map((user) => (
            <tr >
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td >{user?.role}</td>
             
            </tr>
            ))}
       
        </tbody>
      </table>
      <div>
        <Users/>
      </div>
    </div>
    </>
  )
}

export default App
