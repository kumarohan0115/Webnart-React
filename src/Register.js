import { useRef,useState,useEffect } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// import './register.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = () => {

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
    
    

  return (

    <div className="main-valid">
    {
        success ?(
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="/">SignIn</a>
                </p>
            </section>
        ):
        ( 
    

    <section id="validation">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        
        <form id="formm" action="" onSubmit={submitHandle}>
            <label htmlFor="userName">UserName:
            <span className={validName ? "valid": "hide"}><FontAwesomeIcon icon={faCheck}/></span>
            <span className={validName || !user ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
            </label>
            <input 
            type="text" 
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


            <label htmlFor="password">Password:
            <span className={validPwd ? "valid": "hide"}><FontAwesomeIcon icon={faCheck}/></span>
            <span className={validPwd || !pass ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
            </label>

            <input 
            type="password"
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

            <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>

            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
        </form>
        <p>Already Registered!<br/>
            <span className="line">
                {/* {Put route Here} */}
                <a href="/">SignIn</a>
            </span>
        </p>

    </section>
      )
    }
    </div>
  )
}

export default Register