import React,{useState} from 'react'
import './newsidenav.css'

const NewSideNav = ({name}) => {

    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', function (event) {
        if (width < 550) {
          document.getElementById('dashboardSidenav').style.display='none';
        }
        setWidth(window.innerWidth);
      });
    
  return (
    // <div>
        <div className="dashboardsidenav" id='dashboardSidenav'>
            <a href="/"><h2 style={{textAlign:'center'}}>Webnart</h2></a>
            <h4 style={{textAlign:'left', paddingLeft: '5%'}}>Profile</h4>
            {name.map((list, i) => (

                <a href={list.href}> <li>{list.icon}{list.name}</li></a>

                ))}
        </div>
    // </div>
  )
}

export default NewSideNav