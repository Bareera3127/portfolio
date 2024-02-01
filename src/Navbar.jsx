import React from 'react'
import './index.css'


const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='right'>
            <ul>
            <li><a className='menulist' href='#'>Home</a></li>

            <li><a className='menulist' href='#'>Education</a></li>
            <li><a className='menulist' href='#'>Training</a></li>
            <li><a className='menulist' href='#'>Experience</a></li>
            <li><a className='menulist' href='#'>Skills</a></li>
            <li><a className='menulist' href='#'>Projects</a></li>
        </ul>
            </div>
        
        </nav>
    </div>
  )
}

export default Navbar