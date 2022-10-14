import React from 'react'
import './animatForm.css'
import $ from 'jquery'

const AnimatedForm = () => {

    function expandInput(){
        console.log("Clicked");
        $(".inputField").toggleClass("inputFieldexpand");
    }

  return (
    <div className="animBox">
        <div className="loginForm col-lg-4 col-md-4 col-sm-12 form-group">
            <h1>Login</h1>
            <label htmlFor="Username" className='Label' onClick={expandInput}>Username</label>
            <input type="text" className='form-controle inputField'/>
            <label htmlFor="password" className='Label' onClick={expandInput}>Password</label>
            <input type="text" className='form-controle inputField'/>
        </div>
    </div>
  )
}

export default AnimatedForm