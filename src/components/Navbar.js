import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='logo' to='/'>CockTail</Link>
        <ul className='nav-links'>
            <li>
                <Link to='home'>Home</Link>
            </li>
            <li>
                <Link to='about'>About</Link>
            </li>
        </ul>
    
    </nav>
  )
}

export default Navbar