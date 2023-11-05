import React, { useEffect } from "react";
import { useState } from "react";
const Comments = (props) => {
  const [val, setVal] = useState([]);
  //   console.log(props.reviews[0].attributes);
  useEffect(() => {
    setVal(props.reviews);
  }, []);
  //   console.log("val: ", val);
  return (
    <>
      <h2
        className="text-3xl  font-medium mx-auto w-full  text-cyan-600 title-font mb-2"
        style={{ marginLeft: "120px" }}
      >
        Reviews :{" "}
        <span className="w-100 h-100 bg-cyan-900 text-white rounded-lg ">
          {/* {val.length} */}
        </span>
        <hr className="w-10/12 mt-2 border-b-2 border-b-indigo-400" />
      </h2>
      {val.map((item, index) => {
        return (
          <div
            key={index}
            className="text-gray-600 w-10/12 mx-auto body-font overflow-hidden"
          >
            <div className="container px-5 py-10 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-3xl text-gray-700 px-2">
                      {item.attributes.name}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      12 Jun 2019
                    </span>
                  </div>
                  <div className="md:flex-grow border-l-2 ">
                    <p className="leading-relaxed ml-3 px-3">
                      {item.attributes.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
