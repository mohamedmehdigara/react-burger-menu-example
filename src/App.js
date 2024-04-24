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
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Tabs from './components/Tabs/Tabs';
import Tooltip from './components/Tooltip/Tooltip';
import Stepper from './components/Stepper/Stepper';
import Progressbar from './components/Progressbar/Progressbar';
import Accordion from './components/Accordion/Accordion';
import Loader from './components/Loader/Loader';
import Pagination from './components/Pagination/Pagination';
import Notification from './components/Notification/Notification'; // Import the Notification component
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch'; // Import the ToggleSwitch component
import Slider from './components/Slider/Slider'; // Import the Slider component
import Autocomplete from './components/Autocomplete/Autocomplete';
import './App.css';

function App() {
  // State for managing the sidebar's open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State for managing the modal's open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for managing notifications
  const [notification, setNotification] = useState(null);

  const images = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    // Add more image URLs here
  ];

  // Function to show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Hide notification after 3 seconds
  };

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

  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch suggestions from the backend based on the search query
  const fetchSuggestions = (query) => {
    // Make an API call to fetch suggestions based on the query
    // Update the suggestions state with the fetched suggestions
    // For demonstration purposes, let's assume suggestions are fetched from a static array
    const filteredSuggestions = staticSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Static array of sample suggestions
  const staticSuggestions = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];


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
          <h1>Search Autocomplete Example</h1>
      <Autocomplete suggestions={suggestions} onSearch={fetchSuggestions} />

          <h1>Welcome to Cool Restaurant!</h1>
          <h2>Check out our offerings in the sidebar or below!</h2>
          
          {/* Carousel component */}
          <Carousel />
          
          {/* Loader component */}
          <Loader />

          {/* Pagination component */}
          <Pagination currentPage={1} totalPages={5} onChangePage={() => {}} />

          {/* Notification component */}
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}

          {/* ToggleSwitch component */}
          <ToggleSwitch />

          {/* Slider component */}
          <Slider />
          
          <h1>Stepper Example</h1>
          <Stepper steps={[{ content: "Step 1 content" }, { content: "Step 2 content" }, { content: "Step 3 content" }]} />
          
          <Tabs tabs={[
            { title: 'Tab 1', content: 'Content for Tab 1' },
            { title: 'Tab 2', content: 'Content for Tab 2' },
            { title: 'Tab 3', content: 'Content for Tab 3' },
          ]} />

          <h1>Tooltip Example</h1>
          <Tooltip text="This is a tooltip">
            <button>Hover over me</button>
          </Tooltip>
          
          <h1>Progress Bar Example</h1>
          <Progressbar value={value} max={max} />

          <h1>Image Gallery</h1>
          <ImageGallery images={images} />
          <DropdownMenu trigger={<button>Open Menu</button>}>
            <a href="#">Menu Item 1</a>
            <a href="#">Menu Item 2</a>
            <a href="#">Menu Item 3</a>
          </DropdownMenu>

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
