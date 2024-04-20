import React from 'react';
import PropTypes from 'prop-types';

const DessertIcon = ({ className, width, height, fill }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
  >
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 7h-2V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 6h6v1H9V6zm11 13H4V9h16v10z"/>
  </svg>
);

DessertIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

DessertIcon.defaultProps = {
  className: '',
  width: 24,
  height: 24,
  fill: 'currentColor',
};

export default DessertIcon;
