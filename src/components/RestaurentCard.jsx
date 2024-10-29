import { CDN_URL } from "../utils/constant";

const RestaurentCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } =
    resData?.info;

  return (
    <div className="res-card w-30 p-4 group relative">
      <div className="w-full max-w-sm p-0">
        {/* Image wrapped inside a div for better control */}
        <div className="relative w-full h-40 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>

        {/* Restaurant Name */}
        <h3 className="font-semibold text-md mt-2 truncate w-full block overflow-hidden whitespace-nowrap">
          {name}
        </h3>

        {/* Rating and Cost */}
        <div className="text-sm flex justify-between items-center font-semibold mt-2">
          <h4 className="text-green-600">
            <span className="mr-1">★{avgRating}</span>
            <span className="ml-4 text-black">{costForTwo}</span>
          </h4>
        </div>

        {/* Cuisines */}
        <h4 className="text-sm text-gray-500 truncate w-full block overflow-hidden whitespace-nowrap">
          {cuisines.join(" , ")}
        </h4>

        {/* Area Name */}
        <h4 className="text-sm text-gray-500">{areaName}</h4>
      </div>
    </div>
  );
};

// Higher Order Component to display discount labels
export const withDiscountLabel = (RestaurentCard) => {
  return ({ resData, ...props }) => {
    const discountSubHeader = resData?.info?.aggregatedDiscountInfoV3?.subHeader;

    return (
      <div className="relative group overflow-hidden rounded-lg">
        {/* Restaurant Card */}
        <RestaurentCard resData={resData} {...props} />

        {/* Promotion Label positioned halfway up from the bottom */}
        {discountSubHeader && ( 
          <div className="absolute inset-x-0 bottom-28 bg-black bg-opacity-70 text-white text-center text-sm font-semibold py-2 mx-4 rounded-md">
            {discountSubHeader}
          </div>
        )}
      </div>
    );
  };
};

export default RestaurentCard;