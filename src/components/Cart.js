import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  addItems,
  decreaseItem,
  removeItem,
} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncreaseQuantity = (item) => dispatch(addItems(item));
  const handleDecreaseQuantity = (item) =>
    dispatch(decreaseItem(item.card.info.id));

  const handleRemoveItem = (id) => dispatch(removeItem(id));
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      ((item.card.info.price || item.card.info.defaultPrice) / 100) *
        (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        Your Cart
      </h1>

      <button
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold">Your cart is empty!</h2>
          <p className="text-gray-500 mt-2">
            Browse our menu and add items to your cart.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {cartItems.map((item) => {
            const { id, name, price, defaultPrice, imageId, quantity } =
              item.card.info;
            const finalPrice = (price || defaultPrice) / 100;

            return (
              <div
                key={id}
                className="flex items-start border p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <button
                      className="border rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="text-lg">{quantity || 1}</span>
                    <button
                      className="border rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 font-medium">
                    Rs. {finalPrice}
                  </span>
                  <button
                    className="mt-2 text-red-500 hover:text-red-600"
                    onClick={() => handleRemoveItem(id)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-bold">Total Amount</h2>
        <p className="text-lg font-semibold bg-gray-100 p-4 rounded">
          Rs. {totalAmount.toFixed(2)}
        </p>
      </div>

      <button className="bg-green-600 text-white py-3 px-6 mt-8 rounded hover:bg-green-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
