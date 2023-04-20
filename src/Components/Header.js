import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  const logOut = () => {
    setIsLoggedInUser(false);
  };

  const logIn = () => {
    setIsLoggedInUser(true);
  };

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
      {isLoggedInUser ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </div>
  );
};

export default Header;
