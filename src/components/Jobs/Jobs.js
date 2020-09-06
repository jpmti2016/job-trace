import React, { useState, useEffect } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

import axios from "axios";

import Job from "./Job";
import Pagination from "../Pagination";
import SearchForm from "./SearchForm";
import SelectForm from "./SelectForm";

const getGitHubJobs = async (search, setJobs) => {
  try {
    const response = await axios.get("/positions.json");

    console.log("axios response", response.data);
    setJobs(response.data);
  } catch (error) {
    console.error("getJobsCall", error);
  }
};

const Jobs = ({ jobs, setJobs }) => {
  const [search, setSearch] = useState("");
  const [fulltime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const [gitHubJobs, setGitHubJobs] = useState([]);

  useEffect(() => {
    getGitHubJobs(search, setJobs);
  }, [search]);

  return (
    <div className="flex flex-col p-3 sm:px-32 sm:py-0">
      <SearchForm setSearch={setSearch} />

      <div className="sm:flex sm:flex-row ">
        <SelectForm setFullTime={setFullTime} setLocation={setLocation} />
        <div className="sm:w-3/4 mb-2">
          {jobs.length > 0 ? (
            jobs.map((job) => <Job job={job} key={job.id} />)
          ) : (
            <p className="font-medium shadow-sm mt-6 sm:mt-10">
              There is no jobs to show based in your search query
            </p>
          )}

          {jobs.length > 0 && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
