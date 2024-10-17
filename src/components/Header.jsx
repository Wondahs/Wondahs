import NavBar from "./NavBar";
import '../assets/styles/Header.css'

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
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
