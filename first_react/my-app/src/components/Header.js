import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#shop">Shop</a></li>
          <li className="nav-item"><a href="bulk-buy">Bulk Buy</a></li>
          <li className="nav-item"><a href="#gallery">Gallery</a></li>
          <li className="nav-item"><a href="#trade-enquiry">Trade Enquiry</a></li>
          <li className="nav-item"><a href="#blogs">Blogs</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul> 
      </nav>
    </header>
  );
};

export default Header;