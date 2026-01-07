import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="logo">
                    <div className="logo-icon">E</div>
                    ENTREPEDIA
                </a>

                <nav>
                    <ul className="nav-links">
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link nav-link-dropdown">Products</a></li>
                        <li><a href="#" className="nav-link nav-link-dropdown">Services</a></li>
                        <li><a href="#" className="nav-link nav-link-dropdown">Resources</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                    </ul>
                </nav>

                <button className="sign-in-btn">Sign in</button>
            </div>
        </header>
    );
};

export default Header;
