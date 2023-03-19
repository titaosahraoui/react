import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
      <div className="navbar">
          <div className="logo">
                <h1>World</h1>
          </div>
          <div className="search">
              <input type="text" placeholder='Search...' />
          </div>
          <div className="links">
              <a href="#">about</a>
              <a href="#">contact</a>
              <a href="#">Projects</a>
          </div>
      </div>
    
  )
}

export default Navbar