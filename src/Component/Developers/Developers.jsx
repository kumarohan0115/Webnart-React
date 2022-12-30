



import React, { useState, useEffect } from 'react'
import './developers.css'
import axios from 'axios';
// import avatar from '../../Assets/avtart.png'
import NewSideNav from '../Navbar/NewSideNav';
// import Navbar from '../Navbar/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
// import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

const Developers = () => {



    const [Profiledata, setProfiledata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/api/v2/findDev").then((response) => {
            setProfiledata(response.data)
            console.log(response.data)
        }).catch(err => console.log("err here", err));
    }, []);

    const developersSideNav = [
        {
            'href': "/Devefolio",
            'name': "Dev-Home",
            'icon': <HomeIcon className='icon' />,
        },
        {
            'href': "/",
            'name': "Event",
            'icon': <EventNoteIcon className='icon' />,
        },
        {
            'href': "/",
            'name': "Blog",
            'icon': <BookIcon className='icon' />,
        },
        {
            'href': "/",
            'name': "Developer",
            'icon': <DevicesIcon className='icon' />,
        },

    ]


    // const [isActive, setActive] = useState(false);
    // const toggleClass = () => {
    //     console.log("clicked")
    //     document.getElementsByClassName('sidenav')[0].style.display = "block";
    //         setActive(!isActive);
    //       };


    // window.onscroll = function() {myFunction()};

    // function myFunction() {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.getElementById("topbar").style.width = scrolled + "%";
    // }
    return (
        <div className="developers-main-div">
            {/* <Navbar button_name={"Developer's Login"}/> */}
            {/* <div className="side-area1">
            <AlignHorizontalLeftIcon id="menu-icon" onClick={toggleClass}/>
        </div> */}
            {/* <div className="progress-bar" id="topbar"></div> */}

            <NewSideNav ClassName="{isActive ? 'active': null}, " id="side_nav_developer" name={developersSideNav} logo={'https://t4.ftcdn.net/jpg/04/64/64/09/360_F_464640910_Bid7MoSLjzV6wv6Ukhks0sx9EhDgljIw.jpg'} />

            <div className="side-area2">
                <a href="/developerSignupform"><span className="joinus">Join as Developer</span></a>
            </div>

            <div className="developers-content col-9">
                <div className="peoples">
                    <div className="avtar">

                        {
                            Profiledata?.map(profiledata => {


                                var base64String = btoa(
                                    new Uint8Array(profiledata.Profile_Pic?.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                                    // String.fromCharCode(...new Uint8Array(profiledata.Profile_Pic?.data.data))
                                ); // dont touch these you can changet he variable type 
                                // vishal changed your code because that's not working. only work on youtube

                                return (

                                    <a href="/userdashbaord" key={profiledata.First_Name}>
                                        <img src={`data:image/png;base64,${base64String}`} alt="pp" />
                                        <h4>{profiledata.First_Name}</h4>
                                        <h5>{profiledata.Profile}</h5>
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developers