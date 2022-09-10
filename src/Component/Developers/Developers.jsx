import React from 'react'
import './developers.css'
import $ from 'jquery';
import avatar from '../../Assets/avtart.png'
import SideNav from '../Navbar/SideNav';
import Navbar from '../Navbar/Navbar';


import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

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

  return (
    <div className="developers-main-div">
        <Navbar button_name={'Join As Developer'}/>
        <div className="side-area1"></div>

        <SideNav name={developersSideNav}/>
        

        <div className="side-area2">
            <a href="/"><span className="joinus">Developer's Login</span></a>
        </div>

        <div className="developers-content">
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



                    {/* <?php
                    //from here

                    include 'connective.php';


                    $connect = $connection;

                    $query = "SELECT * FROM personal_table ";



                    $sql = mysqli_query($connect, $query) or die(" no ");

                    if (mysqli_num_rows($sql) > 0) {
                        while ($row = mysqli_fetch_assoc($sql)) {




                    ?>
                            <div className="port"><img src="showimage.php?name=<?php echo ($row['NAME']) ?>" alt="">
                                <h4><?php echo ($row['NAME']); ?></h4>
                                <p><?php echo ($row['DESIGNATION']); ?></p>
                            </div>
                    <?php }
                        //to here

                    } ?> */}


                </div>
               

            </div>
        </div>
    </div>
  )
}

export default Developers