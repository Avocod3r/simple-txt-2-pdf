type Props = {
  totalPages: number;
  isLast: boolean;
  isFirst: boolean;
  changePage: (page: number) => void;
  prevPage: () => void;
  pageNumber: number;
  nextPage: () => void;
};

const Pagination = ({ totalPages, isLast, isFirst, changePage, nextPage, prevPage, pageNumber }: Props) => {
  return (
    <nav>
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            disabled={isFirst}
            onClick={prevPage}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-70"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {totalPages > 1 ? (
          Array.from(new Array(totalPages), (_, index) => (
            <li key={`page_${index}`}>
              <button
                onClick={() => changePage(index + 1)}
                className={`
                  flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${pageNumber === index + 1 ? 'bg-gray-100 text-gray-700 font-bold' : ''}
                `}
              >
                {index + 1}
              </button>
            </li>
          ))
        ) : (
          <li>
            <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-70">
              1
            </button>
          </li>
        )}
        <li>
          <button
            disabled={isLast}
            onClick={nextPage}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-70"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
