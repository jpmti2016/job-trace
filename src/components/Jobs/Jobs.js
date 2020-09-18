import React, { useState, useEffect } from "react";

import axios from "axios";

import Job from "./Job";
import Pagination from "../Pagination";
import SearchForm from "./SearchForm";
import SelectForm from "./SelectForm";

const Jobs = ({ jobs, setJobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [numberOfButtons, setNumberOfButtons] = useState(5);
  const [search, setSearch] = useState("");
  const [fulltime, setFullTime] = useState(false);
  const [location, setLocation] = useState("London");
  const [tickChanged, setTickChanged] = useState(true);

  useEffect(() => {
    const getGitHubJobs = async () => {
      try {
        const response = await axios.get(
          `/positions.json?description=${search}&location=${location}&full_time=${fulltime}`
        );

        setJobs(response.data);
        setNumberOfItems(response.data.length);
      } catch (error) {
        console.error("getJobsCall", error);
      }
    };

    getGitHubJobs();
  }, [location, fulltime]);

  useEffect(() => {
    const getGitHubJobs = async () => {
      try {
        const response = await axios.get(
          `/positions.json?description=${search}`
        );

        setJobs(response.data);
        setNumberOfItems(response.data.length);
      } catch (error) {
        console.error("getJobsCall search", error);
      }
    };

    getGitHubJobs();
  }, [search]);

  // useEffect(() => {
  //   setFullTime(false);
  // }, [jobs]);

  const onChangeFullTime = () => {
    setFullTime((value) => !value);
  };

  const onTickLocation = (event) => {
    setTickChanged((value) => !value);
    setLocation(event.target.value);
  };

  // const pageBound = 5;
  const start = itemsPerPage * (currentPage - 1);
  const end = itemsPerPage * currentPage;

  const pageJobs =
    jobs?.length > 0 ? jobs.slice(start, Math.min(end, jobs.length)) : [];

  return (
    <div className="flex flex-col p-3 sm:px-32 sm:py-0">
      <SearchForm setSearch={setSearch} />

      <div className="sm:flex sm:flex-row ">
        <SelectForm
          fulltime={fulltime}
          onChangeFullTime={onChangeFullTime}
          location={location}
          setLocation={setLocation}
          onTickLocation={onTickLocation}
        />
        <div className="sm:w-3/4 mb-2">
          {pageJobs.length > 0 ? (
            pageJobs.map((job) => <Job job={job} key={job.id} />)
          ) : (
            <p className="font-medium shadow-sm mt-6 sm:mt-10">
              There is no jobs to show based in your search query
            </p>
          )}

          {jobs.length > 0 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberOfItems={numberOfItems}
              numberOfButtons={numberOfButtons}
              itemsPerPage={itemsPerPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
