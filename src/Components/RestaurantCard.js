import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { data } = props.resData;
  const { name, cloudinaryImageId, deliveryTime, avgRating, cuisines } = data;
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId}></img>
      <div className="res-info">
        <h3 className=".color-rest">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </h3>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {avgRating}⭐</h4>
        <h4> {deliveryTime}mins 🕑</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
