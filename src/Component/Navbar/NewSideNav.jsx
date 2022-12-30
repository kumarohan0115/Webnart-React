import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './newsidenav.css'
import $ from 'jquery';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const NewSideNav = ({ name }) => {

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', function (event) {
    if (width < 550) {
      document.getElementById('dashboardSidenav').style.display = 'none';
    }
    setWidth(window.innerWidth);
  });

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
    <div>
      <div className="dashboardsidenav" id='dashboardSidenav'>
        <a href="/"><h2 style={{ textAlign: 'center' }}>Webnart</h2></a>
        <h4 style={{ textAlign: 'left', paddingLeft: '5%' }}>Profile</h4>
        {name.map((list, i) => (

          <a href={list.href} key={i}> <li>{list.icon}{list.name}</li></a>

        ))}
      </div>

      <div className="theme1">
        <DarkModeIcon className='theme_button1' id="dark-theme" onClick={toggleTheme} />
        <LightModeIcon className='theme_button1' id="light-theme" onClick={toggleTheme} />
      </div>
    </div>
  )
}

export default NewSideNav