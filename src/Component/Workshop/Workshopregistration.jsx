import React from 'react'
import './workshop-form.css'
import { useState,useEffect } from 'react'
import axios from '../../axios'
import Navbar from '../Navbar/Navbar'

const Workshopregistration = () => {
  
  const [success,setSuccess]= useState(false);
  const [user, setUser]= useState({
    fullname:"",
    branch:"",
    year:"",
    section:"",
    email:"",
    phone:"",
    preknowledge:"",
    attendance:"",
    option:""
  })

  useEffect(() => {
    if(user.fullname ==="" || user.option ==="" || user.phone ==="" || user.email ==="" || user.year ==="" || user.branch ==="" || user.section ==="" || user.attendance ===""){
      document.getElementById("submit-btn").setAttribute('disabled',true);
    }
    else{
      console.log('entered')
      document.getElementById("submit-btn").removeAttribute('disabled');
      console.log('exit')
    }
  }, [user])
  

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
    document.getElementById("submit-btn").setAttribute('disabled',true);
    axios.post('/register', {
      fullname:user.fullname,
      branch:user.branch,
      year:user.year,
      section:user.section,
      email:user.email,
      phone:user.phone,
      preknowledge:user.preknowledge,
      attendance:user.attendance,
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
                <h1>Submitted Successfully!</h1>
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
              
              <div className="yrr-sec">
                <div className="input-field">
                  <label htmlFor="">Year</label>
                  <input className="form-control yr" type = "number" name = "year" id = "year" placeholder='Year' maxLength={1} minLength={1} max={4} min={2} onChange={handleinput} value={user.year}  required/> 
                </div>
                
                <div className="input-field" style={{'marginLeft':'10px'}}>
                  <label htmlFor="">Section</label>
                  <input className="form-control yr" type = "text" name = "section" id = "section" placeholder='Section' maxLength={1} minLength={1} min={2} onChange={handleinput} value={user.section}  required/> 
                </div>
              </div>
              
              <label htmlFor="">Email</label>
              <input className="form-control" type = "email" name = "email" id = "email"  placeholder='Email'onChange={handleinput} value={user.email}  required/>
              
              <label htmlFor="">Contact No.</label>
              <input className="form-control" type = "tel" name = "phone" id = "phone"  placeholder='10 Digit Contact No.'onChange={handleinput} value={user.phone} minLength={10} maxLength={10} required/>
              <span>Do not include +91-</span>
              
              <label htmlFor="">Pre Aquired Knowledge   (if don't know any thing leave blank!)</label>
              <input className="form-control" type = "text" name = "preknowledge" id = "preknowledge" placeholder='Any Knowledge about web-Dev...' onChange={handleinput} value={user.preknowledge} />
              <span>Insert Data Seprated with comma " , ".</span>
              

              <div className="yrr-sec">
                <div className="input-field">
                  <label htmlFor="">Attendance(%)</label>
                  <input className="form-control yr" type = "text" name = "attendance" id = "attendance" placeholder='Attendance' onChange={handleinput} value={user.attendance}  required/> 
                  <span>Attendance till 2nd Nov 2022.</span>
                </div>
                
                <div className="input-field" style={{'marginLeft':'10px'}}>
                  <label htmlFor="">Available for WorkShop</label>
                  <input className="form-control" type = "text" name = "option" id = "option" placeholder='Available for offline Workshop' onChange={handleinput} value={user.option} />
                </div>
                
              </div>

              
              <button className="workshop_btn btn btn-sm btn-success" id='submit-btn' onClick={register}>Submit </button>
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


