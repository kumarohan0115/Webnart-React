import React from 'react'
import './Login.css';
import Navbar from '../Navbar/Navbar'

// import axios from 'axios'

const Login = () => {

    // axios.post('/react-register', {
    //     name: 'name',
    //     email: 'email',
    //     password: 'pwd',
    //     securityQuestion: 'securityQ',
    //     securityAnswer: 'security',
    // })
    // .then(function (response) {
    //     if (response.data === "succesfull") {
    //         alert("registration done")
    //         window.location.href = "/login/0"
    //     }
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });



  return (
    <div class="login-main-div">
        <Navbar button_name={"Sign Up"}/>
        <form class="login-form form-group offset-lg-6 col-lg-6  offset-md-4 col-md-8 col-sm-12" method="POST" action=''>
            <div class="login-div">
                <div class="login-name">
                    <h2>Login</h2>
                </div>
                <hr/>
                    <label htmlFor="username">Username/Email:</label><br/>
                    <input type="text" id="username" class="form-control" name="usrname"/><br/>
                
                    <label htmlFor="password">Password:</label><br/>
                    <input type="password" id="pass" class="form-control" name="pass"/><br/>
                <div class="forget-pass">
                    <a href="/">Forget password</a> <span> | </span> <a href="allo">SignUp</a>
                </div>
                <div class="login-btn">
                    <button class="btn btn-lg btn-outline-primary" type="submit" name="login">Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login