import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState("Login");

  return (
    <div className="header" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}> Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"./cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      <button
        className="login-btn"
        onClick={() => {
          loggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login");
        }}
      >
        {loggedIn}
      </button>
    </div>
  );
};

export default Header;
