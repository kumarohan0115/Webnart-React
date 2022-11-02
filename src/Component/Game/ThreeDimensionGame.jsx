import React from 'react'
import './TwoD.css'
import Navbar from '../Navbar/Navbar'
import SideNav from '../Navbar/SideNav'

import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookIcon from '@mui/icons-material/Book';
import DevicesIcon from '@mui/icons-material/Devices';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import game3Dlogo from '../../Assets/3dGmelogo.svg';

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const ThreeDimensionGame = () => {

  const twoDgameSideNav=[
    {
        'href':"/",
        'name':"3D Game Home",
        'icon':<HomeIcon className='icon'/>,
    },
    {
        'href':"/register",
        'name':"New Launches",
        'icon':<EventNoteIcon className='icon'/>,
    },
    {
        'href':"/",
        'name':"Blog",
        'icon':<BookIcon className='icon'/>,
    },
    {
        'href':"/",
        'name':"Categories",
        'icon':<DevicesIcon className='icon'/>,
    },
    {
        'href':"/animationform",
        'name':"Saved",
        'icon':<BookmarksIcon className='icon'/>,
    }
        
]


function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
  return (
    <>
        {/* <GameSideNav/> */}
        <Navbar/> 
        <SideNav name={twoDgameSideNav} logo={game3Dlogo}/>
        <div className="twoDgameSection container-fluid">
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
          <div className="gamerow">
            <div className="game_preview_thumbnail col-lg-6 col-md-12 col-sm-12"></div>
            <div className="game_details col-lg-6 col-md-12 col-sm-12">
              <h3>Game Name</h3>
              <div className="over_viewOfGame">
                <p>
                {truncateString(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod eligendi praesentium pariatur voluptas, aut rem! Debitis sunt illum fuga, ex, deserunt beatae ratione numquam dolor accusamus veritatis explicabo dolore.",
                300
                )}
              </p>
              </div>
              <div className="shareGame">
                <div className="shareHandles">
                  <a href="/"><FacebookIcon className='addcss'/></a>
                  <a href="/"><InstagramIcon className='addcss'/></a>
                  <a href="/"><TwitterIcon className='addcss'/></a>
                </div>
                <button className="download-btn btn btn-outline-light">DOWNLOAD</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ThreeDimensionGame