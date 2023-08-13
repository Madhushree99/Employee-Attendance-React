import React, {useState} from "react";
import Navbar2 from "./Navbar2";
import api from "../api/data";

const EmpDashboard = (props) => {

   //let status=((localStorage.getItem("emp-status")));
  let status=((sessionStorage.getItem("emp-status")));

  //console.log(props)

  const[emname,setNewEmname]=useState("");
  const[emid,setNewEmid]=useState("");
  const[date,setNewDate]=useState("");
  const[month,setNewMonth]=useState("");
  const[year,setNewYear]=useState("");
  const[type,setNewType]=useState("");

  const eid=sessionStorage.getItem("empid");

  const [selected,setSelected] = useState("");
  const [edate,setNewEdate] = useState("");

  const getemp = async () => {
            const response = await api.get(`/employees/${eid}`)
            .then((res)=>(res.data));
            setNewEmname(response.ename);
            setNewEmid(eid);
          };

          const data= getemp();
          

  const set1 = [
    "01","02","03","04","05","06","07","08","09","10",
    "11","12","13","14","15","16","17","18", "19","20",
    "21","22","23","24","25","26","27","28","29","30","31"
  ];
      
  const set2 = [
    "01","02","03","04","05","06","07","08","09","10",
    "11","12","13","14","15","16","17","18", "19","20",
    "21","22","23","24","25","26","27","28","29","30"
  ];

  const set3 = [
    "01","02","03","04","05","06","07","08","09","10",
    "11","12","13","14","15","16","17","18", "19","20",
    "21","22","23","24","25","26","27","28"
  ];

  let opt=null;
  let options=null;

  if(month === "02")
  {
    opt=set3
  }
  else if(month === "04" ||month === "06" ||month === "09" ||month === "11")
  {
    opt= set2
  }
  else
  {
    opt=set1
  }

if(opt)
{
  options=opt.map((el)=> <option key={el}>{el}</option>)
}

   const add= (e)=>{
        e.preventDefault();
      
        if(date==="" || month==="" || year==="" || type==="")
        {
          alert("please fill all the fields...")
          return
        }

       props.addAttendance({emid,emname,date,month,year,type});

       setNewEmname("");
       setNewEmid("");
       setNewDate("");
       setNewMonth("");
       setNewYear("");
       setNewType("");

      alert("Your Attenadance is Marked Successfully.. Thank You");
		 
      }

      
    if(status==="log-in")
    {
        return (
			<>
			<Navbar2/>
          <div className="form">
            <div className="container">
              <br/>
              <div>
      
                <form className="ui form" onSubmit={add}>

                  <div className="ui dividing header text-center">
                  <h3>
                    <b>Mark your attendance please!!</b>
                  </h3>
                  </div>

      <div className="headerContainer">
                  <div className="two fields" >
                    <div className="field">
                      <label htmlFor="">
                        <b>Employee Id :</b>
                      </label>
                      <input
                        type="text"
                        placeholder=" Your Employee Id"
                        name="emid"
                        value={eid}
                        readOnly
                      />
   					 </div>

						<div className="field">
                      <label htmlFor="">
                        <b>Employee Name :</b>
                      </label>
                      <input type="text" 
                      placeholder="Employee Name" 
                      name="emname" 
                      value={emname}
                      readOnly
                      />
                    </div>

         </div>

                    {/* <div >
                    <label htmlFor="">
                        <b>Date :</b>
                      </label>
                      <input type="date"
                      name="date"
                      pattern="\d{4}-\d{2}-\d{2}"
                       value={this.state.date}
                       onChange={(e) => this.setState({ date: e.target.value })}
                      />
                     
                    </div> */}
          <div className="four fields required">
                  <div className="field">
                    <label htmlFor="">
                        <b> Date :</b>
                      </label>
                      <select className="ui fluid dropdown" value={date}
                      name="date"
                       onChange={(e) => setNewDate(e.target.value )} >
                         <option value="" selected disabled hidden>Date</option>
                        {options}
                      </select>  
                    </div>

                    <div className="field" >
                    <label htmlFor="">
                        <b> Month :</b>
                      </label>
                      <select className="ui fluid dropdown" value={month}
                      name="month"
                       onChange={(e) => setNewMonth(e.target.value)} >
                         <option value="" disabled hidden>Month</option>
                        <option value="01">Janauary</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>

                    <div className="field" >
                    <label htmlFor="">
                        <b> Year :</b>
                      </label>
                      <select className="ui form dropdown" value={year}
                      name="year"
                       onChange={(e) => setNewYear(e.target.value)} >
                        <option value="" disabled hidden>Year</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>

                    <div className="field" >
                    <label htmlFor="">
                        <b> Type :</b>
                      </label>
                      <select className="ui form dropdown" value={type}
                      name="type"
                       onChange={(e) => setNewType(e.target.value)} >
                        <option value="" disabled hidden>Worked for</option>
                        <option value="Half-Day">Half Day</option>
                        <option value="1 Day">Full Day</option>
                      </select>
                    </div>

                    </div>
    
                  </div>

                  <br/><br/>
                  
                  <div className="container text-center">
                    <button type="submit" className="btn btn-success" disabled={!date || !month|| !year || !type}>
                      Check In
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
      window.location='/emplogin'
    }
       
      }
    

export default EmpDashboard;

