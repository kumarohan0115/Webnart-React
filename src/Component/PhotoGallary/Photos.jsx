import React from 'react'
import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';
import './photos.css'

import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Photos = () => {

    const photosidenavelement =[
        {
        'href':"/",
        'name':"Photos-Home",
        'icon':<HomeIcon className='icon'/>,
        },
        {
        'href':"/",
        'name':"Photographer",
        'icon':<CameraAltIcon className='icon'/>,
        },
        {
        'href':"/",
        'name':"Save",
        'icon':<BookmarksIcon className='icon'/>,
        }
    ]


    return (
        <div id='photos-div'>
            <Navbar button_name={'join Us'}/>
            <SideNav name={photosidenavelement}  />
            {/* Content---------------------------------------------------------> */}

            <div className="photos-main-div offset-lg-2 col-lg-10 col-md-12 com-sm-12">
                <div className="row templet-row">
                    <div className="temp-col col-lg-4 col-md-6 col-sm-12">
                        <img alt="" src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <img alt='' src="https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <img src="https://imgeng.jagran.com/images/2021/may/moon1621498496944.jpg" alt=""/>
                        <img src="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__480.jpg" alt=""/>
                    </div>

                    <div className="temp-col col-lg-4 col-md-6 col-sm-12">
                        <img alt='' src="https://images.pexels.com/photos/2419375/pexels-photo-2419375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg" alt=""/>
                        <img src="https://www.lovesove.com/wp-content/uploads/2017/02/Alone-Sad-Girls-Desktop-Pictures-Lovesove.jpg" alt=""/>
                        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=""/>
                    </div>

                    <div className="temp-col col-lg-4 col-md-6 col-sm-12">
                        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=""/>
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/04/Beautiful-Nice-Whatsapp-Dp-Images.jpg" alt=""/>
                        <img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Photos