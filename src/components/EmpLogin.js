import React, { useEffect, useRef, useState } from 'react';
import Navbar2 from './Navbar2';
import api from "../api/data";

const EmpLogin =(props) => {
   
         let status=((sessionStorage.getItem("emp-status")));
       
const [eid,setid]= useState("");

const checkusers=(serverusers)=>{
  const user = serverusers.find(user=>user.eid===eid);
  if(user) return user;
};

     const hangleSubmit = async (e) =>{
       
        e.preventDefault() 
        const user = await api.get("/employees")
        .then((res)=>checkusers(res.data));
        console.log(user);

        if(user)
        {
          sessionStorage.setItem('emp-status', 'log-in');
          sessionStorage.setItem('empid', (eid));
          window.location='/empdashboard'
        }
        else
        {
          alert("ID entered is invalid or Employee_Id does not exist!! Contact Admin..");
          setid("");
        }

      };
      
      
    if(status==="log-in")
    {
      window.location='/empdashboard'
    }
  
    else {
           return (
             <>
            <Navbar2/>
             <div className='text-center mainst'>
               <div className='row justify-content-center'>
               <div className='col-4'>
                 <h3> </h3>
                   <h2>Sign In</h2>
               
            <div className='form-group'>
                 <form onSubmit={hangleSubmit}>
  
                  <div className='form-group'>
                   <input className='form-control' name="eid" id="eid"
                    type="text" placeholder='Enter Employee Id' 
                    required 
                   value={eid}
                     onChange={(e)=>setid(e.target.value)}                    
                   />
                 </div>
    
  <div className='btnst'>
  <button type="submit" className='btn btn-success'
  disabled={!eid}>Login</button>
  </div>
                </form>
  </div>
             </div>
             </div>
             </div>
             
               </>
              
          );
      }  
    }
  
export default EmpLogin;