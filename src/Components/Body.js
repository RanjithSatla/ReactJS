import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchInput, listOfRestaurants) => {
  const data = listOfRestaurants.filter((res) =>
    res.info.name.includes(searchInput)
  );
  return data;
};

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  //searchInput is a local state variable
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.466816837356884&lng=78.36831226944923&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    const restaurantData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (data) => data
      );
    setFilteredRestaurants(restaurantData);
    setAllRestaurants(restaurantData);
  };

  const searchHandler = () => {
    const searchResults = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurants(searchResults);
  };

  const filterHandler = () => {
    const filteredRestaurents = allRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filteredRestaurents);
  };

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button className="search-btn" onClick={searchHandler}>
            search
          </button>
        </div>

        <div className="filter-btn">
          <button onClick={filterHandler}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((resData) => {
          return (
            <Link
              key={resData.info.id}
              to={"/restaurant/" + resData.info.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCard key={resData.info.id} resData={resData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
