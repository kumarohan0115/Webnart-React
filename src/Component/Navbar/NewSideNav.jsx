import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './newsidenav.css'
import $ from 'jquery';
import avtar from '../../Assets/avtart.png'

import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const NewSideNav = ({ name, secondSection }) => {

  const [widthside, setWidthside] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setWidthside(window.innerWidth);
  });

  useEffect(() => {

    if (widthside < 600) {
      console.log("HIi")
      document.getElementById('dashboardSidenav').style.display = 'none';
    }

  }, [widthside])

  const [cookies, setCookie] = useCookies('theme');

  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    console.log("changed")

    if (theme === "light-theme") {
      setTheme('dark-theme');
      $('body').addClass("dark-theme");
      $('body').removeClass("light-theme");
      setCookie('theme', 'dark-theme', { path: '/' })
      $('#light-theme').animate(
        { deg: 180 },
        {
          duration: 500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $('#light-theme').fadeOut('fast')
            $('#dark-theme').fadeIn('fast');
          }
        }
      );
    }
    else {
      setTheme('light-theme');
      setCookie('theme', 'light-theme', { path: '/' })
      $('body').addClass("light-theme");
      $('body').removeClass("dark-theme");
      $('#dark-theme').animate(
        { deg: 360 },
        {
          duration: 500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $('#dark-theme').fadeOut('fast');
            $('#light-theme').fadeIn('fast');

          }
        }
      );
    }
  }

  useEffect(() => {

    if (cookies.theme) {
      var value = cookies.theme;
      if (value === 'light-theme') {
        document.body.className = value;
        document.getElementById(value).style.display = "block";
        document.getElementById("dark-theme").style.display = "none";
      }
      else {
        document.body.className = value;
        document.getElementById(value).style.display = "block";
        document.getElementById("light-theme").style.display = "none";
      }

    }
    else {
      document.body.className = 'light-theme';
      document.getElementById('light-theme').style.display = "block";
      document.getElementById('dark-theme').style.display = "none";

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id='sidenavMain'>
      <div className="dashboardsidenav" id='dashboardSidenav'>
        <div className="theme1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/"><h2 style={{ textAlign: 'center' }}>Webnart</h2></a>
          <ToggleOnIcon className='theme_button1' id="dark-theme" onClick={toggleTheme} />
          <ToggleOffIcon className='theme_button1' id="light-theme" onClick={toggleTheme} />
        </div>

        <div className=''>
          {/* <h4 style={{ textAlign: 'left', paddingLeft: '5%' }}>Profile</h4> */}
          {name.map((list, i) => (

            <a href={list.href} key={i}> <li>{list.icon}{list.name}</li></a>

          ))}
        </div>
        <hr />
        <div className='secondSection'>
          {secondSection?.map((list, i) => (
            <a href={list.href} key={i}> <li>{list.icon}{list.name}</li></a>
          ))}
        </div>
        
        <div className="profile_id">
          <img src={avtar} alt="" />
          <p>username <span><KeyboardArrowUpIcon /></span></p>
        </div>

      </div>
    </div>
  )
}

export default NewSideNav