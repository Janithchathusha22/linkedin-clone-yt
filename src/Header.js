import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInLogo from './assets/linkedin-logo.png'; 
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';  // Updated import
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header() {
  return (
    <div className="header">
        
        <div className='header__left'>
          <img src={LinkedInLogo} alt="LinkedIn Logo" />

          <div className='header__search'>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        </div>
      
    </div>
  );
}

export default Header;
