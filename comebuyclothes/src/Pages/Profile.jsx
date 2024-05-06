import React from 'react'

const Profile = (props) => {
  const {user} = props
  return (
    <div>
      <h1>My Details</h1>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      {/* <h2>Add Your Mobile Number!</h2>
      <h2>Add Your Birthday!</h2>
      <h2>Add Your Address!</h2> */}
      
      <h1>Password</h1>
      <h2>Edit Password, don't verify just edit</h2>
    </div>
  )
}

export default Profile
