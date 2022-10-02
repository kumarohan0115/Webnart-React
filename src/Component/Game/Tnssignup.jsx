import React from 'react'
import './react-form.css'
import { useState } from 'react'
import axios from '../../axios'
import Navbar from '../../Component/Navbar/Navbar'

const Tnssignup = () => {

  const [user, setUser]= useState({
    fullname:"",
    branch:"",
    year:"",
    email:"",
    phone:"",
    preknowledge:"",
    select:""
  })

  const register=()=>{
    console.log(user);
    axios.post('/register', {
      fullname:user.fullname,
      branch:user.branch,
      year:user.year,
      email:user.email,
      phone:user.phone,
      preknowledge:user.preknowledge,
      select:user.Select
  })
  .then(function (response) {
    if(response==="Successfull!"){
      window.location.href="/Tnssignup"
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  let name,value;
  const handleinput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  // const postdata=async(e)=>{
  //   e.preventDefault()
  //   const {username, password, role} = user;
  //   const res = await fetch("/register",{
  //     headers:{
  //       "content-type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       username, password, role
  //     })
  //   })
  //   const data = await res.json();
  //   if(data.status ===422 || !data){
  //     window.alert("Invalid Registration")
  //     console.log("Invalid Registration")
  //   }
  //   else{
  //     window.alert(" Registration Sucessfull!")
  //     console.log("Registration Sucessfull")
  //   }
  // }

  return (
    <div id='workshop'>
        <Navbar/>
        <div className="form-div col-lg-5 col-md-8 col-sm-12">
          <div className="heading">
            <h2>React JS Workshop Registration Form</h2>
          </div>
          <div className='form-group workshop-form'>
              <label htmlFor="">Name</label>
              <input className="form-control" type = "text" name = "fullanme" id = "name"  placeholder='Full Name'onChange={handleinput} value={user.fullname}  required/>
              
              <label htmlFor="">Branch</label>
              <input className="form-control" type = "text" name = "branch" id = "branch" placeholder='Branch' onChange={handleinput} value={user.branch}  required/>
              
              <label htmlFor="">Year</label>
              <input className="form-control" type = "text" name = "year" id = "year" placeholder='Year'onChange={handleinput} value={user.year}  required/> 
              
              <label htmlFor="">Email</label>
              <input className="form-control" type = "email" name = "email" id = "email"  placeholder='Email'onChange={handleinput} value={user.email}  required/>
              
              <label htmlFor="">Contact No.</label>
              <input className="form-control" type = "tel" name = "phone" id = "phone"  placeholder='Contact No.'onChange={handleinput} value={user.phone}  required/>
              
              <label htmlFor="">Pre Aquired Knowledge   (if don't know any thing leave blank!)</label>
              <input className="form-control" type = "text" name = "preknowledge" id = "preknowledge" placeholder='Pre Aquired Knowledge of web-Development...' onChange={handleinput} value={user.preknowledge} />
              <span>Insert Data Seprated with comma " , ".</span>
              
              <label htmlFor="">Available for WorkShop</label>
              <select className="form-control" name="Select" id="" value={user.Select} required>
                <option value="" selected>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <button className="btn btn-sm btn-outline-success" onClick={register} >Submit </button>
          </div>
        </div>
    </div>
  )
}

export default Tnssignup