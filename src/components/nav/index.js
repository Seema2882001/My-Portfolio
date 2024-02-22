import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './nav.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="navbar-container">
      <div className="nav-logo">
        <span><i class="bi bi-person-badge"></i> PORTFOLIO</span>
      </div>
      <nav className="Main-menu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          className='menu-items'

        >
          Home
        </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='menu-items'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>My Clients</Link>
        </nav>
        <div className='nav-btn' onClick={()=>{
                document.getElementById("contact-me").scrollIntoView({behavior : "smooth"});
            }}> <i class="bi bi-person-fill"></i> Contact Me</div>

         <div className="Mob-menu">
        <span><i class="bi bi-list" onClick={()=>{setShowMenu(!showMenu)}}></i></span>
      </div>
      <nav className="nav-menu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          className='list-items'
          onClick={()=>{setShowMenu(!showMenu)}}

        >
          Home
        </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='list-items' onClick={()=>{setShowMenu(!showMenu)}}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={()=>{setShowMenu(!showMenu)}}>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={()=>{setShowMenu(!showMenu)}}>Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={()=>{setShowMenu(!showMenu)}}>My Clients</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={()=>{setShowMenu(!showMenu)}}>Contact</Link>
        </nav>
      
    </header>

  )
}

export default Navbar;