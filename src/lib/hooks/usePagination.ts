import { useState } from 'react';

function usePagination(totalPages: number) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const isLast = pageNumber === totalPages;
  const isFirst = pageNumber === 1;

  const changePage = (nextPageNumber: number) => {
    setPageNumber(nextPageNumber);
  };

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  return { pageNumber, changePage, prevPage, nextPage, isLast, isFirst };
}

export default usePagination;
