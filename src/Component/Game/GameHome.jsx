import React from 'react'
import './gamehome.css'
import Navbar from '../Navbar/Navbar'
import SideNav from '../Navbar/SideNav'

import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';

import gamelogo from '../../Assets/gamelogo.svg'

const GameHome = () => {

    const gamesidenav=[
        {
            'href':"/",
            'name':"Games",
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
    <div id="gamehomepage">
        <Navbar button_name={'Game Login'}/>
        <SideNav id='gameSidenav' name={gamesidenav} logo={gamelogo}/>
        <div className="mainGame container-fluid">
            <div className="latestcontent col-lg-12 col-md-12 col-sm-12"></div>
            <div className="typesOfGame">
                <div className="o2Dgame  col-lg-5  col-md-5  col-sm-12">
                    <h3>2D Game</h3>
                    <p>Beatae, doloribus molestias commodi odit iste minima officia fuga provident dolorem quibusdam magni. Nobis aspernatur quae reprehenderit, rem eligendi repellat deserunt reiciendis!</p>
                    <button className='btn btn-outline-light btn-lg'><a href="/2dgame">Let's Go!</a></button>
                </div>
                <div className="o3Dgame  col-lg-5  col-md-5 col-sm-12">
                    <h3>3D Game</h3>
                    <p>Beatae, doloribus molestias commodi odit iste minima officia fuga provident dolorem quibusdam magni. Nobis aspernatur quae reprehenderit, rem eligendi repellat deserunt reiciendis!</p>
                    <button className='btn btn-outline-light btn-lg'>Let's Go!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameHome