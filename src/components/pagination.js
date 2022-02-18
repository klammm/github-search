import React from 'react';

const Pagination = ({
  currentPage,
  setCurrentPage,
  length
}) => {
  const nextPage = async () => {
    setCurrentPage(page => page + 1)
  }

  const previousPage = async () => {
    setCurrentPage(page => page - 1)
  }

  return (
    <div className="flex justify-around">
      {currentPage > 1 && (
        <button className="p-3 border-2 m-2" onClick={previousPage}>
          Previous
        </button>
      )}
      {currentPage < length && (
        <button className="p-3 border-2 m-2" onClick={nextPage}>
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination;