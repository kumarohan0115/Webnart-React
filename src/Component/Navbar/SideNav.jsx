import React from 'react'
import './sidenav.css'


const SideNav = ({ name }) => {

  

  return (
    <div className='sidenav'>
      <div className="section-logo">
        {/* <img src="" alt="" /> */}
        <h2><b>{`</>`}</b></h2>
      </div>
      <ul>
        {name.map((list, i) => (

          <li style={{position:"relative"}} key={i}><a href={list.href}>{list.icon}{list.name}</a>
            <div className='corners'>
              <div id='upperspan-div' style={{position:"relative"}}>

                <span className='whitespan1'></span>
                <span className='blackTopSpan'></span>
              
              </div>
              <div id='lowerspan-div' style={{position:"relative"}}>
                
                <span className='whitespan2'></span>
                <span className='blackBottomSpan'></span>

              </div>
            </div>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default SideNav