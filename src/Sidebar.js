import React, { useState } from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import sidebarbg from './assets/sidebarbg.jpeg';
import { LinkedIn, BusinessCenter, People, Event, Bookmark, MenuOpen, Menu } from '@mui/icons-material'; // Added Menu icons for toggling

function Sidebar() {
    // State for toggling minimized view
    const [isMinimized, setIsMinimized] = useState(false);

    const professionalItem = (icon, label) => (
        <div className={`sidebar__item ${isMinimized ? 'minimized' : ''}`}>
            {icon}
            {!isMinimized && <p>{label}</p>}
        </div>
    );

    return (
        <div className={`sidebar ${isMinimized ? 'sidebar--minimized' : ''}`}>
            {/* Toggle button to minimize/maximize the sidebar */}
            <div className='sidebar__toggle' onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? <Menu /> : <MenuOpen />}
            </div>

            <div className='sidebar__top'>
                <img src={sidebarbg} alt="Sidebar Background" />
                <Avatar className='sidebar__avatar' />
                {!isMinimized && (
                    <>
                        <h2>Janith Chathusha</h2>
                        <h4>janithchathusha@gmail.com</h4>
                    </>
                )}
            </div>

            <div className={`sidebar__stats ${isMinimized ? 'hidden' : ''}`}>
                <div className='sidebar__stat'>
                    <p>Profile viewers</p>
                    <p className='sidebar__statNumber'>47</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Post impressions</p>
                    <p className='sidebar__statNumber'>221</p>
                </div>
            </div>

            <div className='sidebar__professional'>
                <p className={`sidebar__label ${isMinimized ? 'hidden' : ''}`}>Professional</p>
                {professionalItem(<BusinessCenter className='sidebar__icon' />, 'Jobs')}
                {professionalItem(<People className='sidebar__icon' />, 'Network')}
                {professionalItem(<Event className='sidebar__icon' />, 'Events')}
                {professionalItem(<Bookmark className='sidebar__icon' />, 'Saved Items')}
            </div>

            <div className='sidebar__groups'>
                <p className={`sidebar__label ${isMinimized ? 'hidden' : ''}`}>Groups</p>
                {professionalItem(<BusinessCenter className='sidebar__icon' />, 'AWS Certification')}
                {professionalItem(<People className='sidebar__icon' />, 'Data Scientist')}
                {professionalItem(<BusinessCenter className='sidebar__icon' />, 'Python Devs')}
            </div>
        </div>
    );
}

export default Sidebar;
