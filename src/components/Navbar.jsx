import React from 'react';
import './Navbar.css';
import reactLogo from '../assets/react.svg'

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </div>

      {/* Hamburgermenu wich toggles the sidebar */}
      <button
        className="sidebar-hamburger"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
    </nav>
  );
}

