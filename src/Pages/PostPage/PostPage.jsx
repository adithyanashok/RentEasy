import React from 'react'
import './PostPage.css'
import HouseImg from '../../images/house-for-rent.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const PostPage = () => {
  return (
    <div className='post-container' >
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
  )
}

export default PostPage
