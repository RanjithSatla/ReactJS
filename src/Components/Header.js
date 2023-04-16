import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About us</li>
          <li>Contactus</li>
          <li>Cart</li>
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
