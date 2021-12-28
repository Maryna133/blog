import React from 'react'
import './Profile.css'

const Profile = () =>{
    return <div className='feeds-container'>
                <div className='profile-avatar'>
                    <img className='profile-foto' src='avatar.jpg' alt='Photo'/>
                    <button className='profile-bottom'>Change avatar</button>
                </div>
                <div className='profile-info'>
                    <h3 className='profile-title'>Profile</h3>
                    <p className='profile-info__name'>ivan</p>
                    <p className='profile-info__last-name'>ivanov</p>
                    <p className='profile-info__email'>email</p>
                    <p className='profile-info__pass'>Pass</p>
                    <button className='profile-bottom'>Edit/save</button>
                </div>      
               
            </div>          
}
export default Profile;