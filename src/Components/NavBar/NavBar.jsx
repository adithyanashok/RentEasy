import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar' >
      <h1 className="nav-logo">RentEasy</h1>
      <div className="menu-options">
        <ul>
            <li>Home</li>
            <li>Our Property</li>
            <li>Profile</li>
        </ul>
      </div>
      <div className="search">
        <div className="search-input">
            <input placeholder='Search...' type="text" className='search-bar' />
            <div className='search-icon' ><SearchIcon style={{margin: "8px"}} /></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
