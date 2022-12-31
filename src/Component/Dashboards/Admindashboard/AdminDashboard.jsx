import NewSideNav from '../../Navbar/NewSideNav'
import './admindashboard.css'
import avtar from '../../../Assets/avtart.png'
import Mydetails from './Mydetails'
import Password from './Password'
import Upload from '../../Uploads/Upload'
import { useReducer } from 'react'



const initialState = <Mydetails/>

const rendrer = (state,action)=>{
    if(action.type==='My_Details'){
        return  <Mydetails/>
    }
    if(action.type==='Password'){
        return <Password/>
    }
    if(action.type==='Project_upload'){
        return <Upload/>
    }
    return state;
}


const AdminDashboard = () => {

    const[state,dispatch] =useReducer(rendrer,initialState)

    const adminsidenavelements =[
        {
            'href':"/",
            'name':"Home",
            // 'icon':<DashboardIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Dashboard",
            // 'icon':<DashboardIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Projects",
            // 'icon':<AccountTreeIcon className='icon'/>,
        },
        {
            'href':"/",
            'name':"Task",
            // 'icon':<NotificationsNoneIcon className='icon'/>,
        },
        {
            'href':"/developers",
            'name':"Reporting",
            // 'icon':<ManageHistoryIcon className='icon'/>,
        },  
        {
            'href':"/developers",
            'name':"Users",
            // 'icon':<ManageHistoryIcon className='icon'/>,
        },  
    ]
    
    const secondSection=[
        {
            'href':"/",
            'name':"Notification",
            // 'icon':<ManageHistoryIcon className='icon'/>,
        },  
        {
            'href':"/",
            'name':"Support",
            // 'icon':<ManageHistoryIcon className='icon'/>,
        },  
        {
            'href':"/",
            'name':"Setting",
            // 'icon':<ManageHistoryIcon className='icon'/>,
        },  

    ]

  return (
    <div id='admindashboard'>
        <NewSideNav name={adminsidenavelements} secondSection={secondSection}/>
        <div className="admin_dashboard_Content">
            <div className="admin_dashboard_backdrop"></div>
            <section className="dp_namesection">
                <div className="admin_profile_name">
                    <img src={avtar} alt="" />
                    <div className="nameSection_about">
                        <h4 id='nameId'>Name</h4>
                        <p>Update your profile an personal details.</p>
                    </div>
                </div>

                <div className="admin_section_btn">
                    <button className='btn btn-light'>Cancel</button>
                    <button className='btn btn-primary'>Save</button>
                </div>
            </section>
            <div className="admin_dashbaord_nav">
                <li onClick={() => dispatch({type:"My_Details"})}>My Details</li>
                {/* <li onClick={() => dispatch({type:"Profile"})}>Profile</li> */}
                <li onClick={() => dispatch({type:"Password"})}>Password</li>
                <li onClick={() => dispatch({type:"Project_upload"})}>Project Upload</li>
            </div>
            <hr/>
            <div>
              {state}
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard