import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentMenuOverview from "./RestaurentMenuOverview";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Fetch restaurant information using the custom hook
  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // Show shimmer effect while loading data
  if (resInfo === null) return <Shimmer />;

  // Extracting the restaurant overview data
  const restaurantOverviewData = resInfo?.cards?.[2]?.card?.card || {};

  // Extracting menu items
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="max-w-4xl mx-auto p-4">
      {" "}
      <RestaurentMenuOverview resData={restaurantOverviewData} />
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}  
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
