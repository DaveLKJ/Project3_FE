import React, {useState, useEffect} from 'react'
import { getUserInfo } from '../Utilities/amalinacode'

const Profile = (props) => {
  const {user} = props
  console.log(user)
  const[userProfile, setUserProfile] = useState(null)
  useEffect(() => {
    fetchUserProfile();
  }, []);
  
  useEffect(() => {
    console.log(userProfile); // This will log the updated userProfile state
  }, [userProfile]);
  
  const fetchUserProfile = async () => {
    try {
      const userFromToken = await getUserInfo();
      setUserProfile(userFromToken);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div>
      <h1>My Details</h1>
      {/* <h2>Name: {userProfile.username}</h2>
      <h2>Email: {userProfile.email}</h2> */}
      {/* <h2>Add Your Mobile Number!</h2>
      <h2>Add Your Birthday!</h2>
      <h2>Add Your Address!</h2> */}
      
      <h1>Password</h1>
      <h2>Edit Password, don't verify just edit</h2>
    </div>
  )
}

export default Profile
