import React, {useRef} from 'react';
import Navbar from './Navbar';

const EmpAttendance = (props) => {
  
    let status=((localStorage.getItem("admin-status")));
     
    console.log(props);

    const inputEl = useRef("");

    if(status==="log-in")
    {
       
        const renderAttendanceList = props.attendance.map((atdnce) => {
            return (
           
                  <tr>
                    <td data-label="Employee Id">{atdnce.emid}</td>
                    <td data-label="Employee Name">{atdnce.emname}</td>
                    <td data-label="Date">{atdnce.edate}</td>
                    <td data-label="Type">{atdnce.type}</td>
                  </tr>
            );
          });

          const getSearchTerm = () => {
            props.searchKeyword(inputEl.current.value);
           };


          return (
           <> <div className="main">
               <Navbar/>
            
              <div className="ui search">
                <div className="ui icon input">
                  <input ref={inputEl}
                  className="prompt" type="text"
                  placeholder="Search Employee"
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
                 <th>Date</th>
                 <th>Worked_On</th>
                 </tr>
                </thead>
                <tbody className="ui celled list">
                  {renderAttendanceList.length>0 ? renderAttendanceList: "No Results Found!!!"}
                </tbody>
                </table>
           
            </div>
            <div>
            </div>
            </>
          );
        }

        else {
            window.location='/adminlogin'
            }
};

export default EmpAttendance;

