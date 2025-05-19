import React from 'react';
import './Sidebar.css';

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar-links">
        <a href="#uppgift2">Option 1</a>
        <a href="#uppgift3">Option 2</a>
      </nav>
    </aside>
  );
}




