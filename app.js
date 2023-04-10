import React from "react";
import ReactDOM from "react-dom";

/**
 * Header Component :
 *  - Logo Component
 *  - NavItems
 *
 * Body :
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      - Img
 *      - Name, Star rating, Cuisine, Delivery Time
 *
 * Footer :
 * - CopyRight
 * - Links
 * - Address
 * -Contact
 */

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="logo-container">
        <img
          className="logo"
          src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-20.jpg"
        />
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hnx9nazpxdpqpypjo8ld"
      ></img>
      <h3>Meghana Foods</h3>
      <h4> Biryani , South Indian </h4>
      <h4> 4.4⭐</h4>
      <h4> 38mins 🕑</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

const AppLayOut = () => {
  return (
    <div>
      <Header />
      {/**
       * Body
       * Footer
       */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
