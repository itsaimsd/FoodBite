import React from "react";
import PropTypes from "prop-types";
import { Star } from "phosphor-react"; // Importing Star icon from Phosphor Icons

const RestaurantMenuOverview = ({ resData }) => {
  const {
    name,
    cuisines = [],
    avgRating,
    totalRatingsString,
    locality,
    areaName,
    sla = {},
    availability = {},
  } = resData?.info;

  const { slaString } = sla;
  const { nextCloseTime, opened } = availability;

  // Function to format next closing time
  const formatCloseTime = (time) => {
    // Check if time is valid
    if (!time) return "N/A"; // Return "N/A" if time is not available

    const date = new Date(time); // Convert string to date object
    if (isNaN(date.getTime())) return "Invalid Time"; // Check for invalid date

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Use 12-hour format
    });
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Rectangle Container with Rounded Corners */}
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md border border-gray-300 p-6">
        {/* Status and Closing Time at the Top */}
        <h1 className="text-xl-center font-bold text-gray-900">{name}</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 text-left">
            <p className="text-sm font-mono">
              Status:{" "}
              <span
                className={`font-medium ${
                  opened ? "text-green-600" : "text-red-600"
                }`}
              >
                {opened ? "Open" : "Closed"}
              </span>
            </p>
          </div>
          <div className="flex-1 text-right">
            <p className="text-sm font-mono">
              Closing Time:{" "}
              <span className="font-medium">
                {formatCloseTime(nextCloseTime)}
              </span>
            </p>
          </div>
        </div>

        {/* Restaurant Name, Cuisines, and Ratings */}
        <div className="flex justify-between items-start mb-2">
          {/* Restaurant Name and Cuisines on the Left */}
          <div className="flex flex-col text-left">
            <div className="text-orange-600 font-medium text-sm mt-1">
              {cuisines.join(", ") || "N/A"}
            </div>
          </div>
          {/* Average Rating with Star Icon on the Right */}
          <div className="flex flex-col items-end text-right">
            <span className="text-green-600 text-2xl font-semibold flex items-center px-3">
              <Star size={20} weight="fill" color="#4CAF50" className="mr-1" />
              {avgRating || "N/A"}
            </span>
            <div className="text-gray-600 text-sm">
              {totalRatingsString || "N/A"}
            </div>
          </div>
        </div>

        {/* Outlet and Estimated Delivery Information Side by Side */}
        <div className="flex justify-between text-gray-700 mb-4">
          <div className="flex-1 text-left">
            <span className="font-medium">Outlet: </span>
            <span className="font-light">
              {locality || "N/A"}, {areaName || "N/A"}
            </span>
          </div>

          {/* Estimated Delivery Time on the Right */}
          <div className="flex-1 text-right">
            <p className="font-medium">
              {" "}
              <span className="font-light">{slaString || "N/A"}</span>
            </p>
          </div>
        </div>

        {/* Note about Additional Delivery Fee */}
        <div className="mt-4 bg-yellow-50 text-yellow-800 p-3 rounded-md">
          <p className="text-sm font-medium text-center">
            ⚠️ Note: Additional delivery fee may apply during peak hours.
          </p>
        </div>
      </div>
    </div>
  );
};

RestaurantMenuOverview.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string),
      avgRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      locality: PropTypes.string,
      areaName: PropTypes.string,
      totalRatingsString: PropTypes.string,
      sla: PropTypes.shape({
        deliveryTime: PropTypes.number,
        lastMileTravel: PropTypes.number,
        serviceability: PropTypes.string,
        slaString: PropTypes.string,
      }),
      availability: PropTypes.shape({
        nextCloseTime: PropTypes.string,
        opened: PropTypes.bool, // Changed isOpen to opened
      }),
    }),
  }).isRequired,
};

export default RestaurantMenuOverview;
