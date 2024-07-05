import React, { useState } from 'react';
import './Header.css'; // Import your CSS file for styling
import cart from '../data/img/cart.gif';
import user from '../data/img/user.svg';
import like from '../data/img/like.svg';
import menu from '../data/img/menu.gif';
import logo from '../data/img/logo.png';
import close from '../data/img/close.svg';

const Header = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    // Function to toggle side menu
    const toggleMenu = () => {
        setSideMenuOpen(!sideMenuOpen);
    };

    // Function to close banner
    const closeBanner = () => {
        const banner = document.querySelector('.discount-banner');
        banner.style.display= 'none';
    };

    return (
        <header>
            <div className="discount-banner">
                <p>15% off on buying any product from us. Apply coupon code TK15</p>
                <button onClick={closeBanner}>
                    <img src={close} alt="close-banner" />
                </button>
            </div>
            <div className="nav">
                <div className="nav-toggle" onClick={toggleMenu}>
                    <img src={menu} alt="Menu" />
                </div>
                <div className="nav-logo">
                    <h1><a href="index.html"><img src={logo} alt="Tulsi King Logo" /></a></h1>
                </div>
                <div className="nav-links">
                    <ul className="links">
                        <li className="link"><a href="index.html">Home</a></li>
                        <li className="link"><a href="shop.html">Shop</a></li>
                        <li className="link"><a href="purchase.html">Bulk Buy</a></li>
                        <li className="link"><a href="gallery.html">Gallery</a></li>
                        <li className="link"><a href="enquiry.html">Trade Enquiry</a></li>
                        <li className="link"><a href="blogs.html">Blogs</a></li>
                        <li className="link"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="icon">
                    <div className="nav-icon like-icon"><a href="save.html"><img src={like} alt="Save Product" /></a></div>
                    <div className="nav-icon profile-icon"><a href="profile.html"><img src={user} alt="User" /></a></div>
                    <div className="nav-icon cart-icon"><a href="cart.html"><img src={cart} alt="User Cart" /></a></div>
                </div>
            </div>
            <div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>&times;</button>
                <ul className="side-links">
                    <li className="side-link"><a href="index.html">Home</a></li>
                    <li className="side-link"><a href="shop.html">Shop</a></li>
                    <li className="side-link"><a href="purchase.html">Bulk Buy</a></li>
                    <li className="side-link"><a href="gallery.html">Gallery</a></li>
                    <li className="side-link"><a href="enquiry.html">Trade Enquiry</a></li>
                    <li className="side-link"><a href="blogs.html">Blogs</a></li>
                    <li className="side-link"><a href="contact.html">Contact</a></li>
                </ul>
                <div className="sidebar-icons">
                    <div className="sidebar-icon"><a href="save.html"><img src={like} alt="Save Product" /></a></div>
                    <div className="sidebar-icon"><a href="profile.html"><img src={user} alt="User" /></a></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
