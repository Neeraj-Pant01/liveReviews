import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-left">LIVEREVIEWS.</div>
      <div className="nav-mid">
        <b>ADDREVIEW</b>
      </div>
      <div className="nav-right">
        <img src='/image.png' />
      </div>
    </div>
  )
}

export default Navbar
