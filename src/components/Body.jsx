import RestaurentCard, { withDiscountLabel } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withDiscountLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    setListOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Look Like you're offline!! Please check your internet connection</h1>
    );

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 md:px-8 lg:px-16 mt-14">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <input
            type="text"
            className="border p-2 rounded-md w-64"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            onClick={() => {
              const filteredRestaurent = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => {
              const filteredList = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurent(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            {/* Show RestaurantCardPromoted if aggregatedDiscountInfoV3 is present */}
            {restaurent.info.aggregatedDiscountInfoV3 ? (
              <RestaurentCardPromoted resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
