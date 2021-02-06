import React, {useState} from 'react'
import { slide as Menu } from 'react-burger-menu';

function Burger() {
  
  const { menuOpen, setMenuOpen } = useState(false); // menuOpen = false

  const handleClick = () => {
    setMenuOpen(prev => !prev.menuOpen);
  }

  const closeMenu = () => {
    if (menuOpen === true) return setMenuOpen(false)
  }

  const closeMenuOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      setMenuOpen(false);
    }
    closeMenu()
  };

  return (
      <Menu
        right
        disableAutoFocus
        isOpen={menuOpen}
        onClick={handleClick}
        customOnKeyDown={closeMenuOnEsc} >
        <main id="page-wrap">
          <a className="menu-item" onClick={closeMenu} href="#home">Home</a>
          <a className="menu-item" onClick={closeMenu} href="#about">About</a>
          <a className="menu-item" onClick={closeMenu} href="#projects">Projects</a>
          <a className="menu-item" onClick={closeMenu} href="#contact">Contact</a>
        </main>
      </Menu>
  )
}

export default Burger
