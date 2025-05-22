import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import TagList from './components/TagList';
import Footer from './components/Footer';

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(v => !v);

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <Header />

      
      <div className="body-layout">
        <Sidebar collapsed={!sidebarVisible} />

        {/* Endast content+taglist centrat */}
        <div className="main-layout">
          <main className="content">
            <PostList />
          </main>
          <TagList />
        </div>
      </div>
    <Footer/>
    </div>
  );
}

