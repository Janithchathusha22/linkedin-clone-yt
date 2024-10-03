import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info'; // Import material icon for the info icon
import { Avatar } from '@mui/material';
import wyImage from './assets/wy.jpg';  // Importing the image

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>

      <div className="widgets__body">
        <div className="widgets__user">
          <Avatar src="/assets/user1.jpg" alt="Senuree Magedera" />
          <div className="widgets__userDetails">
            <h3>Sakuni Magedera</h3>
            <p>Manager - University Relations at C Software | Bridging Academia</p>
          </div>
          <button className="widgets__followBtn">+ Follow</button>
        </div>

        <div className="widgets__user">
          <Avatar src="/assets/user2.jpg" alt="Praveena Manoharan" />
          <div className="widgets__userDetails">
            <h3>Praveena Maneesh</h3>
            <p>Talent Acquisition Executive @ AelaSoft | HRM Professional</p>
          </div>
          <button className="widgets__followBtn">+ Follow</button>
        </div>

        <div className="widgets__company">
          <Avatar src="/assets/company.jpg" alt="Econsulate" />
          <div className="widgets__companyDetails">
            <h3>J.C</h3>
            <p>Company - IT Services and IT Consulting</p>
          </div>
          <button className="widgets__followBtn">+ Follow</button>
        </div>

        <a href="https://www.linkedin.com/in/janith-chathusha/" className="widgets__recommendationLink">View all recommendations →</a>
      </div>

      <div className="widgets__ad">
        {/* Using the imported image */}
        <img src={wyImage} alt="See who's hiring on LinkedIn" className="widgets__adImage" />
      </div>

      <div className="widgets__footer">
        <p>About</p>
        <p>Accessibility</p>
        <p>Help Center</p>
        <p>Privacy & Terms</p>
        <p>Ad Choices</p>
        <p>Advertising</p>
        <p>Business Services</p>
        <p>Get the LinkedIn app</p>
        <p>More</p>
        <p>© 2024 LinkedIn Corporation</p>
      </div>
    </div>
  );
}

export default Widgets;
