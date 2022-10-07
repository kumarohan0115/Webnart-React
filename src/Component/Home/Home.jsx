import React from "react";
import $ from 'jquery';
import "./Home.css";
import quotes from './quotes.json'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState, useEffect } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import avtar from '../../Assets/avtart.png'

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
    setAuthor("~"+quotes[i].author)
    setTimeout(function(){
      if(i===quotes.length-1)
      {
        seti(0);
      }
      else
      {
        seti(i+1)
      }
    },60000);
    console.log(quotes[i].quote);
  }, [i])


  const founderName=
    {
      name1:"Vishal Pal",
      name2:"Rohan Kumar",
      name3:"Shahank Chaurasia"
    }
  
  console.log(founderName.name1);

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
          <div className="right-div ">
            <div className="buttons">
              <div className="signup-btn">
                <a href="/signup">
                  {/* <a href="/tnssignup"> */}
                  Signup
                </a>
              </div>

              {/* TNS */}
              <div className="signup-btn">
                <a href="/workshopregitrstion">
                  WorkShop Reg
                </a>
              </div>
            </div>
            <div className="signup-btn">
              <a href="/homeLogin">
                Login
              </a>
            </div>


            {/* Central content of home page---------------------------------------- */}
            <div className="main-con">
              <h1>Welcome to </h1>
              <div className="w-div">Webnart</div>
              <div className="des ">
                Webnart Collection of Online website to provide free content, to needy!
                <h4>Come Together, Share and Earn</h4>
              </div>
              {/* <a href="#second" style={{color: "white"}}> */}
              <span className="nxt-btn" style={{ cursor: "pointer" }}>
                <a href="#second" style={{ color: "white" }}>
                  Let's Go
                </a>
              </span>
              {/* </a> */}
            </div>
            {/* <hr className="l-div"> */}
          </div>
        </div>
      </section>


      {/* 2ns Page starts from here==============================> */}
      <section id="second">
        <div className="top-nav" id="top-nav">
          <div className="top-nav-con" id="top-nav-con">
            <a href="/Devefolio">Development</a>
            <a href="shashaVW.php">Game</a>
            <a href="/ArtGallary">Arts</a>
            <a href="/">Future</a>
          </div>
        </div>

        <div className="s-m-div  ">
          <div className="left-content ">
            <div className="q-div">
              <p>
                {author}
              </p>
              <p>
                <FormatQuoteIcon id="quote" />{quot}<FormatQuoteIcon id='quote'/>
              </p>
            </div><br/>
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
                  <li><MailOutlineIcon/>vishalpal2912@gmail.com</li>
                 
                  <li><LocationOnIcon/>Delhi</li>
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
                  <li><MailOutlineIcon/>rohankr350@gmail.com</li>
                  
                  <li><LocationOnIcon/>Delhi</li>
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
                  <li><MailOutlineIcon/>shashank.chaurasia1606@gmail.com</li>

                  <li><LocationOnIcon/>Delhi</li>
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
              <p id="founderDesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="tiles-r-h760 text-center" id="c-t">
              <div className="t-udiv">
                {/* <AccountCircleIcon /> */}
                <img src={avtar} alt="avtar" />
              </div>
              <p id="founderName">{founderName.name2}</p>
              <p id="founderDesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="tiles-r-h760 text-center" id="r-t">
              <div className="t-udiv">
                {/* <AccountCircleIcon /> */}
                <img src={avtar} alt="avtar" />
              </div>
              <p id="founderName">{founderName.name3}</p>
              <p id="founderDesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="right-content">
            <div className="tech-div"></div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Home;
