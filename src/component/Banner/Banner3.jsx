import React from "react";

const Banner3 = () => {
  return (
    <div className="max-w-[80%] lg:max-w-[60%] mx-auto text-center space-y-6 mb-10">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Premium Digital Tools
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 font-medium leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity. Unlock the power of AI,
        design assets, and smart templates—all in one place.
      </p>

      {/* Call to Action */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 font-semibold hover:from-purple-600 hover:to-blue-600 transition-all">
          Explore Collection
        </button>
        <button className="btn border-2 border-blue-600 text-blue-600 rounded-full px-6 py-3 font-semibold hover:bg-blue-50 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner3;
