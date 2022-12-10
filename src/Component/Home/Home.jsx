import React from "react";
import $ from 'jquery';
import "./Home.css";
import quotes from './quotes.json'
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState, useEffect } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import avtar from '../../Assets/avtart.png'
import AppsIcon from '@mui/icons-material/Apps';

const Home = () => {

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', function (event) {
    if (width < 760) {
      document.getElementById('l-t').className = 'tiles-l-h text-center';
      document.getElementById('r-t').className = 'tiles-r-h text-center';
    }
    else {
      document.getElementById('l-t').className = 'tiles-l text-center';
      document.getElementById('r-t').className = 'tiles-r text-center';
    }
    setWidth(window.innerWidth);
  });

  //  useEffect(()=>{
  //     if(width<768){
  //       document.getElementById('l-t').className='tiles-l-h text-center';
  //       document.getElementById('r-t').className='tiles-r-h text-center';
  //     }
  //     else{
  //       document.getElementById('l-t').className='tiles-l text-center';
  //       document.getElementById('r-t').className='tiles-r text-center';
  //     }
  //  },[])

  var n = 1;
  showSlides()

  setInterval(showSlides, 3000)
  async function showSlides() {

    // console.log("in showSlides: " + n )

    var TotalSlides = document.getElementsByClassName("tiles-r-h760")
    if (n > TotalSlides.length) {
      n = 1;
    }
    for (let i = 0; i < TotalSlides.length; i++) {
      await $(TotalSlides[i]).css({ "display": "none" })
    }
    $(TotalSlides[n - 1]).css({ "display": "block" })
    n++
  }
  //slideShow end

  async function tiles_slideonoff() {
    if (width > 760) {
      await $('tiles-div').css({ 'display': 'flex' })
      await $('tiles-div760').css({ "display": "none" })
    } else {
      await $('tiles-div').css({ 'display': 'none' })
      await $('tiles-div760').css({ "display": "block" })
    }

  }
  tiles_slideonoff()

  function classAdd(id, addclass, removeclass) {
    if (width >= 760) {
      document.getElementById(id).classList.remove(removeclass)
      document.getElementById(id).classList.add(addclass)
    }
  }

  const ltEnter = () => {
    classAdd("l-t", "tiles-l-h", "tiles-l")
    classAdd("c-t", 'tiles-c', "tiles-c-h")
  }
  const ltLeave = () => {
    classAdd("l-t", "tiles-l", "tiles-l-h")
    classAdd("c-t", 'tiles-c-h', "tiles-c")
  }
  const rtEnter = () => {
    classAdd("r-t", "tiles-r-h", "tiles-r")
    classAdd("c-t", 'tiles-c', "tiles-c-h")
  }
  const rtLeave = () => {
    classAdd("r-t", "tiles-r", "tiles-r-h")
    classAdd("c-t", 'tiles-c-h', "tiles-c")

  }

  const [quot, setQuotes] = useState(quotes[0].quote)
  const [author, setAuthor] = useState(quotes[0].author)
  const [i, seti] = useState(0)

  useEffect(() => {
    setQuotes(quotes[i].quote)
    setAuthor("~" + quotes[i].author)
    setTimeout(function () {
      if (i === quotes.length - 1) {
        seti(0);
      }
      else {
        seti(i + 1)
      }
    }, 60000);
    console.log(quotes[i].quote);
  }, [i])


  const founderName = {
    name1: "Vishal Pal",
    name2: "Rohan Kumar",
    name3: "Shahank Chaurasia"
  }


  const showHide=()=>{
    var element = document.getElementById('home-buttons');
    $('#home-buttons').toggle(element.style.visibility='visible')
    
  }


  return (
    <>
      <section id="first">
        <div className="main-div" id="main-div">
          <div className="side-nav " id="side-nav">
            <div className="upper-con ">
              <div className="ex">Explore</div>
            </div>
            <div className="lower-con ">
              <div className="social-div ">
                <div className="s-b ">
                  <a href="https://twitter.com/login">
                    <TwitterIcon />
                  </a>
                </div>
                <div className="s-b ">
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="s-b">
                  <a href="https://en-gb.facebook.com/login.php">
                    <FacebookIcon />
                  </a>
                </div>
              </div>
              <div className="l">
                <hr style={{ color: "white", width: "100%", height: "5px" }} />
              </div>
              <div className="share-div">
                {/* <div className="s-b">
                  <a href="/">
                    <ShareIcon/>
                  </a>
                </div> */}
                <div className="s-b">
                  <a href="/">
                    <InfoIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
              
              <div className="app-icon">
                {/* <a href="" > */}
                  <AppsIcon onClick={showHide}/>
                {/* </a> */}
              </div>

          <div className="buttons" id="home-buttons">
              <div className="signup-btn">
                <a href="/homeLogin">
                  Login
                </a>
              </div>
              <div className="signup-btn">
                <a href="/signup">
                  {/* <a href="/tnssignup"> */}
                  Signup
                </a>
              </div>

              {/* TNS */}
              <div className="signup-btn">
                <a href="/workshopregitrstion">
                  WorkShop Registration
                </a>
              </div>
            </div>
          <div className="right-div ">
            {/* Central content of home page---------------------------------------- */}
            <div className="main-con">
              <h1>Welcome to </h1>
              <div className="w-div">
                  Webnart
                <div className="wave">
                </div>
              </div>
              <div className="des ">
                <h4>Come Together, Share and Earn</h4>
              </div>
              {/* <a href="#second" style={{color: "white"}}> */}
              <span className="" style={{ cursor: "pointer" }}>
                {/* <a href="" style={{ color: "white" }}> */}
                  <button className="btn btn-lg btn-outline" style={{ color: "white", fontSize: "30px" }}>Let's Explore</button>
                {/* </a> */}
              </span>
              {/* </a> */}
            </div>
          </div>  
            
        </div>
      {/* </section> */}


      {/* 2ns Page starts from here==============================> */}
      {/* <section id="second"> */}
        <div className="top-nav" id="top-nav">

          <div className="content_cards">
            <a href="/Devefolio">
              <div className="c_cards dev_card"></div>
              <h3>Development</h3>
            </a>
            <a href="/gamehome">
              <div className="c_cards game_card"></div>
              <h3>Game</h3>
            </a>
            <a href="/ArtGallary">
              <div className="c_cards art_card"></div>
              <h3>Art</h3>
            </a>
          </div>
        </div>

        <div className="s-m-div  ">
          <div className="left-content ">
            <div className="q-div">

              <p>
                <FormatQuoteIcon id="quote" style={{ transform: "scaleX(-1)" }} />{quot}<FormatQuoteIcon id='quote' />
              </p>
              <p style={{ width: "fit-content", float: "right" }}>
                {author}
              </p>
            </div><br />
            <h2>Founders & Developers</h2>
            <div className="tiles-div " id="tiles-div">
              <div className="tiles-l text-center" id="l-t"
                onMouseLeave={ltLeave}
                onMouseEnter={ltEnter}>
                <div className="t-udiv">
                  {/* <AccountCircleIcon /> */}
                  <img src={avtar} alt="avtar" />
                </div>
                <p id="founderName">{founderName.name1}</p>
                <p id="founderDesc">MERN Stack Developer</p>
                <ul className="founder-profile-card-element">
                  <li><MailOutlineIcon />  vishalpal2912@gmail.com</li>

                  <li><LocationOnIcon />  Delhi</li>
                </ul>
              </div>
              <div className="tiles-c-h text-center" id="c-t">
                <div className="t-udiv">
                  {/* <AccountCircleIcon /> */}
                  <img src={avtar} alt="avtar" />
                </div>
                <p id="founderName">{founderName.name2}</p>
                <p id="founderDesc">
                  Front End Developer
                </p>
                <ul className="founder-profile-card-element">
                  <li><MailOutlineIcon />  rohankr350@gmail.com</li>

                  <li><LocationOnIcon />  Delhi</li>
                </ul>
              </div>
              <div className="tiles-r text-center" id="r-t"
                onMouseLeave={rtLeave}
                onMouseEnter={rtEnter}
              >
                <div className="t-udiv">
                  {/* <AccountCircleIcon /> */}
                  <img src={avtar} alt="avtar" />
                </div>
                <p id="founderName">{founderName.name3}</p>
                <p id="founderDesc">
                  Back End Developer
                </p>
                <ul className="founder-profile-card-element">
                  <li><MailOutlineIcon />  shashank.chaurasia1606@gmail.com</li>

                  <li><LocationOnIcon />  Delhi</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tiles-div760" id="tiles-div760">
            <div className="tiles-r-h760 text-center" id="l-t">
              <div className="t-udiv">
                {/* <AccountCircleIcon /> */}
                <img src={avtar} alt="avtar" />
              </div>
              <p id="founderName">{founderName.name1}</p>
              <ul className="founder-profile-card-element">
                <li><MailOutlineIcon />  vishalpal2912@gmail.com</li>

                <li><LocationOnIcon />  Delhi</li>
              </ul>
            </div>
            <div className="tiles-r-h760 text-center" id="c-t">
              <div className="t-udiv">
                {/* <AccountCircleIcon /> */}
                <img src={avtar} alt="avtar" />
              </div>
              <p id="founderName">{founderName.name2}</p>
              <ul className="founder-profile-card-element">
                <li><MailOutlineIcon />  rohankr350@gmail.com</li>

                <li><LocationOnIcon />  Delhi</li>
              </ul>
            </div>
            <div className="tiles-r-h760 text-center" id="r-t">
              <div className="t-udiv">
                {/* <AccountCircleIcon /> */}
                <img src={avtar} alt="avtar" />
              </div>
              <p id="founderName">{founderName.name3}</p>
              <ul className="founder-profile-card-element">
                <li><MailOutlineIcon />  shashank.chaurasia1606@gmail.com</li>

                <li><LocationOnIcon />  Delhi</li>
              </ul>
            </div>
          </div>

          <div className="right-content">
            <div className="tech-div">
              <h2>we are!</h2>
              <ul>
                <li> We follow our Dream's and will achieve soon</li>
                <li> We are here to help you find your sparks as developer's and user's</li>
                <li> By collecting Many platforms, gathered here to make a new collection WEBNART
                  <ol>Web Development</ol>
                  <ol>Game Development</ol>
                  <ol>Art Development</ol>
                  <ol>Learn and join us</ol>
                </li>

              </ul>
            </div>
          </div>
        </div>
      {/* </section> */}

      <div className="footer ">
        <form className="form-group">
          <label htmlFor="email">Subscribe to Newsletter</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control col-6"
            placeholder="Email Address"
          />
          <div id="subscribe">
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>
        <div id="copyright">Webnart &copy; Copyright2021</div>
      </div>
      </section>
    </>
  );
};

export default Home;
