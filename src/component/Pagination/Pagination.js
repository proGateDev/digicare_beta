import React from "react";

const Pagination = ({ membersPerPage, totalMembers, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className="mt-6">
            <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                <li>
                    <a
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a
                            onClick={() => paginate(number)}
                            href="#"
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${
                                number === currentPage
                                    ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
