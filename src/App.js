import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import ContentCards from './ContentCards';
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

  // Sample content items for the ContentCards component
  const contentItems = [
    {
      name: 'Salad',
      description: 'Fresh garden salad with a variety of greens and toppings.',
      price: '$8.99',
      image: 'path_to_salad_image.jpg'
    },
    {
      name: 'Pizza',
      description: 'Delicious pizza with a variety of toppings to choose from.',
      price: '$12.99',
      image: 'path_to_pizza_image.jpg'
    },
    {
      name: 'Dessert',
      description: 'Sweet dessert options to satisfy your cravings.',
      price: '$6.99',
      image: 'path_to_dessert_image.jpg'
    }
  ];

  return (
    <div className="App" id="outer-container">
      {/* Sidebar component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
        onCloseSidebar={handleCloseSidebar}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      />
      
      {/* Main content area */}
      <div id="page-wrap">
        {/* Header component */}
        <Header onToggleSidebar={handleToggleSidebar} />

        {/* Main content */}
        <div className="main-content">
          <h1>Welcome to Cool Restaurant!</h1>
          <h2>Check out our offerings in the sidebar or below!</h2>

          {/* ContentCards component with contentItems */}
          <ContentCards items={contentItems} />
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
