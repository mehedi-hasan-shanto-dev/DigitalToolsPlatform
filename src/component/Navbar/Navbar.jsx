import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({ info }) => {
  return (
    <div className="border-b border-b-gray-200 lg:sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="max-w-[90%] space-y-4 lg:space-y-0 lg:max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center py-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          DigiTools
        </h2>

        {/* Menu Items */}
        <ul className="flex items-center flex-wrap justify-center gap-5 lg:gap-8 font-semibold text-white">
          <li className="hover:text-yellow-300 transition-colors">Products</li>
          <li className="hover:text-yellow-300 transition-colors">Features</li>
          <li className="hover:text-yellow-300 transition-colors">Pricing</li>
          <li className="hover:text-yellow-300 transition-colors">
            Testimonials
          </li>
          <li className="hover:text-yellow-300 transition-colors">FAQ</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-white">
          <h2 className="text-xl relative">
            <LuShoppingCart />
            {info.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-xs rounded-full py-0.5 px-2 text-white font-semibold">
                {info.length}
              </span>
            )}
          </h2>
          <h2 className="font-semibold cursor-pointer hover:text-yellow-300 transition-colors">
            Login
          </h2>
          <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-6 py-2 font-semibold hover:from-pink-500 hover:to-purple-600 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
