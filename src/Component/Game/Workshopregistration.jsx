import React from 'react'
import './workshop-form.css'
import { useState } from 'react'
import axios from '../../axios'
import Navbar from '../Navbar/Navbar'

const Workshopregistration = () => {
  
  const [success,setSuccess]= useState(false);
  const [user, setUser]= useState({
    fullname:"",
    branch:"",
    year:"",
    email:"",
    phone:"",
    preknowledge:"",
    option:""
  })

  const disable=()=>{
    const data = document.getElementsByTagName('input');
    if(data===""){
      console.log("no data found");
    }
    else{
      console.log();
    }
  }
  disable();
  
  const register=()=>{
    console.log(user);
    axios.post('/register', {
      fullname:user.fullname,
      branch:user.branch,
      year:user.year,
      email:user.email,
      phone:user.phone,
      preknowledge:user.preknowledge,
      option:user.option
  })
  .then(function (response) {
    console.log(response);
    setSuccess(true);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  let name,value;
  const handleinput=async(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    await setUser({...user,[name]:value});
  }



  const close=()=>{
    document.getElementsByClassName('popup')[0].style.display="none"
  }

  return (
    <div id='workshop'>
        <Navbar/>
        {
        success ?(
            <section>
                <h1>Submitted Succefully!</h1>
            </section>
        ):
        ( 
        <div className="form-div col-lg-5 col-md-8 col-sm-12">
          <div className="heading">
            <h2>React Js Workshop Registration</h2>
          </div>
          <div className='form-group workshop-form'>
              <label htmlFor="">Name</label>
              <input className="form-control" type = "text" name = "fullname" id = "name"  placeholder='Full Name'onChange={handleinput} value={user.fullname}  required/>
              
              <label htmlFor="">Branch</label>
              <input className="form-control" type = "text" name = "branch" id = "branch" placeholder='Branch' maxLength={3} onChange={handleinput} value={user.branch} autoCapitalize="true" required/>
              
              <label htmlFor="">Year</label>
              <input className="form-control" type = "number" name = "year" id = "year" placeholder='Year' maxLength={1} max={4} min={2} onChange={handleinput} value={user.year}  required/> 
              
              <label htmlFor="">Email</label>
              <input className="form-control" type = "email" name = "email" id = "email"  placeholder='Email'onChange={handleinput} value={user.email}  required/>
              
              <label htmlFor="">Contact No.</label>
              <input className="form-control" type = "tel" name = "phone" id = "phone"  placeholder='10 Digit Contact No.'onChange={handleinput} value={user.phone} minLength={10} maxLength={10} required/>
              <span>Do not include +91-</span>
              
              <label htmlFor="">Pre Aquired Knowledge   (if don't know any thing leave blank!)</label>
              <input className="form-control" type = "text" name = "preknowledge" id = "preknowledge" placeholder='Pre Aquired Knowledge of web-Development...' onChange={handleinput} value={user.preknowledge} />
              <span>Insert Data Seprated with comma " , ".</span>
              
              <label htmlFor="">Available for WorkShop</label>
              <input className="form-control" type = "text" name = "option" id = "option" placeholder='Available for offline Workshop' onChange={handleinput} value={user.option} />
              
              <button className="btn btn-sm btn-success" onClick={register}>Submit </button>
          </div>
        </div>
        )
        }
        <div className='popup'>
          <div className='popupdata'>
            <h1>Important Notice</h1>
            <ul>
              <li>Time</li>
              <li>Date</li>
              <li>Venue</li>
              <li>co-ordinator-1
                <ul>Contact No.</ul>
              </li>
              <li>co-ordinator-2
                <ul>Contact No.</ul>
              </li>
            </ul>
            <button className='cross btn btn-danger' onClick={close}>Close</button>
          </div>
        </div>
    </div>
  )
}

export default Workshopregistration;


