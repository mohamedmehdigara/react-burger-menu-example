import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css'; // Include pagination styles if needed

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const goToPage = (page) => {
    // Ensure page is within valid range (1 to totalPages)
    if (page >= 1 && page <= totalPages) {
      onChangePage(page);
    }
  };

  // Generate an array of page numbers to render
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {/* Render page number links */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
