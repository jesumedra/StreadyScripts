
import React from 'react';
import '../styles/Header.css'; 

export default function Header() {
  return (
    <div className="header">
      <button className="header-btn close-btn">
        
      </button>
      <div className="header-center">
        <div className="stars">
          <span className="star"></span>
          {/* <span className="star">⭐</span> */}
          {/* <span className="star">⭐</span> */}
        </div>
      </div>
      <button className="header-btn flag-btn">
        
      </button>
    </div>
  );
}