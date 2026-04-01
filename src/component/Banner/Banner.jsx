import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import img from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-16 gap-10">
      {/* Left Content */}
      <div className="space-y-6 order-2 lg:order-1">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 w-fit text-xs px-3 py-2 rounded-3xl shadow-sm">
          <span className="text-cyan-600">
            <FaRegCircleDot />
          </span>
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            New: AI-Powered Tools Available
          </h2>
        </div>

        {/* Heading + Subtext */}
        <div className="space-y-3">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
            Supercharge Your Digital Workflow
          </h2>
          <p className="font-medium text-gray-600">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 font-semibold hover:from-purple-600 hover:to-blue-600 transition-all">
            Explore Products
          </button>
          <button className="btn border-2 border-blue-600 text-blue-600 rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all">
            <FaPlay className="font-bold" /> Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
        <img
          className="h-72 lg:h-96 object-cover shadow-2xl rounded-xl hover:scale-105 transition-transform duration-500"
          src={img}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
