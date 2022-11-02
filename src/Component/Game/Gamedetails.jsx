import React from 'react'
import './gamedetails.css'
import ImageSlider from '../ExtraComp/ImageSlider';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const Gamedetails = () => {

    const slides = [
        { url: "https://wallpapercave.com/wp/wc1689357.jpg", title: "beach" },
        { url: "https://wallpapercave.com/wp/2rg2bSq.jpg", title: "boat" },
        { url: "https://wallpapercave.com/wp/wc1689357.jpg", title: "beach" },
        { url: "https://wallpapercave.com/wp/2rg2bSq.jpg", title: "boat" },
        { url: "https://wallpapercave.com/wp/wc1689357.jpg", title: "beach" },
        { url: "https://wallpapercave.com/wp/2rg2bSq.jpg", title: "boat" },
        { url: "https://wallpapercave.com/wp/wc1689357.jpg", title: "beach" },
        { url: "https://wallpapercave.com/wp/2rg2bSq.jpg", title: "boat" },
      ];
      

  return (
    <div className='container-fluid details'>
        <div className="thumbnail col-lg-12 col-md-12 col-sm-12">
            <h1>Name of Game</h1>
            <div className="slideContainer col-10">
                <ImageSlider slides={slides}/>
            </div>
            <div className="download_info col-lg-2">
                <div className="latest_download_users">
                    <ul>
                        <li>abc1</li>
                        <li>abc2</li>
                        <li>abc3</li>
                        <li>abc4</li>
                        <li>abc5</li>
                    </ul>
                </div>
                <button className='btn btn-outline-primary'><CloudDownloadIcon id='download_button'/>  Download</button>
            </div>
        </div>

        <div className="detailed_description col-lg-12">
            <div className="basic_configuration">
                <h3>Basic Requirement</h3>
                <ul>
                    <li>Storage :</li>
                    <li>CPU :</li>
                    <li>RAM :</li>
                    <li>Min-Configuration :</li>
                </ul>
            </div>
            <div className="guidline_to_play"></div>

        </div>
    </div>
  )
}

export default Gamedetails