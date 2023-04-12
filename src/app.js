import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";

const RestaurantCard = (props) => {
  const { data } = props.resData;
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
    avgRating,
    cuisines,
  } = data;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <div className="res-info">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h3>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {avgRating}⭐</h4>
        <h4> {deliveryTime}mins 🕑</h4>
      </div>
    </div>
  );
};

const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
