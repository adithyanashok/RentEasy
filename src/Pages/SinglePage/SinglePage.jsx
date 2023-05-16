import React from 'react'
import './SinglePage.css'
import Image from '../../images/house-for-rent.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const SinglePage = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <div className='singlePgContainer' >
            <div className="imageSection">
                <img src={Image} alt="" className='PrimaryImage' />
                <div className="tinyImages">
                    <img src={Image} alt="" className='SecondaryImg' />
                    <img src={Image} alt="" className='SecondaryImg' />
                    <img src={Image} alt="" className='SecondaryImg' />
                    <img src={Image} alt="" className='SecondaryImg' />
                </div>

            </div>
            <div className="detailsSections">
                <div className="nameAmount">
                    <h1>JD House</h1>
                    <h2>5000/Month</h2>
                </div>
                <div className="address">
                    <div className='location' ><LocationOnIcon /> <p>New York</p></div>
                    <div className='location' ><HouseIcon /> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, debitis.</p></div>
                </div>
                <div className="ownerSection">
                    <h2>Owner</h2>
                    <div className="ownerName">
                        <PersonIcon />
                        <h4>Chris</h4>
                    </div>
                    <div className="ownerPhone">
                        <PhoneAndroidIcon />
                        <h4>+91 7551108929</h4>
                    </div>
                    <div className="ownerEmail">
                        <EmailIcon />
                        <h4>chris929@gmail.com</h4>
                    </div>
                </div>
                <div className="featureSection">
                    <div className="bedroom-bathroom">
                        <KingBedOutlinedIcon />
                        <p>2 Bedrooms</p>
                    </div>
                    <div className="bedroom-bathroom">
                        <BathtubOutlinedIcon />
                        <p>2 Bathrooms</p>
                    </div>
                </div>
                <div className="select-button">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{width: "131px"}} fullWidth>
                        <InputLabel id="demo-simple-select-label">Select days</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={30}>30 days</MenuItem>
                            <MenuItem value={60}>60 days</MenuItem>
                            <MenuItem value={90}>90 days</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <button className="payButton">Pay 5000</button>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
