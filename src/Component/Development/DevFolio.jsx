import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';
import './Devfolio.css'
import $ from 'jquery';

import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Avatar from '../../Assets/avtart.png'

const DevFolio = () => {

    const devSideNavElement=[
        {
            'href':"/Devefolio",
            'name':"Dev-Home",
            'icon':<HomeIcon className='icon'/>,
        },
        {
            'href':"/register",
            'name':"Event",
            'icon':<EventNoteIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Blog",
            'icon':<BookIcon className='icon'/>,
        },
        {
            'href':"/developers",
            'name':"Developer",
            'icon':<DevicesIcon className='icon'/>,
        },
        {
            'href':"/animationform",
            'name':"Saved",
            'icon':<BookmarksIcon className='icon'/>,
        }
            
    ]
    

    const like=(e)=>{
        e.target.classList.toggle('liked');
    }

    const collapsed=(e)=>{
        e.target.parentNode.parentNode.classList.toggle('collaps');
        e.target.style.transform='rotate(180deg)';
        console.log(e.target.parentNode.parentNode);
    }

    return (
        <div id='developer-div'>
            <Navbar button_name={'join Us'}/>
            <SideNav name={devSideNavElement} logo={'https://t4.ftcdn.net/jpg/04/64/64/09/360_F_464640910_Bid7MoSLjzV6wv6Ukhks0sx9EhDgljIw.jpg'} />
            {/* Content---------------------------------------------------------> */}

            <div className="devfolio-main-div offset-lg-2 col-lg-10 offset-md-2 col-md-10 col-sm-12">
                <div className="row dev-templet-row">
                    <div className="temp-row row">
                        {/* Showcase Templet --------------------------*/}
                        <div className="templet">
                            <img id='image' alt="" src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            
                            <span id='unliked' className='unliked' onClick={like}><FavoriteIcon/></span>
                            
                            <div className="overlay-l">

                                <span id='expand' className="dc-btn" onClick={collapsed}><ArrowForwardIosIcon id='arrow'/></span>
                                
                                <div className="developer_profile">
                                    <div className="profile">
                                        <img src={Avatar} alt="" />
                                    </div>

                                    <h4>Developer Name</h4>

                                    <button className='btn btn-outline-primary'>Get In Touch</button>
                                </div>
                            </div>
                            <div className="overlay-r">

                                <span id='expand' className="dc-btn" onClick={collapsed}><ArrowForwardIosIcon id='arrow'/></span>
                                <div id='description'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sapiente aliquid. Cum atque voluptates, quos repudiandae vel laboriosam recusandae blanditiis iusto ipsum, a ullam, omnis beatae. Quia labore dignissimos aperiam.</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DevFolio