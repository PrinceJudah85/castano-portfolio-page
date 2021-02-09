import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc. 
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };


  render() {
    return (
      <Menu
        right
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc} >
        <main id="page-wrap">
          <a onClick={() => this.closeMenu()} className="menu-item" href="#home">Home</a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#about">About</a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#projects">Projects</a>
          <a onClick={() => this.closeMenu()} className="menu-item" href="#contact">Contact</a>
        </main>
      </Menu>
    )
  }
}
export default BurgerMenu;