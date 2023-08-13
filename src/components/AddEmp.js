import React from "react";

import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

class AddEmp extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      eid:"",
      ename:"",
      sname:"",
      edesg:""
  }
    
  }
  
    add=(e)=>{
        e.preventDefault();
      
        if(this.state.eid===""||this.state.ename===""||
        this.state.sname===""||this.state.edesg==="")
        {
          alert("please fill all the fields.")
          return
        }
        console.log(this.state);
        this.props.addEmployeeHandler(this.state);
        this.setState({eid:"",ename:"",sname:"",edesg:""})
         alert("employee details added successfully");
		 
      }

    render() {
      let status=((localStorage.getItem("admin-status")));
       if(status==="log-in")
       {
        return (
			<>
			<Navbar/>
          <div className="form">
            <div className="container">
              <div>
                <form className="ui form" onSubmit={this.add}>

                  <div className="text-center headerContainer">
                  <h5 className="ui dividing header">
                    <b>Add Employee</b>
                  </h5>
                  </div>
      
                  <div className="ui form">
                    <div className="field required">
                      <label htmlFor="">
                        <b>Employee Id :</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Employee Id"
                        name="eid"
                        value={this.state.eid}
                        onChange={(e) => this.setState({ eid: e.target.value })}
                      />
   					 </div>

						<div className="field required">
                      <label htmlFor="">
                        <b>Employee Name :</b>
                      </label>
                      <input type="text" 
                      placeholder="Employee Name" 
                      name="ename" 
                      value={this.state.ename}
                      onChange={(e) => this.setState({ename: e.target.value })}
                      />
                    </div>

                    <div className="field required">
                      <label htmlFor="">
                        <b>Supervisor Name :</b>
                      </label>
                      <input type="text" 
                      placeholder="Supervisor Name" 
                      name="sname" 
                      value={this.state.sname}
                      onChange={(e) => this.setState({ sname: e.target.value })}
                      />
                    </div>
      
                    <div className="field required">
                      <label>
                        <b>Designation:</b>
                      </label>
                      <input type="text"
                      name="edesg"
					             placeholder="Designation"
                       value={this.state.edesg}
                       onChange={(e) => this.setState({ edesg: e.target.value })}
                      />
                     
                    </div>
    
                  </div>

                  <br/><br/>
                  <div className="container text-center">

				  <Link to="/admindashboard" className="ui button btn btn-danger"> Back </Link>

					&nbsp; &nbsp;
                    <button type="submit" className=" ui button btn btn-success"
                    disabled={!this.state.eid || !this.state.ename || !this.state.edesg || !this.state.sname } >
                      Add
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
    
}

export default AddEmp;