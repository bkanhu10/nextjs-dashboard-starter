const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        onClick={onPrevious}
        className={`rounded-md px-4 py-2 text-white ${
          isFirstPage
            ? "cursor-not-allowed bg-gray-300 opacity-50"
            : "bg-brand-950"
        }`}
        disabled={isFirstPage}
      >
        Previous
      </button>

      <p className="text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <button
        onClick={onNext}
        className={`rounded-md px-4 py-2 text-white ${
          isLastPage
            ? "cursor-not-allowed bg-gray-300 opacity-50"
            : "bg-brand-950"
        }`}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => (
//   <div className="mt-4 flex justify-center gap-4">
//     <button
//       onClick={onPrevious}
//       className={`${
//         currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
//       } rounded-md bg-blue-500 px-4 py-2 text-white`}
//       disabled={currentPage === 1}
//     >
//       Previous
//     </button>
//     <span className="text-gray-500">
//       Page {currentPage} of {totalPages}
//     </span>
//     <button
//       onClick={onNext}
//       className={`${
//         currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
//       } rounded-md bg-blue-500 px-4 py-2 text-white`}
//       disabled={currentPage === totalPages}
//     >
//       Next
//     </button>
//   </div>
// );

// export default Pagination;
