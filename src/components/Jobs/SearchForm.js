import React, { useState } from "react";
import { useForm } from "react-hook-form";

import bgi from "./backgroundImg.png";

const SearchForm = ({ setSearch }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    setSearch(data.search);
    e.target.reset();
  };

  return (
    <form
      action=""
      className="search-form flex justify-center bg-cover bg-no-repeat py-8 sm:p-20 rounded-md"
      style={{ backgroundImage: "url(" + bgi + ")" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-full flex mx-4 items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current absolute left-1 sm:left-3 z-10 h-4 w-4 sm:h-6 sm:w-6"
        >
          <path
            className="heroicon-ui"
            d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"
          />
        </svg>

        <input
          type="text"
          className="pl-8 h-12 pr-16 sm:pr-32 sm:h-16 sm:px-10 w-full rounded text-xs shadow-md appearance-none border py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title, companies, expertise or benefits"
          name="search"
          ref={register}
        />
        <input
          type="submit"
          className="h-10 sm:h-12 btn bg-blue-900 hover:bg-blue-700 text-white absolute right-1 sm:right-2 text-xs font-medium sm:text-lg px-4 sm:px-6 rounded-sm border-0"
        />
      </div>
    </form>
  );
};

export default SearchForm;
