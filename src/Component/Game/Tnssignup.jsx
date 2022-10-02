import React from 'react'
import { useState } from 'react'
import axios from '../../axios'

const Tnssignup = () => {

  const [user, setUser]= useState({
    username:"",
    password:"",
    role:""
  })

  const register=()=>{
    axios.post('/register', {
      username:user.username,
    password:user.password,
    role:user.role
  })
  .then(function (response) {
    if(response=="successfull"){
      window.location.href="/tnssignup"
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

  const postdata=async(e)=>{
    e.preventDefault()
    const {username, password, role} = user;
    const res = await fetch("/register",{
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        username, password, role
      })
    })
    const data = await res.json();
    if(data.status ===422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }
    else{
      window.alert(" Registration Sucessfull!")
      console.log("Registration Sucessfull")
    }
  }



  return (
    <>
        <div className="ma">

        <form>
            <input type = "text" name = "username" id = "username"  placeholder='username'onChange={handleinput} value={user.username} />
            <input type = "text" name = "password" id = "password" placeholder='password' onChange={handleinput} value={user.password} />
            <input type = "text" name = "role" id = "role" placeholder='role'onChange={handleinput} value={user.role} /> 
            <button onClick={register} >submit </button>
        </form>
        </div>
    </>
  )
}

export default Tnssignup