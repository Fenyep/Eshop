type Props = {
    currentPage: number 
    totalPages: number
    onPageChange: (pageNumber: number) => void
}

const CustomPagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="">
        <div className="text-right">
            {currentPage} of {totalPages}
        </div>
        <nav className="inline-flex">
          {currentPage > 1 && (
            <button
              className="px-3 py-1 rounded-l-md border border-gray-300 bg-white hover:bg-gray-100"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Prev
            </button>
          )}
  
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-3 py-1 border-t border-b border-gray-300 ${
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
  
          {currentPage < totalPages && (
            <button
              className="px-3 py-1 rounded-r-md border border-gray-300 bg-white hover:bg-gray-100"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </nav>
      </div>
    );
  }
  
  export default CustomPagination;