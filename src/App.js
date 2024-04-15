import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  // State for managing the sidebar's open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar open or close
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App" id="outer-container">
      {/* Pass the sidebar state and event handlers to the Sidebar component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
        onCloseSidebar={handleCloseSidebar}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      />
      {/* Main content area */}
      <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
        {/* Add more content here as needed */}
        <button onClick={handleToggleSidebar}>
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <p>Welcome to our restaurant! Enjoy browsing through the menu and offerings in the sidebar. We offer a variety of dishes and desserts to satisfy your cravings.</p>
        {/* Add more interactive or dynamic elements here */}
      </div>
    </div>
  );
}

export default App;
