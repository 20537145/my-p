import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {
    const user = useSelector(state=>state.auth.user)
    
      return (
    <div>
    
      <h1>Hello {user?.firstName}!</h1>
    
    </div>
  )
}

export default Profile
