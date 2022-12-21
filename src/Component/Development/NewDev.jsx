import React from 'react'
// import Navbar from '../Navbar/Navbar'
import './newdev.css'
import SearchIcon from '@mui/icons-material/Search';

const NewDev = () => {
    return (
        <>
            <div className='dev-home'>
                <div className="dev_home_bg">
                    <video className="hero-media-asset is-visible" autoPlay muted loop playsInline data-hero-video data-src-lg="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" data-src-sm="https://cdn.dribbble.com/uploads/39418/original/0cc960a3bf612d0badc4f6165eb36f7b.mp4?1657824915">
                        <source src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" type="video/mp4" />
                    </video>
                </div>

                {/* <Navbar/> */}





                <div className="navigation_bar">
                    <div className='navbar_items'>
                        <a href="/"><li>Discover</li></a>
                        <a href="/"><li>Mobile</li></a>
                        <a href="/"><li>Web Design</li></a>
                        <a href="/"><li>Product Design</li></a>
                        <a href="/"><li>Branding</li></a>
                        <a href="/"><li>Illustration</li></a>
                        <a href="/"><li>Web Templets</li></a>
                    </div>
                </div>

                
                <div className="writeups">
                    <p>Explore the world’s leading design portfolios</p>
                    <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
                </div>
                

                <div className="input form-group">
                    <input className='form-control searchbar' type="search" placeholder='Search'/><span><button className='btn btn-sm btn-light' type='submit'><SearchIcon/></button></span>
                </div>



            </div>

            <div className="container-fluid" id='content_list'>
                <div className="dev-content-lists ">
                    <div className='item col-lg-4 col-md-4 col-sm-6'>
                        <div className="flip-card">
                            <div id='flip-card-front'>
                                <a href="/">
                                    <img src="https://media.gettyimages.com/id/482018359/photo/india-gate-new-delhi.jpg?s=612x612&w=gi&k=20&c=e9heXVuTwxzgoqCl2mEQjti5yAVKNZJgg9MtbfPcQlM=" alt="" />
                                </a>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1> 
                                <p>Architect & Engineer</p> 
                                <p>We love that guy</p>
                            </div>
                        </div>
                            <hr/>

                            <div id='templet_caption'>
                                <p>Title of Content</p>
                                <a href="/developer/name_of_developer">Name of Developer</a>
                            </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default NewDev