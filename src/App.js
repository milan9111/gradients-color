import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit/Edit";
import Home from "./components/Home/Home";
import New from "./components/New/New";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <div>
       <Router>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/edit" element={<Edit/>}/>
                <Route path="*" element={<Error />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
