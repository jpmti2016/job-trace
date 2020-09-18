import React from "react";
import { useForm } from "react-hook-form";

const SelectForm = ({
  location,
  onChangeFullTime,
  setLocation,
  onTickLocation,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    setLocation(data.location);
    e.target.reset();
  };

  return (
    <div className="sm:pr-6 mt-6 sm:mt-10 sm:w-1/4">
      <div className="control">
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 checked"
            onClick={() => onChangeFullTime()}
          />
          <span className="ml-2 text-sm leading-snug text-gray-700">
            Full Time
          </span>
        </label>
      </div>
      <div className="location mt-8">
        <label htmlFor="location" className="block uppercase text-sm">
          Location
        </label>
        <form
          className="relative flex items-center mt-3 text-gray-700"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            name="location"
            id="location"
            placeholder="City, state, zip code or country"
            className="w-full h-12 rounded pl-10 pr-4 text-xs shadow appearance-none border py-2 leading-tight focus:outline-none focus:shadow-outline"
            ref={register}
          />
        </form>
        <div className="control mt-6">
          <label htmlFor="london" className="text-sm">
            <input
              type="radio"
              name="radio-location"
              id="london"
              checked={location === "London"}
              value="London"
              onChange={(event) => onTickLocation(event)}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm leading-snug text-gray-700">
              London
            </span>
          </label>
        </div>
        <div className="control mt-4">
          <label htmlFor="amsterdam" className="text-sm">
            <input
              type="radio"
              name="radio-location"
              id="amsterdam"
              checked={location === "Amsterdam"}
              value="Amsterdam"
              onChange={(event) => onTickLocation(event)}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm leading-snug text-gray-700">
              Amsterdam
            </span>
          </label>
        </div>
        <div className="control mt-4">
          <label htmlFor="newyork" className="text-sm">
            <input
              type="radio"
              name="radio-location"
              id="newyork"
              checked={location === "New York"}
              value="New York"
              onChange={(event) => onTickLocation(event)}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm leading-snug text-gray-700">
              New York
            </span>
          </label>
        </div>
        <div className="control mt-4">
          <label htmlFor="berlin" className="text-sm">
            <input
              type="radio"
              name="radio-location"
              id="berlin"
              checked={location === "Berlin"}
              value="Berlin"
              onChange={(event) => onTickLocation(event)}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm leading-snug text-gray-700">
              Berlin
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectForm;
