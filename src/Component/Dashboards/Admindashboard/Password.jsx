import './password.css'

const Password = () => {

  return (
    <div id='admin_password'>
        <div className="password_head">
            <h1>Password</h1>
            <p>Enter Your Current Password to change password.</p>
        </div>
        <hr />
        <div className='pass_input_div'>
            <label htmlFor="Current Password">Current Password</label>
            <input type="password" name='currentPasswrod'  className='form-control' placeholder='Current Password'/>
        </div>
        <hr />
        <div className='pass_input_div'>
            <label htmlFor="New Password">New Password</label>
            <input type="password" name='NewPasswrod'  className='form-control' placeholder='New Password'/>
        </div>
        <hr />
        <div className='pass_input_div'>
            <label htmlFor="Confirm New Password">Confirm New Password</label>
            <input type="password" name='ConfirmNewPasswrod'  className='form-control' placeholder='Confirm New Password'/>
        </div>
        <hr />
        <div className="updatebtn">
            <button className='btn btn-light'>Cancel</button>
            <button className='btn btn-primary'>Update Password</button>
        </div>
    </div>
  )
}

export default Password