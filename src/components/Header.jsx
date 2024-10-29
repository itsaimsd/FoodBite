import { LOGO_URL } from "../utils/constant";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src={LOGO_URL} alt="Logo" />
          <span className="text-xl font-bold text-gray-800">Food Delivery</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
            <li>
              <span className="text-sm text-green-600">
                Online Status: {onlineStatus ? "✅" : "❌"}
              </span>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition duration-200"
              >
                Contact Us
              </Link>
            </li>

            <li className="font-bold text-xl">
              <Link
                to="/cart"
                className="hover:text-blue-600 transition duration-200"
              >
                Cart ({cartItems.length})
              </Link>
            </li>
            {/* Login/Logout Button with Same Styling */}
            <li>
              <button
                className="text-lg font-bold text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() =>
                  setBtnNameReact((prev) =>
                    prev === "Login" ? "Logout" : "Login"
                  )
                }
              >
                {btnNameReact}
              </button>
            </li>
            {/* Display Logged-in User */}
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
