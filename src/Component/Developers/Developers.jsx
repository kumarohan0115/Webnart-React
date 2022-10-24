import React,{useState} from 'react'
import './developers.css'
import avatar from '../../Assets/avtart.png'
import SideNav from '../Navbar/SideNav';
import Navbar from '../Navbar/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

const Developers = () => {

    const developersSideNav=[
        {
            'href':"/Devefolio",
            'name':"Dev-Home",
            'icon':<HomeIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Event",
            'icon':<EventNoteIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Blog",
            'icon':<BookIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Developer",
            'icon':<DevicesIcon className='icon'/>,
        },
    
    ]
    
    
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        console.log("clicked")
        document.getElementsByClassName('sidenav')[0].style.display = "block";
            setActive(!isActive);
          };
        

    window.onscroll = function() {myFunction()};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("topbar").style.width = scrolled + "%";
    }

  return (
    <div className="developers-main-div">
        <Navbar button_name={'Join As Developer'}/>
        <div className="side-area1">
            <AlignHorizontalLeftIcon id="menu-icon" onClick={toggleClass}/>
        </div>
        <div className="progress-bar" id="topbar"></div>

        <SideNav ClassName="{isActive ? 'active': null}, " id="side_nav_developer" name={developersSideNav} logo={'https://t4.ftcdn.net/jpg/04/64/64/09/360_F_464640910_Bid7MoSLjzV6wv6Ukhks0sx9EhDgljIw.jpg'} />
        
        <div className="side-area2">
            <a href="/"><span className="joinus">Developer's Login</span></a>
        </div>

        <div className="developers-content offset-2 col-9">
            <div className="peoples">
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
                <div className="avtar">
                    <img src={avatar} alt="avtar"/>
                    <h4>Developer Name</h4>
                    <h5>Designation</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developers