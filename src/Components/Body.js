import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //searchInput is a local state variable
  const [searchInput, setSearchInput] = useState("");

  return (
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
            const searchResults = listOfRestaurants.filter((res) =>
              res.data.name.includes(searchInput)
            );
            setListOfRestaurants(searchResults);
          }}
        >
          search
        </button>
      </div>

      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredRestaurents = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurents);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* {listOfRestaurants.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))} */}

        {listOfRestaurants.map((resData) => {
          return <RestaurantCard key={resData.data.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
