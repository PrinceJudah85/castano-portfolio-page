import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}