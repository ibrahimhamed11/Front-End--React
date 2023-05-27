import React from 'react';
import './profile.css';
import ProfileInfo from '../Components/Profile/ProfileInfo';


function Profile() {
  return (
    <>
      <div className='Profile'>
        <div className='container'>
        <div className='profile-title'>
      <h1>مرحبا بك يا صديقي</h1>
      </div>
      <div className='profile-contant'>
        <ProfileInfo/>          
      </div>
        </div>
      </div>
    
    
    
    </>
   
  )
}

export default Profile;