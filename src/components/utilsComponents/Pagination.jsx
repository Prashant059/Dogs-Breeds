import React from 'react';

const Pagination = React.memo(({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => (
  <div className="flex justify-center items-center mt-6 space-x-2">
    <button
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
    >
      Previous
    </button>
    <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
    >
      Next
    </button>
  </div>
));

export default Pagination;

  