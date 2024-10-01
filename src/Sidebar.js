import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';  // Import Avatar from Material-UI
import sidebarbg from './assets/sidebarbg.jpeg';  // Import the sidebar background image

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={sidebarbg} alt="Sidebar Background" />
                <Avatar className='sidebar__avatar' />
                <h2>Janith Chathusha</h2>
                <h4>janithchathusha@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,666</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('SoftwareEngineering')}
                {recentItem('UI/UX Designer')}
                {recentItem('Developer')}
            </div>
        </div>
    );
}

export default Sidebar;
