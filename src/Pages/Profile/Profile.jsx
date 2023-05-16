import React from 'react'
import ProfileImg from '../../images/avatar.webp'
import './Profile.css'
import HouseImg from '../../images/house-for-rent.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="editButtons">
            <a href="">Edit</a>
            <a href="">Settings</a>
        </div>
      <div className="profile-section">
        <img src={ProfileImg} alt="" className='profileImg' />
        <h1 className="profileName">Adithyan Ashok Pv</h1>
        <div className="profileDetails">
            <div className="profileItem">
                <PhoneAndroidOutlinedIcon/>
                <p>+91 5436435634</p>
            </div>
            <div className="profileItem">
                <EmailOutlinedIcon/>
                <p>adithyan@gmail.com</p>
            </div>
            <div className="profileItem">
                <EmailOutlinedIcon/>
                <p>New York, America</p>
            </div>
        </div>
        <hr className='underline' />
      </div>
      <div className="myProperty">
        <h1 className="propertyName">My Property</h1>
        <div className="card-section">
        <div className="card">
        <img src={HouseImg} alt="" className='cardImg' />
        <div className="name-amount">
            <h2 className="houseName">JD House</h2>
            <h3 className="housePrice">5000/Month</h3>
        </div>
        <div className="location">
            <LocationOnOutlinedIcon/>
            <h4>New York</h4>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
