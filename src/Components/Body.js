import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}

      {resList.map((resData) => {
        return <RestaurantCard key={resData.data.id} resData={resData} />;
      })}
    </div>
  </div>
);

export default Body;
