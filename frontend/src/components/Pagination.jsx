// Pagination.jsx

import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <Button
        variant="primary"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span style={{ margin: '0 10px' }}>{`Page ${currentPage} of ${totalPages}`}</span>
      <Button
        variant="primary"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
