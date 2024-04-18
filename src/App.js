import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentCards from './components/ContentCards/ContentCards';
import Reservation from './components/Reservation/Reservation';
import SearchBar from './components/SearchBar/SearchBar';
import ContactForm from './components/ContactForm/ContactForm';
import RatingReview from './components/RatingReview/RatingReview';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Modal/Modal';
import MenuItem from './components/MenuItem/MenuItem';
import './App.css';

function App() {
  // State for managing the sidebar's open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // State for managing the modal's open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the sidebar open or close
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the modal open or close
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          {/* SearchBar component */}
          <SearchBar />

          <h1>Welcome to Cool Restaurant!</h1>
          <h2>Check out our offerings in the sidebar or below!</h2>

          {/* Carousel component */}
          <Carousel />

          {/* ContentCards component with contentItems */}
          <ContentCards items={contentItems} />

          {/* MenuItem component */}
          <MenuItem
            name="Featured Item"
            description="This is a featured menu item."
            price="$9.99"
          />

          {/* Reservation component */}
          <Reservation />

          {/* ContactForm component */}
          <ContactForm />

          {/* RatingReview component */}
          <RatingReview />

          {/* Button to toggle the modal */}
          <button onClick={handleToggleModal}>Open Modal</button>

          {/* Modal component */}
          {isModalOpen && (
            <Modal onClose={handleToggleModal}>
              <h2>Modal Title</h2>
              <p>This is the content inside the modal.</p>
              <button onClick={handleToggleModal}>Close Modal</button>
            </Modal>
          )}
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
