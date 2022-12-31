import {useState,useEffect} from 'react'
import './userSideDashboard.css'
import $ from 'jquery'
import NewSideNav from '../Navbar/NewSideNav';
// import avtar from '../../Assets/avtart.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import MenuIcon from '@mui/icons-material/Menu';
import axios from '../../axios'

const UserSideDashboard = (name) => {


    const [Profiledetails, setProfiledetails] = useState([]);

    useEffect(() => {
        axios.get("v2/DisplayData/arminislove").then((response) => {
            setProfiledetails(response.data)
            console.log(response.data)
        }).catch(err => console.log("err here", err));
    }, []);



    const dashboard=[
        {
            'href':"/",
            'name':"Dashboard",
            'icon':<DashboardIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Projects",
            'icon':<AccountTreeIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Hiring",
            'icon':<NotificationsNoneIcon className='icon'/>,
        },
        {
            'href':"/developers",
            'name':"Developer",
            'icon':<ManageHistoryIcon className='icon'/>,
        },            
    ]

    const [follow, setFollow] = useState('follow')
    
    const messagebox=()=>{
        document.getElementById('msgbox').style.visibility='visible';
    }

    const Follow=()=>{
        
        ( follow==='Follow') ? setFollow('Following') : setFollow("Follow");
    }

    const[hidden, setShow] = useState("Hidden")

    const togglebtn=()=>{
        if(hidden){
            $("#dashboardSidenav").toggle('slow');
            setShow("show")
        }
    }

    var base64String = btoa(
        new Uint8Array(Profiledetails.profile_pic?.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        // String.fromCharCode(...new Uint8Array(profiledata.Profile_Pic?.data.data))
    );
    
        

  return (
    <div id='userDashboardmain'>

        <NewSideNav name={dashboard}/>
                        
        <div className="dashboard">

            <div className="backdrop">
                <span><MenuIcon id='togglebtn' onClick={togglebtn}/></span>
            </div>
            <div className="dashboard_container">
                <section className='dashBoardSection'>
                    <div className="profile_image">
                        <img src={`data:image/png;base64,${base64String}`} alt="Avatar" />
                        {/* <img src={avtar} alt="Avatar" /> */}
                        <div className="nameSection_about">
                            <h4 id='nameId'>{Profiledetails.Name}</h4>
                            <p>I am {Profiledetails.Brief} in {Profiledetails.Location}</p>
                        </div>
                    </div>
                    <div className="wrapper_data">
                        <div className="section_button">
                            <button className='btn btn-light btn-sm'>HireMe</button>
                            <button className='btn btn-primary btn-sm' id='follow' onClick={Follow}> 
                                { (follow==='Following') ? 'Following' : 'Follow' }
                            </button>
                        </div>
                    </div>
                </section>

                <div className="container_fluid dashboard_content_info">
                    <div className="  exp_abt">
                        <div className="Experience">
                            <h2>Experience</h2>
                            <p>I am a java Developer with experience of {Profiledetails.exp} in Respected company.</p>
                        </div>
                        <div className="aboutUser">
                            <h2>About</h2>
                            <li>{Profiledetails.discription}</li>
                        </div>
                    </div>
                    <div className="  skillset_and_contact_info">
                        <h5>Skills</h5>
                        <div className="skill_list">
                            <li>{Profiledetails.Skill}</li>
                        </div>
                        <h5>Location</h5>
                        <span><LocationOnIcon/></span> {Profiledetails.Location}

                        <h5>Email</h5>
                        <span><EmailIcon/></span>  {Profiledetails.email}

                        <h5>Website</h5> 
                        <span><OpenInNewIcon/></span> <a href={Profiledetails.website}> {Profiledetails.website} </a>

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
                <span id='userDashboard_project_heading'>
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

export default UserSideDashboard