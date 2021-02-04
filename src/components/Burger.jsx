import React, {useState, useEffect} from 'react'
import { slide as Menu } from 'react-burger-menu';

function Burger() {
  
  const { menuOpen, setMenuOpen } = useState(false); // menuOpen = false

  handleStateChange = function (menuOpen) {
    setMenuOpen(!menuOpen);
  }

  closeMenu() {
    if (menuOpen === true) return setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    handleStateChange();
  })
  return (
    <div>
      
    </div>
  )
}

export default Burger
