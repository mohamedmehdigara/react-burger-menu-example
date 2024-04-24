import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className={`notification ${type}`}>
          <span className="message">{message}</span>
          <button className="close-btn" onClick={handleClose}>Close</button>
        </div>
      )}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
