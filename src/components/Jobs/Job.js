import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Route, Link, useLocation, useRouteMatch } from "react-router-dom";
import img from "./backgroundImg_90.png";
import JobDetail from "./JobDetail";

dayjs.extend(relativeTime);

const Job = ({ job }) => {
  const location = useLocation();
  const { path, url } = useRouteMatch();
  console.log("path", path);
  console.log("url", url);
  console.log("location", location);
  console.log("job", job);

  const today = dayjs();
  const createdAt = job ? job.created_at : "";
  const timeAgo = dayjs(createdAt);
  return (
    <div>
      <div className="flex justify-between bg-white p-3 w-full %">
        <img
          src={job.company_logo}
          className="h-20 w-20 object-cover rounded-lg"
          alt=""
        />

        <div className="card-content text-blue-900 ml-4 sm:w-full">
          <h2 className="text-xs font-bold leading-none">
            {/* {job.id.slice(job.id.length / 2, -1)} */}
            {job.company}
          </h2>
          <h3 className="mt-2 text-base leading-tight align-top sm:text-lg">
            {job.title}
          </h3>
          <div className="footer text-xs leading-none align-top mt-3 pb-2 sm:flex sm:justify-between w-full">
            <Link
              to={{
                pathname: `/job/${job.id}`,
                state: { job, posted: job ? timeAgo.from(today) : "" },
              }}
            >
              <span className="mt-4 p-1 border border-blue-900 rounded text-xs font-bold hover:text-blue-700 hover:border-blue-700">
                {job.type}
              </span>
            </Link>

            <div className="flex mt-6  items-center text-gray-700">
              <div className="city flex items-center text-xs leading-none align-top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current h-4"
                >
                  <path
                    className="heroicon-ui"
                    d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
                  />
                </svg>

                <p className="ml-1 text-xs leading-none align-top">{`${job.location}`}</p>
              </div>
              <div className="flex  posted ml-2 text-xs items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current h-4"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"
                  />
                </svg>

                <p className="ml-1 text-xs leading-none align-top">
                  {job && timeAgo.from(today)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
