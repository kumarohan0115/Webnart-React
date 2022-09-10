import React from 'react'
import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';
import './Devfolio.css'

import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import Avatar from '../../Assets/avtart.png'

const DevFolio = () => {

    const devSideNavElement=[
        {
            'href':"/",
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
            'href':"/developers",
            'name':"Developer",
            'icon':<DevicesIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Saved",
            'icon':<BookmarksIcon className='icon'/>,
        }
    ]

    return (
        <div id='developer-div'>
            <Navbar button_name={'join Us'}/>
            <SideNav name={devSideNavElement}/>
            {/* Content---------------------------------------------------------> */}

            <div className="devfolio-main-div offset-lg-2 col-lg-10 offset-md-2 col-md-10 col-sm-12">
                <div className="row dev-templet-row">
                    <div className="temp-row row">
                        {/* Showcase Templet --------------------------*/}
                        <div className="templet">
                            <img id='image' alt="" src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            <span id='bookmark'><BookmarkIcon/></span>
                            <div className="overlay">

                                <span id='expand' className="dc-btn"><ArrowForwardIosIcon id='arrow'/></span>
                                <div id='description'>
                                    Description: Not More than 30 words.
                                </div>

                                <div className="profile">
                                    <img src={Avatar} alt="" />
                                </div>

                                <h4>Developer Name</h4>

                                <button className='btn btn-outline-primary'>Get In Touch</button>
                            </div>
                        </div>                                              
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DevFolio