import React from "react";

const Ratings = (props) => {
  switch (props.count) {
    case 1:
      return (
        <>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
        </>
      );

    case 2:
      return (
        <>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
        </>
      );

    case 3:
      return (
        <>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
        </>
      );

    case 4:
      return (
        <>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
        </>
      );

    case 5:
      return (
        <>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </>
      );
    default:
      return;
  }
};

export default Ratings;
