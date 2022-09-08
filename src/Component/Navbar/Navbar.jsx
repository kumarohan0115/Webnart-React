import React,{useState}from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './Navbar.css'

const Navbar = ({button_name}) => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="signup__navbar login_nav">
        <div className="signup__navbar-links">
            <h2><a href="/">Webnart</a></h2>
            <div className="signup__navbar-links_container">
                <p><a href="/">Home</a></p>
                <p><a href="/">About</a></p>
                <p><a href="/">Contact</a></p>
            </div>
        </div>
        <div className="signup__navbar-sign">
            <button type="button"><a href={(button_name==='Sign Up')?'/signup':'/login'}>{button_name}</a></button>
        </div>
        <div className="signup__navbar-menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
                <div className="signup__navbar-menu_container scale-up-center">
                    <div className="signup__navbar-menu_container-links">
                        <p><a href="/">Home</a></p>
                        <p><a href="/">About</a></p>
                        <p><a href="/">Contact</a></p>
                    </div>
                    <div className="signup__navbar-menu_container-links-sign">
                        <button type="button"><a href="/signup">{button_name}</a></button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar