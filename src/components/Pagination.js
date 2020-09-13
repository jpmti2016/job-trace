import React from "react";
import { Link } from "react-router-dom";
import usePagination from "./usePagination";

const Pagination = (props) => {
  const params = {
    numberOfItems: 50,
    itemsPerPage: 5,
    currentPage: 9,
    numberOfButtons: 1,
  };
  const pagination = usePagination(params);

  console.log(pagination);
  const paginationButtons = pagination.buttons.map((item) => (
    <Link
      key={`p-${Math.random()}`}
      className="p-2 mr-3 border border-gray-700 rounded flex flex-row items-center justify-center"
    >
      {item}
    </Link>
  ));

  return (
    <div className="hidden sm:flex sm:flex-row sm:justify-end mt-8">
      <Link className="p-2 mr-3 border border-gray-700 rounded flex flex-row items-center justify-center">
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
      </Link>
      {paginationButtons}
      <Link className="p-2 border border-gray-700 rounded flex flex-row items-center justify-center">
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
      </Link>
    </div>
  );
};

export default Pagination;
