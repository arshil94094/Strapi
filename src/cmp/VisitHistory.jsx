import React from "react";
import { useState } from "react";
import axios from "axios";
const VisitHistory = (props) => {
  const currentDates = () => {
    let date = new Date();

    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  const [record, setRecord] = useState([]);
  React.useEffect(() => {
    const getInfo = async () => {
      let response = await axios.get("http://localhost:1337/api/nodes");
      const info = await response.data;
      // console.log("info", info);
      setRecord(info.data);
    };
    getInfo();
  }, [props.id]);

  // console.log(record, "record");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {/* started */}
            {record.map((item, index) => {
              return (
                <div className="p-4 lg:w-1/2 md:w-full" key={index}>
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        {item.attributes.name}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {item.attributes.disc}
                      </p>
                      <a
                        className="mt-3 text-indigo-500 inline-flex items-center"
                        href="/"
                      >
                        {currentDates()}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* ended */}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitHistory;
