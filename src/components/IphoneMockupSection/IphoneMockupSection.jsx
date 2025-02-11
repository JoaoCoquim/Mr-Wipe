import React from 'react';
import './IphoneMockupSection.css';

function IphoneMockupSection() {
  return (
    <div className="mobile-section-wrapper">

      <div className="iphone-section">
        <img src='/img/iPhone mockup.png' alt="iPhone Mockup" />
        
        <div className="light-focus"></div>
      </div>

      <div className="graphic-border-wrapper">
        <img className='graphic-border' src='/img/phone-top-graphic-grad-border.svg' alt="graphic border" />
      </div>
      
    </div>
  );
}

export default IphoneMockupSection;