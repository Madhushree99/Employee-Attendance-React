import React, { useState } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";

const EditEmployee =(props) => {

  let status=((localStorage.getItem("admin-status")));

   console.log(props)

   const location = useLocation();
   const navigate = useNavigate();
   const {eid,ename,sname,edesg} = location.state.employee;
   const[newEname,setNewEname]=useState(ename);
   const[newSname,setNewSname]=useState(sname);
   const[newEdesg,setNewEdesg]=useState(edesg);

  

    const update=(e)=>{
        e.preventDefault();
      
        if(newEname===""||newSname===""||newEdesg==="")
        {
          alert("please fill all the fields.")
          return
        }
    
        props.updateEmployee({
          eid,ename:newEname,
          sname:newSname,
          edesg:newEdesg
        });
       
        setNewEdesg("");
        setNewEname("");
        setNewSname("");
         alert("employee details updated..");
         navigate("/admindashboard");
		 
      }

      if(status==="log-in")
      {

      
        return (
			<>
			<Navbar/>
          <div className="form">
            <div className="container">
              <div>
                  
                <form className="ui form" onSubmit={update}>

                  <div className="text-center headerContainer">
                  <h5 className="ui dividing header">
                    <b>Update Employee</b>
                  </h5>
                  </div>
      
                  <div className="ui form">
                    <div className="two fields">
                    <div className="field">
                      <label htmlFor="">
                        <b>Employee Id :</b>
                      </label>
                      <input
                        type="text"
                        readOnly
                        placeholder="Employee Id"
                        name="eid"
                        value={eid}
                      />
   					       </div>

						<div className="field required">
                      <label htmlFor="">
                        <b>Employee Name :</b>
                      </label>
                      <input type="text" 
                      placeholder="Employee Name" 
                      name="ename" 
                      value={newEname}
                      onChange={(e) => setNewEname(e.target.value )}
                      />
                    </div>

            </div>

      <div className="two fields">
                    <div className="field required">
                      <label htmlFor="">
                        <b>Supervisor Name :</b>
                      </label>
                      <input type="text" 
                      placeholder="Supervisor Name" 
                      name="sname" 
                      value={newSname}
                      onChange={(e) => setNewSname( e.target.value )}
                      />
                    </div>
      
                    <div className="field required">
                      <label>
                        <b>Designation:</b>
                      </label>
                      <input type="text"
                      name="edesg"
					             placeholder="Designation"
                       value={newEdesg}
                       onChange={(e) => setNewEdesg( e.target.value )}
                      />
                     
                    </div>
           </div>
    
                  </div>

                  <br/><br/>
                  <div className="container text-center">

				  <Link to="/admindashboard" className="ui button btn btn-danger"> Back </Link>

					&nbsp; &nbsp;
                    <button type="submit" className=" ui button btn btn-success" >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
		  </>
        )
                  }

                  else
                  {
                    window.location='/adminlogin'
                  }
       
      }
    


export default EditEmployee;