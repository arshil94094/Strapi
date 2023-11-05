import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="text-gray-600 w-full p-0 body-font bg-sky-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-16 h-12  text-center  box-shadow-md rounded-md  hover:shadow-lg text-white p-2 bg-indigo-500 "
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <Link to="/">
          <span className="ml-12 text-3xl w-1/3 text-center hover:text-gray-900 box-shadow-md rounded-md text-indigo-900 ">
            Restaurant-Blogs
          </span>
        </Link>

        <nav className="md:ml-auto ml-10 w-1/2 md:mr-auto flex flex-wrap items-center text-base  justify-end">
          <Link
            className="mr-5 w-1/3 h-8 text-center hover:text-gray-900 box-shadow-md rounded-sm flex justify-center align-middle hover:shadow-lg hover:bg-white"
            to="/visitHistory"
          >
            <span className="text-indigo-900 text-xl">Visits History</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
