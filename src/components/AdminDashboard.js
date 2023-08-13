import React, {useRef} from 'react';
import Navbar from './Navbar';
import {NavLink, Link, useNavigate } from 'react-router-dom';


const AdminDashboard = (props) => {
    let status=((localStorage.getItem("admin-status")));

    const inputEl = useRef("");

    const deleteEmployee = (eid) => {
        props.getEmployeeId(eid);
      };
      
    if(status==="log-in")
    {
        const renderEmployeeList = props.employees.map((employee) => {
            return (
    <> 
         <tr>
            <td >{employee.eid}</td>
            <td >{employee.ename}</td>
            <td >{employee.sname}</td>
            <td >{employee.edesg}</td>
            <td className='text-center'>
          
            <Link to = {`/edit`}   state={{ employee:employee }}  className="text-center ">
                <i
                className="edit alternate outline icon "
                style={{ color: "blue", marginTop: "7px" , marginLeft: "10px"  }}
                ></i>
            </Link>
            </td>
  
              <td className='text-center'>
                  <i className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                onClick={() => deleteEmployee(employee.eid)}
              ></i></td>
          </tr>
</>
            );
          });

          const getSearchTerm = () => {
          
           props.searchKeyword(inputEl.current.value);
          };

          return (
            <>
               <Navbar/>
              <div className='container'>
        
                 <div className="ui search">
                <div className="ui icon input">
                  <input ref={inputEl}
                  className="prompt" type="text" 
                  name="search" placeholder="Search Employees" 
                  value={props.term} onChange={getSearchTerm} />
                  <i className="search icon"></i>
                </div>
                <div className="results"></div>
              </div>
              
              <table className="ui celled table text-center">
                <thead>
                 <tr>
                 <th>Employee Id</th>
                 <th>Employee Name</th>
                 <th>Supervisor</th>
                 <th>Designation</th>
                 <th>EDIT</th>
                 <th>DELETE</th>
                 </tr>
                </thead>
                <tbody className="ui celled list text-center">
                     {renderEmployeeList.length>0 ? renderEmployeeList:"No Results Found!!"}
                </tbody>
                </table>

            </div>
            <div>

                <br/><br/>

                <div className='text-center'>
            <Link className=" text-center d-grid gap-2" to='/addemp'>
                <button className='ui button btn btn-primary'>Add Employee</button>
            </Link>
            </div>

            </div>
            
            </>
          );
        }

        else {
            window.location='/adminlogin'
            }
    }
    


export default AdminDashboard;

