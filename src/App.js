import Home from "./cmp/Home";
import { useState } from "react";
import Preview from "./cmp/Preview";
import Nav from "./header/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisitHistory from "./cmp/VisitHistory";

export default function App() {
  const [ID, setID] = useState(null);

  const handleOnclick = (e) => {
    setID(e);
  };

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home onClick={handleOnclick} />}></Route>
          <Route path="/Preview" element={<Preview id={ID} />}></Route>
          <Route
            path="/visitHistory"
            element={<VisitHistory id={ID} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
