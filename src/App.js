import { useState,useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import EmpLogin from './components/EmpLogin';
import EmpDashboard from './components/EmpDashboard';
import Navbar from './components/Navbar';
import AdminLogout from './components/AdminLogout';
import EmpLogout from './components/EmpLogout';
import AddEmp from './components/AddEmp';
import EmpAttendance from './components/EmpAttendance';

 
import api from "./api/data";

import { v4 as uid } from "uuid";
import EditEmployee from "./components/EditEmployee";

function App() { 

  const LocalKey="employees";

  const [employees,setemployees]= useState([]);

  const [searchTerm, setSearchTerm] =useState("");
  const [searchResult, setSearchResult] = useState([]);

  /* Employee Details */

/* Add Employee */

  const addEmployeeHandler = async (employee)=>{
     

    console.log(employee);
    const request = {
    id:employee.eid,
      ...employee,
    };

    const response = await api.post("/employees", request);
    console.log(response);
    setemployees([...employees, response.data]);
 };

 
 /* Update Employee */

 const updateEmployee = async (employee) => {
  const response = await api.put(`/employees/${employee.eid}`, employee);
  const { eid, ename, sname, edesg } = response.data;
  setemployees(
    employees.map((employee) => {
      return employee.eid === eid ? { ...response.data } : employee;
    })
  );
}; 


 /* Delete Employee */

 const removeEmployee = async (eid) => {
  await api.delete(`/employees/${eid}`);
  const newEmployeesList = employees.filter((employee) => {
    return employee.eid !== eid;
  });

  setemployees(newEmployeesList);
};


/* get employees */

const retrieveemployees = async () => {
  const response = await api.get("/employees");
  return response.data;
};

 useEffect(()=>{
  
  const getAllemployees = async () => {
    const allemployees = await retrieveemployees();
    if (allemployees) setemployees(allemployees);
  };

  getAllemployees();

},[])


/* search employee */

const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if(searchTerm !== "")
  {
    const newEmployeeList = employees.filter((employee)=> {
      return Object.values(employee).join("").toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(newEmployeeList);
    } 
    else
    {
      setSearchResult(employees);
    }
};

/* set item to local storage */

 useEffect(() => {
   localStorage.setItem(LocalKey, JSON.stringify(employees))
 }, [employees]);


/* Attendance Details */

const LocalKey2="attendance";

  const [attendance,setattendance]= useState([]);


  /* add attendance */

  const addAttendance = async (atdnce)=>{
      

     console.log(atdnce);
     const request = {
      id:atdnce.emid+"-"+atdnce.date+"-"+atdnce.month+"-"+atdnce.year,
      edate:atdnce.date+"-"+atdnce.month+"-"+atdnce.year,
       ...atdnce,
     };
 
     const response = await api.post("/attendance", request);
     console.log(response);
     setattendance([...attendance, response.data]);

 };

 /* get attendance */
 
 const retrieveattendance = async () => {
  const response = await api.get("/attendance");
  return response.data;
};


 useEffect(()=>{

  const getAllattendance = async () => {
    const allattendance = await retrieveattendance();
    if (allattendance) setattendance(allattendance);
  };

  getAllattendance();

},[])



/* search in attendance */

const searchHandler2 = (searchTerm) => {
  setSearchTerm(searchTerm);
  if(searchTerm !== "")
  {
    const newAttendanceList = attendance.filter((atdnce)=> {
      return Object.values(atdnce).join("").toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(newAttendanceList);
    } 
    else
    {
      setSearchResult(attendance);
    }
};

/* set data to local storage */

 useEffect(() => {
   localStorage.setItem(LocalKey2, JSON.stringify(attendance))
 }, [attendance]);

 /* UI */

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admindashboard" 
              element={<AdminDashboard 
                  employees={searchTerm.length < 1 ? employees : searchResult} 
                  getEmployeeId={removeEmployee}
                  term={searchTerm}
                  searchKeyword = {searchHandler} />} />
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/emplogin" element={<EmpLogin employees={employees}/>}/>
          <Route path="/empdashboard" 
            element={<EmpDashboard
            addAttendance={addAttendance}
            employees={employees} />}/>
          <Route path="/adminlogout" element={<AdminLogout/>}/>
          <Route path="/emplogout" element={<EmpLogout/>}/>
          <Route path="/addemp" element={<AddEmp addEmployeeHandler={addEmployeeHandler}/>}/>
          <Route path="/empattendance" 
              element={<EmpAttendance 
              attendance={searchTerm.length < 1 ? attendance : searchResult}
              term={searchTerm}
              searchKeyword = {searchHandler2} />} />
         
          <Route path="/edit" element={<EditEmployee updateEmployee={updateEmployee} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

