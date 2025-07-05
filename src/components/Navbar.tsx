import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo and Name */}
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECT</li>
          <li>CERTIFICATE</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="connect-button">LET'S CONNECT</button>
      </div>
    </nav>
  );
};

export default Navbar;
