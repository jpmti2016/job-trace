import React from "react";
import { Link } from "react-router-dom";
import img from "./backgroundImg_90.png";

const JobDetail = ({ job }) => {
  return (
    <div className="pl-3 pr-5 sm:px-32 sm:py-0">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:w-1/3">
          {JSON.stringify(job)}

          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current h-4"
            >
              <path
                className="heroicon-ui"
                d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
              />
            </svg>

            <span className="text-sm leading-5 ml-4">Back to search</span>
          </Link>

          <h3 className="font-bold uppercase text-gray-700 pt-10">
            How to apply
          </h3>

          <p className="text-sm pt-4">
            Please email a copy of your resume and online portfolio to{" "}
            <a
              href="mailto:wes@kasisto.com"
              className="text-blue-600 hover:text-blue-800"
            >
              wes@kasisto.com
            </a>{" "}
            & CC{" "}
            <a
              href="mailto:eric@kasisto.com"
              className="text-blue-600 hover:text-blue-800"
            >
              eric@kasisto.com
            </a>
          </p>
        </div>
        <div className="sm:flex sm:flex-col mt-12 sm:ml-20 sm:w-full">
          <div className="flex flex-col sm:justify-start">
            <div className="flex flex-col justify-start sm:flex-row  text-blue-900">
              <h2 className="text-2xl font-bold leading-7">
                Front-End Software Engineer
              </h2>
              <a href="https://highalpha.com/job/?gh_jid=2245150&gh_src=fb83cbe11us">
                <span className="mt-4 sm:ml-4 sm:mt-0 p-1 border border-blue-900 rounded text-xs font-bold hover:text-blue-700 hover:border-blue-700">
                  Full Time
                </span>
              </a>
            </div>
            <div className="mt-2 flex posted text-xs items-center text-gray-700">
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

              <p className="ml-1 text-xs leading-none align-top">5 Days ago</p>
            </div>
          </div>

          <div className="mt-12 sm:mt-8 flex flex-row">
            <img
              src={img}
              className="h-10 w-10 object-cover rounded-lg"
              alt=""
            />
            <div className="city flex flex-col items-start text-xs leading-none align-top ml-3">
              <p className="font-bold text-lg leading-none">Kasito</p>
              <div className="flex items-center mt-2 text-gray-700">
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

                <p className="ml-1 text-xs leading-none align-top">{`New York`}</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-base leading-normal text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            quisquam.
          </p>
          <p className="mt-8 text-base leading-normal text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aliquam iure accusamus inventore optio quod, ipsum laudantium, illo
            ab illum nobis laborum fugit nemo quas saepe. Maxime, dolores
            doloremque tempore perspiciatis quas quae, veniam similique nesciunt
            qui necessitatibus quidem autem officia hic cupiditate non tempora
            corporis atque? Explicabo maiores nisi odio aliquam distinctio nam
            temporibus id, labore ad voluptatem optio dolore minima. Sit unde
            minus nulla obcaecati quis voluptatibus consequatur omnis iure magni
            beatae ducimus libero vel impedit officiis labore soluta rerum
            reiciendis, tenetur eligendi eaque. Voluptas, laudantium aliquid
            molestiae iste mollitia repellendus illo in delectus voluptatem
            assumenda dolores cupiditate, nemo modi quasi eveniet enim rerum
            quae nostrum a cumque neque magni vero autem! Modi quos, eius
            accusantium nemo reprehenderit ratione ipsum, accusamus quaerat
            impedit numquam est repellendus enim, quasi aliquam laudantium
            voluptatibus velit animi nobis laborum iusto aut eligendi amet vel!
            Incidunt maiores vel, expedita minima rerum unde optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
