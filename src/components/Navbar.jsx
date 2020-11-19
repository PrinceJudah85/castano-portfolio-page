import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  /* <a href="#home">Home</a> 
     <a href="#about">About</a>
     <a href="#projects">Projects</a>
     <a href="#contact">Contact</a>
  */
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to='#home'>Home</Link></li>
        <li><Link to='#about'>About</Link></li>
        <li><Link to='#projects'>Projects</Link></li>
        <li><Link to='#contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}
