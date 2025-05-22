import React from 'react';
import './Sidebar.css';
import reactLogo from '../assets/react.svg';

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <img src={reactLogo} alt="React logo" className="sidebar-logo" />
        <span className="sidebar-title">ASSIGNMENT 2</span>
      </div>

      <nav className="sidebar-links">
        <a href="#uppgift2">Option 1</a>
        <a href="#uppgift3">Option 2</a>
        <a href="#uppgift4">Option 3</a>
      </nav>
    </aside>
  );
}




