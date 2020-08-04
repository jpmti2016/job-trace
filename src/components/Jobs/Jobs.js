import React, { useState, useEffect } from "react";
import bgi from "./backgroundImg.png";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import axios from "axios";

import Job from "./Job";
import SearchForm from "./SearchForm";

const getGitHubJobs = async (search) => {
  try {
    const response = await axios.get("/positions.json");
    console.log("axios response", response.data);
  } catch (error) {
    console.error("getJobsCall", error);
  }
};

const Jobs = ({ jobs }) => {
  const [search, setSearch] = useState("");
  const [gitHubJobs, setGitHubJobs] = useState([]);
  useEffect(() => {
    getGitHubJobs(search);
  }, [search]);
  return (
    <div className="flex flex-col p-3 sm:px-32 sm:py-0">
      <SearchForm setSearch={setSearch} />

      <div className="sm:flex sm:flex-row ">
        <form className="sm:pr-6 mt-6 sm:mt-10 sm:w-1/4">
          <div className="control">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 checked"
              />
              <span className="ml-2 text-sm leading-snug text-gray-700">
                Full Time
              </span>
            </label>
          </div>
          <div className="location mt-8">
            <label htmlFor="location-input" className="block uppercase text-sm">
              Location
            </label>
            <div className="relative flex items-center mt-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="pl-3 pr-4 fill-current h-4 left-1 absolute z-10"
              >
                <path
                  className="heroicon-ui"
                  d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
                />
              </svg>
              <input
                type="text"
                name="location-input"
                id="location-input"
                placeholder="City, state, zip code or country"
                className="w-full h-12 rounded pl-10 pr-4 text-xs shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="control mt-6">
              <label htmlFor="london" className="text-sm">
                <input
                  type="checkbox"
                  name="london"
                  id="london"
                  className="form-checkbox h-5 w-5 text-blue-500 checked "
                />
                <span className="ml-2 text-sm leading-snug text-gray-700">
                  London
                </span>
              </label>
            </div>
            <div className="control mt-4">
              <label htmlFor="Amsterdam" className="text-sm">
                <input
                  type="checkbox"
                  name="Amsterdam"
                  id="Amsterdam"
                  className="form-checkbox h-5 w-5 text-blue-500 checked"
                />
                <span className="ml-2 text-sm leading-snug text-gray-700">
                  Amsterdam
                </span>
              </label>
            </div>
            <div className="control mt-4">
              <label htmlFor="newyork" className="text-sm">
                <input
                  type="checkbox"
                  name="newyork"
                  id="newyork"
                  className="form-checkbox h-5 w-5 text-blue-500 checked"
                />
                <span className="ml-2 text-sm leading-snug text-gray-700">
                  New York
                </span>
              </label>
            </div>
            <div className="control mt-4">
              <label htmlFor="berlin" className="text-sm">
                <input
                  type="checkbox"
                  name="berlin"
                  l
                  id="berlin"
                  className="form-checkbox h-5 w-5 text-blue-500 checkbox"
                />
                <span className="ml-2 text-sm leading-snug text-gray-700">
                  Berlin
                </span>
              </label>
            </div>
          </div>
        </form>

        <div className="sm:w-3/4 mb-2">
          {jobs && jobs.map((job) => <Job job={job} key={job.id} />)}
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
            <Link className="p-2 mr-3 border border-gray-700 rounded flex flex-row items-center justify-center">
              1
            </Link>
            <Link className="p-2 mr-3 border border border-gray-700 rounded flex flex-row items-center justify-center">
              2
            </Link>
            <Link className="p-2 mr-3 border border border-gray-700 rounded flex flex-row items-center justify-center">
              3
            </Link>
            <Link className="p-2 mr-3 border border border-gray-700 rounded flex flex-row items-center justify-center">
              ...
            </Link>
            <Link className="p-2 mr-3 border border border-gray-700 rounded flex flex-row items-center justify-center">
              10
            </Link>
            <Link className="p-2 border border border-gray-700 rounded flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current h- w-4"
              >
                <path
                  class="heroicon-ui"
                  d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
