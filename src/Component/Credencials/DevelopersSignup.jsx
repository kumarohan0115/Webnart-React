import './developersSignup.css'

import { useState } from 'react';

const DevelopersSignup = () => {


  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };



  return (
    <div id='devsignupmain'>
        <div className="devlopersForm">
            <form action="" className="form-group">
              <div className="formName">
                  <h3>Register As Developer</h3>
                  <hr style={{'border':'2px solid white', 'backgroundColor':'white'}} />
              </div>
              <label htmlFor="First Name">First Name <span>*</span></label>
              <input type="text" className='form-control' placeholder="First Name" required />

              <label htmlFor="Last Name">Last Name <span>*</span></label>
              <input type="text" className='form-control' placeholder="Last Name" required />

              <label htmlFor="Email">Email <span>*</span></label>
              <input type="email" className='form-control' placeholder="Email" required />

              <label htmlFor="Contact">Contact <span>*</span></label>
              <input type="tel" className='form-control' placeholder="Contact" required />

              <label htmlFor="Address">Address <span>*</span></label>
              <input type="text" className='form-control' placeholder="Address" required />

              <label htmlFor="profile_Choice">Choose Your Profile <span>*</span></label>
              <select name="profileOption" id="profileoption" className='form-control'>
                <option value="">Select</option>
                <option value="Web Developer">Web Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Game Developer">Game Developer</option>
                <option value="Game Artist">Game Artist</option>
                <option value="Pixel Artist">Pixel Artist</option>
                <option value="Photographer">Photographer</option>
                <option value="Other">Other</option>
              </select>


              <div className="intrestedToGetHired">
                <label htmlFor="intrestedToGetHired">Intrested To Get Hired</label>
                <input
                  type="checkbox"
                  id="intrested"
                  name="intrested"
                  value="intrested"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
              </div>

              <div className="profilePicture">
                <label htmlFor="">Profile Picture</label>
                <label htmlFor="images" className="drop-container">
                  <span className="drop-title">Drop files here</span>
                  <h5>or</h5>
                  <input type="file" id="images" accept="image/*" required/>
                </label>
              </div>

              <button className='btn btn-sm btn-primary developerRegister form-control'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default DevelopersSignup