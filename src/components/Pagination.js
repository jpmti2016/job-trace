import React from "react";
import { li } from "react-router-dom";
import usePagination from "./usePagination";

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfItems,
  numberOfButtons,
  itemsPerPage,
}) => {
  const params = {
    numberOfItems,
    itemsPerPage, //pagesize
    currentPage, //pageNow
    numberOfButtons,
  };
  const { buttons } = usePagination(params);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const paginationButtons = buttons?.map((item) => (
    <li
      key={`p-${Math.random()}`}
      className={`p-2 mr-3 border border-gray-700 rounded flex flex-row items-center justify-center ${
        item === currentPage
          ? "bg-blue-700 text-blue-200 active:bg-blue-900 active:text-blue-200"
          : "hover:border-blue-700 hover:text-blue-700"
      }`}
      onClick={() => handleClick(item)}
    >
      {item}
    </li>
  ));

  return (
    <ul className="pagination hidden sm:flex sm:flex-row sm:justify-end mt-8">
      <li
        className={`p-2 mr-3 border border-gray-700 rounded flex flex-row items-center justify-center ${
          buttons && buttons[0] === currentPage
            ? "hover:bg-gray-300 hover:border-gray-100 hover:text-gray-100 cursor-not-allowed hidden"
            : "hover:text-blue-700 hover:border-blue-700"
        } active:bg-blue-900 
        `}
        onClick={() => handleClick(currentPage - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current h-4 w-4"
        >
          <path
            className="heroicon-ui"
            d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
          />
        </svg>
      </li>
      {paginationButtons}
      <li
        className={`p-2 border border-gray-700 rounded flex flex-row items-center justify-center ${
          buttons?.reverse()[0] === currentPage
            ? "hover:bg-gray-300 hover:border-gray-100 hover:text-gray-100 cursor-not-allowed hidden"
            : "hover:text-blue-700 hover:border-blue-700"
        }`}
        onClick={() => handleClick(currentPage + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current h- w-4"
        >
          <path
            className="heroicon-ui"
            d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
          />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
