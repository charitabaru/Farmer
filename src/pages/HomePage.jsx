import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../imgs/farmer.png"; 

const HomePage = () => {
  return (
    <section
      className="hero-section relative bg-cover bg-center h-screen flex items-center justify-center px-4 md:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  
      <div className="relative text-center text-white max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Connecting Farmers Directly to Retailers & Consumers
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Empowering farmers to earn better by eliminating middlemen while
          offering fresh and affordable produce to buyers.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="btn bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>

    
  );
};

export default HomePage;
