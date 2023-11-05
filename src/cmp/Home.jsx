import React, { useEffect, useState } from "react";

import axios from "axios";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

const Home = (props) => {
  const localHost = "http://localhost:1337";
  const [data, setData] = useState([]);
  const handlePreview = (item) => {
    props.onClick(item);
    const getData = async () => {
      try {
        let response = await axios.get(
          `http://localhost:1337/api/restaurants/${item ? item : 1}?populate=*`
        );
        const info = response.data;
        const res = {
          data: {
            name: info.data.attributes.name,
            disc: info.data.attributes.discription,
          },
        };

        await axios
          .post("http://localhost:1337/api/nodes", res)
          .then((response) => {
            console.log("Visited node created successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error creating visited node:", error);
          });
      } catch (error) {
        console.log("Error", error);
      }
    };
    getData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/restaurants?populate=*"
        );

        response && setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const newArray = data.data;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col  text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            RESTAURENTS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Find the perfect restaurant for any occasion with our restaurant
            Data base. With just a few taps, you can browse a wide selection of
            restaurants near you, read reviews from other diners, and make
            reservations. Our app also makes it easy to order food online and
            pick it up or have it delivered.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* 1 starts */}
          {newArray &&
            newArray.map((_, index) => {
              return (
                <div className="p-4 lg:w-1/2" key={index}>
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={
                        localHost +
                        newArray[index].attributes.img.data.attributes.url
                      }
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {newArray[index].attributes.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3">
                        {newArray[index].attributes.catagory}
                      </h3>
                      <hr className="border-blue-300 py-0.5" />
                      <p className="mb-4">
                        {newArray[index].attributes.discription}
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500" href="/">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500" href="/">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500 " href="/">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                        <span className="ml-5">Oppening Hours:</span>
                        <span className="ml-2 mr-2 px-3 bg-blue-500 text-white p-2 rounded  leading-none flex items-center">
                          {newArray[index].attributes.OppeningHours}h
                        </span>
                      </span>
                      <hr className="mb-2 w-4/5 border-blue-300 " />
                      <div className="flex flex-row">
                        <div className="w-1/4">Ratings :</div>
                        <div className="w-2/4 flex flex-row item-center justify-start  ">
                          <Ratings count={newArray[index].attributes.ratings} />
                        </div>
                        <div className=" w-1/4 hidden lg:flex lg:flex-1 lg:justify-start">
                          <Link to="/Preview">
                            {" "}
                            <button
                              className="text-sm font-semibold leading-6 bg-blue-600 text-white px-2 rounded"
                              onClick={() => {
                                handlePreview(newArray[index].id);
                              }}
                            >
                              Prieview <span aria-hidden="true">&rarr;</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* 1 ends  */}
        </div>
      </div>
    </section>
  );
};

export default Home;
