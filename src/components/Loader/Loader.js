import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ size, color }) => {
  const loaderStyle = {
    width: size,
    height: size,
    borderTopColor: color,
  };

  return (
    <div className="loader-container">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: '40px',
  color: '#000',
};

export default Loader;
