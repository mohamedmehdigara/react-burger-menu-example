import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Import other components here
import ImageGallery from './components/ImageGallery/ImageGallery';
import Tabs from './components/Tabs/Tabs';
import Tooltip from './components/Tooltip/Tooltip';
import Stepper from './components/Stepper/Stepper';
import Progressbar from './components/Progressbar/Progressbar';
import Accordion from './components/Accordion/Accordion';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Modal/Modal';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import ContentCards from './components/ContentCards/ContentCards';
import MenuItem from './components/MenuItem/MenuItem';
import Reservation from './components/Reservation/Reservation';
import SearchBar from './components/SearchBar/SearchBar';
import ContactForm from './components/ContactForm/ContactForm';
import RatingReview from './components/RatingReview/RatingReview';

function App() {
  // State for managing the sidebar's open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // State for managing the modal's open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    // Add more image URLs here
  ];

  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const steps = [
    { content: "Step 1 content" },
    { content: "Step 2 content" },
    { content: "Step 3 content" }
  ];

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

  // Sample accordion items
  const accordionItems = [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3'
    }
  ];

  const value = 75;
  const max = 100;

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

          {/* Components appearing at the top of the page */}
          <h1>Welcome to Cool Restaurant!</h1>
          <h2>Check out our offerings in the sidebar or below!</h2>
          <Carousel />
          <ImageGallery images={images} />
          <Stepper steps={steps} />
          <Tabs tabs={tabs} />
          <Tooltip text="This is a tooltip">
            <button>Hover over me</button>
          </Tooltip>
          <Progressbar value={value} max={max} />
          
          {/* Other components */}
          <DropdownMenu trigger={<button>Open Menu</button>}>
            <a href="#">Menu Item 1</a>
            <a href="#">Menu Item 2</a>
            <a href="#">Menu Item 3</a>
          </DropdownMenu>
          <ContentCards items={contentItems} />
          <MenuItem
            name="Featured Item"
            description="This is a featured menu item."
            price="$9.99"
          />
          <Reservation />
          <ContactForm />
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

          {/* Accordion component */}
          <Accordion items={accordionItems} />
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
