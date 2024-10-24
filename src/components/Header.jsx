import NavBar from "./NavBar";
import '../assets/styles/Header.css';
import {useEffect} from 'react';
import {navAnimation} from '../assets/lib/nav-animation.js';

const Header = () => {
  useEffect(() => {
    navAnimation();
  }, [])
  

  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <button id='menu-toggle' className="menu-toggle" href="#">
            <span>Menu</span>
          </button>
          <div className="logo">
            <a>WV</a>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
