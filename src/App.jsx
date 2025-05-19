import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function App() {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(v => !v);

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="main-layout">
        <Sidebar collapsed={!sidebarVisible} />
        <main className="content">
          <h1>Welcome!</h1>
          <p>This is my first React app</p>
        </main>
      </div>
    </div>
  );
}

