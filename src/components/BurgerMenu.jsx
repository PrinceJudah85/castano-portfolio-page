import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleClick() {
    this.setState(prev => ({ menuOpen: !prev.menuOpen })
    )
  }

  closeMenu() {
    this.setState({ menuOpen: false })
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
        onClick={this.handleClick}
        customOnKeyDown={this.closeAllMenusOnEsc} >
        <main id="page-wrap">
          <a className="menu-item" onClick={() => this.closeMenu()} href="#home">Home</a>
          <a className="menu-item" onClick={() => this.closeMenu()} href="#about">About</a>
          <a className="menu-item" onClick={() => this.closeMenu()} href="#projects">Projects</a>
          <a className="menu-item" onClick={() => this.closeMenu()} href="#contact">Contact</a>
        </main>
      </Menu>
    )
  }
}

export default BurgerMenu;




// import React from 'react';
// import { slide as Menu } from 'react-burger-menu';

// class BurgerMenu extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuOpen: false
//     }
//   }

//   handleStateChange(state) {
//     console.log(state)
//     this.setState({ menuOpen: state.isOpen })
//   }

//   closeMenu() {
//     this.setState({ menuOpen: false })
//   }

//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen })
//     )
//   }

//   closeAllMenusOnEsc = (e) => {
//     e = e || window.event;
//     if (e.key === 'Escape' || e.keyCode === 27) {
//       this.setState({ menuOpen: false });
//     }
//     this.closeMenu()
//   };


//   render() {
//     return (
//       <Menu
//         right
//         disableAutoFocus
//         isOpen={this.state.menuOpen}
//         onStateChange={(state) => this.handleStateChange(state)}
//         customOnKeyDown={this.closeAllMenusOnEsc} >
//         <main id="page-wrap">
//           <a className="menu-item" onClick={() => this.closeMenu()} href="#home">Home</a>
//           <a className="menu-item" onClick={() => this.closeMenu()} href="#about">About</a>
//           <a className="menu-item" onClick={() => this.closeMenu()} href="#projects">Projects</a>
//           <a className="menu-item" onClick={() => this.closeMenu()} href="#contact">Contact</a>
//         </main>
//       </Menu>
//     )
//   }
// }