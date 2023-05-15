import React, {useState} from 'react'
import './MainPage.css'
import Image from '../../images/house.png'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Google from '../../images/1298745_google_brand_branding_logo_network_icon.svg'
import Facebook from '../../images/5296499_fb_facebook_facebook logo_icon.svg'

const MainPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='container' >
      <div className="image-section">
        <h1 className="logo">RentEasy</h1>
        <img src={Image} alt="" className="image" />
      </div>
      <div className="signup-section">
        <div className="signup-screen">
          <h1 className="signup-text">
            Signup to RentEasy
          </h1>
          <p className="description">
            Join Rental you will get best recomentations for rental properties
          </p>
          <div className="input-items">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <div className="dropmenu">
            <Box sx={{ minWidth: 206 }}>
              <FormControl style={{width:"173px", marginLeft:"26px", marginTop:"15px", background:"#520A80"}} >
                <InputLabel style={{color:"white"}} id="demo-simple-select-label">Prefered Location</InputLabel>
                <Select
                  style={{border:"solid 1px  white",
                   color:"white", outline:"none", height:"49px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Prefered Location"
                  onChange={handleChange}
                >
                  <MenuItem value={"trivandrum"}>Trivandrum</MenuItem>
                  <MenuItem value={"kochi"}>Kochi</MenuItem>
                  <MenuItem value={"calicut"}>Calicut</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            
            <Box sx={{ minWidth: 206 }}>
              <FormControl style={{width:"173px", marginLeft:"26px", marginTop:"15px", background:"#520A80"}} >
                <InputLabel style={{color:"white"}} id="demo-simple-select-label">Your Location</InputLabel>
                <Select
                  style={{border:"solid 1px  white",
                   color:"white", outline:"none", height:"49px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Your Location"
                  onChange={handleChange}
                >
                  <MenuItem value={"trivandrum"}>Trivandrum</MenuItem>
                  <MenuItem value={"kochi"}>Kochi</MenuItem>
                  <MenuItem value={"calicut"}>Calicut</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </div>
            <button className="button">
              CREATE ACCOUNT
            </button>
            <a href='' className="login-link">Already have an account?</a>
            <div className="signin-opt">
              <img src={Google} alt="" className='signin-img' />
              <img src={Facebook} alt="" className='signin-img' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainPage
