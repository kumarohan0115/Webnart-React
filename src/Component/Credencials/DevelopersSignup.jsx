import './developersSignup.css'
import axios from '../../axios'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";


import { useState, useEffect, useRef } from 'react';

const DevelopersSignup = () => {

  // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const userRef = useRef();
  const errRef = useRef();

  const [userFocus, setUserFocus] = useState(false);



  const [pass, setPass] = useState();
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState();
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    setValidPwd(result);
    const match = pass === matchPwd;
    setValidMatch(match);
  }, [pass, matchPwd, PWD_REGEX])


  useEffect(() => {
    setErrMsg('');
  }, [pass, matchPwd])

  const submitHandle = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(pass)
    const v2 = PWD_REGEX.test(pass)
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return
    }
    setSuccess(true);
  }


  // registeration function defined==================================>

  const [DevelopersData, setDevelopersData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    address: "",
    profile: "",
    intrestedToGetHired: ""
  })

  useEffect(() => {
    if (DevelopersData.firstName === "" || DevelopersData.lastName === "" || DevelopersData.email === ""  || DevelopersData.contact === "" || DevelopersData.address === "" || DevelopersData.profile === "" || DevelopersData.intrested === "") {
      document.getElementById("developersRegister_btn").setAttribute('disabled', true);
    }
    else {
      console.log('entered')
      document.getElementById("developersRegister_btn").removeAttribute('disabled');
      console.log('exit')
    }
  }, [DevelopersData])


  const disable = () => {
    const data = document.getElementsByTagName('input');
    if (data === "") {
      console.log("no data found");
    }
    else {
      console.log();
    }
  }
  disable();


  const devloperRegister = () => {
    console.log(DevelopersData);
    document.getElementById("developersRegister_btn").setAttribute('disabled', true);
    axios.post('/developerRegistration', {
      firstName: DevelopersData.firstName,
      lastName: DevelopersData.lastName,
      email: DevelopersData.email,
      password: pass,
      confirmPassword: matchPwd,
      contact: DevelopersData.contact,
      address: DevelopersData.address,
      profile: DevelopersData.profile,
      intrestedToGetHired: DevelopersData.intrested
    })
      .then(function (response) {
        console.log(response);
        // setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  let developersdata, value;
  const developerSignupInput = async (e) => {
    console.log(e);
    developersdata = e.target.name;
    value = e.target.value;
    await setDevelopersData({ ...DevelopersData, [developersdata]: value });
  }


  // const [isChecked, setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };



  return (
    <div id='devsignupmain'>
      <div className="devlopersForm">
        <form action="" className="form-group">
          <div className="formName">
            <h3>Register As Developer</h3>
            <hr style={{ 'border': '2px solid white', 'backgroundColor': 'white' }} />
          </div>
          <label htmlFor="First Name">First Name <span>*</span></label>
          <input
            onChange={developerSignupInput}
            type="text"
            id="devfirstName"
            className='form-control developers_Input'
            placeholder="First Name"
            value={DevelopersData.firstName}
            name="firstName"
            ref={userRef}
            autoComplete="off"
            // onChange={(e) => setFirstName(e.target.value)}
            // aria-invalid={(validName ? "false" : "true")}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required />

          <label htmlFor="Last Name">Last Name <span>*</span></label>
          <input
            onChange={developerSignupInput}
            type="text"
            id="devlastName"
            className='form-control developers_Input'
            placeholder="Last Name"
            value={DevelopersData.lastName}
            name="lastName"
            ref={userRef}
            autoComplete="off"
            // onChange={(e) => setLastName(e.target.value)}
            // aria-invalid={(validName ? "false" : "true")}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required />

          <label htmlFor="Email">Email <span>*</span></label>
          <input
            onChange={developerSignupInput} 
            type="email"
            className='form-control developers_Input'
            value={DevelopersData.email}
            name='email'
            placeholder="Email"
            required
          // onChange={(e) => setDevelopersEmail(e.target.value)}
          />

          <label htmlFor="Password">Password<span>*</span>
            <span className={validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
            <span className={validPwd || !pass ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
          </label>
          <input
            // onChange={developerSignupInput}
            type="password"
            className='form-control developers_Input'
            minLength={6}
            maxLength={24}
            placeholder='Password'
            name="password"
            value={pass}
            id="password"
            required
            onChange={(e) => setPass(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8-24 Characters.<br />
            Must include uppercase and lowecase ltters, a number and a spcial character.<br />
            Allowed special Characters: eg. @,!,&,$,#,% etc.
          </p>

          <label htmlFor="Confirm Password">Confirm Password<span>*</span>
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
          </label>
          <input
            // onChange={developerSignupInput}
            type="password"
            className='form-control developers_Input'
            placeholder='Confirm Password'
            value={matchPwd}
            id="confirm_pwd"
            name="confirmPassword"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />

          <label htmlFor="Contact">Contact <span>*</span></label>
          <input
            onChange={developerSignupInput}
            type="tel"
            className='form-control developers_Input'
            placeholder="Contact"
            value={DevelopersData.contact}
            name='contact'
            ref={userRef}
            autoComplete='off'
            required />

          <label htmlFor="Address">Address <span>*</span></label>
          <input
            onChange={developerSignupInput}
            type="text"
            className='form-control developers_Input'
            value={DevelopersData.address}
            name='address'
            placeholder="Address"
            required />

          <label htmlFor="profile_Choice">Choose Your Profile <span>*</span></label>
          <select id="profileoption" className='form-control developers_Input' name="profile">
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
              // onChange={developerSignupInput}
              type="checkbox"
              id="intrested"
              value={DevelopersData.intrested}
              name="intrested"
              // checked={isChecked}
              // onChange={handleOnChange}
            />
          </div>

          <div className="profilePicture">
            <label htmlFor="">Profile Picture</label>
            <label htmlFor="images" className="drop-container">
              <span className="drop-title">Drop files here</span>
              <h5>or</h5>
              <input
                onChange={developerSignupInput} type="file" id="images" accept="image/*" />
            </label>
          </div>

          <button id='developersRegister_btn' className='btn btn-sm btn-primary form-control' disabled onClick={devloperRegister}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default DevelopersSignup