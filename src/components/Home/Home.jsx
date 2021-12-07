import React from "react";
import { Link } from "react-router-dom";
import Gradient from "../../helpers/Gradient/Gradient";



const Home = () => {
    return (
      <div>
          Home
          <Gradient />
          <Link to="/new">add new gradient</Link>
      </div>
    );
  }
  
export default Home;
  