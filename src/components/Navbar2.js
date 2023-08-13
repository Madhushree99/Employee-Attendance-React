import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  let status=((sessionStorage.getItem("emp-status")));
   if(status==="log-in")
   {
    return (
      <div className="navbar">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">
               <div className="text-success">
              <Link to="/empdashboard">Home</Link>
             </div>
               </div>
            
            <form className="d-flex">
              
              <div className="container">

              <Link to="/emplogout" className="btn btn-info">Logout</Link>
             
              </div>
    
            </form>
          </div>
        </nav>
      </div>
    );
   }

   else
   {
    return (
      <div className="navbar">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">
               <div className="text-success">
              <Link to="/">Home</Link>
             </div>
               </div>
            
            <form className="d-flex">
              
              <div className="container">
              <Link to="/emplogin" className="btn btn-info">Login</Link>
             
              </div>
    
            </form>
          </div>
        </nav>
      </div>
    );
   }
   
    
    }





 