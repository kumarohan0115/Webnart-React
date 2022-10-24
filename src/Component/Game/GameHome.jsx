import React from 'react'
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
    <>
        <Navbar button_name={'Game Login'}/>
        <SideNav name={gamesidenav} logo={gamelogo}/>
        <div className="mainGame">

        </div>
    </>
  )
}

export default GameHome