import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import { useAddUser, useFetchUsers } from './hooks/userList'





function App () {


   const {mutate}=useAddUser()
   const{data,isLoading,isError,error}=useFetchUsers()

    


  if (isError) {
    alert('Somethingwen wrong ')
    console.log(error);
    
    return <h1>Someything wen wrong </h1>
  }
 
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className='table-container'>
        <h1 className='title'>List of user details</h1>

        <table className='user-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>

              <th>
                <button className='edit-btn' onClick={()=>mutate()}>Add user</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(user => (
                <tr key={user.id}>
                  
                  <td>{user?.id}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <Users />
        </div>
      </div>
    </>
  )
}

export default App
