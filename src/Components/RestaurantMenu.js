import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.466816837356884&lng=78.36831226944923&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json);

    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards ||
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card.itemCards ||
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.categories[0]?.itemCards
    );
  }

  console.log("details", restaurantDetails);
  console.log("menu", restaurantMenu);
  if (!restaurantMenu) return null;
  return (
    <div className="restaurant-page">
      <div>
        <h1>{restaurantDetails.name}</h1>
        <img src={CDN_URL + restaurantDetails.cloudinaryImageId}></img>
      </div>
      <div className="restaurant-menu">
        <h2>Menu : </h2>
        {restaurantMenu.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
