import React from 'react'
import './userSideDashboard.css'
import avtar from '../../Assets/avtart.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const usersSideDashboard = () => {


    const messagebox=()=>{
        document.getElementById('msgbox').style.visibility='visible';
    }

  return (
    <div>
        <div className="dashboard">
            <div className="backdrop"></div>
            <div className="dashboard_container">
                <section className='dashBoardSection'>
                    <div className="profile_image">
                        <img src={avtar} alt="Avatar" />
                    </div>
                    <div className="wrapper_data">
                        <div className="nameSection_about">
                            <h4 id='nameId'>Name of user</h4>
                            <p>I am Java Developer in Bengaluru</p>
                        </div>
                        <div className="section_button">
                            <button className='btn btn-light btn-sm'>HireMe</button>
                            <button className='btn btn-primary btn-sm'>Follow</button>
                        </div>
                    </div>
                </section>

                <div className="container_fluid dashboard_content_info">
                    <div className="  exp_abt">
                        <div className="Experience">
                            <h2>Experiance</h2>
                            <p>I am a java Developer with experince of 2yrs in Respected company.</p>
                        </div>
                        <div className="aboutUser">
                            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia velit porro, provident fugiat quibusdam ducimus natus inventore ex tenetur tempore soluta distinctio consectetur, nesciunt nobis. Quae doloremque incidunt nam.</li>
                            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia velit porro, provident fugiat quibusdam ducimus natus inventore ex tenetur tempore soluta distinctio consectetur, nesciunt nobis. Quae doloremque incidunt nam.</li>
                            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia velit porro, provident fugiat quibusdam ducimus natus inventore ex tenetur tempore soluta distinctio consectetur, nesciunt nobis. Quae doloremque incidunt nam.</li>
                        </div>
                    </div>
                    <div className="  skillset_and_contact_info">
                        <h5>Skills</h5>
                        <div className="skill_list">
                            <li>Java</li>
                            <li>Java Spring</li>
                            <li>Java </li>
                        </div>
                        <h5>Location</h5>
                        <span><LocationOnIcon/></span> Bangaluru, India

                        <h5>Email</h5>
                        <span><EmailIcon/></span>  naina.dev@webnart.com 

                        <h5>Website</h5> 
                        <span><OpenInNewIcon/></span> <a href="https://webnart.netlify.app/"> www.webnart.netlify.com </a>

                        <div className="skill_set_button">
                            <button className='btn btn-primary btn-md'>Add to List</button>
                            <button className='btn btn-primary btn-md' onClick={messagebox}>Message</button>
                        </div>

                        <div className="messageBox" id='msgbox'>
                            <label htmlFor=""></label>
                            <input className='form-control' type="text" name='message' placeholder='Message' maxLength={50} />
                            <button className='btn btn-sm btn-primary'>Send</button>
                        </div>
                    </div>

                </div>
                <span id='userDashboard_prohect_heading'>
                    <h1>Project/Work</h1>
                </span>
                <div className="projects_uploads">
                    <div className="templet_area_userDashboard"></div>
                    <div className="templet_area_userDashboard"></div>
                    <div className="templet_area_userDashboard"></div>
                    <div className="templet_area_userDashboard"></div>
                    <div className="templet_area_userDashboard"></div>
                    <div className="templet_area_userDashboard"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default usersSideDashboard