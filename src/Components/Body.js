import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (searchInput, listOfRestaurants) => {
  const data = listOfRestaurants.filter((res) =>
    res.data.name.includes(searchInput)
  );
  return data;
};

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  //searchInput is a local state variable
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.466816837356884&lng=78.36831226944923&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const searchResults = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(searchResults);
          }}
        >
          search
        </button>
      </div>

      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredRestaurents = allRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredRestaurents);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((resData) => {
          return <RestaurantCard key={resData.data.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
