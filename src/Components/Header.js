import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contactus</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
