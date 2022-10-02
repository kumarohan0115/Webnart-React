import { useRef,useState,useEffect } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import './homelogin.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const HomeLogin = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser]= useState('');
    const [validName,setValidName]= useState(false);
    const [userFocus,setUserFocus]= useState(false);
    
    const [pass,setPass]= useState();
    const [validPwd,setValidPwd]= useState(false);
    const [pwdFocus,setPwdFocus]= useState(false);
    
    const [matchPwd,setMatchPwd]= useState();
    const [validMatch,setValidMatch]= useState(false);
    const [matchFocus,setMatchFocus]= useState(false);
    
    const [errMsg,setErrMsg]= useState(false);
    const [success,setSuccess]= useState(false);



    useEffect(() => {
      userRef.current.focus();
    }, [])

    useEffect(() => {
      const result = USER_REGEX.test(user);
      console.log(result)
      console.log(user)
      setValidName(result);
    }, [user])

    useEffect(() => {
      const result = PWD_REGEX.test(pass);
      console.log(result);
      console.log(pass);
      setValidPwd(result);
      const match = pass ===matchPwd;
      setValidMatch(match);
    }, [pass,matchPwd])


    useEffect(() => {
      setErrMsg('');
    }, [user,pass,matchPwd])
    
    

    const submitHandle=async(e)=>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pass)
        if(!v1 || !v2){
            setErrMsg("Invalid Entry");
            return
        }
        setSuccess(true);
    }

    // To show and hide login & Signup form

    const click=()=>{
        console.log("Clicked")
        document.getElementsByClassName('homelogin-main')[0].style.visibility="hidden";
        document.getElementsByClassName('homelogin-main2')[0].style.visibility="visible";
    }
    const click2=()=>{
        console.log("Clicked 2")
        document.getElementsByClassName('homelogin-main2')[0].style.visibility="hidden";
        document.getElementsByClassName('homelogin-main')[0].style.visibility="visible";
    }

    // constructor(submit){
    //     super();
    //     this.state = {
    //         username:'',
    //         password:'',
    //         confirm_pwd:'',
    //     };
    // }

    // submit=(e)=>{

    //     let {username,password,confirm_pwd}=this.state;
    //     fetch('localhost:3000/add_book', {
    //          method: 'post',
    //          headers: {'Content-Type': 'application/json'},
    //          body: JSON.stringify({
    //             username:username,
    //             password:password,
    //             confirm_pwd:confirm_pwd,
    //          })
    //        }).then(response=>response.json()).then(data=>{
    //             window.alert(data)
    //             //Do anything else like Toast etc.
    //    })
       
    //    }

    //    updateInfo = (event) =>{
    //     let fieldName = event.target.name;
    //     let fieldValue = event.target.value;
    //     if(fieldName === 'username') {
    //         this.setState({username: fieldValue});
    //     }
    //     else if(fieldName === 'password'){
    //         this.setState({password:fieldValue});
    //     }
    //     else if(fieldName === 'confirm_pwd'){
    //         this.setState({confirm_pwd:fieldValue});
    //     }
    // };

  return (
    <div id='homeLogin'>
        
        <div className="homelogin-main">
            <div className="corner-triangle">
                <div className="box"></div>
                <div className="items">
                    <h1>Welcome!</h1>
                    <h4>Create Your Account Free!</h4>
                    <button className="btn btn-lg bttn" id='signup' onClick={click} >SignUp</button>
                </div>
            </div>
            <div className="homelogindiv">
                <div className='login'><h1>Login</h1></div>
                <form action="http://localhost:5001/api/v2/login_api" className="form-group homeloginform" method="POST">
                    <label htmlFor="UserName">UserName</label>
                    <input 
                    type="text" className='form-control loginInput' name="username" placeholder='UserName' autoFocus required />
                    <label htmlFor="Password">Password</label>
                    <input type="password" className='form-control loginInput' name="password" placeholder='Password'/>
                    <button type="submit" className="btn btn-outline-success">Login</button>
                </form>
            </div>
        </div>

        {
        success ?(
            <section>
                <h1>Success!</h1>
            </section>
        ):
        ( 

        <div className="homelogin-main2">
            <div className="corner-triangle">
                <div className="box"></div>
                <div className="items">
                    <h1>Welcome!</h1>
                    <h4>Create Your Account Free!</h4>
                    <button className="btn btn-lg bttn" id='signup' onClick={click2} >Login</button>
                </div>
            </div>
            <div className="homelogindiv">
                <div className='login'><h1>SignUp</h1></div>
                
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                
                <form action="http://localhost:5001/api/v2/postsqlData" className="form-group homeloginform" method="POST">
                    <label htmlFor="UserName">UserName/Email
                        <span className={validName ? "valid": "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                        <span className={validName || !user ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
                    </label>
                    <input 
                        type="text" 
                        className='form-control loginInput' 
                        placeholder='UserName' 
                        autoFocus 
                        id="username"
                        name="username" 
                        ref={userRef} 
                        autoComplete="off"
                        onChange={(e)=>setUser(e.target.value)}
                        required
                        aria-invalid={(validName ? "false" : "true")}
                        aria-describedby="uidnote"
                        onFocus={()=> setUserFocus(true)}
                        onBlur={()=> setUserFocus(false)} 
                    />
                    <p  id="uidnote"
                        className={userFocus && !user && !validName ? "instructions" :"offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        4-24 Characters.<br/>
                        Must begin with a Letter.<br/>
                        Letters,Numbers,underscores,hyphens allowd.
                    </p>
                    
                    <label htmlFor="Password">Password
                        <span className={validPwd ? "valid": "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                        <span className={validPwd || !pass ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
                    </label>
                    <input 
                        type="password" 
                        className='form-control loginInput' 
                        minLength={6} 
                        maxLength={24} 
                        placeholder='Password'
                        id="password"
                        name="password"
                        required
                        onChange={(e)=>setPass(e.target.value)}
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={()=>setPwdFocus(true)}
                        onBlur={()=>setPwdFocus(false)}                    
                    />
                    <p  id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        8-24 Characters.<br/>
                        Must include uppercase and lowecase ltters, a number and a spcial character.<br/>
                        Allowed special Characters: eg. @,!,&,$,#,% etc.
                    </p>
                    
                    <label htmlFor="Role">Role
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input 
                        type="text" 
                        className='form-control loginInput' 
                        placeholder='Role'
                        id="confirm_pwd"
                        name="role"
                        // onChange={(e) => setMatchPwd(e.target.value)}
                        // value={matchPwd}
                        required
                        // aria-invalid={validMatch ? "false" : "true"}
                        // aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    {/* <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p> */}
                    <button type="submit" className="btn btn-outline-success" disabled={!validName || !validPwd ? true : false}>Sign Up</button>
                </form>
            </div>
        </div>
       )
    }
    </div>
  )
}

export default HomeLogin