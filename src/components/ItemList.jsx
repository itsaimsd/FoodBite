import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useState } from "react"; // Import useState for modal

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartRestaurantId = useSelector((state) => state.cart.restaurantId); // Get current restaurant ID
  const [showModal, setShowModal] = useState(false);
  const [pendingItem, setPendingItem] = useState(null); // Store item for confirmation

  const handleAddItem = (item) => {
    const restaurantId = item.card.info.restaurantId;

    if (cartRestaurantId && cartRestaurantId !== restaurantId) {
      // Show modal if trying to add from a different restaurant
      setPendingItem(item);
      setShowModal(true);
    } else {
      dispatch(addItems(item));
    }
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    dispatch(addItems(pendingItem));
    setPendingItem(null);
    setShowModal(false);
  };

  const cancelClearCart = () => {
    setPendingItem(null);
    setShowModal(false);
  };

  return (
    <div className="p-8 space-y-8">
      {items.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;

        const finalPrice = (price || defaultPrice) / 100 || "N/A";

        return (
          <div
            key={id}
            className="flex items-start border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-4"
          >
            <div className="relative w-32 h-32">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                className="
                  absolute -top-5 -right-5 bg-green-500 text-white font-semibold
                  w-12 h-12 flex items-center justify-center rounded-full
                  shadow hover:bg-green-600 transition duration-200 ease-in-out
                "
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
            <div className="ml-6 flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-800">
                  {name}
                </span>
                <span className="text-lg font-medium text-green-500">
                  {finalPrice === "N/A"
                    ? "Price not available"
                    : `Rs. ${finalPrice}`}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {description || "No description available."}
              </p>
            </div>
          </div>
        );
      })}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Your cart contains items from another restaurant. Do you want to
              clear the cart?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={cancelClearCart}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={confirmClearCart}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
