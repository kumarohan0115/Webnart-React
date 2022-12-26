import React from 'react'
import './sidenav.css'


const SideNav = ({ name, logo}) => {
  console.log(logo);
  console.log(name);

  return (
    <div className='sidenav'>
      {/* <div className="section-logo">
        <img id='logo' src={logo} alt="img" />
      </div>
      <ul>
        {name.map((list, i) => (

          <li style={{position:"relative"}} key={i}><a href={list.href}>{list.icon}{list.name}</a>
          </li>

        ))}
      </ul> */}

        <div className="dashboardsidenav">
            <a href="/"><h2 style={{textAlign:'center'}}>Webnart</h2></a>
            <h4 style={{textAlign:'left', paddingLeft: '5%'}}>Profile</h4>
            {name.map((list, i) => (

                <a href={list.href}> <li>{list.icon}{list.name}</li></a>

                ))}
        </div>
      {/* <div className='corners'>
        <div id='upperspan-div' style={{position:"relative"}}>
      
          <span className='whitespan1'></span>
          <span className='blackTopSpan'></span>
        
        </div>
        <div id='lowerspan-div' style={{position:"relative"}}>
          
          <span className='whitespan2'></span>
          <span className='blackBottomSpan'></span>
      
        </div>
      </div> */}
    </div>
  )
}

export default SideNav