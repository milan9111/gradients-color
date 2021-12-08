import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer"; 
import Error from "./components/Error/Error";
import EditContainer from "./components/Edit/EditContainer";
import NewContainer from "./components/New/NewContainer";


const App = ({setColors}) => {
  return (
    <div>
       <Router>
          <Routes>
                <Route path="/" element={<HomeContainer/>}/>
                <Route path="/new" element={<NewContainer setColors={setColors}/>}/>
                <Route path="/edit/:id" element={<EditContainer/>}/>
                <Route path="*" element={<Error />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
