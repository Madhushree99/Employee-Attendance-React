import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let status=((localStorage.getItem("admin-status")));
   if(status==="log-in")
   {
    return (
      <div className="navbar">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">
               <div className="text-success">
              <Link to="/admindashboard" >Home</Link>
             </div>
               </div>
            
            <form className="d-flex">
              
              <div className="container">
              <Link to="/admindashboard">View Employee</Link>
              &nbsp;
              <Link to="/empattendance">View Attendance</Link>
              &nbsp;
  
            
              <Link to="/adminlogout" className="btn btn-info">Logout</Link>
             
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
              <Link to="/adminlogin">View Employee</Link>
              &nbsp;
              <Link to="/adminlogin">View Attendance</Link>
              &nbsp;
  
            
              <Link to="/adminlogin" className="btn btn-info">Login</Link>
             
              </div>
    
            </form>
          </div>
        </nav>
      </div>
    );
   }
   
    
    }





 