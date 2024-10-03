import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInLogo from './assets/linkedin-logo.png'; 
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import meImage from './assets/me.jpg'; // Import the avatar image
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/UserSlice';

// Import the Firebase authentication
import { auth } from './firebase'; // Make sure this path is correct based on your folder structure

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {  
    dispatch(logout());
    auth.signOut(); // Use auth to sign out the user
  };

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
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        
        {/* HeaderOption with Avatar for "Me" */}
        <HeaderOption avatar={true} imgSrc={meImage} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
