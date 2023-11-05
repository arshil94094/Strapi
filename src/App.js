import Home from "./cmp/Home";
import { useState } from "react";
import Preview from "./cmp/Preview";
import Nav from "./header/Nav";
// import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisitHistory from "./cmp/VisitHistory";

export default function App() {
  const [ID, setID] = useState(null);
  // const [history, setHistory] = useState([]);
  const handleOnclick = (e) => {
    setID(e);
  };

  // useEffect(() => {
  //   console.log("App");
  // }, [ID]);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onClick={handleOnclick}
                // onPreviewChange={handlePreviewChange}
              />
            }
          ></Route>
          <Route path="/Preview" element={<Preview id={ID} />}></Route>
          <Route
            path="/visitHistory"
            element={<VisitHistory id={ID} />}
          ></Route>
          {/* <Home onClick={handleOnclick} />
      <Preview id={ID} onPreviewChange={handlePreviewChange} />
      <VisitHistory history={history} /> */}
        </Routes>
      </Router>
    </>
  );
}
