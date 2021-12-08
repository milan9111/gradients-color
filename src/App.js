import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer"; 
import New from "./components/New/New";
import Error from "./components/Error/Error";
import EditContainer from "./components/Edit/EditContainer";


const App = () => {
  return (
    <div>
       <Router>
          <Routes>
                <Route path="/" element={<HomeContainer/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/edit/:id" element={<EditContainer/>}/>
                <Route path="*" element={<Error />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
