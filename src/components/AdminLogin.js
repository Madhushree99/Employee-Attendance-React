import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


class AdminLogin extends Component { 

    constructor() { 
        super();
        this.state={
            data : {uname:'', password:''},
            errors:{ }

        }
    }
    
    
    schema={
      uname:Joi.string().required(),
      password:Joi.string().required()
    }

    handleChange = ({target:input}) => {
      
      const data={...this.state.data}
      const errors = {...this.state.errors}

      data[input.name]=input.value
      const errorMessage = this.validateField(input)
      
      if(errorMessage)
          errors[input.name]=errorMessage
      else
          delete errors[input.name]

      this.setState({data,errors})
    }

    validateField=(input) => {
     const {uname,password}=this.state.data;
      
     if(input.name==='uname')
        if(input.value==="") 
            return 'User Name is required'
      
      if(input.name==='password')
        if(input.value==="")
            return 'Password is required'

    const data = {[input.name] : input.value}

    }

    validate =()=> {

      let uname=(localStorage.getItem("aduname"));
      let password=(localStorage.getItem("adpassword"));

      console.log("storage:"+uname);
      console.log("storage:"+password);


      let errors ={}

      const{data} =this.state;

      console.log("form:"+data.uname);
      console.log("form:"+data.password);

      if(data.uname !== uname)

      errors.uname ='Wrong User Name'

      if(data.password !== password)

      errors.password ='Wrong Password'

      return Object.keys(errors).length === 0 ? null :errors;

      const results=Joi.validate(data,this.schema, {abortEarly:false})

         }

    

    hangleSubmit = (event) =>{
     
      event.preventDefault() 
      const errors = this.validate();
      this.setState({errors:errors || {} })
      if(errors) return;
       const{data} =this.state;
        console.log ('form submitted')
        localStorage.setItem('admin-status', 'log-in');
        window.location='/admindashboard'

    }
    
     render() {

       const{data,errors} = this.state;

  let status=((localStorage.getItem("admin-status")));

  if(status==="log-in")
  {
    window.location='/admindashboard'
  }

  else {
         return (
           <>
          <Navbar/>
          
           <div className='text-center mainst'>
             <div className='row justify-content-center'>
             <div className='col-4'>
               <h3></h3>
                 <h2>Sign In</h2>
          <div className='form-group'>   
               <form onSubmit={this.hangleSubmit}>

              <div className='form-group'>
                 <input className='form-control' name="uname" id="uname"
                  type="text" placeholder='Enter UserName' 
                  required value={data.value}
                   onChange={this.handleChange}
                   />
                    {errors.uname && <div className="ui error message alert alert-danger">
                     {errors.uname}
                   </div>} 
            </div>
           
            <div className='form-group'>
                   <input className='form-control' name="password" id="password"
                   type="password" placeholder='Enter Password' 
                   required value={data.value}
                   onChange={this.handleChange}
                   />
                    {errors.password && <div className="ui error message alert alert-danger">
                     {errors.password}
                   </div>}
           </div>
           
<div className='btnst'>
<button type="submit" className='btn btn-success'>Login</button>

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
}


export default AdminLogin;


