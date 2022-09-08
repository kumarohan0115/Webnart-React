import React, { useEffect } from 'react'
import './Signup.css'
import $ from 'jquery';
import Navbar from '../Navbar/Navbar';


// import LoginIcon from '@mui/icons-material/Login';

const Signup = () => {

    useEffect(()=>{
        onChange();
    },[])

    const onChange=()=>{
        $('input').on('keyup', function() {
            var username = $('input[name="username"]').val();
            var pass = $('input[name="password"]').val();
            var password = $('input[name="re_password"]').val();
            var email_id = $('input[name="email"]').val();
            if (username !== '' && email_id !== '' && password !== '' && pass !== '' && pass === password) {
                
                $('#matched').css({
                    "visibility": "visible"
                });
                $('#matched').text("Password Matched.");
                $('.right-con').css({
                    "display": "block"
                });
            } else {
                $('.right-con').css({
                    "display": "none"
                });
                $('#matched').text("Password must be Same.");
            }
        });

    
        $('button[type="submit"]').attr('disabled', true);
        $('input').on('keyup', function() {
            var full_name = $('input[name="full_name"]').val();
            var city = $('input[name="city"]').val();
            var age = $('input[name="age"]').val();
            // var file = $('input[name="photo"]').val();
            if (full_name !== '' && city !== '' && age !== '') {
                $('button[type="submit"]').attr('disabled', false);
            }
            else{
                $('button[type="submit"]').attr('disabled', true);
            }
        });
    }

    
  return (
    <div id='Signup'>
        <Navbar button_name={'Sign In'}/>
        {/* Form Starts ------------------------------------------------------->*/}
        <div className="signup-main-div container-fluid">
            <form className='form-group row'>
                <div className="left-con col-lg-4 offset-md-1 col-md-8 col-sm-12">
                    <div className="signup-div">
                        <div className="signup-name">
                            <p>Step-1</p>
                        </div>
                        <hr/>
                        <div className="lower-signup ">
                            <div className="create-username">
                                <label htmlFor="username">Create-Username:</label>
                                <input type="text" className="inputs form-control" id="username" name="username"  placeholder="Username" minLength="8" maxLength="16" required/>
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email Address:</label>
                                <input type="email" className="inputs form-control" id="email" name="email"  placeholder="Email" required/>
                            </div>
                            <div className="create-password">
                                <label htmlFor="username">Create-Password:</label>
                                <input type="password" className="inputs form-control" id="password" name="password"  placeholder="Password" minLength="8" maxLength="20" required/>
                            </div>
                            <div className="re-pass">
                                <label htmlFor="re-password">Re-enter Password:</label>
                                <input type="password" className="inputs form-control" id="re-password" name="re_password"  placeholder="Re-Enter Password" required/>
                            </div>
                            <div id="alert">
                                <p id="matched"></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-con offset-lg-2 col-lg-4 offset-md-1 col-md-8 col-sm-auto ">
                    <div className="signup-div" id="step-2">
                        <div className="signup-name">
                            <p>Step-2</p>
                        </div>
                        <hr/>

                        <div className="lower-signup ">
                            <div className="full-name">
                                <label htmlFor="fullname">Full Name:</label>
                                <input type="text" className="inputs form-control" id="fullname" name="full_name"  placeholder="Full Name"/>
                            </div>
                            <div className="full-name">
                                <label htmlFor="city">City:</label>
                                <input type="text" className="inputs form-control" id="city" name="city"  placeholder="City"/>
                            </div>
                            <div className="full-name">
                                <label htmlFor="age">Age:</label>
                                <input type="text" className="inputs form-control" id="age" name="age" maxLength={3} placeholder="Age"/>
                            </div>
                            <div className="upload-photo">
                                <label htmlFor="profile photo">Upload Profile Photo:</label>
                                <input type="file" className="inputs form-control" id="file" name="photo" />
                            </div>
                            <div className="signup-btn">
                                <button type="submit" id="create_account" name="submit" className="btn btn-success" disabled>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup