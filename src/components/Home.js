import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../images/bg1.png";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg1})`  } }>
  
      <div className="headerContainer">
      <h1>
        <div className="text-center">Attendance Blog</div> 
      </h1>
<br/><br/> <br/>
          <div className="text-center">
             <Link to="/adminlogin" className="btn btn-success btl"> Admin </Link>
             &nbsp; &nbsp; &nbsp;
             <Link to="/emplogin" className="btn btn-success btl"> Employee </Link>
          </div>

      </div>
    </div>
  );
}
