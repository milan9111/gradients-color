import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import HomeContainer from "./components/Home/HomeContainer";
import EditContainer from "./components/Edit/EditContainer";
import NewContainer from "./components/New/NewContainer";
import Error from "./components/Error/Error";

const App = ({ setColors }) => {
  return (
    <main className="app__container">
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer setColors={setColors} />} />
          <Route path="/new" element={<NewContainer setColors={setColors} />} />
          <Route
            path="/edit/:id"
            element={<EditContainer setColors={setColors} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
